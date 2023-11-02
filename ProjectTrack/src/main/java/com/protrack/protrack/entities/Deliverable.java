package com.protrack.protrack.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "deliverables")
@IdClass(DeliverableId.class)
public class Deliverable {
   @Id
   @Column(name = "PID")
   private Integer pid;

   @Id
   @Column(name = "Item")
   private String item;

   @Column(name="Number")
   private Float number;
   @Column(name = "Phase")
   private String phase;
   @Column(name = "Date")
   private Date date;
   @Column(name = "UID")
   private Integer uid;
   @Column(name="Mode")
   private String mode;
   @Column(name="Necessity")
   private String necessity;
   @Column(name = "Assessment")
   private String assessment;
   @Column(name = "Point")
   private Integer point;
   @Column(name = "Weight")
   private Float weight;
   @Column(name = "Comment")
   private String comment;

   @ManyToOne
   @JoinColumn(name = "PID", insertable = false, updatable = false)
   private Project project;

   public Deliverable() {
   }

   public Deliverable(String item, Float number, String phase, Date date, Integer uid, String mode, String necessity, String assessment, Integer point, Float weight, String comment) {
      this.item = item;
      this.number = number;
      this.phase = phase;
      this.date = date;
      this.uid = uid;
      this.mode = mode;
      this.necessity = necessity;
      this.assessment = assessment;
      this.point = point;
      this.weight = weight;
      this.comment = comment;
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

   public Float getNumber() {
      return number;
   }

   public void setNumber(Float number) {
      this.number = number;
   }

   public String getPhase() {
      return phase;
   }

   public void setPhase(String phase) {
      this.phase = phase;
   }

   public Date getDate() {
      return date;
   }

   public void setDate(Date date) {
      this.date = date;
   }

   public Integer getUid() {
      return uid;
   }

   public void setUid(Integer uid) {
      this.uid = uid;
   }

   public String getMode() {
      return mode;
   }

   public void setMode(String mode) {
      this.mode = mode;
   }

   public String getNecessity() {
      return necessity;
   }

   public void setNecessity(String necessity) {
      this.necessity = necessity;
   }

   public String getAssessment() {
      return assessment;
   }

   public void setAssessment(String assessment) {
      this.assessment = assessment;
   }

   public Integer getPoint() {
      return point;
   }

   public void setPoint(Integer point) {
      this.point = point;
   }

   public Float getWeight() {
      return weight;
   }

   public void setWeight(Float weight) {
      this.weight = weight;
   }

   public String getComment() {
      return comment;
   }

   public void setComment(String comment) {
      this.comment = comment;
   }
}