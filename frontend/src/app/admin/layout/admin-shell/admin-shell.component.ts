import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="flex h-screen bg-gray-50 overflow-hidden">

      <!-- Sidebar -->
      <aside class="w-64 bg-white shadow-sm flex-shrink-0 flex flex-col">
        <!-- Logo -->
        <div class="px-6 py-5 border-b border-gray-100">
          <h1 class="text-xl font-script font-bold text-sakura-600">Caeline</h1>
          <p class="text-xs text-gray-400 uppercase tracking-wide">Admin Panel</p>
        </div>

        <!-- User info -->
        <div class="px-6 py-4 border-b border-gray-100">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 bg-sakura-100 rounded-full flex items-center justify-center text-sakura-600 font-bold text-sm">
              {{ (auth.currentUser()?.fullName || auth.currentUser()?.username || 'A')[0].toUpperCase() }}
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-800">{{ auth.currentUser()?.fullName || auth.currentUser()?.username }}</p>
              <p class="text-xs text-sakura-500">{{ auth.currentUser()?.role }}</p>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          @for (item of navItems; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="active"
               class="sidebar-link">
              <span class="text-xl">{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </a>
          }
        </nav>

        <!-- Logout -->
        <div class="px-4 py-4 border-t border-gray-100">
          <button (click)="auth.logout()"
                  class="sidebar-link w-full text-red-500 hover:bg-red-50 hover:text-red-600">
            <span class="text-xl">🚪</span>
            <span>Logout</span>
          </button>
          <a href="/" target="_blank" class="sidebar-link mt-1 text-xs">
            <span class="text-lg">🌐</span>
            <span>View Website</span>
          </a>
        </div>
      </aside>

      <!-- Main content -->
      <main class="flex-1 overflow-y-auto">
        <!-- Top bar -->
        <div class="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <h2 class="font-semibold text-gray-700">Caeline Admin Dashboard</h2>
          <div class="text-sm text-gray-500">{{ today }}</div>
        </div>

        <!-- Page content -->
        <div class="p-8">
          <router-outlet />
        </div>
      </main>
    </div>
  `
})
export class AdminShellComponent {
  today = new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/bookings', label: 'Bookings', icon: '📅' },
    { path: '/admin/outfits', label: 'Outfits', icon: '👘' },
    { path: '/admin/packages', label: 'Packages', icon: '🌸' },
    { path: '/admin/slots', label: 'Slots', icon: '⏰' },
    { path: '/admin/content', label: 'Content', icon: '🖼️' },
  ];

  constructor(public auth: AuthService) {}
}
