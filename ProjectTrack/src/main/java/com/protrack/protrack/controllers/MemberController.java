package com.protrack.protrack.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.protrack.protrack.entities.Member;
import com.protrack.protrack.entities.TrackUser;
import com.protrack.protrack.services.MemberService;
import com.protrack.protrack.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/member")
public class MemberController {
   private final MemberService memberService;

   public MemberController(MemberService memberService) {
      this.memberService = memberService;
   }

   public ResponseEntity<List<Member>> getProjectInfoOfTitle(@PathVariable String title) {
      List<Member> allMembers=memberService.getMembersWithProjectTitle(title);

      return ResponseEntity.ok(allMembers);
   }
}
