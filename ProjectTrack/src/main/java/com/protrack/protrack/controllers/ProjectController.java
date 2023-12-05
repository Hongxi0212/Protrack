package com.protrack.protrack.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.protrack.protrack.entities.*;
import com.protrack.protrack.services.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RestController
@RequestMapping("/project")
public class ProjectController {
   private final ProjectService projectService;
   private final UserService userService;
   private final MemberService memberService;
   private final PhaseService phaseService;
   private final DeliverableService deliverableService;

   public ProjectController(ProjectService projectService, UserService userService, MemberService memberService, PhaseService phaseService, DeliverableService deliverableService) {
      this.projectService = projectService;
      this.userService = userService;
      this.memberService = memberService;
      this.phaseService = phaseService;
      this.deliverableService = deliverableService;
   }

   @PostMapping("/create")
   public ResponseEntity<?> createProject(@RequestBody String createInfo) throws JsonProcessingException {
      ObjectMapper mapper = new ObjectMapper();
      JsonNode jsNode = mapper.readTree(createInfo);
      Integer id = jsNode.get("id").asInt();
      String title = jsNode.get("title").asText();
      String link = jsNode.get("link").asText();

      Project project = new Project(title, link);

      TrackUser user = userService.getUserWithId(id);
      project.setInstructor(user);

      projectService.addProject(project);

      project.setCode();

      projectService.updateProject(project);

      return new ResponseEntity<>(HttpStatus.CREATED);
   }

   @PostMapping("/join")
   public ResponseEntity<?> joinProject(@RequestBody String info) throws JsonProcessingException {
      ObjectMapper mapper = new ObjectMapper();
      JsonNode jsNode = mapper.readTree(info);
      Integer id = jsNode.get("id").asInt();
      Integer code = jsNode.get("code").asInt();
      Project proj = projectService.findProjectByCode(code);
      if (proj == null) {
         return new ResponseEntity<>(HttpStatus.FORBIDDEN);
      }

      TrackUser user = userService.getUserWithId(id);

      boolean hasBeenMember = proj.getMembers().stream()
            .anyMatch(member -> member.getTrackUser().equals(user));

      if (!hasBeenMember) {
         Member member = new Member(proj, user);
         memberService.addMember(member);
      }

      return new ResponseEntity<>(HttpStatus.CREATED);
   }

   @GetMapping("/find/all")
   public ResponseEntity<List<Project>> getAllProjects() {
      List<Project> allProjects = projectService.findAllProjects();
      return ResponseEntity.ok(allProjects);
   }

   @GetMapping("/{title}/view")
   public ResponseEntity<Map<String, Object>> getProjectInfoOfTitle(@PathVariable String title) {
      Project project = projectService.getProjectWithTitle(title);
      List<Member> allMembers = memberService.getMembersWithProjectTitle(title);
      List<TrackUser> responsibles = new ArrayList<>();
      for (Member member : allMembers) {
         responsibles.add(member.getTrackUser());
      }

      Map<String, Object> response = new HashMap<>();
      response.put("project", project);
      response.put("responsibles", responsibles);

      return ResponseEntity.ok(response);
   }

   @PutMapping("/{title}/plan/update")
   public ResponseEntity<Project> updateProjectPlan(@RequestBody String planInfo, @PathVariable("title") String title) throws JsonProcessingException {
      ObjectMapper objectMapper = new ObjectMapper();
      JsonNode rootNode = objectMapper.readTree(planInfo);

      JsonNode mTimeNode = rootNode.path("mTime");
      JsonNode mPlaceNode = rootNode.path("mPlace");
      JsonNode phasesNode = rootNode.path("phases");

      Project project = projectService.getProjectWithTitle(title);

      project.setMeetingTime(mTimeNode.asText());
      project.setMeetingPlace(mPlaceNode.asText());

      if (phasesNode.isArray()) {
         List<Phase> oldPhases=phaseService.getPhasesWithProject(project);
         List<Phase> newPhases=new ArrayList<>();
         List<Deliverable> oldDeliverables=deliverableService.getDeliverablesWithProject(project);
         List<Deliverable> newDeliverables=new ArrayList<>();

         for (JsonNode phaseNode : phasesNode) {
            Integer phaseNum = phaseNode.path("phaseNum").asInt();
            LocalDate phaseDate = LocalDate.parse(phaseNode.path("phaseDate").asText());
            JsonNode allTaskNode = phaseNode.path("allTask");

            Optional<Phase> opPhase = phaseService.getPhaseWithProjectAndNumber(project, phaseNum);
            Phase phase = new Phase();
            if (opPhase.isPresent()) {
               phase = opPhase.get();
            }

            phase.setNumber(phaseNum);
            phase.setDue(phaseDate);
            phase.setProject(project);

            phaseService.updatePhase(phase);
            if (allTaskNode.isArray()) {
               for (JsonNode taskNode : allTaskNode) {
                  String taskName = taskNode.path("taskName").asText();
                  String taskMode = taskNode.path("taskMode").asText();
                  Float taskNumber = (float) taskNode.path("taskNumber").asDouble();
                  Member member = memberService.getMemberWithProjectTitleAndTrackUserName(title, taskNode.get("responsible").asText());

                  Optional<Deliverable> opDeliverable = deliverableService.getDeliverableWithProjectAndPhaseAndNumber(project, phase, taskNumber);
                  if (opDeliverable.isEmpty()) {
                     opDeliverable = deliverableService.getDeliverableWithProjectAndItem(project, taskName);
                  }
                  Deliverable deliverable = opDeliverable.orElse(new Deliverable());

                  deliverable.setItem(taskName);
                  deliverable.setMode(taskMode);
                  deliverable.setNumber(taskNumber);
                  deliverable.setMember(member);
                  deliverable.setPhase(phase);

                  newDeliverables.add(deliverable);
                  deliverableService.updateDeliverable(deliverable);
               }
            }

            newPhases.add(phase);
            phaseService.updatePhase(phase);
         }

         for(Deliverable oldD:oldDeliverables) {
            boolean isDeleted = true;
            for (Deliverable newD : newDeliverables) {
               if (oldD.getItem().equals(newD.getItem())) {
                  isDeleted=false;
                  break;
               }
            }
            if (isDeleted) {
                deliverableService.removeDeliverableWithProjectAndItem(project, oldD.getItem());
            }
         }

         for (Phase oldPhase: oldPhases) {
            boolean isDeleted = true;
            for (Phase newPhase: newPhases) {
               if (oldPhase.getNumber() == newPhase.getNumber()) {
                  isDeleted = false;
               }
            }
            if (isDeleted) {
               phaseService.removePhaseWithProjectAndNumber(project, oldPhase.getNumber());
            }
         }

      }

      projectService.updateProject(project);

      return ResponseEntity.ok(project);
   }

