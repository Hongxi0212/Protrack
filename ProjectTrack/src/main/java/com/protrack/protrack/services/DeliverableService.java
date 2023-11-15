package com.protrack.protrack.services;

import com.protrack.protrack.entities.Deliverable;
import com.protrack.protrack.entities.Project;
import com.protrack.protrack.repositories.DeliverableRepo;
import org.springframework.stereotype.Service;

import java.util.List;
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
}
