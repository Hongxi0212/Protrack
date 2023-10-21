package com.protrack.protrack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.protrack.protrack.models")
@ComponentScan("com.protrack.protrack.controllers")
@EnableJpaRepositories(basePackages = "com.protrack.protrack.models")
public class ProjectTrackApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectTrackApplication.class, args);
    }

}
