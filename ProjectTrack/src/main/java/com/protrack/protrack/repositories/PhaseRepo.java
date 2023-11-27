package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Phase;
import com.protrack.protrack.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface PhaseRepo extends JpaRepository<Phase, Integer> {
   void deleteById(Integer id);

   Optional<Phase> findPhaseByProjectAndNumber(Project project, Integer Number);

   Set<Phase> findPhasesByProject(Project project);

   void deleteAllByProject(Project project);
}
