package com.protrack.protrack.services;

import com.protrack.protrack.entities.Deliverable;
import com.protrack.protrack.entities.Phase;
import com.protrack.protrack.repositories.DeliverableRepo;
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

   public Optional<Deliverable> getDeliverableWithPhaseAndNumber(Phase phase, Float number){
      return repository.findDeliverableByPhaseAndNumber(phase,number);
   }

   public Set<Deliverable> getDeliverablesWithPhase(Phase phase){
      return repository.findDeliverablesByPhase(phase);
   }
}
