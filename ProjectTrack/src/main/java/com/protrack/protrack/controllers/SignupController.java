package com.protrack.protrack.controllers;

import com.protrack.protrack.models.ProTrackUser;
import com.protrack.protrack.models.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SignupController {
    @Autowired
    private UserRepository repository;

    @GetMapping("/signup")
    public String showSignupPage(Model model) {
        model.addAttribute("user", new ProTrackUser());
        return "signup";
    }

    @PostMapping("/register")
    public String processRegistration(ProTrackUser user) {
        repository.save(user);
        return "redirect:/login";
    }
}
