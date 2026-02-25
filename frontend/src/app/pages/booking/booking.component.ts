import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ApiService } from '../../core/services/api.service';
import { ConceptPackage, Outfit, TimeSlot, BookingRequest } from '../../shared/models';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />

    <div class="min-h-screen bg-gradient-to-br from-sakura-50 to-cream-50 pt-24 pb-16">
      <div class="container mx-auto px-4 max-w-4xl">

        <!-- Header -->
        <div class="text-center mb-10">
          <p class="badge-sakura mb-3">Reserve Your Experience</p>
          <h1 class="text-4xl font-serif font-bold text-gray-800 mb-2">Book Your Photoshoot</h1>
          <p class="text-gray-500">Complete the steps below to reserve your experience</p>
        </div>

        <!-- Step Progress -->
        <div class="flex items-center justify-center gap-0 mb-10">
          @for (step of steps; track step.num) {
            <div class="flex items-center">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
                     [class]="currentStep() >= step.num
                       ? 'bg-sakura-500 text-white shadow-lg shadow-sakura-200'
                       : 'bg-white border-2 border-gray-200 text-gray-400'">
                  {{ currentStep() > step.num ? '✓' : step.num }}
                </div>
                <p class="text-xs mt-1 font-medium"
                   [class]="currentStep() >= step.num ? 'text-sakura-600' : 'text-gray-400'">
                  {{ step.label }}
                </p>
              </div>
              @if (!$last) {
                <div class="w-16 md:w-24 h-0.5 mt-[-14px]"
                     [class]="currentStep() > step.num ? 'bg-sakura-400' : 'bg-gray-200'"></div>
              }
            </div>
          }
        </div>

        <!-- STEP 1: Choose Package -->
        @if (currentStep() === 1) {
          <div class="card p-8">
            <h2 class="text-2xl font-serif font-bold text-gray-800 mb-6">Step 1: Choose a Concept Package</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              @for (pkg of packages(); track pkg.id) {
                <div (click)="selectPackage(pkg)"
                     class="border-2 rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:shadow-md"
                     [class]="selectedPackageId() === pkg.id
                       ? 'border-sakura-400 bg-sakura-50 shadow-md'
                       : 'border-gray-100 hover:border-sakura-200'">
                  <div class="flex items-start gap-4">
                    <div class="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                         [style.background]="conceptGradient(pkg.conceptType)">
                      {{ conceptEmoji(pkg.conceptType) }}
                    </div>
                    <div class="flex-1">
                      <h3 class="font-serif font-bold text-gray-800 mb-1">{{ pkg.name }}</h3>
                      <p class="text-gray-500 text-sm mb-2 line-clamp-2">{{ pkg.description }}</p>
                      <div class="flex items-center gap-4 text-sm">
                        <span class="text-sakura-600 font-bold">{{ pkg.price | number }}đ</span>
                        <span class="text-gray-400">⏱ {{ pkg.durationHours }}h</span>
                      </div>
                    </div>
                    @if (selectedPackageId() === pkg.id) {
                      <div class="w-6 h-6 bg-sakura-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span class="text-white text-xs">✓</span>
                      </div>
                    }
                  </div>
                </div>
              }
            </div>

            <div class="mt-8 flex justify-end">
              <button (click)="nextStep()" [disabled]="!selectedPackageId()"
                      class="btn-primary" [class.opacity-50]="!selectedPackageId()">
                Next: Choose Outfit →
              </button>
            </div>
          </div>
        }

        <!-- STEP 2: Choose Outfit -->
        @if (currentStep() === 2) {
          <div class="card p-8">
            <h2 class="text-2xl font-serif font-bold text-gray-800 mb-6">Step 2: Select Your Outfit</h2>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <!-- Skip option -->
              <div (click)="selectedOutfitId.set(null)"
                   class="border-2 rounded-xl p-4 cursor-pointer transition-all text-center"
                   [class]="selectedOutfitId() === null
                     ? 'border-sakura-400 bg-sakura-50' : 'border-gray-100 hover:border-sakura-200'">
                <div class="text-4xl mb-2">🎨</div>
                <p class="text-sm font-medium text-gray-700">I'll choose on-site</p>
                <p class="text-xs text-gray-400 mt-1">Browse all options when you arrive</p>
              </div>

              @for (outfit of availableOutfits(); track outfit.id) {
                <div (click)="selectOutfit(outfit)"
                     class="border-2 rounded-xl overflow-hidden cursor-pointer transition-all"
                     [class]="selectedOutfitId() === outfit.id
                       ? 'border-sakura-400 shadow-md' : 'border-gray-100 hover:border-sakura-200'">
                  <div class="aspect-[3/4] relative"
                       [style.background]="'linear-gradient(135deg, ' + (outfit.colorHex || '#fde6ef') + '33, ' + (outfit.colorHex || '#fccede') + '66)'">
                    @if (outfit.images && outfit.images.length > 0) {
                      <img [src]="outfit.images[0].imageUrl" [alt]="outfit.name"
                           class="w-full h-full object-cover">
                    } @else {
                      <div class="w-full h-full flex items-center justify-center text-5xl opacity-40">👘</div>
                    }
                    @if (selectedOutfitId() === outfit.id) {
                      <div class="absolute top-2 right-2 w-7 h-7 bg-sakura-500 rounded-full flex items-center justify-center">
                        <span class="text-white text-xs">✓</span>
                      </div>
                    }
                  </div>
                  <div class="p-3">
                    <p class="text-sm font-semibold text-gray-800 truncate">{{ outfit.name }}</p>
                    <p class="text-xs text-sakura-600">{{ outfit.price | number }}đ</p>
                  </div>
                </div>
              }
            </div>

            <!-- Size selector -->
            @if (selectedOutfitId() && selectedOutfitSizes().length > 0) {
              <div class="mb-6 p-4 bg-sakura-50 rounded-xl">
                <p class="form-label">Select Size</p>
                <div class="flex flex-wrap gap-2">
                  @for (size of selectedOutfitSizes(); track size.id) {
                    <button (click)="selectedSize.set(size.sizeLabel)"
                            class="px-4 py-2 rounded-full border-2 text-sm transition-all"
                            [class]="selectedSize() === size.sizeLabel
                              ? 'border-sakura-500 bg-sakura-500 text-white'
                              : 'border-gray-200 text-gray-600 hover:border-sakura-300'">
                      {{ size.sizeLabel }}
                    </button>
                  }
                </div>
              </div>
            }

            <div class="flex justify-between">
              <button (click)="prevStep()" class="btn-secondary">← Back</button>
              <button (click)="nextStep()" class="btn-primary">Next: Choose Date →</button>
            </div>
          </div>
        }

        <!-- STEP 3: Choose Date & Time -->
        @if (currentStep() === 3) {
          <div class="card p-8">
            <h2 class="text-2xl font-serif font-bold text-gray-800 mb-6">Step 3: Choose Date & Time</h2>

            <!-- Date picker -->
            <div class="mb-6">
              <label class="form-label">Booking Date</label>
              <input type="date" [(ngModel)]="bookingDate" (change)="loadTimeSlots()"
                     [min]="minDate" class="form-input max-w-xs">
            </div>

            <!-- Time slots -->
            @if (bookingDate) {
              <div class="mb-6">
                <p class="form-label">Available Time Slots</p>
                @if (slotsLoading()) {
                  <div class="flex gap-2">
                    @for (i of [1,2,3,4]; track i) {
                      <div class="h-12 w-28 shimmer rounded-xl"></div>
                    }
                  </div>
                } @else if (timeSlots().length === 0) {
                  <div class="text-center py-8 bg-gray-50 rounded-xl">
                    <p class="text-gray-500">No available slots for this date. Please try another date.</p>
                  </div>
                } @else {
                  <div class="flex flex-wrap gap-3">
                    @for (slot of timeSlots(); track slot.id) {
                      <button (click)="selectSlot(slot)"
                              [disabled]="!slot.available"
                              class="px-5 py-3 rounded-xl border-2 text-sm font-medium transition-all"
                              [class]="!slot.available ? 'border-gray-200 text-gray-300 cursor-not-allowed' :
                                       selectedSlotId() === slot.id ? 'border-sakura-500 bg-sakura-500 text-white shadow-md' :
                                       'border-gray-200 text-gray-700 hover:border-sakura-300'">
                        {{ slot.startTime }} – {{ slot.endTime }}
                        @if (!slot.available) { <span class="ml-1 text-xs">(Full)</span> }
                      </button>
                    }
                  </div>
                }
              </div>
            }

            <!-- Add-ons -->
            <div class="mb-6 p-5 bg-cream-50 rounded-xl">
              <h3 class="font-semibold text-gray-700 mb-4">Optional Add-ons</h3>
              <div class="space-y-3">
                <label class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" [(ngModel)]="includesPhotographer" class="accent-sakura-500 w-4 h-4">
                    <div>
                      <p class="font-medium text-gray-700">📸 Professional Photographer</p>
                      <p class="text-xs text-gray-500">Captures every magical moment</p>
                    </div>
                  </div>
                  <span class="text-sakura-600 font-bold">+{{ selectedPackage()?.photographerFee | number }}đ</span>
                </label>
                <label class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" [(ngModel)]="includesMakeup" class="accent-sakura-500 w-4 h-4">
                    <div>
                      <p class="font-medium text-gray-700">💄 Hair & Makeup</p>
                      <p class="text-xs text-gray-500">Professional styling to complete your look</p>
                    </div>
                  </div>
                  <span class="text-sakura-600 font-bold">+{{ selectedPackage()?.makeupFee | number }}đ</span>
                </label>
              </div>
            </div>

            <div class="flex justify-between">
              <button (click)="prevStep()" class="btn-secondary">← Back</button>
              <button (click)="nextStep()" [disabled]="!bookingDate || !selectedSlotId()"
                      class="btn-primary" [class.opacity-50]="!bookingDate || !selectedSlotId()">
                Next: Your Details →
              </button>
            </div>
          </div>
        }

        <!-- STEP 4: Customer Details -->
        @if (currentStep() === 4) {
          <div class="card p-8">
            <h2 class="text-2xl font-serif font-bold text-gray-800 mb-6">Step 4: Your Details</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label class="form-label">Full Name *</label>
                <input type="text" [(ngModel)]="customerName" class="form-input" placeholder="Your full name">
              </div>
              <div>
                <label class="form-label">Phone Number *</label>
                <input type="tel" [(ngModel)]="customerPhone" class="form-input" placeholder="0901 234 567">
              </div>
              <div class="md:col-span-2">
                <label class="form-label">Email Address *</label>
                <input type="email" [(ngModel)]="customerEmail" class="form-input" placeholder="you@example.com">
              </div>
              <div class="md:col-span-2">
                <label class="form-label">Special Requests</label>
                <textarea [(ngModel)]="specialRequests" class="form-input h-24 resize-none"
                          placeholder="Any special requests or notes..."></textarea>
              </div>
            </div>

            <!-- Payment Method -->
            <div class="mb-6">
              <label class="form-label">Payment Method (30% deposit)</label>
              <div class="grid grid-cols-3 gap-3">
                @for (method of paymentMethods; track method.value) {
                  <div (click)="paymentMethod = method.value"
                       class="border-2 rounded-xl p-4 cursor-pointer text-center transition-all"
                       [class]="paymentMethod === method.value
                         ? 'border-sakura-400 bg-sakura-50' : 'border-gray-100 hover:border-sakura-200'">
                    <div class="text-2xl mb-1">{{ method.icon }}</div>
                    <p class="text-sm font-medium text-gray-700">{{ method.label }}</p>
                  </div>
                }
              </div>
            </div>

            <div class="flex justify-between">
              <button (click)="prevStep()" class="btn-secondary">← Back</button>
              <button (click)="nextStep()" [disabled]="!customerName || !customerEmail || !customerPhone"
                      class="btn-primary" [class.opacity-50]="!customerName || !customerEmail || !customerPhone">
                Review Order →
              </button>
            </div>
          </div>
        }

        <!-- STEP 5: Review & Pay -->
        @if (currentStep() === 5) {
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Summary -->
            <div class="lg:col-span-2 card p-8">
              <h2 class="text-2xl font-serif font-bold text-gray-800 mb-6">Order Summary</h2>

              <div class="space-y-4 mb-6">
                <div class="flex justify-between py-3 border-b border-gray-100">
                  <span class="text-gray-600">Concept Package</span>
                  <span class="font-semibold">{{ selectedPackage()?.name }}</span>
                </div>
                @if (selectedOutfitId()) {
                  <div class="flex justify-between py-3 border-b border-gray-100">
                    <span class="text-gray-600">Outfit</span>
                    <span class="font-semibold">{{ selectedOutfitName() }}</span>
                  </div>
                }
                <div class="flex justify-between py-3 border-b border-gray-100">
                  <span class="text-gray-600">Date</span>
                  <span class="font-semibold">{{ bookingDate }}</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-100">
                  <span class="text-gray-600">Time</span>
                  <span class="font-semibold">{{ selectedSlot()?.startTime }} – {{ selectedSlot()?.endTime }}</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-100">
                  <span class="text-gray-600">Customer</span>
                  <span class="font-semibold">{{ customerName }}</span>
                </div>

                <!-- Price breakdown -->
                <div class="pt-2 space-y-2">
                  <div class="flex justify-between text-sm text-gray-600">
                    <span>Package base price</span>
                    <span>{{ selectedPackage()?.price | number }}đ</span>
                  </div>
                  @if (includesPhotographer) {
                    <div class="flex justify-between text-sm text-gray-600">
                      <span>Photographer</span>
                      <span>+{{ selectedPackage()?.photographerFee | number }}đ</span>
                    </div>
                  }
                  @if (includesMakeup) {
                    <div class="flex justify-between text-sm text-gray-600">
                      <span>Hair & Makeup</span>
                      <span>+{{ selectedPackage()?.makeupFee | number }}đ</span>
                    </div>
                  }
                  <div class="flex justify-between font-bold text-lg pt-3 border-t border-gray-100">
                    <span>Total</span>
                    <span class="text-sakura-600">{{ totalAmount() | number }}đ</span>
                  </div>
                  <div class="flex justify-between text-sakura-600 font-semibold">
                    <span>Required Deposit (30%)</span>
                    <span>{{ depositAmount() | number }}đ</span>
                  </div>
                </div>
              </div>

              @if (bookingError()) {
                <div class="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-4 text-sm">
                  {{ bookingError() }}
                </div>
              }

              <button (click)="submitBooking()" [disabled]="submitting()"
                      class="btn-primary w-full text-lg py-4">
                @if (submitting()) { Processing... } @else { Confirm & Pay Deposit ✿ }
              </button>
              <p class="text-xs text-gray-400 text-center mt-3">
                By booking you agree to our cancellation policy. Deposits are non-refundable within 24 hours of the session.
              </p>
            </div>

            <!-- Price card -->
            <div class="card p-6 h-fit sticky top-24">
              <h3 class="font-semibold text-gray-700 mb-4">Payment via {{ paymentMethod }}</h3>
              <div class="text-center py-6">
                <p class="text-sm text-gray-500 mb-2">Deposit to pay now</p>
                <p class="text-4xl font-bold text-sakura-600">{{ depositAmount() | number }}đ</p>
                <p class="text-xs text-gray-400 mt-2">Remaining {{ (totalAmount() - depositAmount()) | number }}đ paid on-site</p>
              </div>
              <div class="bg-sakura-50 rounded-xl p-4 text-center">
                <p class="text-2xl mb-2">{{ paymentMethod === 'MOMO' ? '💜' : paymentMethod === 'VNPAY' ? '🏧' : '💵' }}</p>
                <p class="text-sm text-gray-600 font-medium">{{ paymentMethod }}</p>
                <p class="text-xs text-gray-400 mt-1">You'll be redirected to complete payment</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>

    <app-footer />
  `
})
export class BookingComponent implements OnInit {
  packages = signal<ConceptPackage[]>([]);
  timeSlots = signal<TimeSlot[]>([]);
  slotsLoading = signal(false);
  submitting = signal(false);
  bookingError = signal('');

  currentStep = signal(1);
  selectedPackageId = signal<number | null>(null);
  selectedOutfitId = signal<number | null>(null);
  selectedSlotId = signal<number | null>(null);
  selectedSize = signal('');

  bookingDate = '';
  includesPhotographer = false;
  includesMakeup = false;
  customerName = '';
  customerEmail = '';
  customerPhone = '';
  specialRequests = '';
  paymentMethod: 'MOMO' | 'VNPAY' | 'CASH' = 'MOMO';

  steps = [
    { num: 1, label: 'Package' },
    { num: 2, label: 'Outfit' },
    { num: 3, label: 'Date/Time' },
    { num: 4, label: 'Details' },
    { num: 5, label: 'Confirm' },
  ];

  paymentMethods = [
    { value: 'MOMO', label: 'MoMo', icon: '💜' },
    { value: 'VNPAY', label: 'VNPay', icon: '🏧' },
    { value: 'CASH', label: 'Cash on-site', icon: '💵' },
  ] as const;

  get minDate(): string {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }

  selectedPackage = computed(() =>
    this.packages().find(p => p.id === this.selectedPackageId()) ?? null
  );

  availableOutfits = computed(() =>
    this.selectedPackage()?.outfits ?? []
  );

  selectedOutfitSizes = computed(() => {
    const outfit = this.availableOutfits().find(o => o.id === this.selectedOutfitId());
    return outfit?.sizes ?? [];
  });

  selectedOutfitName = computed(() =>
    this.availableOutfits().find(o => o.id === this.selectedOutfitId())?.name ?? ''
  );

  selectedSlot = computed(() =>
    this.timeSlots().find(s => s.id === this.selectedSlotId()) ?? null
  );

  totalAmount = computed(() => {
    const pkg = this.selectedPackage();
    if (!pkg) return 0;
    let total = pkg.price;
    if (this.includesPhotographer) total += pkg.photographerFee;
    if (this.includesMakeup) total += pkg.makeupFee;
    return total;
  });

  depositAmount = computed(() => Math.ceil(this.totalAmount() * 0.3));

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.api.getPackages().subscribe({ next: p => this.packages.set(p), error: () => {} });
    this.route.queryParams.subscribe(params => {
      if (params['packageId']) this.selectedPackageId.set(+params['packageId']);
      if (params['outfitId']) this.selectedOutfitId.set(+params['outfitId']);
    });
  }

  selectPackage(pkg: ConceptPackage) { this.selectedPackageId.set(pkg.id); }
  selectOutfit(outfit: Outfit) { this.selectedOutfitId.set(outfit.id); this.selectedSize.set(''); }

  selectSlot(slot: TimeSlot) {
    if (slot.available) this.selectedSlotId.set(slot.id);
  }

  loadTimeSlots() {
    if (!this.selectedPackageId() || !this.bookingDate) return;
    this.slotsLoading.set(true);
    this.api.getAvailableSlots(this.selectedPackageId()!, this.bookingDate, this.bookingDate).subscribe({
      next: slots => { this.timeSlots.set(slots); this.slotsLoading.set(false); },
      error: () => this.slotsLoading.set(false)
    });
  }

  nextStep() { if (this.currentStep() < 5) this.currentStep.update(s => s + 1); }
  prevStep() { if (this.currentStep() > 1) this.currentStep.update(s => s - 1); }

  submitBooking() {
    if (!this.selectedPackageId() || !this.selectedSlotId() || !this.bookingDate) return;
    this.submitting.set(true);
    this.bookingError.set('');

    const request: BookingRequest = {
      customerName: this.customerName,
      customerEmail: this.customerEmail,
      customerPhone: this.customerPhone,
      packageId: this.selectedPackageId()!,
      outfitId: this.selectedOutfitId() ?? undefined,
      outfitSize: this.selectedSize() || undefined,
      timeSlotId: this.selectedSlotId()!,
      bookingDate: this.bookingDate,
      includesPhotographer: this.includesPhotographer,
      includesMakeup: this.includesMakeup,
      numPeople: 1,
      specialRequests: this.specialRequests || undefined,
      paymentMethod: this.paymentMethod,
    };

    this.api.createBooking(request).subscribe({
      next: (booking) => {
        if (this.paymentMethod === 'MOMO' || this.paymentMethod === 'VNPAY') {
          this.api.initiateMomoPayment(booking.bookingCode).subscribe({
            next: () => this.router.navigate(['/booking/payment-result'],
              { queryParams: { code: booking.bookingCode, status: 'pending' } }),
            error: () => this.router.navigate(['/booking/payment-result'],
              { queryParams: { code: booking.bookingCode, status: 'success' } })
          });
        } else {
          this.router.navigate(['/booking/payment-result'],
            { queryParams: { code: booking.bookingCode, status: 'success' } });
        }
      },
      error: (err) => {
        this.bookingError.set(err.error?.message || 'Booking failed. Please try again.');
        this.submitting.set(false);
      }
    });
  }

  conceptGradient(type: string): string {
    const map: Record<string, string> = {
      SAKURA_DREAM: 'linear-gradient(135deg, #fde6ef, #fccede)',
      KYOTO_SUNSET: 'linear-gradient(135deg, #fef3c7, #fed7aa)',
      LANTERN_NIGHT: 'linear-gradient(135deg, #ede3ff, #fde6ef)',
      ROYAL_VIET_PHUC: 'linear-gradient(135deg, #fee2e2, #fecaca)',
    };
    return map[type] ?? '#f3f4f6';
  }

  conceptEmoji(type: string): string {
    return { SAKURA_DREAM: '🌸', KYOTO_SUNSET: '🏮', LANTERN_NIGHT: '🪔', ROYAL_VIET_PHUC: '👑' }[type] ?? '✿';
  }
}
