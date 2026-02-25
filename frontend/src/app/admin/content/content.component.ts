import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Banner, InstagramPost, Review } from '../../shared/models';

@Component({
  selector: 'app-admin-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <div class="mb-6">
        <h1 class="text-2xl font-serif font-bold text-gray-800">Content Management</h1>
        <p class="text-gray-500 text-sm">Manage homepage banners, Instagram feed, and reviews</p>
      </div>

      <!-- Tabs -->
      <div class="flex gap-2 mb-8 border-b border-gray-100">
        @for (tab of tabs; track tab.value) {
          <button (click)="activeTab = tab.value"
                  class="px-5 py-3 text-sm font-medium border-b-2 transition-colors"
                  [class]="activeTab === tab.value
                    ? 'border-sakura-500 text-sakura-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'">
            {{ tab.icon }} {{ tab.label }}
          </button>
        }
      </div>

      <!-- ==================== BANNERS ==================== -->
      @if (activeTab === 'banners') {
        <div>
          <div class="flex justify-end mb-5">
            <button (click)="showBannerForm.set(true)" class="btn-primary text-sm">+ Add Banner</button>
          </div>

          <div class="space-y-4">
            @for (banner of banners(); track banner.id) {
              <div class="card p-5 flex items-center gap-5">
                <div class="w-32 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img [src]="banner.imageUrl" [alt]="banner.title" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-800">{{ banner.title }}</h3>
                  <p class="text-sm text-gray-500 mt-1">{{ banner.subtitle }}</p>
                  <div class="flex items-center gap-3 mt-2">
                    <span class="badge text-xs" [class]="banner.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'">
                      {{ banner.active ? 'Active' : 'Hidden' }}
                    </span>
                    <span class="text-xs text-gray-400">Order: {{ banner.sortOrder }}</span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button (click)="editBanner(banner)" class="btn-secondary text-xs py-1.5 px-3">Edit</button>
                  <button (click)="deleteBanner(banner.id)" class="text-xs px-3 py-1.5 rounded-full border-2 border-red-200 text-red-600 hover:bg-red-50">Delete</button>
                </div>
              </div>
            }
          </div>

          <!-- Banner Form Modal -->
          @if (showBannerForm()) {
            <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                 (click)="showBannerForm.set(false)">
              <div class="bg-white rounded-2xl max-w-lg w-full p-8" (click)="$event.stopPropagation()">
                <h3 class="text-xl font-serif font-bold text-gray-800 mb-6">
                  {{ editingBanner ? 'Edit Banner' : 'New Banner' }}
                </h3>
                <form (ngSubmit)="saveBanner()" class="space-y-4">
                  <div>
                    <label class="form-label">Title</label>
                    <input [(ngModel)]="bannerForm.title" name="title" class="form-input">
                  </div>
                  <div>
                    <label class="form-label">Subtitle</label>
                    <input [(ngModel)]="bannerForm.subtitle" name="subtitle" class="form-input">
                  </div>
                  <div>
                    <label class="form-label">Image URL *</label>
                    <input [(ngModel)]="bannerForm.imageUrl" name="imageUrl" required class="form-input" placeholder="/assets/images/banner.jpg">
                  </div>
                  <div>
                    <label class="form-label">CTA Text</label>
                    <input [(ngModel)]="bannerForm.ctaText" name="ctaText" class="form-input">
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="form-label">Sort Order</label>
                      <input type="number" [(ngModel)]="bannerForm.sortOrder" name="sortOrder" class="form-input">
                    </div>
                    <div class="flex items-end pb-1">
                      <label class="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" [(ngModel)]="bannerForm.active" name="active" class="accent-sakura-500 w-4 h-4">
                        <span class="text-sm text-gray-700">Active</span>
                      </label>
                    </div>
                  </div>
                  <div class="flex gap-3">
                    <button type="submit" class="btn-primary flex-1">Save</button>
                    <button type="button" (click)="showBannerForm.set(false); editingBanner = null" class="btn-secondary px-6">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          }
        </div>
      }

      <!-- ==================== INSTAGRAM ==================== -->
      @if (activeTab === 'instagram') {
        <div>
          <div class="flex justify-end mb-5">
            <button (click)="showIgForm.set(true)" class="btn-primary text-sm">+ Add Post</button>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            @for (post of instagramPosts(); track post.id) {
              <div class="card group overflow-hidden">
                <div class="aspect-square relative bg-gray-100">
                  <img [src]="post.imageUrl" [alt]="post.caption || ''" class="w-full h-full object-cover">
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors
                              flex items-center justify-center opacity-0 group-hover:opacity-100 gap-2">
                    <button (click)="deletePost(post.id)"
                            class="bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg">Delete</button>
                  </div>
                </div>
                <div class="p-3">
                  <p class="text-xs text-gray-500 truncate">{{ post.username }}</p>
                  <p class="text-xs text-sakura-500">❤️ {{ post.likes }}</p>
                </div>
              </div>
            }
          </div>

          <!-- Instagram Form Modal -->
          @if (showIgForm()) {
            <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                 (click)="showIgForm.set(false)">
              <div class="bg-white rounded-2xl max-w-lg w-full p-8" (click)="$event.stopPropagation()">
                <h3 class="text-xl font-serif font-bold text-gray-800 mb-6">Add Instagram Post</h3>
                <form (ngSubmit)="savePost()" class="space-y-4">
                  <div>
                    <label class="form-label">Image URL *</label>
                    <input [(ngModel)]="igForm.imageUrl" name="imageUrl" required class="form-input">
                  </div>
                  <div>
                    <label class="form-label">Instagram Link</label>
                    <input [(ngModel)]="igForm.instagramUrl" name="instaUrl" class="form-input">
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="form-label">Username</label>
                      <input [(ngModel)]="igForm.username" name="username" class="form-input" placeholder="@username">
                    </div>
                    <div>
                      <label class="form-label">Likes</label>
                      <input type="number" [(ngModel)]="igForm.likes" name="likes" class="form-input">
                    </div>
                  </div>
                  <div class="flex gap-3">
                    <button type="submit" class="btn-primary flex-1">Add Post</button>
                    <button type="button" (click)="showIgForm.set(false)" class="btn-secondary px-6">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          }
        </div>
      }

      <!-- ==================== REVIEWS ==================== -->
      @if (activeTab === 'reviews') {
        <div class="space-y-4">
          @for (review of reviews(); track review.id) {
            <div class="card p-5 flex items-start gap-5" [class.opacity-50]="!review.visible">
              <div class="w-10 h-10 bg-sakura-100 rounded-full flex items-center justify-center text-sakura-600 font-bold flex-shrink-0">
                {{ review.customerName[0] }}
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="font-semibold text-gray-800">{{ review.customerName }}</span>
                  <span class="text-xs text-sakura-500">{{ review.packageName }}</span>
                  <div class="flex">
                    @for (s of [1,2,3,4,5]; track s) {
                      <span [class]="s <= review.rating ? 'text-yellow-400' : 'text-gray-200'" class="text-sm">★</span>
                    }
                  </div>
                </div>
                <p class="text-gray-600 text-sm">{{ review.content }}</p>
              </div>
              <div class="flex gap-2 flex-shrink-0">
                <span class="badge text-xs" [class]="review.visible ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'">
                  {{ review.visible ? 'Visible' : 'Hidden' }}
                </span>
                <button (click)="toggleReview(review.id)"
                        class="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50">
                  {{ review.visible ? 'Hide' : 'Show' }}
                </button>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `
})
export class AdminContentComponent implements OnInit {
  banners = signal<Banner[]>([]);
  instagramPosts = signal<InstagramPost[]>([]);
  reviews = signal<Review[]>([]);

  showBannerForm = signal(false);
  showIgForm = signal(false);

  activeTab = 'banners';
  editingBanner: Banner | null = null;

  tabs = [
    { value: 'banners', label: 'Banners', icon: '🖼️' },
    { value: 'instagram', label: 'Instagram Feed', icon: '📸' },
    { value: 'reviews', label: 'Reviews', icon: '⭐' },
  ];

  bannerForm: Partial<Banner> = this.defaultBannerForm();
  igForm: Partial<InstagramPost> = { imageUrl: '', instagramUrl: '', username: '', likes: 0 };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getBanners().subscribe({ next: b => this.banners.set(b), error: () => {} });
    this.api.getInstagramPosts().subscribe({ next: p => this.instagramPosts.set(p), error: () => {} });
    this.api.getReviews().subscribe({ next: r => this.reviews.set(r), error: () => {} });
  }

  editBanner(banner: Banner) {
    this.editingBanner = banner;
    this.bannerForm = { ...banner };
    this.showBannerForm.set(true);
  }

  saveBanner() {
    if (this.editingBanner) {
      this.api.updateBanner(this.editingBanner.id, this.bannerForm).subscribe({
        next: b => {
          this.banners.update(list => list.map(x => x.id === b.id ? b : x));
          this.showBannerForm.set(false);
          this.editingBanner = null;
        }
      });
    } else {
      this.api.createBanner(this.bannerForm).subscribe({
        next: b => {
          this.banners.update(list => [...list, b]);
          this.showBannerForm.set(false);
          this.bannerForm = this.defaultBannerForm();
        }
      });
    }
  }

  deleteBanner(id: number) {
    if (!confirm('Delete this banner?')) return;
    this.api.deleteBanner(id).subscribe({
      next: () => this.banners.update(list => list.filter(b => b.id !== id))
    });
  }

  savePost() {
    this.api.createInstagramPost(this.igForm).subscribe({
      next: p => {
        this.instagramPosts.update(list => [...list, p]);
        this.showIgForm.set(false);
        this.igForm = { imageUrl: '', instagramUrl: '', username: '', likes: 0 };
      }
    });
  }

  deletePost(id: number) {
    if (!confirm('Delete this post?')) return;
    this.api.deleteInstagramPost(id).subscribe({
      next: () => this.instagramPosts.update(list => list.filter(p => p.id !== id))
    });
  }

  toggleReview(id: number) {
    this.reviews.update(list => list.map(r => r.id === id ? { ...r, visible: !r.visible } : r));
  }

  defaultBannerForm(): Partial<Banner> {
    return { title: '', subtitle: '', imageUrl: '', ctaText: 'Book Now', active: true, sortOrder: 0 };
  }
}
