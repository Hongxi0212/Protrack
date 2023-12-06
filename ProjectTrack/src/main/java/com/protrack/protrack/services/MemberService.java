package com.protrack.protrack.services;

import com.protrack.protrack.entities.Member;
import com.protrack.protrack.entities.Project;
import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.exceptions.MemberNotFoundException;
import com.protrack.protrack.repositories.MemberRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class MemberService {
   private final MemberRepo repository;

   @Autowired
   public MemberService(MemberRepo repository) {
      this.repository = repository;
   }


   public void addMember(Member member) {
      repository.save(member);
   }

   public void addMembers(Set<Member> members){
      repository.saveAll(members);
   }

   @Transactional
   public void removeMember(Member member) {
      repository.delete(member);
   }

   public Member getMemberWithId(Integer id) {
      return repository.findMemberById(id)
            .orElseThrow(() -> new MemberNotFoundException(
                  "Member by ID: " + id + " was not found!"));
   }

   public Member getMemberWithProjectTitleAndTrackUserName(String title, String name) {
      return repository.findMemberByProjectTitleAndTrackUserName(title, name)
            .orElseThrow(() -> new MemberNotFoundException(
                  "Member by User Name: " + name + " was not found!"));
   }

   public List<Member> getMembersWithProject(Project project) {
      return repository.findMembersByProject(project);
   }

   public List<Member> getMembersWithTrackUser(TrackUser user){
      return repository.findMembersByTrackUser(user);
   }

   public void updateMember(Member member) {
      repository.save(member);
   }
}
