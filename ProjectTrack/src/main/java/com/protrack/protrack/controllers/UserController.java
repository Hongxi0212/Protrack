package com.protrack.protrack.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.sound.midi.Track;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/trackuser")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<TrackUser>> getAllUsers() {
        List<TrackUser> users = service.getAllUsers();

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<TrackUser> getUserById(@PathVariable("id") Integer id) {
        TrackUser user = service.getUserWithId(id);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<TrackUser> handleRegister(@RequestBody String registerInfo) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsNode = mapper.readTree(registerInfo);

        String name = jsNode.get("name").asText();
        String email = jsNode.get("email").asText();
        String password = jsNode.get("password").asText();
        String role = jsNode.get("role").asText();
        String timezone = jsNode.get("timezone").asText();

        TrackUser user=new TrackUser(name,email,role,timezone,password);

        service.addUser(user);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> handleLogin(@RequestBody String loginInfo) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsNode = mapper.readTree(loginInfo);
        String email = jsNode.get("email").asText();
        String password = jsNode.get("password").asText();

        TrackUser account = service.getUserWithEmail(email);
        String role = account.getRole();
        Map<String, Object> response = new HashMap<>();
        if (account.getEmail().equals(email) && account.getPassword().equals(password)) {
            response.put("success", true);
            response.put("uid",account.getId());
            if(role.equals("Student")){
                response.put("message", "Student");
            }
            else if(role.equals("Instructor")){
                response.put("message", "Instructor");
            }
            else{
                response.put("message","Resignup");
            }
            return new ResponseEntity<>(response, HttpStatus.OK);

        } else {
            response.put("success", false);
            response.put("message", "Incorrect Account or Password");
        }
       return new ResponseEntity<>(response,HttpStatus.FORBIDDEN);
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
