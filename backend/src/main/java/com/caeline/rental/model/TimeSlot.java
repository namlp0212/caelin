package com.caeline.rental.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "time_slots")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class TimeSlot {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "package_id", nullable = false)
    private ConceptPackage conceptPackage;

    @Column(nullable = false)
    private LocalDate slotDate;

    @Column(nullable = false)
    private LocalTime startTime;

    @Column(nullable = false)
    private LocalTime endTime;

    private int maxBookings = 1;
    private int currentBookings = 0;
    private boolean isBlocked = false;

    public boolean isAvailable() {
        return !isBlocked && currentBookings < maxBookings;
    }

    @JsonProperty("packageId")
    public Long getPackageId() {
        return conceptPackage != null ? conceptPackage.getId() : null;
    }
}
