package com.protrack.protrack.entities;

import java.io.Serializable;

public class DeliverableId implements Serializable {
   private Integer pid;
   private String item;

   public DeliverableId(Integer pid, String item) {
      this.pid = pid;
      this.item = item;
   }

   public Integer getPid() {
      return pid;
   }

   public void setPid(Integer pid) {
      this.pid = pid;
   }

   public String getItem() {
      return item;
   }

   public void setItem(String item) {
      this.item = item;
   }
}
