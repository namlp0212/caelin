import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Booking } from '../../shared/models';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-2xl font-serif font-bold text-gray-800">Bookings</h1>
          <p class="text-gray-500 text-sm">Manage all photoshoot reservations</p>
        </div>
        <div class="flex items-center gap-3">
          <input type="date" [(ngModel)]="filterFrom" (change)="loadBookings()"
                 class="form-input py-2 text-sm">
          <span class="text-gray-400">to</span>
          <input type="date" [(ngModel)]="filterTo" (change)="loadBookings()"
                 class="form-input py-2 text-sm">
        </div>
      </div>

      <!-- Status filter tabs -->
      <div class="flex gap-2 mb-6 flex-wrap">
        @for (tab of statusTabs; track tab.value) {
          <button (click)="activeStatus = tab.value; filterBookings()"
                  class="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  [class]="activeStatus === tab.value
                    ? 'bg-sakura-500 text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-sakura-300'">
            {{ tab.label }} ({{ getCount(tab.value) }})
          </button>
        }
      </div>

      <!-- Table -->
      <div class="card overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Code</th>
                <th class="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Customer</th>
                <th class="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Package</th>
                <th class="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                <th class="text-right px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Total</th>
                <th class="text-center px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th class="px-5 py-4"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              @if (loading()) {
                @for (i of [1,2,3,4,5]; track i) {
                  <tr>
                    @for (j of [1,2,3,4,5,6,7]; track j) {
                      <td class="px-5 py-4"><div class="h-4 shimmer rounded w-full"></div></td>
                    }
                  </tr>
                }
              } @else if (displayedBookings().length === 0) {
                <tr>
                  <td colspan="7" class="text-center py-16 text-gray-400">
                    <p class="text-4xl mb-3">📅</p>
                    <p>No bookings found</p>
                  </td>
                </tr>
              } @else {
                @for (booking of displayedBookings(); track booking.id) {
                  <tr class="hover:bg-gray-50 transition-colors">
                    <td class="px-5 py-4">
                      <span class="font-mono text-xs text-sakura-600 font-bold">{{ booking.bookingCode }}</span>
                    </td>
                    <td class="px-5 py-4">
                      <p class="font-medium text-gray-800 text-sm">{{ booking.customerName }}</p>
                      <p class="text-xs text-gray-400">{{ booking.customerPhone }}</p>
                    </td>
                    <td class="px-5 py-4 text-sm text-gray-600">
                      {{ booking.conceptPackage?.name }}
                    </td>
                    <td class="px-5 py-4">
                      <p class="text-sm text-gray-700">{{ booking.bookingDate }}</p>
                      <p class="text-xs text-gray-400">{{ booking.startTime }} – {{ booking.endTime }}</p>
                    </td>
                    <td class="px-5 py-4 text-right">
                      <p class="text-sm font-semibold text-gray-800">{{ booking.totalAmount | number }}đ</p>
                      <p class="text-xs" [class]="booking.depositPaid ? 'text-green-600' : 'text-orange-500'">
                        Deposit {{ booking.depositPaid ? 'paid' : 'pending' }}
                      </p>
                    </td>
                    <td class="px-5 py-4 text-center">
                      <span class="badge text-xs"
                            [class]="statusBadgeClass(booking.status)">
                        {{ booking.status }}
                      </span>
                    </td>
                    <td class="px-5 py-4">
                      <div class="flex items-center gap-1">
                        @for (action of statusActions(booking.status); track action.label) {
                          <button (click)="updateStatus(booking.id, action.nextStatus)"
                                  class="text-xs px-2 py-1 rounded-lg transition-colors"
                                  [class]="action.btnClass">
                            {{ action.label }}
                          </button>
                        }
                      </div>
                    </td>
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class AdminBookingsComponent implements OnInit {
  allBookings = signal<Booking[]>([]);
  displayedBookings = signal<Booking[]>([]);
  loading = signal(true);

  activeStatus = 'ALL';
  filterFrom = '';
  filterTo = '';

  statusTabs = [
    { value: 'ALL', label: 'All' },
    { value: 'PENDING', label: 'Pending' },
    { value: 'CONFIRMED', label: 'Confirmed' },
    { value: 'COMPLETED', label: 'Completed' },
    { value: 'CANCELLED', label: 'Cancelled' },
  ];

  constructor(private api: ApiService) {}

  ngOnInit() { this.loadBookings(); }

  loadBookings() {
    this.loading.set(true);
    this.api.getAllBookings(this.filterFrom || undefined, this.filterTo || undefined).subscribe({
      next: bookings => {
        this.allBookings.set(bookings);
        this.filterBookings();
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  filterBookings() {
    const bookings = this.activeStatus === 'ALL'
      ? this.allBookings()
      : this.allBookings().filter(b => b.status === this.activeStatus);
    this.displayedBookings.set(bookings);
  }

  getCount(status: string): number {
    return status === 'ALL' ? this.allBookings().length :
      this.allBookings().filter(b => b.status === status).length;
  }

  updateStatus(id: number, status: string) {
    this.api.updateBookingStatus(id, status).subscribe({
      next: updated => {
        this.allBookings.update(list => list.map(b => b.id === id ? updated : b));
        this.filterBookings();
      }
    });
  }

  statusBadgeClass(status: string): string {
    return {
      PENDING:   'bg-yellow-100 text-yellow-700',
      CONFIRMED: 'bg-blue-100 text-blue-700',
      COMPLETED: 'bg-green-100 text-green-700',
      CANCELLED: 'bg-red-100 text-red-700',
    }[status] ?? 'bg-gray-100 text-gray-600';
  }

  statusActions(status: string): { label: string; nextStatus: string; btnClass: string }[] {
    if (status === 'PENDING') return [
      { label: 'Confirm', nextStatus: 'CONFIRMED', btnClass: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
      { label: 'Cancel', nextStatus: 'CANCELLED', btnClass: 'bg-red-100 text-red-700 hover:bg-red-200' },
    ];
    if (status === 'CONFIRMED') return [
      { label: 'Complete', nextStatus: 'COMPLETED', btnClass: 'bg-green-100 text-green-700 hover:bg-green-200' },
      { label: 'Cancel', nextStatus: 'CANCELLED', btnClass: 'bg-red-100 text-red-700 hover:bg-red-200' },
    ];
    return [];
  }
}
