/**
 * Stone Heritage Mukteshwar — TypeScript Type Definitions
 * 
 * Central type definitions for room inventory, property metadata, direct booking CRO,
 * amenities, operational policies, FAQs, and local experiences.
 * Adheres strictly to .agents/AGENTS.md and schema invariants.
 */

export interface RoomOption {
  id: string;
  name: string;
  slug: string;
  alias?: string;
  subtitle?: string;
  capacity: string;
  maxOccupancy: number;
  minOccupancy?: number;
  bedType: string;
  idealFor: string;
  view: string;
  viewType?: string;
  amenities: string;
  amenitiesList: string[];
  pricePerNight?: number;
  otaPricePerNight?: number;
  directSavings?: string;
  directPerks?: string[];
  image: string;
  alt: string;
  description: string;
  isSuite?: boolean;
  featured?: boolean;
  sizeSqFt?: number;
  bathrooms?: number;
  tag?: string;
}

export type Room = RoomOption;

export interface FeaturedRoom {
  name: string;
  tag?: string;
  image: string;
  alt: string;
  description: string;
  slug?: string;
}

export interface AmenityCategory {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface AmenityFeature {
  name: string;
  value: boolean;
  category?: 'comfort' | 'connectivity' | 'dining' | 'outdoors' | 'wellness';
}

export interface ResortService {
  title: string;
  icon: string;
  description: string;
  features?: string[];
}

export type PropertyService = ResortService;

export interface LocalExperience {
  id: string;
  name: string;
  distance: string;
  category: 'Spiritual' | 'Nature' | 'Adventure' | 'Sightseeing' | 'Heritage' | string;
  description: string;
  tag?: string;
  image?: string;
  alt?: string;
}

export type Attraction = LocalExperience;

export interface FAQItem {
  question: string;
  answer: string;
  category?: "Booking & Tariffs" | "Rooms & Cottages" | "Dining & Food" | "Location & Transit" | "Policies & Amenities" | "Workation & WiFi" | string;
}

export interface Testimonial {
  name: string;
  rating: number;
  source: string;
  date?: string;
  comment?: string;
  text?: string;
  role?: string;
  location?: string;
  image?: string;
}

export interface WhatsAppLinkOptions {
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  source?: string;
  utmCampaign?: string;
  gclid?: string;
  guestNote?: string;
}

export interface PropertyAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface RatingSummary {
  ratingValue: string | number;
  reviewCount: number | string;
  bestRating: string;
  worstRating: string;
  source?: string;
}

export interface PropertyDetails {
  brandName: string;
  shortName: string;
  alternateNames: string[];
  tagline: string;
  description: string;
  entityType: readonly string[];
  url: string;
  siteOrigin: string;
  logo: string;
  elevation: string;
  totalRooms: number;
  priceRange: string;
  currenciesAccepted: string;
  paymentAccepted: string;
  petsAllowed: boolean;
  rating: RatingSummary;
  address: PropertyAddress;
  geo: GeoCoordinates;
  hasMap: string;
  founder: {
    name: string;
    role: string;
    id: string;
  };
  gtmContainerId: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  x?: string;
  twitter?: string;
  pinterest?: string;
  linkedin?: string;
  tripadvisor?: string;
  googleTravel?: string;
}

export interface TransitHighlights {
  delhiNcrDrive?: string;
  kathgodamRailhead?: string;
  pantnagarAirport?: string;
  kainchiDham?: string;
  mukteshwarDham?: string;
}

export interface ContactDetails {
  primaryPhone: string;
  primaryPhoneDisplay: string;
  secondaryPhone: string;
  secondaryPhoneDisplay: string;
  whatsappNumber: string;
  email: string;
  socialLinks: SocialLinks;
}

export interface DiningPolicy {
  onSiteDining: boolean;
  kitchenType: string;
  cuisine: string;
  breakfastAvailable: boolean;
  description: string;
}

export interface OperationalPolicies {
  checkInTime: string;
  checkInDisplay: string;
  checkOutTime: string;
  checkOutDisplay: string;
  dining: DiningPolicy;
  petsAllowed: boolean;
  petPolicy: string;
  cancellationPolicy: string;
  powerBackup: boolean;
  hotWater: string;
}

export interface SisterProperty {
  name: string;
  type: string;
  url: string;
  location: string;
  description: string;
  gtmContainerId?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'rooms' | 'views' | 'experiences';
  categoryLabel: string;
  featured?: boolean;
}
