import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-sakura-600 to-lotus-700 flex items-center justify-center p-4">
      <!-- Decorative petals -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        @for (p of [1,2,3,4,5,6]; track p) {
          <span class="petal text-xl absolute" [style.left]="(p * 16) + '%'" [style.animation-delay]="(p * 1.3) + 's'">🌸</span>
        }
      </div>

      <div class="w-full max-w-sm relative z-10">
        <!-- Logo -->
        <div class="text-center mb-8">
          <h1 class="text-4xl font-script font-bold text-white mb-2">Caeline</h1>
          <p class="text-white/70 text-sm uppercase tracking-widest">Admin Dashboard</p>
        </div>

        <!-- Card -->
        <div class="card p-8">
          <h2 class="text-xl font-serif font-bold text-gray-800 mb-6 text-center">Sign In</h2>

          <form (ngSubmit)="login()" class="space-y-4">
            <div>
              <label class="form-label">Username</label>
              <input type="text" [(ngModel)]="username" name="username" class="form-input"
                     placeholder="admin" [disabled]="loading()">
            </div>
            <div>
              <label class="form-label">Password</label>
              <input type="password" [(ngModel)]="password" name="password" class="form-input"
                     placeholder="••••••••" [disabled]="loading()">
            </div>

            @if (error()) {
              <div class="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm">
                {{ error() }}
              </div>
            }

            <button type="submit" class="btn-primary w-full py-3" [disabled]="loading()">
              @if (loading()) { Signing in... } @else { Sign In ✿ }
            </button>
          </form>

          <p class="text-center text-xs text-gray-400 mt-6">
            <a href="/" class="hover:text-sakura-500 transition-colors">← Back to website</a>
          </p>
        </div>
      </div>
    </div>
  `
})
export class AdminLoginComponent {
  username = '';
  password = '';
  error = signal('');
  loading = signal(false);

  constructor(private auth: AuthService, private router: Router) {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/admin']);
    }
  }

  login() {
    if (!this.username || !this.password) return;
    this.loading.set(true);
    this.error.set('');

    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/admin/dashboard']),
      error: (err) => {
        this.error.set(err.error?.message || 'Invalid username or password');
        this.loading.set(false);
      }
    });
  }
}
