/*
package com.protrack.protrack.entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="plan")
public class Plan {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "PlID")
   private Integer id;
   @Column(name = "MTime")
   private String meetingTime;
   @Column(name = "MPlace")
   private String meetingPlace;

   @OneToMany(mappedBy = "plan")
   private Set<Deliverable> deliverables = new HashSet<>();

   public void setId(Integer id) {
      this.id = id;
   }

   public Integer getId() {
      return id;
   }
}
*/
