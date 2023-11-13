package com.protrack.protrack.entities;

import java.io.Serializable;

public class DeliverableId implements Serializable {
   private Project project;
   private String item;

   public DeliverableId() {

   }

   public Project getProject() {
      return project;
   }

   public void setProject(Project project) {
      this.project = project;
   }

   public String getItem() {
      return item;
   }

   public void setItem(String item) {
      this.item = item;
   }
}
