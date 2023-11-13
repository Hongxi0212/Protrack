package com.protrack.protrack.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "members")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Member {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "MID")
   private Integer id;

   @Column(name = "Designation")
   private String designation;

   @OneToMany(mappedBy = "member")
   private Set<Deliverable> deliverables = new HashSet<>();

   @ManyToOne
   @JoinColumn(name = "PID")
   private Project project;

   @ManyToOne
   @JoinColumn(name = "UID")
   private TrackUser trackUser;

   public Member() {

   }

   public Member(Project project, TrackUser user){
      this.project=project;
      this.trackUser=user;
   }

   public Member(String designation) {
      this.designation = designation;
   }

   public String getDesignation() {
      return designation;
   }

   public void setDesignation(String designation) {
      this.designation = designation;
   }

   public Integer getId() {
      return id;
   }

   public Project getProject() {
      return project;
   }

   public void setProject(Project project) {
      this.project = project;
   }

   public TrackUser getTrackUser() {
      return trackUser;
   }

   public void setTrackUser(TrackUser trackUser) {
      this.trackUser = trackUser;
   }
}
