package com.protrack.protrack.entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Random;
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
   @Column(name = "Title")
   private String title;
   @Column(name = "Points")
   private Integer totalPoints;
   @Column(name = "Outcomes")
   private String outcomes;
   @Column(name = "Earned")
   private String earned;
   @Column(name = "Description")
   private String description;
   @Column(name = "MTime")
   private String meetingTime;
   @Column(name = "MPlace")
   private String meetingPlace;

   @OneToOne(mappedBy = "project", cascade = CascadeType.ALL)
   private Rubric rubric;

   @OneToMany(mappedBy = "project")
   private Set<Member> members = new HashSet<>();

   @OneToMany(mappedBy = "project")
   private Set<Requirement> requirements = new HashSet<>();

   @OneToMany(mappedBy = "project")
   private Set<Deliverable> deliverables = new HashSet<>();

   public Project() {
   }

   public Project(String title, Integer totalPoints, String outcomes, String earned, String description, String meetingTime, String meetingPlace) {
      this.title = title;
      this.totalPoints = totalPoints;
      this.outcomes = outcomes;
      this.earned = earned;
      this.description = description;
      this.meetingTime = meetingTime;
      this.meetingPlace = meetingPlace;
   }

   public Integer getId() {
      return id;
   }

   public void setId(Integer pid) {
      this.id = pid;
   }

   public void setCode() {
      Random r = new Random();
      code = r.nextInt(10000);

      code += id * 10000;
   }

   public String getTitle() {
      return title;
   }

   public void setTitle(String title) {
      this.title = title;
   }

   public Integer getTotalPoints() {
      return totalPoints;
   }

   public void setTotalPoints(Integer totalPoints) {
      this.totalPoints = totalPoints;
   }

   public String getOutcomes() {
      return outcomes;
   }

   public void setOutcomes(String outcomes) {
      this.outcomes = outcomes;
   }

   public String getEarned() {
      return earned;
   }

   public void setEarned(String earned) {
      this.earned = earned;
   }

   public String getDescription() {
      return description;
   }

   public void setDescription(String description) {
      this.description = description;
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
}
