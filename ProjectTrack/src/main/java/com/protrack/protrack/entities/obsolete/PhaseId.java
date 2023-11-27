package com.protrack.protrack.entities.obsolete;

import com.protrack.protrack.entities.Project;

import java.io.Serializable;
import java.util.Objects;

public class PhaseId implements Serializable {
   private Project project;
   private Integer number;

   public PhaseId() {
   }

   public Project getProject() {
      return project;
   }

   public void setProject(Project project) {
      this.project = project;
   }

   public Integer getNumber() {
      return number;
   }

   public void setNumber(Integer number) {
      this.number = number;
   }

   @Override
   public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;

      PhaseId phaseId = (PhaseId) o;

      if (!Objects.equals(project, phaseId.project)) return false;
      return Objects.equals(number, phaseId.number);
   }

   @Override
   public int hashCode() {
      int result = project != null ? project.hashCode() : 0;
      result = 31 * result + (number != null ? number.hashCode() : 0);
      return result;
   }
}
