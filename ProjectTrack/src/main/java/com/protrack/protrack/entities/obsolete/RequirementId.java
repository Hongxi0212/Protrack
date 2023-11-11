package com.protrack.protrack.entities.obsolete;

import java.io.Serializable;

public class RequirementId implements Serializable {
   private Integer pid;
   private String technology;

   public RequirementId(Integer pid, String system) {
      this.pid = pid;
      this.technology = system;
   }

   public Integer getPid() {
      return pid;
   }

   public void setPid(Integer pid) {
      this.pid = pid;
   }

   public String getSystem() {
      return technology;
   }

   public void setSystem(String system) {
      this.technology = system;
   }
}
