package com.protrack.protrack.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "trackusers")
public class TrackUser {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "UID")
   private Integer id;
   @Column(name = "Name")
   private String name;
   @Column(name = "Email")
   private String email;
   @Column(name="Role")
   private String role;
   @Column(name = "Timezone")
   private String timezone;
   @Column(name = "Password")
   private String password;

   @OneToMany(mappedBy = "trackUser")
   @JsonBackReference
   private Set<Member> members = new HashSet<>();

   public TrackUser() {
   }

   public TrackUser(String name, String email, String role, String timezone, String password) {
      this.name = name;
      this.email = email;
      this.role = role;
      this.timezone = timezone;
      this.password = password;
   }

   public Integer getId() {
      return id;
   }

   public void setId(Integer id) {
      this.id = id;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public String getRole() {
      return role;
   }

   public void setRole(String role) {
      this.role = role;
   }

   public String getTimezone() {
      return timezone;
   }

   public void setTimezone(String timezone) {
      this.timezone = timezone;
   }

   public String getPassword() {
      return password;
   }

   public void setPassword(String password) {
      this.password = password;
   }

   @Override
   public String toString() {
      return "TrackUser{" +
            "name='" + name + '\'' +
            ", email='" + email + '\'' +
            ", role='" + role + '\'' +
            ", timezone='" + timezone + '\'' +
            '}';
   }
}
