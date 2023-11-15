package com.protrack.protrack.repositories;

import com.protrack.protrack.entities.Member;
import com.protrack.protrack.entities.Project;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface MemberRepo extends JpaRepository<Member, Integer> {
   void deleteMemberById(Integer id);

   void deleteMembersByProjectTitle(String title);

   Optional<Member> findMemberById(Integer id);

   Optional<Member> findMemberByProjectTitleAndTrackUserName(String title, String name);

   List<Member> findMembersByProjectTitle(String title);
}
