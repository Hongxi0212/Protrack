package com.protrack.protrack.services;

import com.protrack.protrack.entities.Phase;
import com.protrack.protrack.exceptions.PhaseNotFoundException;
import com.protrack.protrack.repositories.PhaseRepo;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import com.protrack.protrack.entities.Project;

import javax.swing.text.html.Option;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PhaseService {
   private final PhaseRepo repository;

   public PhaseService(PhaseRepo repository) {
      this.repository = repository;
   }

   public void addPhase(Phase phase){
      repository.save(phase);
   }

   public void addPhases(Set<Phase> phases){
      repository.saveAll(phases);
   }

   public void updatePhase(Phase phase){
      repository.save(phase);
   }

   public void updatePhases(Set<Phase> phases){
      repository.saveAll(phases);
   }

   public List<Phase> getPhasesWithProject(Project project){
      return repository.findPhasesByProject(project);
   }

   public Optional<Phase> getPhaseWithProjectAndNumber(Project project, Integer number){
      return repository.findPhaseByProjectAndNumber(project, number);
   }

   public Phase getPhaseWithProjectAndDue(Project project, LocalDate due){
      return repository.findPhasesByProjectAndDue(project, due);
   }

   public void deletePhasesWithProject(Project project){
      repository.deleteAllByProject(project);
   }

   @Transactional
   public void removePhaseWithProjectAndNumber(Project project, Integer number) {
      repository.deletePhaseByProjectAndNumber(project, number);
   }
}
