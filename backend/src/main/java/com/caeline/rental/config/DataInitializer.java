package com.caeline.rental.config;

import com.caeline.rental.model.User;
import com.caeline.rental.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataInitializer implements ApplicationRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) {
        ensureUser("admin", "Admin@123", User.Role.ADMIN, "Admin Caeline", "admin@caeline.vn");
        ensureUser("staff1", "Staff@123", User.Role.STAFF, "Staff Caeline", "staff@caeline.vn");
    }

    private void ensureUser(String username, String rawPassword, User.Role role, String fullName, String email) {
        userRepository.findByUsername(username).ifPresentOrElse(user -> {
            // Re-encode if using placeholder hash
            if (user.getPassword().contains("placeholder")) {
                user.setPassword(passwordEncoder.encode(rawPassword));
                userRepository.save(user);
                log.info("Updated password for user: {}", username);
            }
        }, () -> {
            User user = new User();
            user.setUsername(username);
            user.setPassword(passwordEncoder.encode(rawPassword));
            user.setRole(role);
            user.setFullName(fullName);
            user.setEmail(email);
            user.setActive(true);
            userRepository.save(user);
            log.info("Created user: {}", username);
        });
    }
}
