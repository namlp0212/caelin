import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <!-- Brand -->
          <div class="md:col-span-1">
            <h3 class="text-2xl font-script font-bold text-sakura-300 mb-3">Caeline</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Dress in Tradition, Shine on Social. Thuê trang phục Kimono, Yukata & Việt Phục
              cho buổi chụp ảnh Instagram & TikTok đẹp nhất của bạn.
            </p>
            <div class="flex gap-4 mt-5">
              <a href="#" class="social-icon" aria-label="Instagram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="TikTok">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold text-white mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a routerLink="/" class="footer-link">Home</a></li>
              <li><a routerLink="/packages" class="footer-link">Concept Packages</a></li>
              <li><a routerLink="/catalog" class="footer-link">Outfit Catalog</a></li>
              <li><a routerLink="/booking" class="footer-link">Book a Photoshoot</a></li>
            </ul>
          </div>

          <!-- Collections -->
          <div>
            <h4 class="font-semibold text-white mb-4">Collections</h4>
            <ul class="space-y-2">
              <li><a routerLink="/catalog" [queryParams]="{type: 'KIMONO'}" class="footer-link">Kimono</a></li>
              <li><a routerLink="/catalog" [queryParams]="{type: 'YUKATA'}" class="footer-link">Yukata</a></li>
              <li><a routerLink="/catalog" [queryParams]="{type: 'VIET_PHUC'}" class="footer-link">Viet Phuc</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-semibold text-white mb-4">Contact</h4>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex gap-2">
                <span>📍</span>
                <span>123 Nguyen Hue, Hoi An, Quang Nam</span>
              </li>
              <li class="flex gap-2">
                <span>📞</span>
                <a href="tel:+84901234567" class="hover:text-sakura-300">0901 234 567</a>
              </li>
              <li class="flex gap-2">
                <span>📧</span>
                <a href="mailto:hello@caeline.vn" class="hover:text-sakura-300">hello&#64;caeline.vn</a>
              </li>
              <li class="flex gap-2">
                <span>🕐</span>
                <span>8:00 AM – 8:00 PM daily</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-500 text-sm">
            &copy; {{ year }} Caeline Rental. All rights reserved.
          </p>
          <div class="flex gap-4 text-sm">
            <a href="#" class="text-gray-500 hover:text-sakura-300 transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-500 hover:text-sakura-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .social-icon {
      @apply text-gray-400 hover:text-sakura-300 transition-colors duration-200;
    }
    .footer-link {
      @apply text-gray-400 hover:text-sakura-300 text-sm transition-colors duration-200;
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
