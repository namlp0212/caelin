package com.caeline.rental.service;

import com.caeline.rental.model.Outfit;
import com.caeline.rental.model.OutfitImage;
import com.caeline.rental.model.OutfitSize;
import com.caeline.rental.repository.OutfitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class OutfitService {

    private final OutfitRepository outfitRepository;
    private final FileStorageService fileStorageService;

    public List<Outfit> getAllAvailable() {
        return outfitRepository.findByAvailableTrueOrderBySortOrderAscCreatedAtDesc();
    }

    public List<Outfit> getTrending() {
        return outfitRepository.findByIsTrendingTrueAndAvailableTrueOrderBySortOrderAsc();
    }

    public List<Outfit> filterOutfits(String type, String color, BigDecimal minPrice, BigDecimal maxPrice) {
        Outfit.OutfitType outfitType = null;
        if (type != null && !type.isBlank()) {
            outfitType = Outfit.OutfitType.valueOf(type.toUpperCase());
        }
        return outfitRepository.filterOutfits(outfitType, color, minPrice, maxPrice);
    }

    public Outfit getById(Long id) {
        return outfitRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Outfit not found: " + id));
    }

    @Transactional
    public Outfit createOutfit(Map<String, String> data, List<MultipartFile> images) throws IOException {
        Outfit outfit = Outfit.builder()
            .name(data.get("name"))
            .code(data.get("code"))
            .outfitType(Outfit.OutfitType.valueOf(data.get("outfitType")))
            .color(data.get("color"))
            .colorHex(data.get("colorHex"))
            .price(new BigDecimal(data.get("price")))
            .description(data.get("description"))
            .isTrending(Boolean.parseBoolean(data.getOrDefault("isTrending", "false")))
            .available(Boolean.parseBoolean(data.getOrDefault("available", "true")))
            .build();

        outfit = outfitRepository.save(outfit);

        if (images != null && !images.isEmpty()) {
            for (int i = 0; i < images.size(); i++) {
                String url = fileStorageService.store(images.get(i), "outfits");
                OutfitImage img = OutfitImage.builder()
                    .outfit(outfit)
                    .imageUrl(url)
                    .isPrimary(i == 0)
                    .sortOrder(i)
                    .build();
                outfit.getImages().add(img);
            }
            outfitRepository.save(outfit);
        }

        return outfit;
    }

    @Transactional
    public Outfit updateOutfit(Long id, Map<String, String> data) {
        Outfit outfit = getById(id);
        if (data.containsKey("name")) outfit.setName(data.get("name"));
        if (data.containsKey("color")) outfit.setColor(data.get("color"));
        if (data.containsKey("colorHex")) outfit.setColorHex(data.get("colorHex"));
        if (data.containsKey("price")) outfit.setPrice(new BigDecimal(data.get("price")));
        if (data.containsKey("description")) outfit.setDescription(data.get("description"));
        if (data.containsKey("isTrending")) outfit.setTrending(Boolean.parseBoolean(data.get("isTrending")));
        if (data.containsKey("available")) outfit.setAvailable(Boolean.parseBoolean(data.get("available")));
        return outfitRepository.save(outfit);
    }

    @Transactional
    public void deleteOutfit(Long id) {
        outfitRepository.deleteById(id);
    }
}
