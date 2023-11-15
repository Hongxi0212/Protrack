package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Deliverable;
import com.protrack.protrack.entities.DeliverableId;
import com.protrack.protrack.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliverableRepo extends JpaRepository<Deliverable, DeliverableId> {
   void deleteDeliverableByItem(String item);

   List<Deliverable> findDeliverablesByProject(Project project);
}
