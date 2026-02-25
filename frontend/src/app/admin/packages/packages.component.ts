import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { ConceptPackage } from '../../shared/models';

@Component({
  selector: 'app-admin-packages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-serif font-bold text-gray-800">Package Management</h1>
          <p class="text-gray-500 text-sm">Manage concept photoshoot packages</p>
        </div>
        <button (click)="showForm.set(true)" class="btn-primary text-sm">+ Add Package</button>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        @if (loading()) {
          @for (i of [1,2,3,4]; track i) {
            <div class="card p-6 space-y-3">
              <div class="h-6 shimmer rounded w-1/2"></div>
              <div class="h-4 shimmer rounded"></div>
              <div class="h-4 shimmer rounded w-3/4"></div>
            </div>
          }
        } @else {
          @for (pkg of packages(); track pkg.id) {
            <div class="card p-6">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-2xl">{{ conceptEmoji(pkg.conceptType) }}</span>
                    <h3 class="font-serif font-bold text-gray-800 text-lg">{{ pkg.name }}</h3>
                  </div>
                  <span class="badge-sakura text-xs">{{ formatType(pkg.conceptType) }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge text-xs" [class]="pkg.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'">
                    {{ pkg.active ? 'Active' : 'Inactive' }}
                  </span>
                </div>
              </div>

              <p class="text-gray-500 text-sm mb-4 line-clamp-2">{{ pkg.description }}</p>

              <div class="grid grid-cols-2 gap-3 mb-4">
                <div class="bg-sakura-50 rounded-xl p-3">
                  <p class="text-xs text-gray-500">Base Price</p>
                  <p class="font-bold text-sakura-600">{{ pkg.price | number }}đ</p>
                </div>
                <div class="bg-cream-50 rounded-xl p-3">
                  <p class="text-xs text-gray-500">Duration</p>
                  <p class="font-bold text-gray-700">{{ pkg.durationHours }}h</p>
                </div>
                <div class="bg-blue-50 rounded-xl p-3">
                  <p class="text-xs text-gray-500">Photographer Add-on</p>
                  <p class="font-bold text-blue-600">+{{ pkg.photographerFee | number }}đ</p>
                </div>
                <div class="bg-purple-50 rounded-xl p-3">
                  <p class="text-xs text-gray-500">Makeup Add-on</p>
                  <p class="font-bold text-purple-600">+{{ pkg.makeupFee | number }}đ</p>
                </div>
              </div>

              <div class="flex gap-2">
                <button (click)="editPkg(pkg)" class="btn-secondary text-sm flex-1 py-2">Edit</button>
                <button (click)="toggleActive(pkg)"
                        class="text-sm px-4 py-2 rounded-full border-2 transition-all"
                        [class]="pkg.active ? 'border-red-200 text-red-600 hover:bg-red-50' : 'border-green-200 text-green-600 hover:bg-green-50'">
                  {{ pkg.active ? 'Deactivate' : 'Activate' }}
                </button>
              </div>
            </div>
          }
        }
      </div>

      <!-- Add/Edit Modal -->
      @if (showForm()) {
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             (click)="closeForm()">
          <div class="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-8"
               (click)="$event.stopPropagation()">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-serif font-bold text-gray-800">
                {{ editingPkg ? 'Edit Package' : 'New Package' }}
              </h2>
              <button (click)="closeForm()" class="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
            </div>

            <form (ngSubmit)="savePkg()" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <label class="form-label">Name *</label>
                  <input [(ngModel)]="form.name" name="name" required class="form-input">
                </div>
                <div class="col-span-2">
                  <label class="form-label">Slug *</label>
                  <input [(ngModel)]="form.slug" name="slug" required class="form-input" placeholder="sakura-dream">
                </div>
                <div>
                  <label class="form-label">Concept Type *</label>
                  <select [(ngModel)]="form.conceptType" name="conceptType" class="form-input">
                    <option value="SAKURA_DREAM">Sakura Dream</option>
                    <option value="KYOTO_SUNSET">Kyoto Sunset</option>
                    <option value="LANTERN_NIGHT">Lantern Night</option>
                    <option value="ROYAL_VIET_PHUC">Royal Viet Phuc</option>
                  </select>
                </div>
                <div>
                  <label class="form-label">Duration (hours)</label>
                  <input type="number" [(ngModel)]="form.durationHours" name="durationHours" class="form-input">
                </div>
                <div>
                  <label class="form-label">Base Price (VND) *</label>
                  <input type="number" [(ngModel)]="form.price" name="price" required class="form-input">
                </div>
                <div>
                  <label class="form-label">Photographer Fee (VND)</label>
                  <input type="number" [(ngModel)]="form.photographerFee" name="photographerFee" class="form-input">
                </div>
                <div>
                  <label class="form-label">Makeup Fee (VND)</label>
                  <input type="number" [(ngModel)]="form.makeupFee" name="makeupFee" class="form-input">
                </div>
                <div>
                  <label class="form-label">Max Slots/Day</label>
                  <input type="number" [(ngModel)]="form.maxTimeSlotsPerDay" name="maxSlots" class="form-input">
                </div>
              </div>
              <div>
                <label class="form-label">Description</label>
                <textarea [(ngModel)]="form.description" name="description"
                          class="form-input h-24 resize-none"></textarea>
              </div>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" [(ngModel)]="form.active" name="active" class="accent-sakura-500 w-4 h-4">
                <span class="text-sm text-gray-700">Active (visible on website)</span>
              </label>

              <div class="flex gap-3 pt-2">
                <button type="submit" class="btn-primary flex-1" [disabled]="saving()">
                  {{ saving() ? 'Saving...' : (editingPkg ? 'Update' : 'Create') }}
                </button>
                <button type="button" (click)="closeForm()" class="btn-secondary px-6">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  `
})
export class AdminPackagesComponent implements OnInit {
  packages = signal<ConceptPackage[]>([]);
  loading = signal(true);
  showForm = signal(false);
  saving = signal(false);
  editingPkg: ConceptPackage | null = null;

  form = this.defaultForm();

  constructor(private api: ApiService) {}

  ngOnInit() { this.loadPackages(); }

  loadPackages() {
    this.api.getPackages().subscribe({
      next: pkgs => { this.packages.set(pkgs); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  editPkg(pkg: ConceptPackage) {
    this.editingPkg = pkg;
    this.form = {
      name: pkg.name, slug: pkg.slug, description: pkg.description,
      price: pkg.price, durationHours: pkg.durationHours,
      photographerFee: pkg.photographerFee, makeupFee: pkg.makeupFee,
      maxTimeSlotsPerDay: pkg.maxTimeSlotsPerDay,
      conceptType: pkg.conceptType, active: pkg.active,
    };
    this.showForm.set(true);
  }

  toggleActive(pkg: ConceptPackage) {
    this.api.updatePackage(pkg.id, { active: !pkg.active } as any).subscribe({
      next: updated => this.packages.update(list => list.map(p => p.id === updated.id ? updated : p))
    });
  }

  savePkg() {
    this.saving.set(true);
    const save$ = this.editingPkg
      ? this.api.updatePackage(this.editingPkg.id, this.form as any)
      : this.api.createPackage(this.form as any);

    save$.subscribe({
      next: pkg => {
        if (this.editingPkg) {
          this.packages.update(list => list.map(p => p.id === pkg.id ? pkg : p));
        } else {
          this.packages.update(list => [...list, pkg]);
        }
        this.closeForm();
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }

  closeForm() {
    this.showForm.set(false);
    this.editingPkg = null;
    this.form = this.defaultForm();
  }

  defaultForm() {
    return {
      name: '', slug: '', description: '', price: 350000, durationHours: 2,
      photographerFee: 200000, makeupFee: 150000, maxTimeSlotsPerDay: 5,
      conceptType: 'SAKURA_DREAM' as ConceptPackage['conceptType'], active: true,
    };
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
