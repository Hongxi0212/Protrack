package com.protrack.protrack.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/protrack")
public class WebController {
   @GetMapping("/home")
   public String home() {
      return "home";
   }

   @GetMapping("/login")
   public String login() {
      return "login";
   }

   @GetMapping("/signup")
   public String showSignupPage() {
      return "signup";
   }

   @GetMapping("/contact")
   public String contact() {
      return "contact";
   }

   @GetMapping("/dashboard/instr/{uid}")
   public String dashboard_prof(@PathVariable String uid) {
      return "dashboard_prof";
   }

   @GetMapping("/dashboard/stu/{uid}")
   public String dashboard_stu(@PathVariable String uid) {
      return "dashboard_stu";
   }

   @GetMapping("/projects/instr/{uid}")
   public String projects_prof(@PathVariable String uid) {
      return "projects_prof";
   }

   @GetMapping("/projects/stu/{uid}")
   public String projects_stu(@PathVariable String uid) {
      return "projects_stu";
   }

   @GetMapping("/stu/{id}/{projectTitle}/view")
   public String project_view_stu(@PathVariable String projectTitle, @PathVariable String id) {
      return "project_view_stu";
   }

   @GetMapping("/stu/{id}/{projectTitle}/edit")
   public String project_edit_stu(@PathVariable String id, @PathVariable String projectTitle){
      return "project_edit_stu";
   }

   @GetMapping("/instr/{id}/{projectTitle}/view")
   public String project_view_prof(@PathVariable String projectTitle, @PathVariable String id) {
      return "project_view_prof";
   }

   @GetMapping("/instr/{id}/{projectTitle}/edit")
   public String project_edit_prof(@PathVariable String projectTitle, @PathVariable String id){
      return "project_edit_prof";
   }

   @GetMapping("/instr/{id}/{projectTitle}/validate")
   public String project_validate_instr(@PathVariable String projectTitle, @PathVariable String id){
      return "project_validate_instr";
   }

   @GetMapping("/stu/{id}/{projectTitle}/validate")
   public String project_validate_stu(){
      return "project_validate_stu";
   }

/*
   @GetMapping("/project/create")
   public String project_create() {
      return "project_create";
   }*/
}
