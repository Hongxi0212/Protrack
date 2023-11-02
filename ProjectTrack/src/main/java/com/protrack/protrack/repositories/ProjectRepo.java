package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectRepo extends JpaRepository<Project,Integer> {
   void deleteProjectById(Integer id);

   Optional<Project> findProjectById(Integer id);

   Optional<Project> findProjectByCode(Integer code);
}