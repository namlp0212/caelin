package com.caeline.rental.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileStorageService {

    @Value("${app.upload.dir}")
    private String uploadDir;

    @Value("${app.upload.base-url}")
    private String baseUrl;

    public String store(MultipartFile file, String subfolder) throws IOException {
        String originalName = file.getOriginalFilename();
        String extension = originalName != null && originalName.contains(".")
            ? originalName.substring(originalName.lastIndexOf("."))
            : ".jpg";
        String filename = UUID.randomUUID() + extension;

        Path dir = Paths.get(uploadDir, subfolder);
        Files.createDirectories(dir);

        Path target = dir.resolve(filename);
        Files.copy(file.getInputStream(), target);

        return baseUrl + "/" + subfolder + "/" + filename;
    }

    public void delete(String fileUrl) {
        try {
            String relativePath = fileUrl.replace(baseUrl + "/", "");
            Path file = Paths.get(uploadDir, relativePath);
            Files.deleteIfExists(file);
        } catch (IOException ignored) {
        }
    }
}
