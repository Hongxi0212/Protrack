package com.protrack.protrack.controllers;

import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trackuser")
public class UserController {
   private final UserService service;

   public UserController(UserService service) {
      this.service = service;
   }

   @GetMapping("/all")
   public ResponseEntity<List<TrackUser>> getAllUsers(){
      List<TrackUser> users=service.findAllUsers();

      return new ResponseEntity<>(users, HttpStatus.OK);
   }

   @GetMapping("/find/{id}")
   public ResponseEntity<TrackUser> getUserById(@PathVariable("id") Integer id){
      TrackUser user=service.findUserById(id);

      return new ResponseEntity<>(user, HttpStatus.OK);
   }

   @PostMapping("/register")
   public ResponseEntity<TrackUser> addUser(@RequestBody TrackUser user){
      TrackUser newUser=service.addUser(user);

      return new ResponseEntity<>(newUser,HttpStatus.CREATED);
   }

   @PutMapping("/update")
   public ResponseEntity<TrackUser> updateUser(@RequestBody TrackUser user){
      TrackUser updateUser=service.updateUser(user);

      return new ResponseEntity<>(updateUser,HttpStatus.OK);
   }

   @DeleteMapping("/delete/{id}")
   public ResponseEntity<?> deleteUser(@PathVariable("id") Integer id){
      service.deleteUser(id);

      return new ResponseEntity<>(HttpStatus.OK);
   }
}
