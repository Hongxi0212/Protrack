package com.protrack.protrack.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
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
   public String showSignupPage(Model model) {
      return "signup";
   }

   @GetMapping("/contact_stu")
   public String contact_stu() {
      return "contact_stu";
   }

   @GetMapping("/contact_prof")
   public String contact_prof() {
      return "contact_prof";
   }

   @GetMapping("/dashboard_prof")
   public String dashboard_prof() {
      return "dashboard_prof";
   }

   @GetMapping("/dashboard_stu")
   public String dashboard_stu() {
      return "dashboard_stu";
   }

   @GetMapping("/projects_prof")
   public String projects_prof() {
      return "projects_prof";
   }

   @GetMapping("/projects_stu")
   public String projects_stu() {
      return "projects_stu";
   }

   @GetMapping("/project_details")
   public String project_details() {
      return "project_details";
   }

   @GetMapping("/project_create")
   public String project_create() {
      return "project_create";
   }
}
