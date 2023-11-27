package com.protrack.protrack.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
   @Bean
   public static PasswordEncoder passwordEncoder() {
      return new BCryptPasswordEncoder();
   }


   @Bean
   public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
      http.csrf(AbstractHttpConfigurer::disable)
            .authorizeRequests()
            .requestMatchers("/css/**", "/js/**", "/images/**", "vendor/**").permitAll()
            .requestMatchers("/protrack/home").permitAll()
            .requestMatchers("/protrack/login").permitAll()
            .requestMatchers("/protrack/signup").permitAll()
            .requestMatchers("/trackuser/signup").permitAll()
            .requestMatchers("/trackuser/login").permitAll()
            .anyRequest().permitAll();
      return http.build();
   }
}
