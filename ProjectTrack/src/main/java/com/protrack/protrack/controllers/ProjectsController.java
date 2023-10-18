package com.protrack.protrack.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProjectsController {
    @GetMapping("/projects")
    public String projects() {
        return "projects_prof";
    }

    @GetMapping("/project_details")
    public String project_details() {
        return "project_details";
    }
}
