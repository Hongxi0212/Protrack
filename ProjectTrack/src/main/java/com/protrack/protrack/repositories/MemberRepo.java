package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Member;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface MemberRepo extends JpaRepository<Member, Integer> {
   void deleteMemberById(Integer id);

   Optional<Member> findMemberById(Integer id);

   Optional<Member> findMemberByTrackUserName(@Param("name") String name);
}
