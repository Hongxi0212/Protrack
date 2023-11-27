package com.protrack.protrack.services;

import com.protrack.protrack.entities.Project;
import com.protrack.protrack.exceptions.UserNotFoundException;
import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
   private final UserRepo repository;

   @Autowired
   public UserService(UserRepo repository) {
      this.repository = repository;
   }

   public void addUser(TrackUser user) {
      repository.save(user);
   }

   public TrackUser getUserWithId(Integer id) {
      return repository.findUserById(id)
            .orElseThrow(() -> new UserNotFoundException(
                  "User by ID: " + id + " was not found!"));
   }

   public TrackUser getUserWithEmail(String email) {
      return repository.findUserByEmail(email)
            .orElseThrow(() -> new UserNotFoundException(
                  "User by Emial: " + email + " was not found!"));
   }

   public List<TrackUser> getTrackUsersWithProject(Project project) {
      return repository.findTrackUsersByProject(project);
   }

   public TrackUser getTrackUsersWithMemberId(Integer memberId) {
      return repository.findTrackUserByMemberId(memberId)
            .orElseThrow(() -> new UserNotFoundException(
                  "User by Member ID: " + memberId + " was not found!"));
   }
}
