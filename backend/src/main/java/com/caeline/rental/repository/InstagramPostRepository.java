package com.caeline.rental.repository;

import com.caeline.rental.model.InstagramPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstagramPostRepository extends JpaRepository<InstagramPost, Long> {
    List<InstagramPost> findByActiveTrueOrderBySortOrderAsc();
}
