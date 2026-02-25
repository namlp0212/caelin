import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ApiService } from '../../core/services/api.service';
import { ConceptPackage } from '../../shared/models';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />

    <!-- Hero -->
    <section class="pt-24 pb-16 bg-gradient-to-br from-sakura-50 to-cream-100">
      <div class="container mx-auto px-4 text-center">
        <p class="badge-sakura mb-4">Our Collections</p>
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
          Concept Packages
        </h1>
        <p class="text-gray-500 text-lg max-w-2xl mx-auto">
          Each package is a curated photoshoot experience with a distinct theme,
          perfect for your social media story.
        </p>
      </div>
    </section>

    <!-- Packages Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        @if (loading()) {
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            @for (i of [1,2,3,4]; track i) {
              <div class="card p-0 overflow-hidden">
                <div class="h-64 shimmer"></div>
                <div class="p-6 space-y-3">
                  <div class="h-6 shimmer rounded w-1/2"></div>
                  <div class="h-4 shimmer rounded w-full"></div>
                  <div class="h-4 shimmer rounded w-3/4"></div>
                </div>
              </div>
            }
          </div>
        } @else {
          <div class="space-y-16">
            @for (pkg of packages(); track pkg.id; let even = $even) {
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                   [class.lg:flex-row-reverse]="!even">
                <!-- Image -->
                <div [class]="even ? 'order-1' : 'order-1 lg:order-2'">
                  <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                       [style.background]="conceptGradient(pkg.conceptType)">
                    @if (pkg.thumbnailUrl) {
                      <img [src]="pkg.thumbnailUrl" [alt]="pkg.name"
                           class="w-full h-full object-cover">
                    } @else {
                      <div class="w-full h-full flex items-center justify-center text-8xl">
                        {{ conceptEmoji(pkg.conceptType) }}
                      </div>
                    }
                  </div>
                </div>

                <!-- Content -->
                <div [class]="even ? 'order-2' : 'order-2 lg:order-1'">
                  <div class="badge-sakura mb-4">{{ formatType(pkg.conceptType) }}</div>
                  <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
                    {{ pkg.name }}
                  </h2>
                  <p class="text-gray-600 text-lg leading-relaxed mb-6">
                    {{ pkg.description }}
                  </p>

                  <!-- Package Details -->
                  <div class="grid grid-cols-2 gap-4 mb-8">
                    <div class="bg-sakura-50 rounded-xl p-4">
                      <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Base Price</p>
                      <p class="text-xl font-bold text-sakura-600">{{ pkg.price | number }}đ</p>
                    </div>
                    <div class="bg-cream-50 rounded-xl p-4">
                      <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Duration</p>
                      <p class="text-xl font-bold text-gray-700">{{ pkg.durationHours }} hours</p>
                    </div>
                  </div>

                  <!-- Add-ons -->
                  <div class="space-y-3 mb-8">
                    <h4 class="font-semibold text-gray-700 text-sm uppercase tracking-wide">Available Add-ons</h4>
                    <div class="flex flex-wrap gap-3">
                      <div class="flex items-center gap-2 bg-white border border-sakura-100 rounded-full px-4 py-2 text-sm">
                        <span>📸</span>
                        <span class="text-gray-600">Photographer</span>
                        <span class="text-sakura-600 font-semibold">+{{ pkg.photographerFee | number }}đ</span>
                      </div>
                      <div class="flex items-center gap-2 bg-white border border-sakura-100 rounded-full px-4 py-2 text-sm">
                        <span>💄</span>
                        <span class="text-gray-600">Hair & Makeup</span>
                        <span class="text-sakura-600 font-semibold">+{{ pkg.makeupFee | number }}đ</span>
                      </div>
                    </div>
                  </div>

                  <!-- Outfits in package -->
                  @if (pkg.outfits && pkg.outfits.length > 0) {
                    <div class="mb-8">
                      <h4 class="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-3">Outfits in Package</h4>
                      <div class="flex flex-wrap gap-2">
                        @for (outfit of pkg.outfits.slice(0, 4); track outfit.id) {
                          <span class="badge bg-cream-100 text-cream-800">{{ outfit.name }}</span>
                        }
                        @if (pkg.outfits.length > 4) {
                          <span class="badge bg-gray-100 text-gray-600">+{{ pkg.outfits.length - 4 }} more</span>
                        }
                      </div>
                    </div>
                  }

                  <a [routerLink]="['/booking']" [queryParams]="{ packageId: pkg.id }"
                     class="btn-primary inline-block">
                    Book {{ pkg.name }} ✿
                  </a>
                </div>
              </div>

              <!-- Divider -->
              @if (!$last) {
                <hr class="border-sakura-100">
              }
            }
          </div>
        }
      </div>
    </section>

    <!-- Comparison table -->
    <section class="py-16 bg-cream-50">
      <div class="container mx-auto px-4">
        <h2 class="section-title mb-3">Package Comparison</h2>
        <p class="section-subtitle mb-10">Find what's included in each tier</p>

        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-2xl shadow-md overflow-hidden">
            <thead class="bg-sakura-500 text-white">
              <tr>
                <th class="text-left px-6 py-4 font-semibold">Feature</th>
                <th class="px-6 py-4 font-semibold text-center">Sakura Dream</th>
                <th class="px-6 py-4 font-semibold text-center">Kyoto Sunset</th>
                <th class="px-6 py-4 font-semibold text-center">Lantern Night</th>
                <th class="px-6 py-4 font-semibold text-center">Royal Viet Phuc</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              @for (row of comparisonRows; track row.feature) {
                <tr class="hover:bg-sakura-50 transition-colors">
                  <td class="px-6 py-4 text-gray-700 font-medium">{{ row.feature }}</td>
                  @for (val of row.values; track $index) {
                    <td class="px-6 py-4 text-center text-gray-600">{{ val }}</td>
                  }
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <app-footer />
  `
})
export class PackagesComponent implements OnInit {
  packages = signal<ConceptPackage[]>([]);
  loading = signal(true);

  comparisonRows = [
    { feature: 'Base Price', values: ['350,000đ', '450,000đ', '500,000đ', '400,000đ'] },
    { feature: 'Duration', values: ['2 hours', '3 hours', '2 hours', '2 hours'] },
    { feature: 'Outfit Included', values: ['✓', '✓', '✓', '✓'] },
    { feature: 'Accessories', values: ['✓', '✓', '✓', '✓'] },
    { feature: 'Photographer Add-on', values: ['+200k', '+200k', '+200k', '+200k'] },
    { feature: 'Makeup Add-on', values: ['+150k', '+150k', '+150k', '+150k'] },
    { feature: 'Best For', values: ['Solo/Couples', 'Couples', 'Groups', 'Vietnamese fashion'] },
  ];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getPackages().subscribe({
      next: (pkgs) => { this.packages.set(pkgs); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  conceptGradient(type: string): string {
    const map: Record<string, string> = {
      SAKURA_DREAM: 'linear-gradient(135deg, #fde6ef, #fccede)',
      KYOTO_SUNSET: 'linear-gradient(135deg, #fef3c7, #fed7aa)',
      LANTERN_NIGHT: 'linear-gradient(135deg, #ede3ff, #fde6ef)',
      ROYAL_VIET_PHUC: 'linear-gradient(135deg, #fee2e2, #fecaca)',
    };
    return map[type] ?? 'linear-gradient(135deg, #f3f4f6, #e5e7eb)';
  }

  conceptEmoji(type: string): string {
    return { SAKURA_DREAM: '🌸', KYOTO_SUNSET: '🏮', LANTERN_NIGHT: '🪔', ROYAL_VIET_PHUC: '👑' }[type] ?? '✿';
  }

  formatType(type: string): string {
    return {
      SAKURA_DREAM: 'Sakura Dream', KYOTO_SUNSET: 'Kyoto Sunset',
      LANTERN_NIGHT: 'Lantern Night', ROYAL_VIET_PHUC: 'Royal Viet Phuc'
    }[type] ?? type;
  }
}
