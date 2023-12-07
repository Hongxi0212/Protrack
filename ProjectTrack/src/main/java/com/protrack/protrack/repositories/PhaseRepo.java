package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Phase;
import com.protrack.protrack.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface PhaseRepo extends JpaRepository<Phase, Integer> {
   void deleteById(Integer id);

   Optional<Phase> findPhaseByProjectAndNumber(Project project, Integer number);

   List<Phase> findPhasesByProject(Project project);

   void deleteAllByProject(Project project);

   void deletePhaseByProjectAndNumber(Project project, Integer number);

   Phase findPhasesByProjectAndDue(Project project, LocalDate due);

}
