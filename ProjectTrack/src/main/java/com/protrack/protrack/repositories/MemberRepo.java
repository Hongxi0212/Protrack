package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepo extends JpaRepository<Member, Integer> {
   void deleteMemberById(Integer id);

   Optional<Member> findMemberById(Integer id);
}
