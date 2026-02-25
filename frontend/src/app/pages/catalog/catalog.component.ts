import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ApiService } from '../../core/services/api.service';
import { Outfit } from '../../shared/models';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />

    <!-- Hero -->
    <section class="pt-24 pb-10 bg-gradient-to-br from-cream-50 to-sakura-50">
      <div class="container mx-auto px-4 text-center">
        <p class="badge-cream mb-4">Browse Our Collection</p>
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Outfit Catalog</h1>
        <p class="text-gray-500 text-lg">{{ allOutfits().length }} beautiful outfits waiting for you</p>
      </div>
    </section>

    <!-- Filters + Grid -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8">

          <!-- Filter Sidebar -->
          <aside class="lg:w-64 flex-shrink-0">
            <div class="card p-6 sticky top-24">
              <h3 class="font-semibold text-gray-800 mb-6 text-lg">Filter Outfits</h3>

              <!-- Type filter -->
              <div class="mb-6">
                <p class="form-label">Outfit Type</p>
                <div class="space-y-2">
                  @for (type of typeOptions; track type.value) {
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="type" [value]="type.value"
                             [(ngModel)]="selectedType" (change)="applyFilters()"
                             class="accent-sakura-500">
                      <span class="text-gray-600 group-hover:text-sakura-600 transition-colors">
                        {{ type.emoji }} {{ type.label }}
                      </span>
                    </label>
                  }
                </div>
              </div>

              <!-- Color filter -->
              <div class="mb-6">
                <p class="form-label">Color</p>
                <div class="flex flex-wrap gap-2">
                  @for (color of colorOptions; track color.value) {
                    <button (click)="toggleColor(color.value)"
                            class="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110"
                            [style.background]="color.hex"
                            [class]="selectedColor === color.value ? 'border-gray-800 scale-110' : 'border-gray-200'"
                            [title]="color.label">
                    </button>
                  }
                </div>
              </div>

              <!-- Price Range -->
              <div class="mb-6">
                <p class="form-label">Max Price</p>
                <input type="range" min="100000" max="600000" step="50000"
                       [(ngModel)]="maxPrice" (change)="applyFilters()"
                       class="w-full accent-sakura-500">
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                  <span>100k</span>
                  <span class="text-sakura-600 font-semibold">{{ maxPrice | number }}đ</span>
                  <span>600k</span>
                </div>
              </div>

              <button (click)="resetFilters()" class="btn-secondary w-full text-sm py-2">
                Reset Filters
              </button>
            </div>
          </aside>

          <!-- Outfit Grid -->
          <div class="flex-1">
            <!-- Sort & count bar -->
            <div class="flex items-center justify-between mb-6">
              <p class="text-gray-500 text-sm">
                Showing <strong class="text-gray-800">{{ filteredOutfits().length }}</strong> outfits
              </p>
              <select [(ngModel)]="sortBy" (change)="applyFilters()"
                      class="form-input w-auto py-2 text-sm">
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            @if (loading()) {
              <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                @for (i of [1,2,3,4,5,6,7,8]; track i) {
                  <div class="card">
                    <div class="aspect-[3/4] shimmer"></div>
                    <div class="p-4 space-y-2">
                      <div class="h-4 shimmer rounded w-3/4"></div>
                      <div class="h-3 shimmer rounded w-1/2"></div>
                    </div>
                  </div>
                }
              </div>
            } @else if (filteredOutfits().length === 0) {
              <div class="text-center py-20">
                <p class="text-6xl mb-4">🔍</p>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">No outfits found</h3>
                <p class="text-gray-500 mb-6">Try adjusting your filters</p>
                <button (click)="resetFilters()" class="btn-primary">Clear Filters</button>
              </div>
            } @else {
              <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                @for (outfit of filteredOutfits(); track outfit.id) {
                  <div class="card-hover group cursor-pointer" (click)="selectOutfit(outfit)">
                    <!-- Image -->
                    <div class="aspect-[3/4] relative overflow-hidden"
                         [style.background]="'linear-gradient(135deg, ' + (outfit.colorHex || '#fde6ef') + '22, ' + (outfit.colorHex || '#fccede') + '44)'">
                      @if (outfit.images && outfit.images.length > 0) {
                        <img [src]="outfit.images[0].imageUrl" [alt]="outfit.name"
                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                      } @else {
                        <div class="w-full h-full flex items-center justify-center">
                          <span class="text-7xl opacity-30">{{ typeEmoji(outfit.outfitType) }}</span>
                        </div>
                      }
                      <!-- Badges -->
                      <div class="absolute top-3 left-3 flex flex-col gap-1">
                        <span class="badge-sakura text-xs">{{ formatType(outfit.outfitType) }}</span>
                        @if (outfit.trending) {
                          <span class="badge bg-yellow-100 text-yellow-700 text-xs">🔥 Hot</span>
                        }
                      </div>
                      <!-- Quick action -->
                      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300
                                  flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                        <a [routerLink]="['/booking']" [queryParams]="{ outfitId: outfit.id }"
                           class="btn-primary text-xs px-4 py-2" (click)="$event.stopPropagation()">
                          Book This Look
                        </a>
                      </div>
                    </div>

                    <!-- Info -->
                    <div class="p-4">
                      <h4 class="font-semibold text-gray-800 text-sm mb-1 truncate">{{ outfit.name }}</h4>
                      <div class="flex items-center justify-between">
                        <span class="text-sakura-600 font-bold text-sm">{{ outfit.price | number }}đ</span>
                        <div class="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                             [style.background]="outfit.colorHex || '#FFB7C5'"></div>
                      </div>
                      @if (outfit.sizes && outfit.sizes.length > 0) {
                        <div class="flex gap-1 mt-2 flex-wrap">
                          @for (size of outfit.sizes.slice(0, 4); track size.id) {
                            <span class="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                              {{ size.sizeLabel }}
                            </span>
                          }
                        </div>
                      }
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Outfit Detail Modal -->
    @if (selectedOutfit()) {
      <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
           (click)="selectedOutfit.set(null)">
        <div class="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
             (click)="$event.stopPropagation()">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <!-- Images -->
            <div class="aspect-[3/4] md:aspect-auto md:h-full bg-gradient-to-br from-sakura-50 to-cream-100
                        flex items-center justify-center rounded-l-2xl overflow-hidden">
              @if (selectedOutfit()!.images && selectedOutfit()!.images.length > 0) {
                <img [src]="selectedOutfit()!.images[0].imageUrl" [alt]="selectedOutfit()!.name"
                     class="w-full h-full object-cover">
              } @else {
                <span class="text-8xl">{{ typeEmoji(selectedOutfit()!.outfitType) }}</span>
              }
            </div>
            <!-- Details -->
            <div class="p-8">
              <button (click)="selectedOutfit.set(null)"
                      class="float-right text-gray-400 hover:text-gray-600 text-2xl leading-none mb-4">✕</button>
              <span class="badge-sakura mb-3 block w-fit">{{ formatType(selectedOutfit()!.outfitType) }}</span>
              <h2 class="text-2xl font-serif font-bold text-gray-800 mb-2">{{ selectedOutfit()!.name }}</h2>
              <p class="text-3xl font-bold text-sakura-600 mb-4">{{ selectedOutfit()!.price | number }}đ</p>
              @if (selectedOutfit()!.description) {
                <p class="text-gray-600 text-sm leading-relaxed mb-6">{{ selectedOutfit()!.description }}</p>
              }
              @if (selectedOutfit()!.sizes && selectedOutfit()!.sizes.length > 0) {
                <div class="mb-6">
                  <p class="form-label">Available Sizes</p>
                  <div class="flex flex-wrap gap-2">
                    @for (size of selectedOutfit()!.sizes; track size.id) {
                      <span class="px-3 py-1 border border-sakura-200 rounded-full text-sm text-gray-700 cursor-pointer
                                   hover:bg-sakura-50 hover:border-sakura-400 transition-colors">
                        {{ size.sizeLabel }}
                      </span>
                    }
                  </div>
                </div>
              }
              <a [routerLink]="['/booking']" [queryParams]="{ outfitId: selectedOutfit()!.id }"
                 class="btn-primary block text-center w-full">
                Book This Outfit ✿
              </a>
            </div>
          </div>
        </div>
      </div>
    }

    <app-footer />
  `
})
export class CatalogComponent implements OnInit {
  allOutfits = signal<Outfit[]>([]);
  filteredOutfits = signal<Outfit[]>([]);
  selectedOutfit = signal<Outfit | null>(null);
  loading = signal(true);

  selectedType = '';
  selectedColor = '';
  maxPrice = 600000;
  sortBy = 'default';

  typeOptions = [
    { value: '', label: 'All Types', emoji: '✨' },
    { value: 'KIMONO', label: 'Kimono', emoji: '👘' },
    { value: 'YUKATA', label: 'Yukata', emoji: '🌸' },
    { value: 'VIET_PHUC', label: 'Viet Phuc', emoji: '🎋' },
  ];

  colorOptions = [
    { value: 'Pink', label: 'Pink', hex: '#FFB7C5' },
    { value: 'Red', label: 'Red', hex: '#EF4444' },
    { value: 'Blue', label: 'Blue', hex: '#3B82F6' },
    { value: 'Navy', label: 'Navy', hex: '#1B3A6B' },
    { value: 'Green', label: 'Green', hex: '#22C55E' },
    { value: 'Orange', label: 'Orange', hex: '#F97316' },
    { value: 'White', label: 'White', hex: '#F8FAFC' },
    { value: 'Gold', label: 'Gold', hex: '#F59E0B' },
  ];

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['type']) this.selectedType = params['type'];
    });
    this.loadOutfits();
  }

  loadOutfits() {
    this.api.getOutfits().subscribe({
      next: (outfits) => {
        this.allOutfits.set(outfits);
        this.applyFilters();
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  applyFilters() {
    let results = [...this.allOutfits()];

    if (this.selectedType) {
      results = results.filter(o => o.outfitType === this.selectedType);
    }
    if (this.selectedColor) {
      results = results.filter(o => o.color?.toLowerCase().includes(this.selectedColor.toLowerCase()));
    }
    results = results.filter(o => o.price <= this.maxPrice);

    if (this.sortBy === 'price-asc') results.sort((a, b) => a.price - b.price);
    else if (this.sortBy === 'price-desc') results.sort((a, b) => b.price - a.price);
    else if (this.sortBy === 'name') results.sort((a, b) => a.name.localeCompare(b.name));

    this.filteredOutfits.set(results);
  }

  toggleColor(color: string) {
    this.selectedColor = this.selectedColor === color ? '' : color;
    this.applyFilters();
  }

  resetFilters() {
    this.selectedType = '';
    this.selectedColor = '';
    this.maxPrice = 600000;
    this.sortBy = 'default';
    this.applyFilters();
  }

  selectOutfit(outfit: Outfit) { this.selectedOutfit.set(outfit); }

  formatType(type: string): string {
    return { KIMONO: 'Kimono', YUKATA: 'Yukata', VIET_PHUC: 'Viet Phuc' }[type] ?? type;
  }

  typeEmoji(type: string): string {
    return { KIMONO: '👘', YUKATA: '🌸', VIET_PHUC: '🎋' }[type] ?? '✿';
  }
}
