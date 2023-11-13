package com.protrack.protrack.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.protrack.protrack.entities.Deliverable;
import com.protrack.protrack.entities.Member;
import com.protrack.protrack.entities.Project;
import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.services.DeliverableService;
import com.protrack.protrack.services.MemberService;
import com.protrack.protrack.services.ProjectService;
import com.protrack.protrack.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/project")
public class ProjectController {
   private final ProjectService projectService;
   private final UserService userService;
   private final MemberService memberService;
   private final DeliverableService deliverableService;

   public ProjectController(ProjectService projectService, UserService userService, MemberService memberService, DeliverableService deliverableService) {
      this.projectService = projectService;
      this.userService = userService;
      this.memberService = memberService;
      this.deliverableService = deliverableService;
   }

   @PostMapping("/create")
   public ResponseEntity<?> createProject(@RequestBody String createInfo) throws JsonProcessingException {
      ObjectMapper mapper = new ObjectMapper();
      JsonNode jsNode = mapper.readTree(createInfo);
      String title = jsNode.get("title").asText();
      String link = jsNode.get("link").asText();

      Project project = new Project(title, link);
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
   public ResponseEntity<Project> getProjectOfTitle(@PathVariable String title) {
      Project p = projectService.findProjectByTitle(title);
      return ResponseEntity.ok(p);
   }

   @PutMapping("/{title}/plan/update")
   public ResponseEntity<Project> updateProjectPlan(@RequestBody String planInfo, @PathVariable("title") String title) throws JsonProcessingException {
      Project project = projectService.findProjectByTitle(title);

      ObjectMapper mapper = new ObjectMapper();
      JsonNode root = mapper.readTree(planInfo);
      String mTime = root.get("mTime").asText();
      String mPlace = root.get("mPlace").asText();

      Set<Deliverable> allDeliverables = new HashSet<>();
      JsonNode deliverables = root.get("deliverables");

      if (deliverables.isArray()) {
         for (JsonNode node : deliverables) {
            Double taskNum = node.get("taskNumber").asDouble();
            String item = node.get("taskName").asText();
            String phase = node.get("phase").asText();
            Member member = memberService.findMemberOfName(node.get("responsible").asText());
            String mode = node.get("taskMode").asText();

            Deliverable deliverable = new Deliverable();

            deliverable.setItem(item);
            deliverable.setNumber((float)taskNum.doubleValue());
            deliverable.setPhase(phase);
            deliverable.setMode(mode);
            deliverable.setMember(member);
            deliverable.setProject(project);

            allDeliverables.add(deliverable);
         }
      }

      deliverableService.addDeliverables(allDeliverables);

      project.setMeetingTime(mTime);
      project.setMeetingPlace(mPlace);
      project.setDeliverables(allDeliverables);

      projectService.updateProject(project);

      return ResponseEntity.ok(project);
   }

   @GetMapping("/stu/{uid}/all")
   public ResponseEntity<List<Project>> getAllProjectsOfUser(@PathVariable Integer uid) {
      List<Project> allProjects = projectService.getProjectWithUserId(uid);
      return ResponseEntity.ok(allProjects);
   }
}
