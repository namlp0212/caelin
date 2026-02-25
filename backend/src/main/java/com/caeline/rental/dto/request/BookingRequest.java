package com.caeline.rental.dto.request;

import com.caeline.rental.model.Booking;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class BookingRequest {

    @NotBlank private String customerName;

    @NotBlank @Email private String customerEmail;

    @NotBlank private String customerPhone;

    @NotNull private Long packageId;

    private Long outfitId;
    private String outfitSize;

    @NotNull private Long timeSlotId;

    @NotNull private LocalDate bookingDate;

    private boolean includesPhotographer = false;
    private boolean includesMakeup = false;

    @Min(1) @Max(10)
    private int numPeople = 1;

    private String specialRequests;

    @NotBlank private String paymentMethod; // MOMO, VNPAY, CASH
}
