package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Deliverable;
import com.protrack.protrack.entities.Phase;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface DeliverableRepo extends JpaRepository<Deliverable, Integer> {
   void deleteDeliverableByItem(String item);

   Set<Deliverable> findDeliverablesByPhase(Phase phase);

   Optional<Deliverable> findDeliverableByPhaseAndNumber(Phase phase, Float number);
}
