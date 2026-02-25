package com.caeline.rental.controller;

import com.caeline.rental.dto.response.ApiResponse;
import com.caeline.rental.repository.BookingRepository;
import com.caeline.rental.repository.OutfitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
public class DashboardController {

    private final BookingRepository bookingRepository;
    private final OutfitRepository outfitRepository;

    @GetMapping("/stats")
    public ResponseEntity<ApiResponse<Map<String, Object>>> getStats() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startOfMonth = now.withDayOfMonth(1).withHour(0).withMinute(0).withSecond(0);
        LocalDateTime startOfLastMonth = startOfMonth.minusMonths(1);

        long totalBookings = bookingRepository.countBookingsInPeriod(
            LocalDateTime.of(2000, 1, 1, 0, 0), now);
        long monthlyBookings = bookingRepository.countBookingsInPeriod(startOfMonth, now);
        long lastMonthBookings = bookingRepository.countBookingsInPeriod(startOfLastMonth, startOfMonth);

        BigDecimal monthlyRevenue = bookingRepository.sumRevenueInPeriod(startOfMonth, now);
        if (monthlyRevenue == null) monthlyRevenue = BigDecimal.ZERO;

        List<Object[]> popularPackages = bookingRepository.findPopularPackages();

        Map<String, Object> stats = new HashMap<>();
        stats.put("totalBookings", totalBookings);
        stats.put("monthlyBookings", monthlyBookings);
        stats.put("lastMonthBookings", lastMonthBookings);
        stats.put("monthlyRevenue", monthlyRevenue);
        stats.put("popularPackages", popularPackages.stream().map(row ->
            Map.of("name", row[0], "count", row[1])
        ).toList());
        stats.put("totalOutfits", outfitRepository.count());
        stats.put("trendingOutfits", outfitRepository.findByIsTrendingTrueAndAvailableTrueOrderBySortOrderAsc().size());

        return ResponseEntity.ok(ApiResponse.ok(stats));
    }
}
