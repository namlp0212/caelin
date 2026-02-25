package com.caeline.rental.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "instagram_posts")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class InstagramPost {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String imageUrl;

    private String instagramUrl;
    private String username;

    @Column(columnDefinition = "TEXT")
    private String caption;

    private int likes = 0;
    private boolean active = true;
    private int sortOrder = 0;

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() { createdAt = LocalDateTime.now(); }
}
