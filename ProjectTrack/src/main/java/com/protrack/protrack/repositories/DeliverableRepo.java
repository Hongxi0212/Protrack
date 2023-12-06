package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Deliverable;
import com.protrack.protrack.entities.Member;
import com.protrack.protrack.entities.Phase;
import com.protrack.protrack.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface DeliverableRepo extends JpaRepository<Deliverable, Integer> {
   void deleteDeliverableByItem(String item);

   Set<Deliverable> findDeliverablesByPhase(Phase phase);

   @Query("SELECT d FROM Deliverable d WHERE d.phase.project=:project")
   List<Deliverable> findDeliverablesByProject(@Param("project") Project project);

   @Query("SELECT d FROM Deliverable d WHERE d.phase.project = :project AND d.item = :item")
   Optional<Deliverable> findDeliverableByProjectAndItem(@Param("project") Project project, @Param("item") String item);

   @Query("SELECT d FROM Deliverable d WHERE d.phase.project = :project AND d.phase = :phase AND d.number=:number")
   Optional<Deliverable> findDeliverableByProjectAndPhaseAndNumber(@Param("project") Project project, @Param("phase") Phase phase, @Param("number") Float number);

   @Modifying
   @Query("DELETE FROM Deliverable d WHERE d.phase.project=:project AND d.item=:item")
   void deleteDeliverableByProjectAndItem(@Param("project") Project project, @Param("item") String item);

   List<Deliverable> findDeliverablesByMember(Member member);
}
