package com.protrack.protrack.controllers;

import org.springframework.stereotype.Controller;
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
   public String showSignupPage() {
      return "signup";
   }

   @GetMapping("/contact")
   public String contact() {
      return "contact";
   }

   @GetMapping("/dashboard/prof")
   public String dashboard_prof() {
      return "dashboard_prof";
   }

   @GetMapping("/dashboard/stu")
   public String dashboard_stu() {
      return "dashboard_stu";
   }

   @GetMapping("/projects/prof")
   public String projects_prof() {
      return "projects_prof";
   }

   @GetMapping("/projects/stu")
   public String projects_stu() {
      return "projects_stu";
   }

   @GetMapping("/project/details")
   public String project_details() {
      return "project_details";
   }

   @GetMapping("/project/create")
   public String project_create() {
      return "project_create";
   }
}
