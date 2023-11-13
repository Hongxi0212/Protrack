package com.protrack.protrack.exceptions;

public class MemberNotFoundException extends RuntimeException {
   public MemberNotFoundException(String message){
      super(message);
   }
}
