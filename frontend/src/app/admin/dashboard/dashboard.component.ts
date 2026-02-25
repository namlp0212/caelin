import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { DashboardStats } from '../../shared/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-serif font-bold text-gray-800 mb-1">Dashboard</h1>
        <p class="text-gray-500">Welcome back! Here's your business overview.</p>
      </div>

      <!-- Stats Cards -->
      @if (stats()) {
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          @for (card of statCards(); track card.label) {
            <div class="card p-6">
              <div class="flex items-start justify-between mb-4">
                <div class="p-3 rounded-xl" [style.background]="card.bgColor">
                  <span class="text-2xl">{{ card.icon }}</span>
                </div>
                @if (card.change !== null) {
                  <span class="text-xs font-semibold px-2 py-1 rounded-full"
                        [class]="card.change >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                    {{ card.change >= 0 ? '↑' : '↓' }} {{ Math.abs(card.change) }}%
                  </span>
                }
              </div>
              <p class="text-3xl font-bold text-gray-800 mb-1">{{ card.value }}</p>
              <p class="text-sm text-gray-500">{{ card.label }}</p>
            </div>
          }
        </div>

        <!-- Popular Packages -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="card p-6">
            <h3 class="font-semibold text-gray-700 mb-5">Popular Packages</h3>
            @if (stats()!.popularPackages.length > 0) {
              <div class="space-y-4">
                @for (pkg of stats()!.popularPackages; track pkg.name) {
                  <div class="flex items-center gap-4">
                    <div class="w-8 h-8 bg-sakura-100 rounded-full flex items-center justify-center text-sakura-600 font-bold text-sm flex-shrink-0">
                      {{ $index + 1 }}
                    </div>
                    <div class="flex-1">
                      <div class="flex justify-between items-center mb-1">
                        <span class="text-sm font-medium text-gray-700">{{ pkg.name }}</span>
                        <span class="text-sm text-gray-500">{{ pkg.count }} bookings</span>
                      </div>
                      <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div class="h-full bg-sakura-400 rounded-full transition-all duration-500"
                             [style.width]="getBarWidth(pkg.count) + '%'"></div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            } @else {
              <div class="text-center py-8 text-gray-400">
                <p class="text-4xl mb-2">📊</p>
                <p class="text-sm">No booking data yet</p>
              </div>
            }
          </div>

          <!-- Quick Actions -->
          <div class="card p-6">
            <h3 class="font-semibold text-gray-700 mb-5">Quick Actions</h3>
            <div class="grid grid-cols-2 gap-3">
              @for (action of quickActions; track action.label) {
                <a [href]="action.href" class="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl
                           hover:bg-sakura-50 hover:text-sakura-600 transition-colors duration-200 text-center cursor-pointer">
                  <span class="text-3xl">{{ action.icon }}</span>
                  <span class="text-xs font-medium text-gray-600">{{ action.label }}</span>
                </a>
              }
            </div>
          </div>
        </div>
      } @else {
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          @for (i of [1,2,3,4]; track i) {
            <div class="card p-6">
              <div class="h-12 shimmer rounded-xl mb-4 w-12"></div>
              <div class="h-8 shimmer rounded w-1/2 mb-2"></div>
              <div class="h-4 shimmer rounded w-3/4"></div>
            </div>
          }
        </div>
      }
    </div>
  `
})
export class DashboardComponent implements OnInit {
  stats = signal<DashboardStats | null>(null);
  Math = Math;

  quickActions = [
    { icon: '📅', label: 'View Bookings', href: '/admin/bookings' },
    { icon: '👘', label: 'Manage Outfits', href: '/admin/outfits' },
    { icon: '🌸', label: 'Manage Packages', href: '/admin/packages' },
    { icon: '🖼️', label: 'Edit Content', href: '/admin/content' },
  ];

  statCards = () => {
    const s = this.stats();
    if (!s) return [];
    const change = s.lastMonthBookings > 0
      ? Math.round(((s.monthlyBookings - s.lastMonthBookings) / s.lastMonthBookings) * 100)
      : null;
    return [
      { icon: '📅', label: 'Total Bookings', value: s.totalBookings.toLocaleString(),
        bgColor: '#fde6ef', change: null },
      { icon: '📅', label: 'This Month', value: s.monthlyBookings.toLocaleString(),
        bgColor: '#ede3ff', change },
      { icon: '💰', label: 'Monthly Revenue', value: (s.monthlyRevenue / 1000).toFixed(0) + 'K đ',
        bgColor: '#d1fae5', change: null },
      { icon: '👘', label: 'Outfits', value: s.totalOutfits.toString(),
        bgColor: '#fef3c7', change: null },
    ];
  };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getDashboardStats().subscribe({
      next: s => this.stats.set(s),
      error: () => {}
    });
  }

  getBarWidth(count: number): number {
    const max = Math.max(...(this.stats()?.popularPackages.map(p => Number(p.count)) || [1]));
    return max > 0 ? (Number(count) / max) * 100 : 0;
  }
}
