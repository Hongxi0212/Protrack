package com.protrack.protrack.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProjectsController {
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
