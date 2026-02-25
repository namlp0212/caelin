import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Public routes
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'packages',
    loadComponent: () => import('./pages/packages/packages.component').then(m => m.PackagesComponent)
  },
  {
    path: 'catalog',
    loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent)
  },
  {
    path: 'booking',
    loadComponent: () => import('./pages/booking/booking.component').then(m => m.BookingComponent)
  },
  {
    path: 'booking/payment-result',
    loadComponent: () => import('./pages/booking-result/booking-result.component').then(m => m.BookingResultComponent)
  },

  // Admin routes
  {
    path: 'admin/login',
    loadComponent: () => import('./admin/layout/login/login.component').then(m => m.AdminLoginComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/layout/admin-shell/admin-shell.component').then(m => m.AdminShellComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'outfits',
        loadComponent: () => import('./admin/outfits/outfits.component').then(m => m.AdminOutfitsComponent)
      },
      {
        path: 'packages',
        loadComponent: () => import('./admin/packages/packages.component').then(m => m.AdminPackagesComponent)
      },
      {
        path: 'bookings',
        loadComponent: () => import('./admin/bookings/bookings.component').then(m => m.AdminBookingsComponent)
      },
      {
        path: 'content',
        loadComponent: () => import('./admin/content/content.component').then(m => m.AdminContentComponent)
      },
      {
        path: 'slots',
        loadComponent: () => import('./admin/slots/slots.component').then(m => m.AdminSlotsComponent)
      },
    ]
  },

  { path: '**', redirectTo: '' }
];
