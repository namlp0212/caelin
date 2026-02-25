package com.caeline.rental.controller;

import com.caeline.rental.dto.response.ApiResponse;
import com.caeline.rental.model.ConceptPackage;
import com.caeline.rental.model.TimeSlot;
import com.caeline.rental.repository.ConceptPackageRepository;
import com.caeline.rental.repository.TimeSlotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/packages")
@RequiredArgsConstructor
public class PackageController {

    private final ConceptPackageRepository packageRepository;
    private final TimeSlotRepository timeSlotRepository;

    @GetMapping
    public ResponseEntity<ApiResponse<List<ConceptPackage>>> getAll() {
        return ResponseEntity.ok(ApiResponse.ok(packageRepository.findByActiveTrueOrderBySortOrderAsc()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ConceptPackage>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(
            packageRepository.findById(id).orElseThrow(() -> new RuntimeException("Package not found"))
        ));
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<ApiResponse<ConceptPackage>> getBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(ApiResponse.ok(
            packageRepository.findBySlug(slug).orElseThrow(() -> new RuntimeException("Package not found"))
        ));
    }

    @GetMapping("/{id}/slots")
    public ResponseEntity<ApiResponse<List<TimeSlot>>> getAvailableSlots(
            @PathVariable Long id,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to) {
        List<TimeSlot> slots = timeSlotRepository
            .findByConceptPackageIdAndSlotDateBetweenOrderBySlotDateAscStartTimeAsc(id, from, to);
        return ResponseEntity.ok(ApiResponse.ok(slots));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<ConceptPackage>> create(@RequestBody ConceptPackage pkg) {
        return ResponseEntity.ok(ApiResponse.ok("Package created", packageRepository.save(pkg)));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<ConceptPackage>> update(@PathVariable Long id, @RequestBody ConceptPackage updated) {
        ConceptPackage pkg = packageRepository.findById(id).orElseThrow();
        pkg.setName(updated.getName());
        pkg.setDescription(updated.getDescription());
        pkg.setPrice(updated.getPrice());
        pkg.setDurationHours(updated.getDurationHours());
        pkg.setIncludesPhotographer(updated.isIncludesPhotographer());
        pkg.setIncludesMakeup(updated.isIncludesMakeup());
        pkg.setPhotographerFee(updated.getPhotographerFee());
        pkg.setMakeupFee(updated.getMakeupFee());
        pkg.setActive(updated.isActive());
        return ResponseEntity.ok(ApiResponse.ok("Package updated", packageRepository.save(pkg)));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        packageRepository.deleteById(id);
        return ResponseEntity.ok(ApiResponse.ok("Package deleted", null));
    }
}
