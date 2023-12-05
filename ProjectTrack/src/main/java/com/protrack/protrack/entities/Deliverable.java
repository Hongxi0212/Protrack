package com.protrack.protrack.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "deliverables")
public class Deliverable {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "DID")
   private Integer id;
   @Column(name = "Item")
   private String item;
   @Column(name = "Number")
   private Float number;
   @Column(name = "Mode")
   private String mode;
   @Column(name = "Necessity")
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
   @JoinColumn(name = "MID")
   @JsonBackReference
   private Member member;

   @ManyToOne
   @JoinColumn(name = "PHID")
   @JsonBackReference
   private Phase phase;

   public Deliverable() {
   }

   public Deliverable(Phase belong) {
      this.phase=belong;
   }

   public Integer getId() {
      return id;
   }

   public void setId(Integer id) {
      this.id = id;
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

   public Member getMember() {
      return member;
   }

   public void setMember(Member member) {
      this.member = member;
   }

   public Phase getPhase() {
      return phase;
   }

   public void setPhase(Phase phase) {
      this.phase = phase;
   }

   @Override
   public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;

      Deliverable that = (Deliverable) o;

      if (!item.equals(that.item)) return false;
      if (!Objects.equals(number, that.number)) return false;
      return Objects.equals(phase, that.phase);
   }

   @Override
   public int hashCode() {
      int result = item.hashCode();
      result = 31 * result + (number != null ? number.hashCode() : 0);
      result = 31 * result + (phase != null ? phase.hashCode() : 0);
      return result;
   }
}