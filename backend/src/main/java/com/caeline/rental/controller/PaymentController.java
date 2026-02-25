package com.caeline.rental.controller;

import com.caeline.rental.dto.response.ApiResponse;
import com.caeline.rental.model.Booking;
import com.caeline.rental.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final BookingService bookingService;

    @Value("${momo.partner-code}")
    private String momoPartnerCode;

    @Value("${momo.access-key}")
    private String momoAccessKey;

    @Value("${momo.secret-key}")
    private String momoSecretKey;

    @Value("${momo.endpoint}")
    private String momoEndpoint;

    @Value("${momo.redirect-url}")
    private String momoRedirectUrl;

    @Value("${momo.notify-url}")
    private String momoNotifyUrl;

    /**
     * Initiate MoMo payment for a booking deposit.
     * Returns the MoMo payment URL to redirect the user to.
     */
    @PostMapping("/momo/create")
    public ResponseEntity<ApiResponse<Map<String, Object>>> createMomoPayment(
            @RequestBody Map<String, String> body) throws Exception {

        String bookingCode = body.get("bookingCode");
        Booking booking = bookingService.getByCode(bookingCode);

        String orderId = booking.getBookingCode() + "_" + System.currentTimeMillis();
        String requestId = UUID.randomUUID().toString();
        long amount = booking.getDepositAmount().longValue();
        String orderInfo = "Dat coc dat trang phuc - " + booking.getBookingCode();
        String extraData = "";

        String rawSignature = "accessKey=" + momoAccessKey
            + "&amount=" + amount
            + "&extraData=" + extraData
            + "&ipnUrl=" + momoNotifyUrl
            + "&orderId=" + orderId
            + "&orderInfo=" + orderInfo
            + "&partnerCode=" + momoPartnerCode
            + "&redirectUrl=" + momoRedirectUrl
            + "&requestId=" + requestId
            + "&requestType=payWithMethod";

        String signature = hmacSHA256(rawSignature, momoSecretKey);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("partnerCode", momoPartnerCode);
        requestBody.put("partnerName", "Caeline Rental");
        requestBody.put("storeId", "CaelineStore");
        requestBody.put("requestId", requestId);
        requestBody.put("amount", amount);
        requestBody.put("orderId", orderId);
        requestBody.put("orderInfo", orderInfo);
        requestBody.put("redirectUrl", momoRedirectUrl);
        requestBody.put("ipnUrl", momoNotifyUrl);
        requestBody.put("lang", "vi");
        requestBody.put("extraData", extraData);
        requestBody.put("requestType", "payWithMethod");
        requestBody.put("signature", signature);

        // In a real implementation, call the MoMo API here with RestTemplate/WebClient
        // For now return the payload so frontend can display the sandbox info
        Map<String, Object> response = new HashMap<>();
        response.put("bookingCode", bookingCode);
        response.put("amount", amount);
        response.put("orderId", orderId);
        response.put("requestPayload", requestBody);
        response.put("note", "Integrate with MoMo sandbox API endpoint: " + momoEndpoint);

        return ResponseEntity.ok(ApiResponse.ok("MoMo payment initiated", response));
    }

    /**
     * MoMo IPN (Instant Payment Notification) callback
     */
    @PostMapping("/momo/callback")
    public ResponseEntity<Map<String, Object>> momoCallback(@RequestBody Map<String, Object> payload) {
        String resultCode = payload.getOrDefault("resultCode", "99").toString();
        String orderId = payload.getOrDefault("orderId", "").toString();
        String transId = payload.getOrDefault("transId", "").toString();

        if ("0".equals(resultCode) && orderId.contains("_")) {
            String bookingCode = orderId.split("_")[0];
            try {
                bookingService.markDepositPaid(
                    bookingService.getByCode(bookingCode).getId(),
                    transId
                );
            } catch (Exception ignored) {
            }
        }

        return ResponseEntity.ok(Map.of("status", "ok"));
    }

    private String hmacSHA256(String data, String key) throws Exception {
        Mac hmac = Mac.getInstance("HmacSHA256");
        SecretKeySpec secretKey = new SecretKeySpec(key.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
        hmac.init(secretKey);
        byte[] hash = hmac.doFinal(data.getBytes(StandardCharsets.UTF_8));
        StringBuilder sb = new StringBuilder();
        for (byte b : hash) sb.append(String.format("%02x", b));
        return sb.toString();
    }
}
