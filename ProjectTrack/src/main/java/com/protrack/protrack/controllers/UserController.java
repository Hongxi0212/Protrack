package com.protrack.protrack.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.sound.midi.Track;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/trackuser")
public class UserController {
   private final UserService service;

   private final PasswordEncoder passwordEncoder;

   public UserController(UserService service, PasswordEncoder passwordEncoder) {
      this.service = service;
      this.passwordEncoder = passwordEncoder;
   }

   @PostMapping("/register")
   public ResponseEntity<TrackUser> handleRegister(@RequestBody String registerInfo) throws JsonProcessingException {
      ObjectMapper mapper = new ObjectMapper();
      JsonNode jsNode = mapper.readTree(registerInfo);

      String name = jsNode.get("name").asText();
      String email = jsNode.get("email").asText();
      String password = jsNode.get("password").asText();
      String role = jsNode.get("role").asText();

      TrackUser checkUser=service.getUserWithEmail(email);
      if(checkUser!=null){
         return new ResponseEntity<>(HttpStatus.FORBIDDEN);
      }

      String encryptedPassword = passwordEncoder.encode(password);
      TrackUser user = new TrackUser(name, email, role, encryptedPassword);

      service.addUser(user);

      return new ResponseEntity<>(HttpStatus.CREATED);
   }

   @PostMapping("/login")
   public ResponseEntity<Map<String, Object>> handleLogin(@RequestBody String loginInfo, HttpSession session) throws JsonProcessingException {
      ObjectMapper mapper = new ObjectMapper();
      JsonNode jsNode = mapper.readTree(loginInfo);
      String email = jsNode.get("email").asText();
      String password = jsNode.get("password").asText();

      TrackUser user = service.getUserWithEmail(email);
      String role = user.getRole();
      Map<String, Object> response = new HashMap<>();

      if (user.getEmail().equals(email) && passwordEncoder.matches(password,user.getPassword())) {
         session.setAttribute("user", user);

         response.put("success", true);
         response.put("uid", user.getId());
         if (role.equals("Student")) {
            response.put("message", "STUDENT");
         } else if (role.equals("Instructor")) {
            response.put("message", "INSTRUCTOR");
         } else {
            response.put("message", "Resignup");
         }
         return new ResponseEntity<>(response, HttpStatus.OK);

      } else {
         response.put("success", false);
         response.put("message", "Incorrect");
      }
      return new ResponseEntity<>(response, HttpStatus.FORBIDDEN);
   }

}
