-- ============================================================
-- Caeline Kimono & Viet Phuc Rental - Database Schema
-- Schema: caeline2
-- ============================================================

CREATE DATABASE IF NOT EXISTS caeline2 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE caeline2;

-- ============================================================
-- USERS & AUTHENTICATION
-- ============================================================
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    phone VARCHAR(20),
    role ENUM('ADMIN', 'STAFF') NOT NULL DEFAULT 'STAFF',
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================================
-- CONCEPT PACKAGES
-- ============================================================
CREATE TABLE concept_packages (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    duration_hours INT NOT NULL DEFAULT 2,
    includes_photographer BOOLEAN DEFAULT FALSE,
    includes_makeup BOOLEAN DEFAULT FALSE,
    photographer_fee DECIMAL(10,2) DEFAULT 0,
    makeup_fee DECIMAL(10,2) DEFAULT 0,
    max_time_slots_per_day INT DEFAULT 5,
    thumbnail_url VARCHAR(500),
    background_url VARCHAR(500),
    concept_type ENUM('SAKURA_DREAM', 'KYOTO_SUNSET', 'LANTERN_NIGHT', 'ROYAL_VIET_PHUC') NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================================
-- OUTFITS
-- ============================================================
CREATE TABLE outfits (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    code VARCHAR(50) NOT NULL UNIQUE,
    outfit_type ENUM('KIMONO', 'YUKATA', 'VIET_PHUC') NOT NULL,
    color VARCHAR(50),
    color_hex VARCHAR(7),
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    is_trending BOOLEAN DEFAULT FALSE,
    available BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE outfit_images (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    outfit_id BIGINT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(200),
    is_primary BOOLEAN DEFAULT FALSE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (outfit_id) REFERENCES outfits(id) ON DELETE CASCADE
);

CREATE TABLE outfit_sizes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    outfit_id BIGINT NOT NULL,
    size_label VARCHAR(20) NOT NULL,
    size_description VARCHAR(100),
    available_quantity INT DEFAULT 1,
    FOREIGN KEY (outfit_id) REFERENCES outfits(id) ON DELETE CASCADE
);

-- ============================================================
-- PACKAGE <-> OUTFIT ASSIGNMENTS
-- ============================================================
CREATE TABLE package_outfits (
    package_id BIGINT NOT NULL,
    outfit_id BIGINT NOT NULL,
    PRIMARY KEY (package_id, outfit_id),
    FOREIGN KEY (package_id) REFERENCES concept_packages(id) ON DELETE CASCADE,
    FOREIGN KEY (outfit_id) REFERENCES outfits(id) ON DELETE CASCADE
);

-- ============================================================
-- TIME SLOTS
-- ============================================================
CREATE TABLE time_slots (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    package_id BIGINT NOT NULL,
    slot_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    max_bookings INT DEFAULT 1,
    current_bookings INT DEFAULT 0,
    is_blocked BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (package_id) REFERENCES concept_packages(id) ON DELETE CASCADE,
    UNIQUE KEY unique_slot (package_id, slot_date, start_time)
);

-- ============================================================
-- BOOKINGS
-- ============================================================
CREATE TABLE bookings (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    booking_code VARCHAR(20) NOT NULL UNIQUE,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    package_id BIGINT NOT NULL,
    outfit_id BIGINT,
    outfit_size VARCHAR(20),
    time_slot_id BIGINT NOT NULL,
    booking_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    includes_photographer BOOLEAN DEFAULT FALSE,
    includes_makeup BOOLEAN DEFAULT FALSE,
    num_people INT DEFAULT 1,
    special_requests TEXT,
    subtotal DECIMAL(10,2) NOT NULL,
    photographer_fee DECIMAL(10,2) DEFAULT 0,
    makeup_fee DECIMAL(10,2) DEFAULT 0,
    total_amount DECIMAL(10,2) NOT NULL,
    deposit_amount DECIMAL(10,2) NOT NULL,
    deposit_paid BOOLEAN DEFAULT FALSE,
    payment_method ENUM('MOMO', 'VNPAY', 'CASH') DEFAULT 'MOMO',
    payment_transaction_id VARCHAR(200),
    status ENUM('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED') DEFAULT 'PENDING',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (package_id) REFERENCES concept_packages(id),
    FOREIGN KEY (outfit_id) REFERENCES outfits(id),
    FOREIGN KEY (time_slot_id) REFERENCES time_slots(id)
);

-- ============================================================
-- REVIEWS
-- ============================================================
CREATE TABLE reviews (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    booking_id BIGINT,
    customer_name VARCHAR(100) NOT NULL,
    customer_avatar VARCHAR(500),
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    content TEXT NOT NULL,
    package_name VARCHAR(100),
    visible BOOLEAN DEFAULT TRUE,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id)
);

