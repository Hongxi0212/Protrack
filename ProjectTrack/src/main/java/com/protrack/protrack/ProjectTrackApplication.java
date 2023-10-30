package com.protrack.protrack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.protrack.protrack.entities")
public class ProjectTrackApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectTrackApplication.class, args);
    }
}
