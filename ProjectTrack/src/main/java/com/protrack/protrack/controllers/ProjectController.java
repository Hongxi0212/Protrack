package com.protrack.protrack.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.protrack.protrack.entities.Member;
import com.protrack.protrack.entities.Project;
import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.services.MemberService;
import com.protrack.protrack.services.ProjectService;
import com.protrack.protrack.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {
   private final ProjectService projectService;
   private final UserService userService;
   private final MemberService memberService;

   public ProjectController(ProjectService projectService, UserService userService, MemberService memberService) {
      this.projectService = projectService;
      this.userService = userService;
      this.memberService = memberService;
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
      System.out.println("Here are INFO: "+info);
      JsonNode jsNode = mapper.readTree(info);
      Integer id = jsNode.get("id").asInt();
      Integer code = jsNode.get("code").asInt();
      Project proj = projectService.findProjectByCode(code);
      if(proj==null){
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

   @GetMapping("/stu/{uid}/all")
   public ResponseEntity<List<Project>> getAllProjectsOfUser(@PathVariable Integer uid) {
      List<Project> allProjects = projectService.getProjectWithUserId(uid);
      return ResponseEntity.ok(allProjects);
   }
}
