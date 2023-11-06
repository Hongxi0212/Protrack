package com.protrack.protrack.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.security.SecureRandom;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "projects")
public class Project {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "PID")
   private Integer id;
   @Column(name = "Code")
   private Integer code;
   @Column(name = "Link")
   private String link;
   @Column(name = "Title")
   private String title;
   @Column(name = "MTime")
   private String meetingTime;
   @Column(name = "MPlace")
   private String meetingPlace;

   @OneToOne(mappedBy = "project", cascade = CascadeType.ALL)
   private Rubric rubric;

   @OneToMany(mappedBy = "project")
   @JsonManagedReference
   private Set<Member> members = new HashSet<>();

   @OneToMany(mappedBy = "project")
   private Set<Requirement> requirements = new HashSet<>();

   @OneToMany(mappedBy = "project")
   private Set<Deliverable> deliverables = new HashSet<>();

   public Project() {
   }

   public Project(String title, String link) {
      this.title = title;
      this.link = link;
   }

   public Integer getId() {
      return id;
   }

   public void setId(Integer id) {
      this.id = id;
   }

   public Integer getCode() {
      return code;
   }

   public void setCode() {
      SecureRandom r = new SecureRandom();
      code = r.nextInt(10000);

      code += id * 10000;

      System.out.println(code);
   }

   public String getLink() {
      return link;
   }

   public void setLink(String link) {
      this.link = link;
   }

   public String getTitle() {
      return title;
   }

   public void setTitle(String title) {
      this.title = title;
   }

   public String getMeetingTime() {
      return meetingTime;
   }

   public void setMeetingTime(String meetingTime) {
      this.meetingTime = meetingTime;
   }

   public String getMeetingPlace() {
      return meetingPlace;
   }

   public void setMeetingPlace(String meetingPlace) {
      this.meetingPlace = meetingPlace;
   }

   public Set<Member> getMembers() {
      return members;
   }

   public void setMembers(Set<Member> members) {
      this.members = members;
   }

   public Set<Requirement> getRequirements() {
      return requirements;
   }

   public void setRequirements(Set<Requirement> requirements) {
      this.requirements = requirements;
   }

   public Set<Deliverable> getDeliverables() {
      return deliverables;
   }

   public void setDeliverables(Set<Deliverable> deliverables) {
      this.deliverables = deliverables;
   }
}