-- ============================================================
-- CONTENT MANAGEMENT
-- ============================================================
CREATE TABLE banners (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200),
    subtitle VARCHAR(300),
    image_url VARCHAR(500) NOT NULL,
    video_url VARCHAR(500),
    cta_text VARCHAR(100),
    cta_link VARCHAR(300),
    active BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE instagram_posts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(500) NOT NULL,
    instagram_url VARCHAR(500),
    username VARCHAR(100),
    caption TEXT,
    likes INT DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blog_posts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    slug VARCHAR(300) NOT NULL UNIQUE,
    excerpt TEXT,
    content LONGTEXT,
    cover_image VARCHAR(500),
    author_id BIGINT,
    published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
);

-- ============================================================
-- SEED DATA
-- ============================================================
INSERT INTO users (username, email, password, full_name, phone, role) VALUES
('admin', 'admin@caeline.vn', '$2a$10$placeholder_hashed_password', 'Admin Caeline', '0901234567', 'ADMIN'),
('staff1', 'staff@caeline.vn', '$2a$10$placeholder_hashed_password', 'Staff Caeline', '0902345678', 'STAFF');

INSERT INTO concept_packages (name, slug, description, price, duration_hours, includes_photographer, includes_makeup, photographer_fee, makeup_fee, concept_type, active) VALUES
('Sakura Dream', 'sakura-dream', 'Immerse yourself in a dreamy sakura garden setting with soft pink kimono and delicate floral accessories. Perfect for that magical spring Instagram moment.', 350000, 2, FALSE, FALSE, 200000, 150000, 'SAKURA_DREAM', TRUE),
('Kyoto Sunset', 'kyoto-sunset', 'Channel the golden hour vibes of Kyoto with rich yukata patterns and lantern-lit pathways. Ideal for couples and solo travel bloggers.', 450000, 3, FALSE, FALSE, 200000, 150000, 'KYOTO_SUNSET', TRUE),
('Lantern Night', 'lantern-night', 'Experience the enchanting ambiance of a traditional lantern festival. Evening shoot with warm glowing lights and vibrant kimono.', 500000, 2, FALSE, FALSE, 200000, 150000, 'LANTERN_NIGHT', TRUE),
('Royal Viet Phuc', 'royal-viet-phuc', 'Celebrate the elegance of Vietnamese traditional fashion with authentic Ao Dai and Viet Phuc in a royal palace-inspired setting.', 400000, 2, FALSE, FALSE, 200000, 150000, 'ROYAL_VIET_PHUC', TRUE);

INSERT INTO outfits (name, code, outfit_type, color, color_hex, price, description, is_trending, available) VALUES
('Sakura Pink Kimono', 'KM-001', 'KIMONO', 'Pink', '#FFB7C5', 350000, 'Elegant cherry blossom pink kimono with gold obi belt and floral hairpin accessories.', TRUE, TRUE),
('Midnight Blue Kimono', 'KM-002', 'KIMONO', 'Navy', '#1B3A6B', 350000, 'Deep navy kimono with silver crane embroidery, perfect for night photography.', FALSE, TRUE),
('Sunset Yukata', 'YK-001', 'YUKATA', 'Orange', '#FF6B35', 250000, 'Vibrant sunset-orange yukata with geometric patterns, light summer feel.', TRUE, TRUE),
('Garden Green Yukata', 'YK-002', 'YUKATA', 'Green', '#4CAF50', 250000, 'Fresh mint green yukata with bamboo motif, perfect for outdoor gardens.', FALSE, TRUE),
('Imperial Viet Phuc', 'VP-001', 'VIET_PHUC', 'Red', '#C62828', 400000, 'Traditional Vietnamese royal costume with intricate embroidery and golden accessories.', TRUE, TRUE),
('Lotus Ao Dai Set', 'VP-002', 'VIET_PHUC', 'White', '#FAFAFA', 380000, 'Pristine white Ao Dai with lotus embroidery, graceful and photogenic.', FALSE, TRUE);

INSERT INTO banners (title, subtitle, image_url, cta_text, active, sort_order) VALUES
('Dress in Tradition, Shine on Social', 'Rent stunning Kimono, Yukata & Viet Phuc for your perfect Instagram & TikTok photoshoot', '/assets/images/hero-bg.jpg', 'Book Your Photoshoot', TRUE, 1);

INSERT INTO reviews (customer_name, rating, content, package_name, visible, featured) VALUES
('Linh Nguyen', 5, 'Absolutely stunning experience! The Sakura Dream package was magical. My photos got 10k likes on Instagram!', 'Sakura Dream', TRUE, TRUE),
('Yuki Tanaka', 5, 'The kimono quality is amazing and the staff was so helpful with styling. Definitely coming back!', 'Kyoto Sunset', TRUE, TRUE),
('Mai Tran', 5, 'The Royal Viet Phuc package exceeded my expectations. Felt like a princess. 10/10 recommend!', 'Royal Viet Phuc', TRUE, TRUE),
('Sophie Chen', 4, 'Great value for money. The Lantern Night concept is perfect for evening TikTok content!', 'Lantern Night', TRUE, FALSE);
