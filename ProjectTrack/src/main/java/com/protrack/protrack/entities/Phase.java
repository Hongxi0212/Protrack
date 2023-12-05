package com.protrack.protrack.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "phases")
public class Phase {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "PHID")
   private Integer id;

   @Column(name = "Number")
   private Integer number;

   @Column(name = "Due")
   private LocalDate due;

   @OneToMany(mappedBy = "phase", cascade = CascadeType.REMOVE)
   @JsonSerialize
   @JsonManagedReference
   private Set<Deliverable> deliverables = new HashSet<Deliverable>();

   @ManyToOne
   @JoinColumn(name = "PID")
   @JsonBackReference
   private Project project;

   public Phase() {
   }

   public Phase(Project project, Integer number) {
      this.number = number;
      this.project = project;
   }

   public Integer getId() {
      return id;
   }

   public void setId(Integer id) {
      this.id = id;
   }

   public Integer getNumber() {
      return number;
   }

   public void setNumber(Integer number) {
      this.number = number;
   }

   public LocalDate getDue() {
      return due;
   }

   public void setDue(LocalDate due) {
      this.due = due;
   }

   public Set<Deliverable> getDeliverables() {
      return deliverables;
   }

   public void setDeliverables(Set<Deliverable> deliverables) {
      this.deliverables = deliverables;
   }

   public Project getProject() {
      return project;
   }

   public void setProject(Project project) {
      this.project = project;
   }

   @Override
   public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;

      Phase phase = (Phase) o;

      if (!Objects.equals(number, phase.number)) return false;
      return Objects.equals(project, phase.project);
   }

   @Override
   public int hashCode() {
      int result = number != null ? number.hashCode() : 0;
      result = 31 * result + (project != null ? project.hashCode() : 0);
      return result;
   }
}
