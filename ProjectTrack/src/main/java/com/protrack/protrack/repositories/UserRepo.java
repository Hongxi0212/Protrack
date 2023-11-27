package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Member;
import com.protrack.protrack.entities.Project;
import com.protrack.protrack.entities.TrackUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<TrackUser,Integer> {

   void deleteUserById(Integer id);

   Optional<TrackUser> findUserById(Integer id);

   Optional<TrackUser> findUserByEmail(String email);

   @Query("SELECT m.trackUser FROM Member m WHERE m.project=:project")
   List<TrackUser> findTrackUsersByProject(@Param("project") Project project);

   @Query("SELECT u FROM TrackUser u JOIN u.members m WHERE m.id = :memberId")
   Optional<TrackUser> findTrackUserByMemberId(@Param("memberId") Integer memberId);
}
