package com.caeline.rental.repository;

import com.caeline.rental.model.Outfit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface OutfitRepository extends JpaRepository<Outfit, Long> {

    List<Outfit> findByAvailableTrueOrderBySortOrderAscCreatedAtDesc();

    List<Outfit> findByOutfitTypeAndAvailableTrueOrderBySortOrderAsc(Outfit.OutfitType outfitType);

    List<Outfit> findByIsTrendingTrueAndAvailableTrueOrderBySortOrderAsc();

    @Query("SELECT o FROM Outfit o WHERE o.available = true " +
           "AND (:type IS NULL OR o.outfitType = :type) " +
           "AND (:color IS NULL OR LOWER(o.color) LIKE LOWER(CONCAT('%', :color, '%'))) " +
           "AND (:minPrice IS NULL OR o.price >= :minPrice) " +
           "AND (:maxPrice IS NULL OR o.price <= :maxPrice) " +
           "ORDER BY o.sortOrder ASC, o.createdAt DESC")
    List<Outfit> filterOutfits(
        @Param("type") Outfit.OutfitType type,
        @Param("color") String color,
        @Param("minPrice") BigDecimal minPrice,
        @Param("maxPrice") BigDecimal maxPrice
    );
}
