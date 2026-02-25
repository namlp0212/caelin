import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav [class]="navClass()" class="fixed top-0 w-full z-50 transition-all duration-300">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">

        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-2">
          <span class="text-2xl font-script font-bold"
                [class]="scrolled() ? 'text-sakura-600' : 'text-white'">
            Caeline
          </span>
          <span class="text-xs font-sans tracking-widest uppercase"
                [class]="scrolled() ? 'text-gray-500' : 'text-white/70'">
            Rental
          </span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a routerLink="/" routerLinkActive="nav-active" [routerLinkActiveOptions]="{exact:true}"
             [class]="navLinkClass()">Home</a>
          <a routerLink="/packages" routerLinkActive="nav-active"
             [class]="navLinkClass()">Concept Packages</a>
          <a routerLink="/catalog" routerLinkActive="nav-active"
             [class]="navLinkClass()">Outfit Catalog</a>
          <a routerLink="/booking"
             class="btn-primary text-sm px-5 py-2.5">
            Book Now ✿
          </a>
        </div>

        <!-- Mobile menu toggle -->
        <button (click)="mobileOpen.set(!mobileOpen())" class="md:hidden p-2"
                [class]="scrolled() ? 'text-gray-700' : 'text-white'">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            @if (!mobileOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"/>
            }
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      @if (mobileOpen()) {
        <div class="md:hidden bg-white shadow-xl border-t border-sakura-100 px-4 py-6 space-y-4">
          <a routerLink="/" (click)="mobileOpen.set(false)"
             class="block text-gray-700 hover:text-sakura-600 font-medium py-2">Home</a>
          <a routerLink="/packages" (click)="mobileOpen.set(false)"
             class="block text-gray-700 hover:text-sakura-600 font-medium py-2">Concept Packages</a>
          <a routerLink="/catalog" (click)="mobileOpen.set(false)"
             class="block text-gray-700 hover:text-sakura-600 font-medium py-2">Outfit Catalog</a>
          <a routerLink="/booking" (click)="mobileOpen.set(false)"
             class="btn-primary inline-block text-sm px-5 py-2.5 mt-2">
            Book Now ✿
          </a>
        </div>
      }
    </nav>
  `,
  styles: [`
    .nav-active { @apply text-sakura-500 font-semibold; }
  `]
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  navClass() {
    return this.scrolled()
      ? 'bg-white/95 backdrop-blur-md shadow-md'
      : 'bg-transparent';
  }

  navLinkClass() {
    return this.scrolled()
      ? 'text-gray-700 hover:text-sakura-600 font-medium transition-colors duration-200'
      : 'text-white/90 hover:text-white font-medium transition-colors duration-200';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }
}
