package com.protrack.protrack.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.protrack.protrack.entities.Project;
import com.protrack.protrack.services.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {
   private final ProjectService service;

   public ProjectController(ProjectService service) {
      this.service = service;
   }

   @PostMapping("/create")
   public ResponseEntity<?> createProject(@RequestBody String createInfo) throws JsonProcessingException {
      ObjectMapper mapper=new ObjectMapper();
      JsonNode jsNode=mapper.readTree(createInfo);
      String title=jsNode.get("title").asText();
      Integer point=jsNode.get("point").asInt();
      String outcome=jsNode.get("outcome").asText();
      String earned=jsNode.get("earned").asText();
      String description=jsNode.get("description").asText();
      String mtime=jsNode.get("mtime").asText();
      String mplace=jsNode.get("mplace").asText();

      Project project=new Project(title,point,outcome,earned,description,mtime,mplace);

      //project.setCode();
      service.addProject(project);

      return new ResponseEntity<>(HttpStatus.CREATED);
   }

   @GetMapping("/find/all")
   public ResponseEntity<List<Project>> findAllProjects(){
      List<Project> allProjects=service.findAllProjects();
      return ResponseEntity.ok(allProjects);
   }
}
