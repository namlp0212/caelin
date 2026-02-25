import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ApiService } from '../../core/services/api.service';
import { Banner, ConceptPackage, Outfit, Review, InstagramPost } from '../../shared/models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent, FormsModule],
  template: `
    <app-navbar />

    <!-- ======== HERO SECTION ======== -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-sakura-800 via-sakura-600 to-lotus-700"></div>

      <!-- Decorative petals -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        @for (petal of petals; track petal.id) {
          <span class="petal text-2xl" [style.left]="petal.left" [style.animation-delay]="petal.delay"
                [style.animation-duration]="petal.duration">🌸</span>
        }
      </div>

      <!-- Hero content -->
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
        <p class="font-script text-2xl md:text-3xl text-sakura-100 mb-4 animate-fade-in">
          ✿ Welcome to Caeline ✿
        </p>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-slide-up">
          Dress in Tradition,<br>
          <span class="text-sakura-200">Shine on Social</span>
        </h1>
        <p class="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in">
          Rent stunning Kimono, Yukata & Viet Phuc for your perfect
          Instagram & TikTok photoshoot experience.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a routerLink="/booking" class="btn-primary text-lg px-10 py-4">
            Book Your Photoshoot ✿
          </a>
          <a routerLink="/packages" class="btn-outline-white text-lg px-10 py-4">
            Explore Packages
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 mt-16 max-w-md mx-auto">
          @for (stat of stats; track stat.label) {
            <div class="text-center">
              <p class="text-2xl md:text-3xl font-bold text-white">{{ stat.value }}</p>
              <p class="text-xs text-white/60 uppercase tracking-wide mt-1">{{ stat.label }}</p>
            </div>
          }
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>

    <!-- ======== FEATURED CONCEPTS ======== -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <p class="badge-sakura mb-3">Featured Packages</p>
          <h2 class="section-title">Choose Your Dream Concept</h2>
          <p class="section-subtitle">4 curated themes for the perfect photoshoot story</p>
        </div>

        @if (packages().length === 0) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (concept of conceptCards; track concept.type) {
              <div class="card-hover group cursor-pointer" [routerLink]="['/packages']">
                <div class="h-48 flex items-center justify-center text-5xl"
                     [style.background]="concept.gradient">
                  {{ concept.emoji }}
                </div>
                <div class="p-5">
                  <h3 class="font-serif font-semibold text-lg text-gray-800 mb-2">{{ concept.name }}</h3>
                  <p class="text-gray-500 text-sm mb-4">{{ concept.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-sakura-600 font-bold">From {{ concept.price }}</span>
                    <span class="text-sakura-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            }
          </div>
        } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (pkg of packages(); track pkg.id) {
              <div class="card-hover group cursor-pointer" [routerLink]="['/packages']">
                <div class="h-48 bg-gradient-to-br from-sakura-100 to-sakura-200 flex items-center justify-center">
                  @if (pkg.thumbnailUrl) {
                    <img [src]="pkg.thumbnailUrl" [alt]="pkg.name" class="w-full h-full object-cover">
                  } @else {
                    <span class="text-5xl">🌸</span>
                  }
                </div>
                <div class="p-5">
                  <h3 class="font-serif font-semibold text-lg text-gray-800 mb-2">{{ pkg.name }}</h3>
                  <p class="text-gray-500 text-sm mb-4 line-clamp-2">{{ pkg.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-sakura-600 font-bold">
                      {{ pkg.price | number }}đ
                    </span>
                    <span class="text-sakura-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            }
          </div>
        }

        <div class="text-center mt-10">
          <a routerLink="/packages" class="btn-secondary">View All Packages</a>
        </div>
      </div>
    </section>

    <!-- ======== TRENDING OUTFITS ======== -->
    <section class="py-20 bg-cream-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <p class="badge-cream mb-3">🔥 Trending Now</p>
          <h2 class="section-title">Most-Loved Outfits</h2>
          <p class="section-subtitle">Spotted on Instagram & TikTok feeds this season</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          @for (outfit of trendingOutfits().slice(0, 8); track outfit.id) {
            <div class="card-hover group" [routerLink]="['/catalog']">
              <div class="aspect-[3/4] bg-gradient-to-br from-sakura-100 to-cream-100 relative overflow-hidden">
                @if (outfit.images && outfit.images.length > 0) {
                  <img [src]="outfit.images[0].imageUrl" [alt]="outfit.name"
                       class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                } @else {
                  <div class="w-full h-full flex items-center justify-center">
                    <span class="text-6xl opacity-40">👘</span>
                  </div>
                }
                <div class="absolute top-3 left-3">
                  <span class="badge-sakura text-xs">{{ formatType(outfit.outfitType) }}</span>
                </div>
              </div>
              <div class="p-4">
                <h4 class="font-semibold text-gray-800 text-sm mb-1">{{ outfit.name }}</h4>
                <div class="flex items-center justify-between">
                  <span class="text-sakura-600 font-bold text-sm">{{ outfit.price | number }}đ</span>
                  <span class="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        [style.background]="outfit.colorHex || '#FFB7C5'"></span>
                </div>
              </div>
            </div>
          }

          <!-- Static fallback outfits if API is loading -->
          @if (trendingOutfits().length === 0) {
            @for (item of staticOutfits; track item.name) {
              <div class="card-hover group" [routerLink]="['/catalog']">
                <div class="aspect-[3/4] flex items-center justify-center text-6xl"
                     [style.background]="'linear-gradient(135deg, ' + item.color1 + ', ' + item.color2 + ')'">
                  {{ item.emoji }}
                </div>
                <div class="p-4">
                  <h4 class="font-semibold text-gray-800 text-sm mb-1">{{ item.name }}</h4>
                  <div class="flex items-center justify-between">
                    <span class="text-sakura-600 font-bold text-sm">{{ item.price }}</span>
                    <span class="badge-sakura text-xs">{{ item.type }}</span>
                  </div>
                </div>
              </div>
            }
          }
        </div>

        <div class="text-center mt-10">
          <a routerLink="/catalog" class="btn-primary">Browse Full Catalog</a>
        </div>
      </div>
    </section>

    <!-- ======== INSTAGRAM GALLERY ======== -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <p class="badge-sakura mb-3">📸 Instagram Gallery</p>
          <h2 class="section-title">As Seen on Social</h2>
          <p class="section-subtitle">Tag us <strong class="text-sakura-500">#CaelineRental</strong> to be featured</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          @for (post of instagramPosts().slice(0, 8); track post.id) {
            <a [href]="post.instagramUrl || '#'" target="_blank" class="group relative aspect-square overflow-hidden">
              <img [src]="post.imageUrl" [alt]="post.caption || ''"
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300
                          flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <svg class="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07..."/>
                  </svg>
                  <span class="text-sm font-semibold">❤️ {{ post.likes }}</span>
                </div>
              </div>
            </a>
          }

          <!-- Fallback grid placeholders -->
          @if (instagramPosts().length === 0) {
            @for (color of igColors; track color) {
              <div class="aspect-square flex items-center justify-center text-4xl cursor-pointer
                          hover:opacity-90 transition-opacity"
                   [style.background]="color">
                📸
              </div>
            }
          }
        </div>

        <div class="text-center mt-8">
          <a href="https://instagram.com/caeline.rental" target="_blank"
             class="btn-secondary inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204..."/>
            </svg>
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>

    <!-- ======== REVIEWS ======== -->
    <section class="py-20 bg-gradient-to-br from-sakura-50 to-cream-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <p class="badge-sakura mb-3">⭐ Reviews</p>
          <h2 class="section-title">What Our Guests Say</h2>
          <p class="section-subtitle">Trusted by 1,000+ happy customers</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (review of reviews().slice(0, 4); track review.id) {
            <div class="card p-6">
              <div class="flex items-center gap-1 mb-3">
                @for (star of [1,2,3,4,5]; track star) {
                  <span [class]="star <= review.rating ? 'text-yellow-400' : 'text-gray-200'">★</span>
                }
              </div>
              <p class="text-gray-600 text-sm italic mb-4 line-clamp-4">"{{ review.content }}"</p>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-sakura-100 flex items-center justify-center text-sm font-bold text-sakura-600">
                  {{ review.customerName[0] }}
                </div>
                <div>
                  <p class="font-semibold text-gray-800 text-sm">{{ review.customerName }}</p>
                  @if (review.packageName) {
                    <p class="text-xs text-sakura-500">{{ review.packageName }}</p>
                  }
                </div>
              </div>
            </div>
          }

          @if (reviews().length === 0) {
            @for (review of staticReviews; track review.name) {
              <div class="card p-6">
                <div class="flex items-center gap-1 mb-3">
                  @for (star of [1,2,3,4,5]; track star) {
                    <span class="text-yellow-400">★</span>
                  }
                </div>
                <p class="text-gray-600 text-sm italic mb-4">"{{ review.content }}"</p>
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full bg-sakura-100 flex items-center justify-center text-sm font-bold text-sakura-600">
                    {{ review.name[0] }}
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800 text-sm">{{ review.name }}</p>
                    <p class="text-xs text-sakura-500">{{ review.package }}</p>
                  </div>
                </div>
              </div>
            }
          }
        </div>
      </div>
    </section>

    <!-- ======== QUICK BOOKING CTA ======== -->
    <section class="py-20 bg-gradient-to-r from-sakura-600 to-lotus-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <p class="font-script text-3xl mb-3 text-sakura-100">Ready for your moment?</p>
        <h2 class="text-3xl md:text-5xl font-serif font-bold mb-6">
          Book Your Perfect Photoshoot
        </h2>
        <p class="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Choose your concept, pick your outfit, and create Instagram-worthy memories that last forever.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/booking" class="btn-outline-white text-lg px-10 py-4">
            Book Now — From 350,000đ
          </a>
          <a routerLink="/packages" class="bg-white/20 hover:bg-white/30 text-white font-semibold
                                           px-10 py-4 rounded-full transition-all duration-300 text-lg">
            See All Packages
          </a>
        </div>
      </div>
    </section>

    <app-footer />
  `
})
export class HomeComponent implements OnInit {
  packages = signal<ConceptPackage[]>([]);
  trendingOutfits = signal<Outfit[]>([]);
  reviews = signal<Review[]>([]);
  instagramPosts = signal<InstagramPost[]>([]);

  petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${6 + Math.random() * 6}s`
  }));

  stats = [
    { value: '1K+', label: 'Bookings' },
    { value: '4', label: 'Concepts' },
    { value: '50+', label: 'Outfits' },
  ];

  conceptCards = [
    { type: 'SAKURA_DREAM', name: 'Sakura Dream', emoji: '🌸', price: '350,000đ',
      description: 'Cherry blossom garden magic', gradient: 'linear-gradient(135deg, #fde6ef, #fccede)' },
    { type: 'KYOTO_SUNSET', name: 'Kyoto Sunset', emoji: '🏮', price: '450,000đ',
      description: 'Golden hour Kyoto vibes', gradient: 'linear-gradient(135deg, #fef3c7, #fed7aa)' },
    { type: 'LANTERN_NIGHT', name: 'Lantern Night', emoji: '🪔', price: '500,000đ',
      description: 'Enchanting lantern festival', gradient: 'linear-gradient(135deg, #ede3ff, #fde6ef)' },
    { type: 'ROYAL_VIET_PHUC', name: 'Royal Viet Phuc', emoji: '👑', price: '400,000đ',
      description: 'Vietnamese royal elegance', gradient: 'linear-gradient(135deg, #fee2e2, #fecaca)' },
  ];

  staticOutfits = [
    { name: 'Sakura Pink Kimono', type: 'Kimono', price: '350,000đ', emoji: '👘',
      color1: '#fde6ef', color2: '#fccede' },
    { name: 'Midnight Blue Kimono', type: 'Kimono', price: '350,000đ', emoji: '👘',
      color1: '#dbeafe', color2: '#bfdbfe' },
    { name: 'Sunset Yukata', type: 'Yukata', price: '250,000đ', emoji: '🌅',
      color1: '#fed7aa', color2: '#fdba74' },
    { name: 'Garden Green Yukata', type: 'Yukata', price: '250,000đ', emoji: '🌿',
      color1: '#d1fae5', color2: '#a7f3d0' },
    { name: 'Imperial Viet Phuc', type: 'Viet Phuc', price: '400,000đ', emoji: '🎋',
      color1: '#fee2e2', color2: '#fca5a5' },
    { name: 'Lotus Ao Dai Set', type: 'Viet Phuc', price: '380,000đ', emoji: '🪷',
      color1: '#f5f3ff', color2: '#ede9fe' },
  ];

  igColors = [
    'linear-gradient(135deg, #fde6ef, #fccede)',
    'linear-gradient(135deg, #fed7aa, #fdba74)',
    'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    'linear-gradient(135deg, #ede3ff, #ddd6fe)',
    'linear-gradient(135deg, #fef3c7, #fde68a)',
    'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    'linear-gradient(135deg, #fee2e2, #fca5a5)',
    'linear-gradient(135deg, #f0fdf4, #dcfce7)',
  ];

  staticReviews = [
    { name: 'Linh Nguyen', rating: 5, package: 'Sakura Dream',
      content: 'Absolutely stunning experience! My photos got 10k likes on Instagram!' },
    { name: 'Yuki Tanaka', rating: 5, package: 'Kyoto Sunset',
      content: 'The kimono quality is amazing and staff was so helpful with styling!' },
    { name: 'Mai Tran', rating: 5, package: 'Royal Viet Phuc',
      content: 'Felt like a princess. 10/10 recommend to everyone!' },
    { name: 'Sophie Chen', rating: 4, package: 'Lantern Night',
      content: 'Perfect for TikTok content! The Lantern Night concept is gorgeous.' },
  ];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getPackages().subscribe({ next: p => this.packages.set(p), error: () => {} });
    this.api.getTrendingOutfits().subscribe({ next: o => this.trendingOutfits.set(o), error: () => {} });
    this.api.getReviews(true).subscribe({ next: r => this.reviews.set(r), error: () => {} });
    this.api.getInstagramPosts().subscribe({ next: p => this.instagramPosts.set(p), error: () => {} });
  }

  formatType(type: string): string {
    return { KIMONO: 'Kimono', YUKATA: 'Yukata', VIET_PHUC: 'Viet Phuc' }[type] ?? type;
  }
}
