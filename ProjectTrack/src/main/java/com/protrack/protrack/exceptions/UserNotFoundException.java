package com.protrack.protrack.exceptions;

public class UserNotFoundException extends RuntimeException {
   public UserNotFoundException(String message) {
      super(message);
   }
}
