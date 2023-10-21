package com.protrack.protrack.models;

import javax.persistence.Entity;
import javax.persistence.*;
import java.io.*;

@Entity
@Table(name = "users")
public class ProTrackUser implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "role")
    private String role;
    @Column(name = "timezone")
    private String timezone;
    @Column(name = "password")
    private String password;

    public ProTrackUser() {
        // 无参构造函数
    }

    public ProTrackUser(String name, String email, String role, String timezone, String password) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.timezone = timezone;
        this.password = password;
    }
}