   @PutMapping("/{title}/validate/update")
   public ResponseEntity<?> updateProjectValidate(@PathVariable String title, @RequestBody String validateInfo) throws JsonProcessingException {
      ObjectMapper mapper = new ObjectMapper();
      System.out.println(validateInfo);
      JsonNode info = mapper.readTree(validateInfo);

      String role = info.path("role").asText();

      Project project = projectService.getProjectWithTitle(title);

      if (Objects.equals(role, "Student")) {
         String rubric = info.path("rubric").asText();
         String strengthStu=info.path("strengthStu").asText();
         String weaknessStu=info.path("weaknessStu").asText();
         String errorStu=info.path("errorStu").asText();
         String commentStu=info.path("commentStu").asText();

         project.setRubric(rubric);
         project.setStrengthStu(strengthStu);
         project.setWeaknessStu(weaknessStu);
         project.setErrorStu(errorStu);
         project.setCommentStu(commentStu);

      } else if (Objects.equals(role, "Instructor")) {
         JsonNode validateContent = info.path("validate");

         String strengthInstr = validateContent.path("strengthInstr").asText();
         String weaknessInstr = validateContent.path("weaknessInstr").asText();
         String errorInstr = validateContent.path("errorInstr").asText();
         String commentInstr = validateContent.path("commentInstr").asText();

         project.setStrengthInstr(strengthInstr);
         project.setWeaknessInstr(weaknessInstr);
         project.setErrorInstr(errorInstr);
         project.setCommentInstr(commentInstr);
      }

      projectService.updateProject(project);

      return ResponseEntity.ok(project);
   }

   @Transactional
   @PutMapping("/{title}/member/update")
   public ResponseEntity<?> updateProjectMember(@RequestBody String membersInfo, @PathVariable String title) throws JsonProcessingException {
      ObjectMapper mapper = new ObjectMapper();
      JsonNode members = mapper.readTree(membersInfo);

      Project project = projectService.getProjectWithTitle(title);

      Set<Member> newMembers = new HashSet<>();

      if (members.isArray()) {
         for (JsonNode node : members) {
            String name = node.get("name").asText();
            Integer id = node.get("id").asInt();
            String designation = node.get("designation").asText();

            Member member = memberService.getMemberWithId(id);

            member.setDesignation(designation);

            newMembers.add(member);
         }

         project.setMembers(newMembers);
         memberService.addMembers(newMembers);
      }

      return new ResponseEntity<>(HttpStatus.ACCEPTED);
   }

   /**
    * 根据浏览器session中保存的user属性获取当前用户所在的项目的列表
    *
    * @param request 浏览器传来的请求信息
    * @return 如果请求信息中的session没有user属性，即未登录，则返回FORBIDDEN拒绝访问
    * 如果包含则返回该user参与的所有project
    */
   @GetMapping("/user/allProjects")
   public ResponseEntity<List<Project>> getProjectsOfInstructor(HttpServletRequest request) {
      TrackUser user = (TrackUser) request.getSession().getAttribute("user");
      if (request.getSession().getAttribute("user") == null) {
         return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
      }

      List<Project> allProjects = projectService.getProjectsWithUser(user);
      return ResponseEntity.ok(allProjects);
   }
}