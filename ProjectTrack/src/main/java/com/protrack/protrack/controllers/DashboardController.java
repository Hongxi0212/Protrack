package com.protrack.protrack.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {
    @GetMapping("/dashboard_prof")
    public String dashboard_prof() {
        return "dashboard_prof";
    }

    @GetMapping("/dashboard_stu")
    public String dashboard_stu() {
        return "dashboard_stu";
    }
}
