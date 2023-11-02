package com.protrack.protrack.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "members")
public class Member {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "MID")
   private Integer id;

   @Column(name = "Designation")
   private String designation;

   @ManyToOne
   @JoinColumn(name = "PID")
   private Project project;

   @ManyToOne
   @JoinColumn(name = "UID")
   private TrackUser trackUser;

   public Member() {

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
}
