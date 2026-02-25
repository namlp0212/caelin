package com.caeline.rental.controller;

import com.caeline.rental.dto.response.ApiResponse;
import com.caeline.rental.model.Banner;
import com.caeline.rental.model.InstagramPost;
import com.caeline.rental.model.Review;
import com.caeline.rental.repository.BannerRepository;
import com.caeline.rental.repository.InstagramPostRepository;
import com.caeline.rental.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ContentController {

    private final BannerRepository bannerRepository;
    private final InstagramPostRepository instagramPostRepository;
    private final ReviewRepository reviewRepository;

    // ========================= BANNERS =========================
    @GetMapping("/banners")
    public ResponseEntity<ApiResponse<List<Banner>>> getBanners() {
        return ResponseEntity.ok(ApiResponse.ok(bannerRepository.findByActiveTrueOrderBySortOrderAsc()));
    }

    @PostMapping("/banners")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<Banner>> createBanner(@RequestBody Banner banner) {
        return ResponseEntity.ok(ApiResponse.ok(bannerRepository.save(banner)));
    }

    @PutMapping("/banners/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<Banner>> updateBanner(@PathVariable Long id, @RequestBody Banner updated) {
        Banner banner = bannerRepository.findById(id).orElseThrow();
        banner.setTitle(updated.getTitle());
        banner.setSubtitle(updated.getSubtitle());
        banner.setImageUrl(updated.getImageUrl());
        banner.setVideoUrl(updated.getVideoUrl());
        banner.setCtaText(updated.getCtaText());
        banner.setActive(updated.isActive());
        banner.setSortOrder(updated.getSortOrder());
        return ResponseEntity.ok(ApiResponse.ok(bannerRepository.save(banner)));
    }

    @DeleteMapping("/banners/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Void>> deleteBanner(@PathVariable Long id) {
        bannerRepository.deleteById(id);
        return ResponseEntity.ok(ApiResponse.ok("Banner deleted", null));
    }

    // ========================= INSTAGRAM =========================
    @GetMapping("/instagram")
    public ResponseEntity<ApiResponse<List<InstagramPost>>> getInstagramPosts() {
        return ResponseEntity.ok(ApiResponse.ok(instagramPostRepository.findByActiveTrueOrderBySortOrderAsc()));
    }

    @PostMapping("/instagram")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<InstagramPost>> createPost(@RequestBody InstagramPost post) {
        return ResponseEntity.ok(ApiResponse.ok(instagramPostRepository.save(post)));
    }

    @DeleteMapping("/instagram/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Void>> deletePost(@PathVariable Long id) {
        instagramPostRepository.deleteById(id);
        return ResponseEntity.ok(ApiResponse.ok("Post deleted", null));
    }

    // ========================= REVIEWS =========================
    @GetMapping("/reviews")
    public ResponseEntity<ApiResponse<List<Review>>> getReviews(
            @RequestParam(defaultValue = "false") boolean featuredOnly) {
        List<Review> reviews = featuredOnly
            ? reviewRepository.findByFeaturedTrueAndVisibleTrueOrderByCreatedAtDesc()
            : reviewRepository.findByVisibleTrueOrderByCreatedAtDesc();
        return ResponseEntity.ok(ApiResponse.ok(reviews));
    }

    @PostMapping("/reviews")
    public ResponseEntity<ApiResponse<Review>> createReview(@RequestBody Review review) {
        return ResponseEntity.ok(ApiResponse.ok(reviewRepository.save(review)));
    }

    @PutMapping("/reviews/{id}/visibility")
    @PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    public ResponseEntity<ApiResponse<Review>> toggleVisibility(@PathVariable Long id) {
        Review review = reviewRepository.findById(id).orElseThrow();
        review.setVisible(!review.isVisible());
        return ResponseEntity.ok(ApiResponse.ok(reviewRepository.save(review)));
    }
}
