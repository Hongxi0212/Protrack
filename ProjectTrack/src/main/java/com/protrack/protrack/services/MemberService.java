package com.protrack.protrack.services;

import com.protrack.protrack.entities.Member;
import com.protrack.protrack.repositories.MemberRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
   private final MemberRepo repository;

   @Autowired
   public MemberService(MemberRepo repository) {
      this.repository = repository;
   }

   public void addMember(Member member){
      repository.save(member);
   }
}
