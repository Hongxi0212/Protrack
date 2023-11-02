package com.protrack.protrack.services;

import com.protrack.protrack.entities.Project;
import com.protrack.protrack.exceptions.ProjectNotFoundException;
import com.protrack.protrack.repositories.ProjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
   private final ProjectRepo repository;

   @Autowired
   public ProjectService(ProjectRepo repository) {
      this.repository = repository;
   }

   public void addProject(Project project){
      repository.save(project);
   }

   public void updateProject(Project project){
      repository.save(project);
   }

   public Project findProjectById(Integer id){
      return repository.findProjectById(id).orElseThrow(()->new ProjectNotFoundException(
            "Project by ID: "+id+" was not found!"));
   }

   public Project findProjectByCode(Integer code){
      return repository.findProjectByCode(code).orElseThrow(()->new ProjectNotFoundException(
            "Project by Code: "+code+" was not found!"));
   }

   public List<Project> findAllProjects(){
      return repository.findAll();
   }

   public void deleteProject(Integer id){
      repository.deleteProjectById(id);
   }
}
