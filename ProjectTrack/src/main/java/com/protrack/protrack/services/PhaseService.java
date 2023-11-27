package com.protrack.protrack.services;

import com.protrack.protrack.entities.Phase;
import com.protrack.protrack.exceptions.PhaseNotFoundException;
import com.protrack.protrack.repositories.PhaseRepo;
import org.springframework.stereotype.Service;
import com.protrack.protrack.entities.Project;

import javax.swing.text.html.Option;
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

   public Set<Phase> getPhasesWithProject(Project project){
      return repository.findPhasesByProject(project);
   }

   public Optional<Phase> getPhaseWithProjectAndNumber(Project project, Integer number){
      return repository.findPhaseByProjectAndNumber(project, number);
   }

   public void deletePhasesWithProject(Project project){
      repository.deleteAllByProject(project);
   }
}
