package com.caeline.rental.service;

import com.caeline.rental.dto.request.BookingRequest;
import com.caeline.rental.model.*;
import com.caeline.rental.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final ConceptPackageRepository packageRepository;
    private final OutfitRepository outfitRepository;
    private final TimeSlotRepository timeSlotRepository;

    @Transactional
    public Booking createBooking(BookingRequest request) {
        ConceptPackage pkg = packageRepository.findById(request.getPackageId())
            .orElseThrow(() -> new RuntimeException("Package not found"));

        TimeSlot slot = timeSlotRepository.findById(request.getTimeSlotId())
            .orElseThrow(() -> new RuntimeException("Time slot not found"));

        if (!slot.isAvailable()) {
            throw new RuntimeException("Selected time slot is no longer available");
        }

        // Check conflicts
        List<Booking> conflicts = bookingRepository.findConflictingBookings(
            request.getPackageId(),
            request.getBookingDate(),
            slot.getStartTime(),
            slot.getEndTime()
        );
        if (!conflicts.isEmpty()) {
            throw new RuntimeException("Time slot conflict detected. Please choose another time.");
        }

        Outfit outfit = null;
        if (request.getOutfitId() != null) {
            outfit = outfitRepository.findById(request.getOutfitId())
                .orElseThrow(() -> new RuntimeException("Outfit not found"));
        }

        // Calculate price
        BigDecimal subtotal = pkg.getPrice();
        BigDecimal photographerFee = BigDecimal.ZERO;
        BigDecimal makeupFee = BigDecimal.ZERO;

        if (request.isIncludesPhotographer()) photographerFee = pkg.getPhotographerFee();
        if (request.isIncludesMakeup()) makeupFee = pkg.getMakeupFee();

        BigDecimal total = subtotal.add(photographerFee).add(makeupFee);
        BigDecimal deposit = total.multiply(BigDecimal.valueOf(0.3)).setScale(0, java.math.RoundingMode.CEILING);

        Booking booking = Booking.builder()
            .bookingCode(generateBookingCode())
            .customerName(request.getCustomerName())
            .customerEmail(request.getCustomerEmail())
            .customerPhone(request.getCustomerPhone())
            .conceptPackage(pkg)
            .outfit(outfit)
            .outfitSize(request.getOutfitSize())
            .timeSlot(slot)
            .bookingDate(request.getBookingDate())
            .startTime(slot.getStartTime())
            .endTime(slot.getEndTime())
            .includesPhotographer(request.isIncludesPhotographer())
            .includesMakeup(request.isIncludesMakeup())
            .numPeople(request.getNumPeople())
            .specialRequests(request.getSpecialRequests())
            .subtotal(subtotal)
            .photographerFee(photographerFee)
            .makeupFee(makeupFee)
            .totalAmount(total)
            .depositAmount(deposit)
            .paymentMethod(Booking.PaymentMethod.valueOf(request.getPaymentMethod()))
            .status(Booking.BookingStatus.PENDING)
            .build();

        // Increment slot bookings
        slot.setCurrentBookings(slot.getCurrentBookings() + 1);
        timeSlotRepository.save(slot);

        return bookingRepository.save(booking);
    }

    public Booking getByCode(String code) {
        return bookingRepository.findByBookingCode(code)
            .orElseThrow(() -> new RuntimeException("Booking not found: " + code));
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll(org.springframework.data.domain.Sort.by(
            org.springframework.data.domain.Sort.Direction.DESC, "createdAt"));
    }

    public List<Booking> getBookingsByDateRange(LocalDate from, LocalDate to) {
        return bookingRepository.findByBookingDateBetweenOrderByBookingDateAscStartTimeAsc(from, to);
    }

    @Transactional
    public Booking updateStatus(Long id, String status) {
        Booking booking = bookingRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(Booking.BookingStatus.valueOf(status.toUpperCase()));
        return bookingRepository.save(booking);
    }

    @Transactional
    public Booking markDepositPaid(Long id, String transactionId) {
        Booking booking = bookingRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setDepositPaid(true);
        booking.setPaymentTransactionId(transactionId);
        booking.setStatus(Booking.BookingStatus.CONFIRMED);
        return bookingRepository.save(booking);
    }

    private String generateBookingCode() {
        String date = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        int rand = new Random().nextInt(9000) + 1000;
        return "CAE" + date + rand;
    }
}
