package com.caeline.rental.repository;

import com.caeline.rental.model.ConceptPackage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ConceptPackageRepository extends JpaRepository<ConceptPackage, Long> {
    List<ConceptPackage> findByActiveTrueOrderBySortOrderAsc();
    Optional<ConceptPackage> findBySlug(String slug);
}
