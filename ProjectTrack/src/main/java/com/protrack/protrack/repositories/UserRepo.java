package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.TrackUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<TrackUser,Integer> {

   void deleteUserById(Integer id);

   Optional<TrackUser> findUserById(Integer id);

   Optional<TrackUser> findUserByEmail(String email);
}
