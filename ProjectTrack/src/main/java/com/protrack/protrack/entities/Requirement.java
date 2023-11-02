package com.protrack.protrack.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Requirements")
@IdClass(RequirementId.class)
public class Requirement {
   @Id
   @Column(name = "PID")
   private Integer pid;

   @Id
   @Column(name = "Technology")
   private String technology;

   @Column(name = "Software")
   private String software;

   @ManyToOne
   @JoinColumn(name = "PID", insertable = false, updatable = false)
   private Project project;

   public Requirement() {
   }

   public Requirement(String technology, String software, Project project) {
      this.technology = technology;
      this.software = software;
      this.project = project;
   }

   public Integer getPid() {
      return pid;
   }

   public void setPid(Integer pid) {
      this.pid = pid;
   }

   public String getTechnology() {
      return technology;
   }

   public void setTechnology(String technology) {
      this.technology = technology;
   }

   public String getSoftware() {
      return software;
   }

   public void setSoftware(String software) {
      this.software = software;
   }

   public Project getProject() {
      return project;
   }

   public void setProject(Project project) {
      this.project = project;
   }
}
