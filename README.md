# Caeline — Kimono, Yukata & Viet Phuc Rental

> "Dress in Tradition, Shine on Social"

A full-stack photoshoot rental platform for Instagram & TikTok content creators.

---

## Project Structure

```
demo-claude-use-plugin/
├── database/
│   └── schema.sql          # MySQL schema for caeline2
├── backend/                # Spring Boot 3 + Java 17
│   ├── pom.xml
│   └── src/main/java/com/caeline/rental/
│       ├── config/         # SecurityConfig, AppConfig, CORS
│       ├── controller/     # Auth, Outfit, Package, Booking, Dashboard, Content, Payment
│       ├── dto/            # Request & Response DTOs
│       ├── model/          # JPA Entities
│       ├── repository/     # Spring Data JPA Repositories
│       ├── security/       # JWT utility & filter
│       └── service/        # Business logic
└── frontend/               # Angular 17 + Tailwind CSS
    └── src/app/
        ├── core/           # Guards, Interceptors, Services
        ├── shared/         # Models, Navbar, Footer
        ├── pages/          # Home, Packages, Catalog, Booking, BookingResult
        └── admin/          # Login, Shell, Dashboard, Outfits, Packages, Bookings, Content
```

---

## Quick Start

### 1. Database Setup

```bash
mysql -u root -p < database/schema.sql
```

### 2. Backend (Spring Boot)

```bash
cd backend

# Edit src/main/resources/application.properties:
#   spring.datasource.password=YOUR_MYSQL_PASSWORD
#   spring.mail.username=YOUR_GMAIL
#   spring.mail.password=YOUR_APP_PASSWORD

mvn spring-boot:run
# Runs on http://localhost:8080/api
```

### 3. Frontend (Angular)

```bash
cd frontend
npm install
npm start
# Runs on http://localhost:4200
# API is proxied to http://localhost:8080/api via proxy.conf.json
```

---

## Default Admin Credentials

After running `schema.sql`, update the admin password:

```sql
USE caeline2;
-- Generate bcrypt hash with strength 10, then:
UPDATE users SET password = '$2a$10$YOUR_BCRYPT_HASH' WHERE username = 'admin';
```

Or generate via any bcrypt tool, e.g.:
```bash
echo -n "admin123" | htpasswd -niBC 10 "" | tr -d ':\n'
```

**Admin URL:** `http://localhost:4200/admin/login`

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | Angular 17, Tailwind CSS, TypeScript |
| Backend   | Spring Boot 3.2, Java 17            |
| Database  | MySQL 8 (schema: `caeline2`)        |
| Auth      | JWT (jjwt 0.12)                     |
| Payment   | MoMo sandbox, VNPay scaffold        |
| Images    | Local filesystem (`./uploads/`)     |

---

## API Endpoints (all prefixed `/api`)

### Public
| Method | Path                            | Description             |
|--------|---------------------------------|-------------------------|
| POST   | `/auth/login`                   | Admin login             |
| GET    | `/packages`                     | List all packages       |
| GET    | `/packages/{id}/slots`          | Available time slots    |
| GET    | `/outfits`                      | List outfits (filterable) |
| GET    | `/outfits/trending`             | Trending outfits        |
| POST   | `/bookings/create`              | Create booking          |
| GET    | `/bookings/code/{code}`         | Lookup by code          |
| GET    | `/banners`                      | Homepage banners        |
| GET    | `/reviews`                      | Customer reviews        |
| GET    | `/instagram`                    | Instagram feed          |
| POST   | `/payment/momo/create`          | Initiate MoMo payment   |

### Admin (Bearer JWT required)
| Method | Path                            | Description             |
|--------|---------------------------------|-------------------------|
| GET    | `/bookings`                     | All bookings            |
| PUT    | `/bookings/{id}/status`         | Update booking status   |
| GET    | `/dashboard/stats`              | Revenue & analytics     |
| POST   | `/outfits`                      | Create outfit (multipart) |
| PUT    | `/outfits/{id}`                 | Update outfit           |
| DELETE | `/outfits/{id}`                 | Delete outfit (ADMIN)   |

---

## Payment Integration (MoMo)

1. Register at [business.momo.vn](https://business.momo.vn) for sandbox credentials
2. Update `application.properties`:
   ```
   momo.partner-code=YOUR_PARTNER_CODE
   momo.access-key=YOUR_ACCESS_KEY
   momo.secret-key=YOUR_SECRET_KEY
   ```
3. The `/payment/momo/create` endpoint generates the signed payload
4. IPN callback at `/payment/momo/callback` auto-confirms bookings on payment success

---

## Features

### Public Website
- ✅ Full-screen hero with sakura petal animation
- ✅ 4 concept packages (Sakura Dream, Kyoto Sunset, Lantern Night, Royal Viet Phuc)
- ✅ Outfit catalog with filter by type/color/price
- ✅ 5-step booking flow with real-time price calculator
- ✅ MoMo/VNPay/Cash payment options
- ✅ Instagram gallery feed
- ✅ Customer review slider
- ✅ Mobile-first, responsive design

### Admin CMS
- ✅ JWT-secured admin login
- ✅ Dashboard with booking stats & revenue
- ✅ Outfit management (upload images, set availability)
- ✅ Package management (CRUD, pricing, add-ons)
- ✅ Booking management (status updates, calendar filter)
- ✅ Content management (banners, Instagram posts, reviews)
