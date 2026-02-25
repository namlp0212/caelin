import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ApiService } from '../../core/services/api.service';
import { Booking } from '../../shared/models';

@Component({
  selector: 'app-booking-result',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <div class="min-h-screen bg-gradient-to-br from-sakura-50 to-cream-50 pt-24 pb-16
                flex items-center justify-center">
      <div class="container mx-auto px-4 max-w-2xl text-center">
        @if (status() === 'success' || status() === 'pending') {
          <div class="card p-10">
            <div class="text-7xl mb-6 animate-bounce">🌸</div>
            <h1 class="text-3xl font-serif font-bold text-gray-800 mb-3">
              Booking Confirmed!
            </h1>
            <p class="text-gray-500 mb-6">
              Your photoshoot experience has been reserved. We can't wait to see you!
            </p>

            @if (booking()) {
              <div class="bg-sakura-50 rounded-2xl p-6 mb-6 text-left space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-500 text-sm">Booking Code</span>
                  <span class="font-bold text-sakura-600 font-mono">{{ booking()!.bookingCode }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500 text-sm">Package</span>
                  <span class="font-semibold">{{ booking()!.conceptPackage?.name }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500 text-sm">Date</span>
                  <span class="font-semibold">{{ booking()!.bookingDate }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500 text-sm">Time</span>
                  <span class="font-semibold">{{ booking()!.startTime }} – {{ booking()!.endTime }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500 text-sm">Total</span>
                  <span class="font-bold text-sakura-600">{{ booking()!.totalAmount | number }}đ</span>
                </div>
                <div class="flex justify-between border-t pt-3">
                  <span class="text-gray-500 text-sm">Deposit Paid</span>
                  <span class="font-bold">{{ booking()!.depositAmount | number }}đ</span>
                </div>
              </div>
            } @else if (bookingCode()) {
              <div class="bg-sakura-50 rounded-2xl p-6 mb-6">
                <p class="text-sm text-gray-500">Booking Code</p>
                <p class="text-2xl font-bold text-sakura-600 font-mono">{{ bookingCode() }}</p>
              </div>
            }

            <p class="text-sm text-gray-500 mb-8">
              A confirmation email has been sent to your email address.
              Please save your booking code for future reference.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a routerLink="/" class="btn-primary">Back to Home ✿</a>
              <a routerLink="/catalog" class="btn-secondary">Browse More Outfits</a>
            </div>
          </div>
        } @else {
          <div class="card p-10">
            <div class="text-7xl mb-6">😢</div>
            <h1 class="text-3xl font-serif font-bold text-gray-800 mb-3">Payment Failed</h1>
            <p class="text-gray-500 mb-8">
              We couldn't process your payment. Please try again or contact us for assistance.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a routerLink="/booking" class="btn-primary">Try Again</a>
              <a href="tel:+84901234567" class="btn-secondary">Contact Us</a>
            </div>
          </div>
        }
      </div>
    </div>
    <app-footer />
  `
})
export class BookingResultComponent implements OnInit {
  status = signal('');
  bookingCode = signal('');
  booking = signal<Booking | null>(null);

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.status.set(params['status'] || 'failed');
      this.bookingCode.set(params['code'] || '');
      if (params['code']) {
        this.api.getBookingByCode(params['code']).subscribe({
          next: b => this.booking.set(b),
          error: () => {}
        });
      }
    });
  }
}
