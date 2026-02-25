package com.caeline.rental.controller;

import com.caeline.rental.dto.response.ApiResponse;
import com.caeline.rental.model.Outfit;
import com.caeline.rental.service.OutfitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/outfits")
@RequiredArgsConstructor
public class OutfitController {

    private final OutfitService outfitService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Outfit>>> getAll(
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String color,
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice) {
        List<Outfit> outfits = (type == null && color == null && minPrice == null && maxPrice == null)
            ? outfitService.getAllAvailable()
            : outfitService.filterOutfits(type, color, minPrice, maxPrice);
        return ResponseEntity.ok(ApiResponse.ok(outfits));
    }

    @GetMapping("/trending")
    public ResponseEntity<ApiResponse<List<Outfit>>> getTrending() {
        return ResponseEntity.ok(ApiResponse.ok(outfitService.getTrending()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Outfit>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(outfitService.getById(id)));
    }

    @PostMapping(consumes = "multipart/form-data")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<Outfit>> create(
            @RequestParam Map<String, String> data,
            @RequestParam(required = false) List<MultipartFile> images) throws Exception {
        Outfit outfit = outfitService.createOutfit(data, images);
        return ResponseEntity.ok(ApiResponse.ok("Outfit created", outfit));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<Outfit>> update(
            @PathVariable Long id,
            @RequestBody Map<String, String> data) {
        return ResponseEntity.ok(ApiResponse.ok("Outfit updated", outfitService.updateOutfit(id, data)));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        outfitService.deleteOutfit(id);
        return ResponseEntity.ok(ApiResponse.ok("Outfit deleted", null));
    }
}
