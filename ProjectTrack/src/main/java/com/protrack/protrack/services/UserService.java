package com.protrack.protrack.services;

import com.protrack.protrack.exceptions.UserNotFoundException;
import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
   private final UserRepo repository;

   @Autowired
   public UserService(UserRepo repository) {
      this.repository = repository;
   }

   public TrackUser addUser(TrackUser user){
      return repository.save(user);
   }

   public List<TrackUser> findAllUsers(){
      return repository.findAll();
   }

   public TrackUser updateUser(TrackUser user){
      return repository.save(user);
   }

   public TrackUser findUserById(Integer id) {
      return repository.findUserById(id)
            .orElseThrow(() -> new UserNotFoundException(
                  "User by ID: " + id + " was not found!"));
   }

   public TrackUser findUserByEmail(String email){
      return repository.findUserByEmail(email)
            .orElseThrow(()-> new UserNotFoundException(
                  "User by Emial: "+email+" was not found!"));
   }

   public void deleteUser(Integer id){
      repository.deleteUserById(id);
   }
}
