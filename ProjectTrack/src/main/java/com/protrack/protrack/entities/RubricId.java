package com.protrack.protrack.entities;

import java.io.Serializable;

public class RubricId implements Serializable {
   private Integer pid;
   private String category;

   public RubricId(Integer pid, String category) {
      this.pid = pid;
      this.category = category;
   }

   public Integer getPid() {
      return pid;
   }

   public void setPid(Integer pid) {
      this.pid = pid;
   }

   public String getCategory() {
      return category;
   }

   public void setCategory(String category) {
      this.category = category;
   }
}
