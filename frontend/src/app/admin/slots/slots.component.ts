import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { ConceptPackage, TimeSlot } from '../../shared/models';

@Component({
  selector: 'app-admin-slots',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-serif font-bold text-gray-800">Slots Management</h1>
          <p class="text-gray-500 text-sm">Create and manage time slots per package</p>
        </div>
        <button (click)="showGenerate.set(true)" class="btn-primary text-sm">+ Generate Slots</button>
      </div>

      <!-- Filter Bar -->
      <div class="card p-4 mb-6">
        <div class="flex flex-wrap items-end gap-4">
          <div class="flex-1 min-w-[200px]">
            <label class="form-label">Package</label>
            <select [(ngModel)]="filter.packageId" class="form-input">
              <option [ngValue]="null">— Select package —</option>
              @for (pkg of packages(); track pkg.id) {
                <option [ngValue]="pkg.id">{{ pkg.name }}</option>
              }
            </select>
          </div>
          <div>
            <label class="form-label">From</label>
            <input type="date" [(ngModel)]="filter.from" class="form-input">
          </div>
          <div>
            <label class="form-label">To</label>
            <input type="date" [(ngModel)]="filter.to" class="form-input">
          </div>
          <button (click)="loadSlots()" class="btn-primary text-sm px-6 py-2.5"
                  [disabled]="!filter.packageId || !filter.from || !filter.to">
            Load Slots
          </button>
        </div>
      </div>

      <!-- Summary Badges -->
      @if (hasSearched()) {
        <div class="flex gap-3 mb-4">
          <span class="badge bg-gray-100 text-gray-700 px-3 py-1.5 text-sm">
            Total: <strong>{{ slots().length }}</strong>
          </span>
          <span class="badge bg-green-100 text-green-700 px-3 py-1.5 text-sm">
            Available: <strong>{{ availableCount() }}</strong>
          </span>
          <span class="badge bg-red-100 text-red-700 px-3 py-1.5 text-sm">
            Blocked: <strong>{{ blockedCount() }}</strong>
          </span>
          <span class="badge bg-orange-100 text-orange-700 px-3 py-1.5 text-sm">
            Full: <strong>{{ fullCount() }}</strong>
          </span>
          @if (slots().length > 0) {
            <button (click)="deleteAll()"
                    class="ml-auto text-sm px-4 py-1.5 rounded-full border-2 border-red-200 text-red-600 hover:bg-red-50 transition-all">
              Delete All in View
            </button>
          }
        </div>
      }

      <!-- Table -->
      <div class="card overflow-hidden">
        @if (loading()) {
          <!-- Skeleton rows -->
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Time</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Max</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Booked</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              @for (i of [1,2,3,4,5]; track i) {
                <tr>
                  <td class="px-4 py-3"><div class="h-4 shimmer rounded w-24"></div></td>
                  <td class="px-4 py-3"><div class="h-4 shimmer rounded w-28"></div></td>
                  <td class="px-4 py-3"><div class="h-4 shimmer rounded w-8"></div></td>
                  <td class="px-4 py-3"><div class="h-4 shimmer rounded w-8"></div></td>
                  <td class="px-4 py-3"><div class="h-5 shimmer rounded-full w-20"></div></td>
                  <td class="px-4 py-3"><div class="h-7 shimmer rounded-full w-32"></div></td>
                </tr>
              }
            </tbody>
          </table>
        } @else if (!hasSearched()) {
          <div class="py-16 text-center text-gray-400">
            <p class="text-3xl mb-2">📅</p>
            <p class="font-medium">Select a package and date range, then click Load Slots</p>
          </div>
        } @else if (slots().length === 0) {
          <div class="py-16 text-center text-gray-400">
            <p class="text-3xl mb-2">⏰</p>
            <p class="font-medium">No slots found — use Generate Slots to create some</p>
          </div>
        } @else {
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Time</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Max</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Booked</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              @for (slot of slots(); track slot.id) {
                <tr class="hover:bg-gray-50 transition-colors">
                  <td class="px-4 py-3 text-sm text-gray-700 font-medium">{{ formatDate(slot.slotDate) }}</td>
                  <td class="px-4 py-3 text-sm text-gray-600 font-mono">
                    {{ slot.startTime.slice(0,5) }} – {{ slot.endTime.slice(0,5) }}
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">{{ slot.maxBookings }}</td>
                  <td class="px-4 py-3 text-sm text-gray-600">{{ slot.currentBookings }}</td>
                  <td class="px-4 py-3">
                    <span class="badge text-xs px-2.5 py-1 rounded-full font-medium"
                          [class]="statusClass(slot)">
                      {{ statusLabel(slot) }}
                    </span>
                  </td>
                  <td class="px-4 py-3">
                    <div class="flex items-center gap-2">
                      <button (click)="toggleBlock(slot)"
                              class="text-xs px-3 py-1.5 rounded-full border transition-all"
                              [class]="slot.blocked
                                ? 'border-green-200 text-green-700 hover:bg-green-50'
                                : 'border-orange-200 text-orange-700 hover:bg-orange-50'">
                        {{ slot.blocked ? 'Unblock' : 'Block' }}
                      </button>
                      <button (click)="deleteSingle(slot)"
                              class="text-xs px-3 py-1.5 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition-all">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>

      <!-- Generate Modal -->
      @if (showGenerate()) {
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             (click)="showGenerate.set(false)">
          <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8"
               (click)="$event.stopPropagation()">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-serif font-bold text-gray-800">Generate Slots</h2>
              <button (click)="showGenerate.set(false)" class="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
            </div>

            <div class="space-y-4">
              <div>
                <label class="form-label">Package *</label>
                <select [(ngModel)]="genForm.packageId" class="form-input">
                  <option [ngValue]="null">— Select package —</option>
                  @for (pkg of packages(); track pkg.id) {
                    <option [ngValue]="pkg.id">{{ pkg.name }}</option>
                  }
                </select>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="form-label">From *</label>
                  <input type="date" [(ngModel)]="genForm.from" class="form-input">
                </div>
                <div>
                  <label class="form-label">To *</label>
                  <input type="date" [(ngModel)]="genForm.to" class="form-input">
                </div>
              </div>

              <div>
                <label class="form-label">Max Bookings per Slot</label>
                <input type="number" [(ngModel)]="genForm.maxBookings" min="1" class="form-input">
              </div>

              <div>
                <div class="flex items-center justify-between mb-2">
                  <label class="form-label mb-0">Time Slots *</label>
                  <button (click)="addTimeSlot()" class="text-xs text-sakura-600 hover:text-sakura-700 font-medium">
                    + Add time slot
                  </button>
                </div>
                <div class="space-y-2">
                  @for (ts of genForm.timeSlots; track ts; let i = $index) {
                    <div class="flex items-center gap-2">
                      <input type="time" [(ngModel)]="ts.startTime" class="form-input flex-1" placeholder="Start">
                      <span class="text-gray-400 text-sm">–</span>
                      <input type="time" [(ngModel)]="ts.endTime" class="form-input flex-1" placeholder="End">
                      @if (genForm.timeSlots.length > 1) {
                        <button (click)="removeTimeSlot(i)"
                                class="text-red-400 hover:text-red-600 text-lg leading-none px-1">✕</button>
                      }
                    </div>
                  }
                </div>
              </div>

              <div class="flex gap-3 pt-2">
                <button (click)="generate()" class="btn-primary flex-1"
                        [disabled]="generating() || !genForm.packageId || !genForm.from || !genForm.to || genForm.timeSlots.length === 0">
                  {{ generating() ? 'Generating...' : 'Generate' }}
                </button>
                <button (click)="showGenerate.set(false)" class="btn-secondary px-6">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class AdminSlotsComponent implements OnInit {
  packages = signal<ConceptPackage[]>([]);
  slots = signal<TimeSlot[]>([]);
  loading = signal(false);
  generating = signal(false);
  showGenerate = signal(false);
  hasSearched = signal(false);

  filter = { packageId: null as number | null, from: '', to: '' };

  genForm = this.defaultGenForm();

  availableCount = computed(() => this.slots().filter(s => !s.blocked && s.currentBookings < s.maxBookings).length);
  blockedCount   = computed(() => this.slots().filter(s => s.blocked).length);
  fullCount      = computed(() => this.slots().filter(s => !s.blocked && s.currentBookings >= s.maxBookings).length);

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getPackages().subscribe(pkgs => this.packages.set(pkgs));
    // Default date range: today → +7 days
    const today = new Date();
    this.filter.from = this.toDateString(today);
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    this.filter.to = this.toDateString(nextWeek);
  }

  loadSlots() {
    if (!this.filter.packageId || !this.filter.from || !this.filter.to) return;
    this.loading.set(true);
    this.hasSearched.set(true);
    this.api.getAdminSlots(this.filter.packageId, this.filter.from, this.filter.to).subscribe({
      next: slots => { this.slots.set(slots); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  toggleBlock(slot: TimeSlot) {
    this.api.blockSlot(slot.id, !slot.blocked).subscribe({
      next: updated => this.slots.update(list => list.map(s => s.id === updated.id ? updated : s))
    });
  }

  deleteSingle(slot: TimeSlot) {
    if (!confirm(`Delete slot on ${slot.slotDate} at ${slot.startTime.slice(0,5)}?`)) return;
    this.api.deleteSlot(slot.id).subscribe({
      next: () => this.slots.update(list => list.filter(s => s.id !== slot.id))
    });
  }

  deleteAll() {
    if (!this.filter.packageId) return;
    const count = this.slots().length;
    if (!confirm(`Delete all ${count} slots in this view?`)) return;
    this.api.deleteSlotRange(this.filter.packageId, this.filter.from, this.filter.to).subscribe({
      next: () => this.slots.set([])
    });
  }

  generate() {
    if (!this.genForm.packageId) return;
    this.generating.set(true);
    this.api.generateSlots({
      packageId: this.genForm.packageId,
      from: this.genForm.from,
      to: this.genForm.to,
      timeSlots: this.genForm.timeSlots,
      maxBookings: this.genForm.maxBookings
    }).subscribe({
      next: () => {
        this.generating.set(false);
        this.showGenerate.set(false);
        this.genForm = this.defaultGenForm();
        // Reload if the generated range overlaps current filter
        if (this.filter.packageId) this.loadSlots();
      },
      error: () => this.generating.set(false)
    });
  }

  addTimeSlot() {
    this.genForm.timeSlots.push({ startTime: '', endTime: '' });
  }

  removeTimeSlot(index: number) {
    this.genForm.timeSlots.splice(index, 1);
  }

  statusLabel(slot: TimeSlot): string {
    if (slot.blocked) return 'Blocked';
    if (slot.currentBookings >= slot.maxBookings) return 'Full';
    return 'Available';
  }

  statusClass(slot: TimeSlot): string {
    if (slot.blocked) return 'bg-red-100 text-red-700';
    if (slot.currentBookings >= slot.maxBookings) return 'bg-orange-100 text-orange-700';
    return 'bg-green-100 text-green-700';
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  private toDateString(d: Date): string {
    return d.toISOString().slice(0, 10);
  }

  private defaultGenForm() {
    return {
      packageId: null as number | null,
      from: '',
      to: '',
      maxBookings: 1,
      timeSlots: [{ startTime: '', endTime: '' }]
    };
  }
}
