import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Outfit } from '../../shared/models';

@Component({
  selector: 'app-admin-outfits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-serif font-bold text-gray-800">Outfit Management</h1>
          <p class="text-gray-500 text-sm">{{ outfits().length }} outfits in catalog</p>
        </div>
        <button (click)="showForm.set(true)" class="btn-primary text-sm">
          + Add Outfit
        </button>
      </div>

      <!-- Filter Bar -->
      <div class="card p-4 mb-6 flex flex-wrap gap-3">
        <select [(ngModel)]="filterType" (change)="applyFilter()"
                class="form-input py-2 text-sm w-auto">
          <option value="">All Types</option>
          <option value="KIMONO">Kimono</option>
          <option value="YUKATA">Yukata</option>
          <option value="VIET_PHUC">Viet Phuc</option>
        </select>
        <input type="text" [(ngModel)]="searchTerm" (input)="applyFilter()"
               placeholder="Search outfits..." class="form-input py-2 text-sm flex-1 min-w-48">
      </div>

      <!-- Outfits Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        @if (loading()) {
          @for (i of [1,2,3,4,5,6,7,8]; track i) {
            <div class="card">
              <div class="aspect-[3/4] shimmer"></div>
              <div class="p-4 space-y-2">
                <div class="h-4 shimmer rounded"></div>
                <div class="h-3 shimmer rounded w-2/3"></div>
              </div>
            </div>
          }
        } @else {
          @for (outfit of displayedOutfits(); track outfit.id) {
            <div class="card group">
              <!-- Image -->
              <div class="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-sakura-50 to-cream-100">
                @if (outfit.images && outfit.images.length > 0) {
                  <img [src]="outfit.images[0].imageUrl" [alt]="outfit.name"
                       class="w-full h-full object-cover">
                } @else {
                  <div class="w-full h-full flex items-center justify-center text-6xl opacity-30">👘</div>
                }
                <!-- Overlay actions -->
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200
                            flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button (click)="editOutfit(outfit)"
                          class="bg-white text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-sakura-50">
                    Edit
                  </button>
                  <button (click)="toggleAvailability(outfit)"
                          class="px-3 py-1.5 rounded-lg text-xs font-medium"
                          [class]="outfit.available ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'">
                    {{ outfit.available ? 'Disable' : 'Enable' }}
                  </button>
                </div>
                <!-- Status badge -->
                @if (!outfit.available) {
                  <div class="absolute top-2 right-2">
                    <span class="badge bg-red-100 text-red-600 text-xs">Unavailable</span>
                  </div>
                }
                @if (outfit.trending) {
                  <div class="absolute top-2 left-2">
                    <span class="badge bg-yellow-100 text-yellow-700 text-xs">🔥 Hot</span>
                  </div>
                }
              </div>
              <!-- Info -->
              <div class="p-4">
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <h3 class="font-semibold text-gray-800 text-sm">{{ outfit.name }}</h3>
                    <p class="text-xs text-gray-400">{{ outfit.code }}</p>
                  </div>
                  <div class="w-5 h-5 rounded-full border-2 border-white shadow-sm flex-shrink-0 mt-0.5"
                       [style.background]="outfit.colorHex || '#FFB7C5'"></div>
                </div>
                <div class="flex items-center justify-between mt-2">
                  <span class="text-sakura-600 font-bold text-sm">{{ outfit.price | number }}đ</span>
                  <span class="badge-sakura text-xs">{{ formatType(outfit.outfitType) }}</span>
                </div>
                @if (outfit.sizes && outfit.sizes.length > 0) {
                  <div class="flex gap-1 mt-2 flex-wrap">
                    @for (size of outfit.sizes.slice(0, 4); track size.id) {
                      <span class="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{{ size.sizeLabel }}</span>
                    }
                  </div>
                }
              </div>
            </div>
          }
        }
      </div>

      <!-- Add/Edit Form Modal -->
      @if (showForm()) {
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             (click)="closeForm()">
          <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
               (click)="$event.stopPropagation()">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-serif font-bold text-gray-800">
                {{ editingOutfit ? 'Edit Outfit' : 'Add New Outfit' }}
              </h2>
              <button (click)="closeForm()" class="text-gray-400 hover:text-gray-600 text-2xl">✕</button>
            </div>

            <form (ngSubmit)="saveOutfit()" class="space-y-5">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="form-label">Name *</label>
                  <input [(ngModel)]="form.name" name="name" required class="form-input" placeholder="Outfit name">
                </div>
                <div>
                  <label class="form-label">Code *</label>
                  <input [(ngModel)]="form.code" name="code" required class="form-input" placeholder="KM-001">
                </div>
                <div>
                  <label class="form-label">Type *</label>
                  <select [(ngModel)]="form.outfitType" name="outfitType" class="form-input">
                    <option value="KIMONO">Kimono</option>
                    <option value="YUKATA">Yukata</option>
                    <option value="VIET_PHUC">Viet Phuc</option>
                  </select>
                </div>
                <div>
                  <label class="form-label">Price (VND) *</label>
                  <input type="number" [(ngModel)]="form.price" name="price" required class="form-input">
                </div>
                <div>
                  <label class="form-label">Color Name</label>
                  <input [(ngModel)]="form.color" name="color" class="form-input" placeholder="Pink">
                </div>
                <div>
                  <label class="form-label">Color Hex</label>
                  <div class="flex gap-2">
                    <input type="color" [(ngModel)]="form.colorHex" name="colorHex" class="w-12 h-12 rounded cursor-pointer border border-gray-200">
                    <input [(ngModel)]="form.colorHex" name="colorHexText" class="form-input flex-1" placeholder="#FFB7C5">
                  </div>
                </div>
              </div>

              <div>
                <label class="form-label">Description</label>
                <textarea [(ngModel)]="form.description" name="description"
                          class="form-input h-24 resize-none" placeholder="Outfit description..."></textarea>
              </div>

              <div class="flex gap-6">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" [(ngModel)]="form.isTrending" name="isTrending" class="accent-sakura-500 w-4 h-4">
                  <span class="text-sm text-gray-700">Mark as Trending 🔥</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" [(ngModel)]="form.available" name="available" class="accent-sakura-500 w-4 h-4">
                  <span class="text-sm text-gray-700">Available for Rent</span>
                </label>
              </div>

              <!-- Existing images (edit mode) -->
              @if (editingOutfit && editingOutfit.images && editingOutfit.images.length > 0) {
                <div>
                  <label class="form-label">Current Images</label>
                  <div class="flex gap-2 flex-wrap">
                    @for (img of editingOutfit.images; track img.id) {
                      <div class="relative group w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                        <img [src]="img.imageUrl" [alt]="img.altText || ''" class="w-full h-full object-cover">
                        <button (click)="deleteImage(img.id)"
                                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                                       transition-opacity flex items-center justify-center text-white text-xs font-medium">
                          Delete
                        </button>
                      </div>
                    }
                  </div>
                </div>
              }

              <div>
                <label class="form-label">{{ editingOutfit ? 'Add More Images' : 'Upload Images' }}</label>
                <div class="border-2 border-dashed border-sakura-200 rounded-xl p-6 text-center cursor-pointer
                            hover:border-sakura-400 hover:bg-sakura-50 transition-colors"
                     (click)="fileInput.click()">
                  <p class="text-4xl mb-2">📸</p>
                  <p class="text-sm text-gray-500">Click to upload images (JPG, PNG)</p>
                  <p class="text-xs text-gray-400 mt-1">First image will be the primary photo</p>
                </div>
                <input #fileInput type="file" multiple accept="image/*" class="hidden"
                       (change)="onFilesSelected($event)">
                @if (selectedFiles.length > 0) {
                  <div class="flex gap-2 mt-3 flex-wrap">
                    @for (file of selectedFiles; track file.name) {
                      <div class="bg-sakura-50 border border-sakura-200 rounded-lg px-3 py-1.5 text-xs text-sakura-700 flex items-center gap-1">
                        📎 {{ file.name }}
                      </div>
                    }
                  </div>
                }
              </div>

              @if (formError()) {
                <div class="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm">
                  {{ formError() }}
                </div>
              }

              <div class="flex gap-3 pt-2">
                <button type="submit" class="btn-primary flex-1" [disabled]="saving()">
                  {{ saving() ? 'Saving...' : (editingOutfit ? 'Update Outfit' : 'Create Outfit') }}
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
export class AdminOutfitsComponent implements OnInit {
  outfits = signal<Outfit[]>([]);
  displayedOutfits = signal<Outfit[]>([]);
  loading = signal(true);
  showForm = signal(false);
  saving = signal(false);
  formError = signal('');

  filterType = '';
  searchTerm = '';
  editingOutfit: Outfit | null = null;
  selectedFiles: File[] = [];

  form = this.defaultForm();

  constructor(private api: ApiService) {}

  ngOnInit() { this.loadOutfits(); }

  loadOutfits() {
    this.api.getAdminOutfits().subscribe({
      next: outfits => { this.outfits.set(outfits); this.applyFilter(); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  applyFilter() {
    let list = [...this.outfits()];
    if (this.filterType) list = list.filter(o => o.outfitType === this.filterType);
    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      list = list.filter(o => o.name.toLowerCase().includes(q) || o.code.toLowerCase().includes(q));
    }
    this.displayedOutfits.set(list);
  }

  editOutfit(outfit: Outfit) {
    this.editingOutfit = outfit;
    this.form = {
      name: outfit.name, code: outfit.code, outfitType: outfit.outfitType,
      color: outfit.color, colorHex: outfit.colorHex, price: outfit.price,
      description: outfit.description, isTrending: outfit.trending, available: outfit.available,
    };
    this.showForm.set(true);
  }

  toggleAvailability(outfit: Outfit) {
    this.api.updateOutfit(outfit.id, { available: !outfit.available } as any).subscribe({
      next: updated => {
        this.outfits.update(list => list.map(o => o.id === outfit.id ? updated : o));
        this.applyFilter();
      }
    });
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFiles = input.files ? Array.from(input.files) : [];
  }

  saveOutfit() {
    this.saving.set(true);
    this.formError.set('');

    if (this.editingOutfit) {
      const outfitId = this.editingOutfit.id;
      this.api.updateOutfit(outfitId, this.form as any).subscribe({
        next: updated => {
          if (this.selectedFiles.length > 0) {
            this.api.addOutfitImages(outfitId, this.selectedFiles).subscribe({
              next: withImages => {
                this.outfits.update(list => list.map(o => o.id === withImages.id ? withImages : o));
                this.applyFilter();
                this.closeForm();
                this.saving.set(false);
              },
              error: () => {
                this.outfits.update(list => list.map(o => o.id === updated.id ? updated : o));
                this.applyFilter();
                this.closeForm();
                this.saving.set(false);
              }
            });
          } else {
            this.outfits.update(list => list.map(o => o.id === updated.id ? updated : o));
            this.applyFilter();
            this.closeForm();
            this.saving.set(false);
          }
        },
        error: () => { this.formError.set('Update failed'); this.saving.set(false); }
      });
    } else {
      const fd = new FormData();
      Object.entries(this.form).forEach(([k, v]) => fd.append(k, String(v)));
      this.selectedFiles.forEach(f => fd.append('images', f));

      this.api.createOutfit(fd).subscribe({
        next: created => {
          this.outfits.update(list => [created, ...list]);
          this.applyFilter();
          this.closeForm();
          this.saving.set(false);
        },
        error: () => { this.formError.set('Create failed'); this.saving.set(false); }
      });
    }
  }

  deleteImage(imageId: number) {
    if (!confirm('Delete this image?')) return;
    this.api.deleteOutfitImage(imageId).subscribe({
      next: () => {
        if (this.editingOutfit) {
          this.editingOutfit = {
            ...this.editingOutfit,
            images: this.editingOutfit.images.filter(img => img.id !== imageId)
          };
        }
      }
    });
  }

  closeForm() {
    this.showForm.set(false);
    this.editingOutfit = null;
    this.form = this.defaultForm();
    this.selectedFiles = [];
    this.formError.set('');
  }

  defaultForm() {
    return { name: '', code: '', outfitType: 'KIMONO' as Outfit['outfitType'],
             color: '', colorHex: '#FFB7C5', price: 350000, description: '',
             isTrending: false, available: true };
  }

  formatType(type: string): string {
    return { KIMONO: 'Kimono', YUKATA: 'Yukata', VIET_PHUC: 'Viet Phuc' }[type] ?? type;
  }
}
