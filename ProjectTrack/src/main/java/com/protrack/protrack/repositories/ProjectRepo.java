package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProjectRepo extends JpaRepository<Project,Integer> {
   void deleteProjectById(Integer id);

   Optional<Project> findProjectById(Integer id);

   Optional<Project> findProjectByCode(Integer code);

   Optional<Project> findProjectByTitle(String title);

   @Query("SELECT m.project FROM Member m WHERE m.trackUser.id=:uid")
   List<Project> findProjectByUserId(@Param("uid") Integer uid);
}