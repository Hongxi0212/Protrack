package com.protrack.protrack.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.sound.midi.Track;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/trackuser")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<TrackUser>> getAllUsers() {
        List<TrackUser> users = service.findAllUsers();

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<TrackUser> getUserById(@PathVariable("id") Integer id) {
        TrackUser user = service.findUserById(id);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<TrackUser> handleRegister(@RequestBody TrackUser user) {
        TrackUser newUser = service.addUser(user);

        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> handleLogin(@RequestBody String loginInfo) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsNode = mapper.readTree(loginInfo);
        String email = jsNode.get("email").asText();
        String password = jsNode.get("password").asText();

        TrackUser account = service.findUserByEmail(email);
        String role = account.getRole();
        Map<String, Object> response = new HashMap<>();
        if (account.getEmail().equals(email) && account.getPassword().equals(password)) {
            response.put("success", true);
            response.put("message", "Login Successful");
            if(role.equals("Student")){
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
            if(role.equals("Instructor")){
                return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
            }

            return new ResponseEntity<>(response,HttpStatus.FORBIDDEN);
        } else {
            response.put("success", false);
            response.put("message", "Incorrect Account or Password");
            return new ResponseEntity<>(response, HttpStatus.FORBIDDEN);
        }
    }


    @PutMapping("/update")
    public ResponseEntity<TrackUser> updateUser(@RequestBody TrackUser user) {
        TrackUser updateUser = service.updateUser(user);

        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Integer id) {
        service.deleteUser(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
