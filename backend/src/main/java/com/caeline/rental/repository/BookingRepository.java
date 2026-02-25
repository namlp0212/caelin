package com.caeline.rental.repository;

import com.caeline.rental.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    Optional<Booking> findByBookingCode(String bookingCode);

    List<Booking> findByStatusOrderByCreatedAtDesc(Booking.BookingStatus status);

    List<Booking> findByBookingDateBetweenOrderByBookingDateAscStartTimeAsc(LocalDate from, LocalDate to);

    @Query("SELECT b FROM Booking b WHERE b.conceptPackage.id = :packageId " +
           "AND b.bookingDate = :date " +
           "AND b.status NOT IN ('CANCELLED') " +
           "AND ((b.startTime < :endTime AND b.endTime > :startTime))")
    List<Booking> findConflictingBookings(
        @Param("packageId") Long packageId,
        @Param("date") LocalDate date,
        @Param("startTime") java.time.LocalTime startTime,
        @Param("endTime") java.time.LocalTime endTime
    );

    @Query("SELECT COUNT(b) FROM Booking b WHERE b.status NOT IN ('CANCELLED') " +
           "AND b.createdAt >= :from AND b.createdAt <= :to")
    long countBookingsInPeriod(@Param("from") LocalDateTime from, @Param("to") LocalDateTime to);

    @Query("SELECT SUM(b.totalAmount) FROM Booking b WHERE b.status = 'COMPLETED' " +
           "AND b.createdAt >= :from AND b.createdAt <= :to")
    java.math.BigDecimal sumRevenueInPeriod(@Param("from") LocalDateTime from, @Param("to") LocalDateTime to);

    @Query("SELECT b.conceptPackage.name, COUNT(b) as cnt FROM Booking b " +
           "WHERE b.status NOT IN ('CANCELLED') GROUP BY b.conceptPackage.id ORDER BY cnt DESC")
    List<Object[]> findPopularPackages();
}
