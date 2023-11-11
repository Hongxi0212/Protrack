package com.protrack.protrack.entities.obsolete;

import com.protrack.protrack.entities.Project;
import jakarta.persistence.*;

@Entity
@Table(name = "Rubrics")
@IdClass(RubricId.class)
public class Rubric {
   @Id
   @Column(name = "PID")
   private Integer pid;

   @Id
   @Column(name = "Category")
   private String category;

   @Column(name = "Developing")
   private String developing;
   @Column(name = "Component")
   private String component;
   @Column(name = "Accomplished")
   private String accomplished;
   @Column(name = "Perfect")
   private String perfect;

   @OneToOne
   @JoinColumn(name = "PID", insertable = false, updatable = false)
   @MapsId
   private Project project;

   public Rubric() {
   }

   public Rubric(String category, String developing, String component, String accomplished, String perfect, Project project) {
      this.category = category;
      this.developing = developing;
      this.component = component;
      this.accomplished = accomplished;
      this.perfect = perfect;
      this.project = project;
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

   public String getDeveloping() {
      return developing;
   }

   public void setDeveloping(String developing) {
      this.developing = developing;
   }

   public String getComponent() {
      return component;
   }

   public void setComponent(String component) {
      this.component = component;
   }

   public String getAccomplished() {
      return accomplished;
   }

   public void setAccomplished(String accomplished) {
      this.accomplished = accomplished;
   }

   public String getPerfect() {
      return perfect;
   }

   public void setPerfect(String perfect) {
      this.perfect = perfect;
   }

   public Project getProject() {
      return project;
   }

   public void setProject(Project project) {
      this.project = project;
   }
}
