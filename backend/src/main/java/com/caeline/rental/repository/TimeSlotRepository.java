package com.caeline.rental.repository;

import com.caeline.rental.model.TimeSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Repository
public interface TimeSlotRepository extends JpaRepository<TimeSlot, Long> {
    List<TimeSlot> findByConceptPackageIdAndSlotDateOrderByStartTimeAsc(Long packageId, LocalDate date);
    List<TimeSlot> findByConceptPackageIdAndSlotDateBetweenOrderBySlotDateAscStartTimeAsc(
        Long packageId, LocalDate from, LocalDate to);

    @Modifying
    @Query("DELETE FROM TimeSlot ts WHERE ts.conceptPackage.id = :packageId AND ts.slotDate BETWEEN :from AND :to")
    int deleteByPackageIdAndDateRange(@Param("packageId") Long packageId, @Param("from") LocalDate from, @Param("to") LocalDate to);

    boolean existsByConceptPackageIdAndSlotDateAndStartTime(Long packageId, LocalDate slotDate, LocalTime startTime);
}
