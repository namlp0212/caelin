package com.caeline.rental.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "concept_packages")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ConceptPackage {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private BigDecimal price;

    private int durationHours = 2;
    private boolean includesPhotographer = false;
    private boolean includesMakeup = false;
    private BigDecimal photographerFee = BigDecimal.ZERO;
    private BigDecimal makeupFee = BigDecimal.ZERO;
    private int maxTimeSlotsPerDay = 5;
    private String thumbnailUrl;
    private String backgroundUrl;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ConceptType conceptType;

    private boolean active = true;
    private int sortOrder = 0;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "package_outfits",
        joinColumns = @JoinColumn(name = "package_id"),
        inverseJoinColumns = @JoinColumn(name = "outfit_id")
    )
    private List<Outfit> outfits = new ArrayList<>();

    @Column(updatable = false)
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() { createdAt = LocalDateTime.now(); updatedAt = LocalDateTime.now(); }
    @PreUpdate
    protected void onUpdate() { updatedAt = LocalDateTime.now(); }

    public enum ConceptType { SAKURA_DREAM, KYOTO_SUNSET, LANTERN_NIGHT, ROYAL_VIET_PHUC }
}
