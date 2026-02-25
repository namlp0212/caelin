package com.caeline.rental.controller;

import com.caeline.rental.dto.response.ApiResponse;
import com.caeline.rental.model.ConceptPackage;
import com.caeline.rental.model.TimeSlot;
import com.caeline.rental.repository.ConceptPackageRepository;
import com.caeline.rental.repository.TimeSlotRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/slots")
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
public class TimeSlotController {

    private final TimeSlotRepository slotRepository;
    private final ConceptPackageRepository packageRepository;

    // --- Inner DTOs ---

    static class GenerateRequest {
        public Long packageId;
        public LocalDate from;
        public LocalDate to;
        public List<TimeRange> timeSlots;
        public int maxBookings = 1;

        static class TimeRange {
            public LocalTime startTime;
            public LocalTime endTime;
        }
    }

    static class BlockRequest {
        public boolean blocked;
    }

    // --- Endpoints ---

    @GetMapping
    public ResponseEntity<ApiResponse<List<TimeSlot>>> getSlots(
            @RequestParam Long packageId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {
        List<TimeSlot> slots = slotRepository
            .findByConceptPackageIdAndSlotDateBetweenOrderBySlotDateAscStartTimeAsc(packageId, from, to);
        return ResponseEntity.ok(ApiResponse.ok(slots));
    }

    @PostMapping("/generate")
    @Transactional
    public ResponseEntity<ApiResponse<List<TimeSlot>>> generateSlots(@RequestBody GenerateRequest req) {
        ConceptPackage pkg = packageRepository.findById(req.packageId)
            .orElseThrow(() -> new RuntimeException("Package not found"));

        List<TimeSlot> created = new ArrayList<>();
        LocalDate current = req.from;
        while (!current.isAfter(req.to)) {
            for (GenerateRequest.TimeRange tr : req.timeSlots) {
                boolean exists = slotRepository.existsByConceptPackageIdAndSlotDateAndStartTime(
                    req.packageId, current, tr.startTime);
                if (!exists) {
                    TimeSlot slot = TimeSlot.builder()
                        .conceptPackage(pkg)
                        .slotDate(current)
                        .startTime(tr.startTime)
                        .endTime(tr.endTime)
                        .maxBookings(req.maxBookings)
                        .currentBookings(0)
                        .isBlocked(false)
                        .build();
                    created.add(slotRepository.save(slot));
                }
            }
            current = current.plusDays(1);
        }
        return ResponseEntity.ok(ApiResponse.ok("Generated " + created.size() + " slots", created));
    }

    @PutMapping("/{id}/block")
    public ResponseEntity<ApiResponse<TimeSlot>> blockSlot(@PathVariable Long id, @RequestBody BlockRequest req) {
        TimeSlot slot = slotRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Slot not found"));
        slot.setBlocked(req.blocked);
        return ResponseEntity.ok(ApiResponse.ok(slotRepository.save(slot)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteSlot(@PathVariable Long id) {
        slotRepository.deleteById(id);
        return ResponseEntity.ok(ApiResponse.ok("Slot deleted", null));
    }

    @DeleteMapping("/bulk")
    @Transactional
    public ResponseEntity<ApiResponse<Void>> deleteSlotRange(
            @RequestParam Long packageId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {
        int deleted = slotRepository.deleteByPackageIdAndDateRange(packageId, from, to);
        return ResponseEntity.ok(ApiResponse.ok("Deleted " + deleted + " slots", null));
    }
}
