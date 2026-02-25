import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ApiResponse, Outfit, ConceptPackage, TimeSlot, Booking, BookingRequest,
  Review, Banner, InstagramPost, DashboardStats, AuthUser
} from '../../shared/models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private get<T>(path: string, params?: any): Observable<T> {
    const options = params ? { params: new HttpParams({ fromObject: params }) } : {};
    return this.http.get<ApiResponse<T>>(`${this.base}${path}`, options)
      .pipe(map(r => r.data));
  }

  private post<T>(path: string, body: any): Observable<T> {
    return this.http.post<ApiResponse<T>>(`${this.base}${path}`, body)
      .pipe(map(r => r.data));
  }

  private put<T>(path: string, body: any): Observable<T> {
    return this.http.put<ApiResponse<T>>(`${this.base}${path}`, body)
      .pipe(map(r => r.data));
  }

  private delete<T>(path: string): Observable<T> {
    return this.http.delete<ApiResponse<T>>(`${this.base}${path}`)
      .pipe(map(r => r.data));
  }

  // Auth
  login(username: string, password: string): Observable<AuthUser> {
    return this.post<AuthUser>('/auth/login', { username, password });
  }

  getMe(): Observable<AuthUser> {
    return this.get<AuthUser>('/auth/me');
  }

  // Outfits
  getOutfits(filters?: { type?: string; color?: string; minPrice?: number; maxPrice?: number }): Observable<Outfit[]> {
    return this.get<Outfit[]>('/outfits', filters);
  }

  getTrendingOutfits(): Observable<Outfit[]> {
    return this.get<Outfit[]>('/outfits/trending');
  }

  getOutfitById(id: number): Observable<Outfit> {
    return this.get<Outfit>(`/outfits/${id}`);
  }

  createOutfit(formData: FormData): Observable<Outfit> {
    return this.http.post<ApiResponse<Outfit>>(`${this.base}/outfits`, formData)
      .pipe(map(r => r.data));
  }

  updateOutfit(id: number, data: Partial<Outfit>): Observable<Outfit> {
    return this.put<Outfit>(`/outfits/${id}`, data);
  }

  deleteOutfit(id: number): Observable<void> {
    return this.delete<void>(`/outfits/${id}`);
  }

  // Packages
  getPackages(): Observable<ConceptPackage[]> {
    return this.get<ConceptPackage[]>('/packages');
  }

  getPackageById(id: number): Observable<ConceptPackage> {
    return this.get<ConceptPackage>(`/packages/${id}`);
  }

  getPackageBySlug(slug: string): Observable<ConceptPackage> {
    return this.get<ConceptPackage>(`/packages/slug/${slug}`);
  }

  getAvailableSlots(packageId: number, from: string, to: string): Observable<TimeSlot[]> {
    return this.get<TimeSlot[]>(`/packages/${packageId}/slots`, { from, to });
  }

  getAdminSlots(packageId: number, from: string, to: string): Observable<TimeSlot[]> {
    return this.get<TimeSlot[]>('/slots', { packageId, from, to });
  }

  generateSlots(request: {
    packageId: number; from: string; to: string;
    timeSlots: { startTime: string; endTime: string }[]; maxBookings: number;
  }): Observable<TimeSlot[]> {
    return this.post<TimeSlot[]>('/slots/generate', request);
  }

  blockSlot(id: number, blocked: boolean): Observable<TimeSlot> {
    return this.put<TimeSlot>(`/slots/${id}/block`, { blocked });
  }

  deleteSlot(id: number): Observable<void> {
    return this.delete<void>(`/slots/${id}`);
  }

  deleteSlotRange(packageId: number, from: string, to: string): Observable<void> {
    return this.http.delete<ApiResponse<void>>(
      `${this.base}/slots/bulk`,
      { params: new HttpParams({ fromObject: { packageId: String(packageId), from, to } }) }
    ).pipe(map(r => r.data));
  }

  createPackage(pkg: Partial<ConceptPackage>): Observable<ConceptPackage> {
    return this.post<ConceptPackage>('/packages', pkg);
  }

  updatePackage(id: number, pkg: Partial<ConceptPackage>): Observable<ConceptPackage> {
    return this.put<ConceptPackage>(`/packages/${id}`, pkg);
  }

  deletePackage(id: number): Observable<void> {
    return this.delete<void>(`/packages/${id}`);
  }

  // Bookings
  createBooking(request: BookingRequest): Observable<Booking> {
    return this.post<Booking>('/bookings/create', request);
  }

  getBookingByCode(code: string): Observable<Booking> {
    return this.get<Booking>(`/bookings/code/${code}`);
  }

  getAllBookings(from?: string, to?: string): Observable<Booking[]> {
    return this.get<Booking[]>('/bookings', from && to ? { from, to } : undefined);
  }

  updateBookingStatus(id: number, status: string): Observable<Booking> {
    return this.put<Booking>(`/bookings/${id}/status`, { status });
  }

  // Reviews
  getReviews(featuredOnly = false): Observable<Review[]> {
    return this.get<Review[]>('/reviews', featuredOnly ? { featuredOnly: 'true' } : undefined);
  }

  // Banners
  getBanners(): Observable<Banner[]> {
    return this.get<Banner[]>('/banners');
  }

  createBanner(banner: Partial<Banner>): Observable<Banner> {
    return this.post<Banner>('/banners', banner);
  }

  updateBanner(id: number, banner: Partial<Banner>): Observable<Banner> {
    return this.put<Banner>(`/banners/${id}`, banner);
  }

  deleteBanner(id: number): Observable<void> {
    return this.delete<void>(`/banners/${id}`);
  }

  // Instagram
  getInstagramPosts(): Observable<InstagramPost[]> {
    return this.get<InstagramPost[]>('/instagram');
  }

  createInstagramPost(post: Partial<InstagramPost>): Observable<InstagramPost> {
    return this.post<InstagramPost>('/instagram', post);
  }

  deleteInstagramPost(id: number): Observable<void> {
    return this.delete<void>(`/instagram/${id}`);
  }

  // Dashboard
  getDashboardStats(): Observable<DashboardStats> {
    return this.get<DashboardStats>('/dashboard/stats');
  }

  // Payment
  initiateMomoPayment(bookingCode: string): Observable<any> {
    return this.post<any>('/payment/momo/create', { bookingCode });
  }
}
