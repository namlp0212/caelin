package com.caeline.rental.controller;

import com.caeline.rental.dto.request.BookingRequest;
import com.caeline.rental.dto.response.ApiResponse;
import com.caeline.rental.model.Booking;
import com.caeline.rental.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<Booking>> createBooking(@Valid @RequestBody BookingRequest request) {
        Booking booking = bookingService.createBooking(request);
        return ResponseEntity.ok(ApiResponse.ok("Booking created successfully", booking));
    }

    @GetMapping("/code/{code}")
    public ResponseEntity<ApiResponse<Booking>> getByCode(@PathVariable String code) {
        return ResponseEntity.ok(ApiResponse.ok(bookingService.getByCode(code)));
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<List<Booking>>> getAllBookings(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {
        List<Booking> bookings = (from != null && to != null)
            ? bookingService.getBookingsByDateRange(from, to)
            : bookingService.getAllBookings();
        return ResponseEntity.ok(ApiResponse.ok(bookings));
    }

    @PutMapping("/{id}/status")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<Booking>> updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(ApiResponse.ok("Status updated",
            bookingService.updateStatus(id, body.get("status"))));
    }

    @PutMapping("/{id}/payment")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<Booking>> markPaid(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(ApiResponse.ok("Payment confirmed",
            bookingService.markDepositPaid(id, body.get("transactionId"))));
    }
}
