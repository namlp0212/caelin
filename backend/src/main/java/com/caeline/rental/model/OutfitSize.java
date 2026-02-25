package com.caeline.rental.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "outfit_sizes")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class OutfitSize {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "outfit_id", nullable = false)
    private Outfit outfit;

    @Column(nullable = false)
    private String sizeLabel;

    private String sizeDescription;
    private int availableQuantity = 1;
}
