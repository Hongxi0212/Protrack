package com.protrack.protrack.entities.obsolete;

import com.protrack.protrack.entities.Phase;

import java.io.Serializable;
import java.util.Objects;

public class DeliverableId implements Serializable {
   private Phase phase;
   private String item;

   public DeliverableId() {

   }

   public Phase getProject() {
      return phase;
   }

   public void setProject(Phase phase) {
      this.phase = phase;
   }

   public String getItem() {
      return item;
   }

   public void setItem(String item) {
      this.item = item;
   }

   @Override
   public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;

      DeliverableId that = (DeliverableId) o;

      if (!Objects.equals(phase, that.phase)) return false;
      return Objects.equals(item, that.item);
   }

   @Override
   public int hashCode() {
      int result = phase != null ? phase.hashCode() : 0;
      result = 31 * result + (item != null ? item.hashCode() : 0);
      return result;
   }
}
