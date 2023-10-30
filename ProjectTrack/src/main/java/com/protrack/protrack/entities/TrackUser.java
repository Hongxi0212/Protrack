package com.protrack.protrack.entities;


import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class TrackUser implements Serializable {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer id;
   private String name;
   private String email;
   private String role;
   private String timezone;
   private String password;

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
