package com.protrack.protrack.services;

import com.protrack.protrack.entities.Deliverable;
import com.protrack.protrack.entities.Phase;
import com.protrack.protrack.entities.Project;
import com.protrack.protrack.repositories.DeliverableRepo;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class DeliverableService {
   private final DeliverableRepo repository;

   public DeliverableService(DeliverableRepo repository) {
      this.repository = repository;
   }

   public void addDeliverable(Deliverable deliverable) {
      repository.save(deliverable);
   }

   public void addDeliverables(Set<Deliverable> deliverables) {
      repository.saveAll(deliverables);
   }

   public void updateDeliverable(Deliverable deliverable) {
      repository.save(deliverable);
   }

   public List<Deliverable> getDeliverablesWithProject(Project project){
      return repository.findDeliverablesByProject(project);
   }

   public Optional<Deliverable> getDeliverableWithProjectAndPhaseAndNumber(Project project, Phase phase, Float number) {
      return repository.findDeliverableByProjectAndPhaseAndNumber(project, phase, number);
   }

   public Optional<Deliverable> getDeliverableWithProjectAndItem(Project project, String item) {
      return repository.findDeliverableByProjectAndItem(project, item);
   }

   public Set<Deliverable> getDeliverablesWithPhase(Phase phase) {
      return repository.findDeliverablesByPhase(phase);
   }

   @Transactional
   public void removeDeliverableWithProjectAndItem(Project project, String item){
      repository.deleteDeliverableByProjectAndItem(project, item);
   }
}