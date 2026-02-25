// ============================================================
// Shared Models
// ============================================================

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  errors?: any;
}

export interface Outfit {
  id: number;
  name: string;
  code: string;
  outfitType: 'KIMONO' | 'YUKATA' | 'VIET_PHUC';
  color: string;
  colorHex: string;
  price: number;
  description: string;
  trending: boolean;
  available: boolean;
  images: OutfitImage[];
  sizes: OutfitSize[];
  createdAt: string;
}

export interface OutfitImage {
  id: number;
  imageUrl: string;
  altText: string;
  primary: boolean;
  sortOrder: number;
}

export interface OutfitSize {
  id: number;
  sizeLabel: string;
  sizeDescription: string;
  availableQuantity: number;
}

export interface ConceptPackage {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  durationHours: number;
  includesPhotographer: boolean;
  includesMakeup: boolean;
  photographerFee: number;
  makeupFee: number;
  maxTimeSlotsPerDay: number;
  thumbnailUrl: string;
  backgroundUrl: string;
  conceptType: 'SAKURA_DREAM' | 'KYOTO_SUNSET' | 'LANTERN_NIGHT' | 'ROYAL_VIET_PHUC';
  active: boolean;
  outfits: Outfit[];
}

export interface TimeSlot {
  id: number;
  packageId: number;
  slotDate: string;
  startTime: string;
  endTime: string;
  maxBookings: number;
  currentBookings: number;
  blocked: boolean;
  available: boolean;
}

export interface Booking {
  id: number;
  bookingCode: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  conceptPackage: ConceptPackage;
  outfit: Outfit;
  outfitSize: string;
  timeSlot: TimeSlot;
  bookingDate: string;
  startTime: string;
  endTime: string;
  includesPhotographer: boolean;
  includesMakeup: boolean;
  numPeople: number;
  specialRequests: string;
  subtotal: number;
  photographerFee: number;
  makeupFee: number;
  totalAmount: number;
  depositAmount: number;
  depositPaid: boolean;
  paymentMethod: 'MOMO' | 'VNPAY' | 'CASH';
  paymentTransactionId: string;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  notes: string;
  createdAt: string;
}

export interface BookingRequest {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  packageId: number;
  outfitId?: number;
  outfitSize?: string;
  timeSlotId: number;
  bookingDate: string;
  includesPhotographer: boolean;
  includesMakeup: boolean;
  numPeople: number;
  specialRequests?: string;
  paymentMethod: 'MOMO' | 'VNPAY' | 'CASH';
}

export interface Review {
  id: number;
  customerName: string;
  customerAvatar?: string;
  rating: number;
  content: string;
  packageName: string;
  visible: boolean;
  featured: boolean;
  createdAt: string;
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  videoUrl?: string;
  ctaText: string;
  ctaLink: string;
  active: boolean;
  sortOrder: number;
}

export interface InstagramPost {
  id: number;
  imageUrl: string;
  instagramUrl: string;
  username: string;
  caption: string;
  likes: number;
  active: boolean;
  sortOrder: number;
}

export interface DashboardStats {
  totalBookings: number;
  monthlyBookings: number;
  lastMonthBookings: number;
  monthlyRevenue: number;
  popularPackages: { name: string; count: number }[];
  totalOutfits: number;
  trendingOutfits: number;
}

export interface AuthUser {
  id?: number;
  username: string;
  email: string;
  fullName: string;
  role: 'ADMIN' | 'STAFF';
  token: string;
}
