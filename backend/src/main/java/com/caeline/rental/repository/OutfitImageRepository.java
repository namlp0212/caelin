package com.caeline.rental.repository;

import com.caeline.rental.model.OutfitImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OutfitImageRepository extends JpaRepository<OutfitImage, Long> {
}
