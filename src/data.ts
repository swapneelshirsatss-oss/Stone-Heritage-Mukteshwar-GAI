/**
 * Stone Heritage Mukteshwar — Master Hospitality Data Hub
 * 
 * Centralized data repository for property metadata, verified 9-room inventory,
 * high-converting direct booking CRO perks, pure vegetarian dining policies,
 * nearby attractions, testimonials, FAQs, and WhatsApp concierge generators.
 * 
 * Adheres strictly to:
 * - .agents/AGENTS.md (Property Invariants, Rule 10 Room Inventory, Rule 11 Attraction Separation)
 * - Hospitality Direct Booking CRO standards (OTA price disparity, direct booking perks)
 */

import type {
  RoomOption,
  FeaturedRoom,
  AmenityCategory,
  AmenityFeature,
  ResortService,
  LocalExperience,
  FAQItem,
  Testimonial,
  WhatsAppLinkOptions,
  PropertyDetails,
  ContactDetails,
  OperationalPolicies,
  SisterProperty
} from './types';

// Re-export all types so consumers can import types directly from '@/data' if preferred
export type * from './types';

export const RESORT_CONTACT = {
  gbpName: "Stone Heritage Mukteshwar - Luxury Heritage Homestay",
  name: "Stone Heritage Mukteshwar - Luxury Heritage Homestay",
  legalName: "Stone Heritage Mukteshwar",
  brandName: "Stone Heritage Mukteshwar - Luxury Heritage Homestay",
  shortName: "Stone Heritage Mukteshwar",
  alternateNames: [
    "Stone Heritage Resort",
    "Stone Heritage",
    "The Stone Heritage Mukteshwar",
    "Stone Heritage Homestay"
  ],
  tagline: "Authentic Kumaoni Stone Cottage Homestay in Mukteshwar",
  phone: "+91 90278 44424",
  phoneDisplay: "+91 90278 44424",
  phoneGbp: "+91 90278 44424",
  phoneIntl: "+91-9027844424",
  phoneIntlDisplay: "+91 90278 44424",
  phoneRaw: "9027844424",
  phoneTel: "+919027844424",
  secondaryPhone: "+91 79002 00563",
  secondaryPhoneDisplay: "+91 79002 00563",
  secondaryPhoneRaw: "7900200563",
  secondaryPhoneTel: "+917900200563",
  whatsapp: "https://wa.me/919027844424",
  whatsappNumber: "919027844424",
  email: "thestoneheritage@gmail.com",
  domain: "https://thestoneheritage.in/",
  siteOrigin: "https://thestoneheritage.in",
  logo: "https://thestoneheritage.in/Logo.webp",
  streetAddress: "Bhowali Dhanachuli Rd, South Gola Range",
  addressLocality: "Mukteshwar",
  addressRegion: "Uttarakhand",
  postalCode: "263138",
  addressCountry: "IN",
  location: "Bhowali Dhanachuli Rd, South Gola Range, Mukteshwar, Uttarakhand 263138",
  address: "Bhowali Dhanachuli Rd, South Gola Range, Mukteshwar, Uttarakhand 263138",
  geoCoordinates: "29.4346202, 79.6446521",
  latitude: 29.4346202,
  longitude: 79.6446521,
  elevation: "7,500 ft (2,286 m)",
  gmapsLink: "https://maps.google.com/maps?cid=5074157692820223333",
  gmapsCid: "https://maps.google.com/maps?cid=5074157692820223333",
  hasMap: "https://maps.google.com/maps?cid=5074157692820223333",
  totalRooms: 9,
  priceRange: "₹1,500 - ₹15,000",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
  petsAllowed: true,
  rating: {
    value: "4.9",
    ratingValue: 4.9,
    reviewCount: "250+",
    reviewCountNumeric: 250,
    bestRating: "5",
    worstRating: "1",
    source: "Google Reviews",
    ratingUrl: "https://maps.google.com/maps?cid=5074157692820223333"
  },
  otaDisparityCallout: "Save 15–20% Direct vs OTAs (Zero Middleman Commission)",
  directPerks: [
    "Best Rate Guarantee (Save 15–20% vs MakeMyTrip/Booking.com)",
    "Guaranteed 180° Himalayan Mountain View Room Allocation",
    "Complimentary Evening Bonfire Wood Setup",
    "100% Pure Vegetarian Fresh Home-Cooked Kumaoni Breakfast Included (Direct Packages)",
    "Flexible Check-In / Check-Out Timings Upon Availability",
    "Direct WhatsApp Concierge & Personalized Local Trek Assistance"
  ],
  transitHighlights: {
    delhiNcrDrive: "320–340 km (~7.5 – 8 hrs via Moradabad, Haldwani & Bhowali)",
    kathgodamRailhead: "75 km (~2.5 hrs)",
    pantnagarAirport: "100 km (~3.5 hrs)",
    mukteshwarDham: "8.2 km (~20 mins)",
    kainchiDham: "39 km (~75 mins)"
  },
  socials: {
    facebook: "https://www.facebook.com/thestoneheritage/",
    instagram: "https://www.instagram.com/thestoneheritage/",
    youtube: "https://www.youtube.com/@StoneHeritageMukteshwar",
    x: "https://x.com/stone_heritage",
    twitter: "https://x.com/stone_heritage",
    pinterest: "https://in.pinterest.com/thestoneheritage/",
    linkedin: "https://www.linkedin.com/company/stone-heritage-mukteshwar/",
    tripadvisor: "https://www.tripadvisor.in/Hotel_Review-g1162527-d33498951-Reviews-Stone_Heritage_Mukteshwar-Mukteshwar_Nainital_District_Uttarakhand.html"
  },
  gtmContainerId: "GTM-WDVGR88X",
  founder: {
    name: "Akash",
    role: "Founder & Host",
    id: "https://thestoneheritage.in/our-story/#akash"
  },
  description: "Stone Heritage Mukteshwar is a boutique heritage homestay offering handcrafted stone cottages, 180° panoramic Himalayan peak views, pet-friendly gardens, and fresh home-cooked Kumaoni vegetarian dining."
};

export const PROPERTY_CONTACT = RESORT_CONTACT;

/**
 * Property Details structured for Schema.org & SEO Rich Snippets
 */
export const propertyDetails: PropertyDetails = {
  brandName: RESORT_CONTACT.brandName,
  shortName: RESORT_CONTACT.shortName,
  alternateNames: RESORT_CONTACT.alternateNames,
  tagline: RESORT_CONTACT.tagline,
  description: RESORT_CONTACT.description,
  entityType: ["BedAndBreakfast", "Resort", "Hotel"] as const,
  url: RESORT_CONTACT.domain,
  siteOrigin: RESORT_CONTACT.siteOrigin,
  logo: RESORT_CONTACT.logo,
  elevation: RESORT_CONTACT.elevation,
  totalRooms: RESORT_CONTACT.totalRooms,
  priceRange: RESORT_CONTACT.priceRange,
  currenciesAccepted: RESORT_CONTACT.currenciesAccepted,
  paymentAccepted: RESORT_CONTACT.paymentAccepted,
  petsAllowed: RESORT_CONTACT.petsAllowed,
  rating: {
    ratingValue: RESORT_CONTACT.rating.value,
    reviewCount: RESORT_CONTACT.rating.reviewCountNumeric,
    bestRating: RESORT_CONTACT.rating.bestRating,
    worstRating: RESORT_CONTACT.rating.worstRating,
    source: RESORT_CONTACT.rating.source
  },
  address: {
    streetAddress: RESORT_CONTACT.streetAddress,
    addressLocality: RESORT_CONTACT.addressLocality,
    addressRegion: RESORT_CONTACT.addressRegion,
    postalCode: RESORT_CONTACT.postalCode,
    addressCountry: RESORT_CONTACT.addressCountry
  },
  geo: {
    latitude: RESORT_CONTACT.latitude,
    longitude: RESORT_CONTACT.longitude
  },
  hasMap: RESORT_CONTACT.hasMap,
  founder: RESORT_CONTACT.founder,
  gtmContainerId: RESORT_CONTACT.gtmContainerId
};

/**
 * Standard Contact Details (Backwards-Compatible)
 */
export const contactDetails: ContactDetails = {
  primaryPhone: RESORT_CONTACT.phoneTel,
  primaryPhoneDisplay: RESORT_CONTACT.phoneDisplay,
  secondaryPhone: RESORT_CONTACT.secondaryPhoneTel,
  secondaryPhoneDisplay: RESORT_CONTACT.secondaryPhoneDisplay,
  whatsappNumber: RESORT_CONTACT.whatsappNumber,
  email: RESORT_CONTACT.email,
  socialLinks: RESORT_CONTACT.socials
};

/**
 * Operational Policies (Ground Truth — Rule 10B & 10C)
 */
export const operationalPolicies: OperationalPolicies = {
  checkInTime: "13:00",
  checkInDisplay: "13:00 PM (1:00 PM IST)",
  checkOutTime: "11:00",
  checkOutDisplay: "11:00 AM (11:00 AM IST)",
  dining: {
    onSiteDining: true,
    kitchenType: "100% Pure Vegetarian",
    cuisine: "Kumaoni local specialties & North Indian comfort food cooked fresh to order",
    breakfastAvailable: true,
    description: "Fresh home-cooked Food & Breakfast is available daily. 100% Pure Vegetarian kitchen prepared with locally sourced mountain ingredients."
  },
  petsAllowed: true,
  petPolicy: "Pet-friendly property with open mountain lawn grounds and walking trails.",
  cancellationPolicy: "Direct reservation flexibilities with free rescheduling when booked via WhatsApp Concierge.",
  powerBackup: true,
  hotWater: "24x7 Geyser Hot Water"
};

/**
 * 9 Verified Room Inventory Units (Ground Truth — AGENTS.md Rule 10A)
 * Fully typed with Direct-Booking CRO pricing and OTA disparity metrics.
 */
export const ROOMS_INVENTORY: RoomOption[] = [
  {
    id: "brass-room",
    name: "Brass Room",
    slug: "brass-room",
    subtitle: "Heritage Stone Architecture with Himalayan Vistas",
    capacity: "2-3 Guests",
    maxOccupancy: 3,
    minOccupancy: 1,
    bedType: "1 King Size Bed",
    idealFor: "Couples & Small Families",
    view: "Mountain View",
    viewType: "180° Himalayan Peak View",
    amenities: "En-suite Bathroom, Wi-Fi",
    amenitiesList: ["1 King Size Bed", "En-suite Bathroom", "High-Speed Wi-Fi", "Mountain View", "Electric Kettle", "24x7 Hot Water"],
    pricePerNight: 3500,
    otaPricePerNight: 4200,
    directSavings: "Save ₹700 (17%) Direct",
    directPerks: [
      "Save 17% Direct vs OTA platforms",
      "Priority 180° Himalayan ridge view allocation",
      "Complimentary morning Kumaoni herbal tea"
    ],
    image: "/images/rooms/brass-room-homestay-in-mukteshwar.webp",
    alt: "Brass Room featuring a king-size bed and scenic mountain views at Stone Heritage Mukteshwar",
    description: "Charming heritage mountain room featuring 1 King Size Bed, sweeping Himalayan views, and handcrafted boutique comforts.",
    featured: true
  },
  {
    id: "copper-room",
    name: "Copper Room",
    slug: "copper-room",
    subtitle: "Spacious Family-Friendly Haven with Garden Views",
    capacity: "2-4 Guests",
    maxOccupancy: 4,
    minOccupancy: 1,
    bedType: "1 King Size Bed + Sofa cum 1 bed",
    idealFor: "Families",
    view: "Garden View",
    viewType: "Peaceful Orchard & Garden View",
    amenities: "En-suite Bathroom, Wi-Fi",
    amenitiesList: ["1 King Size Bed + Sofa Bed", "En-suite Bathroom", "High-Speed Wi-Fi", "Garden View", "Family Seating", "24x7 Hot Water"],
    pricePerNight: 4200,
    otaPricePerNight: 5000,
    directSavings: "Save ₹800 (16%) Direct",
    directPerks: [
      "Flexible King Bed + Sofa Bed configuration for families",
      "Direct ground-level lawn access for children and pets",
      "Save 16% Direct vs Booking.com & MakeMyTrip"
    ],
    image: "/images/rooms/copper-room.webp",
    alt: "Spacious Copper Room interior with king bed and sofa cum bed, perfect for families",
    description: "Spacious family room featuring 1 King Size Bed + Sofa cum 1 bed with peaceful garden and valley outlook.",
    featured: true
  },
  {
    id: "vintage-stone-room",
    name: "Vintage Stone Room",
    slug: "vintage-stone-room",
    subtitle: "Hand-Chiseled Stone Masonry & Valley Panorama",
    capacity: "2-3 Guests",
    maxOccupancy: 3,
    minOccupancy: 1,
    bedType: "1 King Size Bed",
    idealFor: "Couples & Small Families",
    view: "Valley View",
    viewType: "Sweeping Valley & Forest View",
    amenities: "Heritage Architecture, Wi-Fi",
    amenitiesList: ["1 King Size Bed", "Authentic Stone Masonry", "Valley View", "En-suite Bathroom", "High-Speed Wi-Fi", "24x7 Hot Water"],
    pricePerNight: 3800,
    otaPricePerNight: 4600,
    directSavings: "Save ₹800 (17%) Direct",
    directPerks: [
      "Authentic thick stone walls providing natural climate control",
      "Save 17% Direct vs OTAs",
      "Evening bonfire priority seating"
    ],
    image: "/images/rooms/vintage-room.webp",
    alt: "Vintage Stone Room showing classic heritage architecture and cozy king bedding",
    description: "Authentic stone masonry cottage room featuring 1 King Size Bed, hand-chiseled mountain walls, and scenic valley views.",
    featured: true
  },
  {
    id: "iron-room",
    name: "Iron Room",
    slug: "iron-room",
    subtitle: "Peaceful Garden Sanctuary for Quiet Mountain Living",
    capacity: "2 Guests",
    maxOccupancy: 2,
    minOccupancy: 1,
    bedType: "1 King Size Bed",
    idealFor: "Couples & Peace Seekers",
    view: "Garden View",
    viewType: "Quiet Garden Outlook",
    amenities: "En-suite Bathroom, Wi-Fi",
    amenitiesList: ["1 King Size Bed", "Garden View", "En-suite Bathroom", "High-Speed Wi-Fi", "Quiet Corner Ambience"],
    pricePerNight: 3200,
    otaPricePerNight: 3800,
    directSavings: "Save ₹600 (16%) Direct",
    directPerks: [
      "Quiet corner location ideal for reading and rest",
      "Save 16% Direct vs OTAs",
      "Zero noise disturbances"
    ],
    image: "/images/rooms/iron-room.webp",
    alt: "Cozy Iron Room setup with 1 King Size Bed, ideal for couples staying at Stone Heritage",
    description: "Deluxe room with peaceful garden-facing windows and 1 King Size Bed, ideal for couples seeking quiet mountain serenity."
  },
  {
    id: "cedar-room",
    name: "Cedar Room",
    slug: "cedar-room",
    subtitle: "Aromatic Cedar Wood Deluxe Mountain Escape",
    capacity: "2 Guests",
    maxOccupancy: 2,
    minOccupancy: 1,
    bedType: "1 Queen Size Bed", // Invariant: Never list as King Bed (AGENTS.md Rule 10A)
    idealFor: "Couples & Solo Travellers",
    view: "Forest View",
    viewType: "Aromatic Pine & Oak Forest View",
    amenities: "Wooden Paneling, Wi-Fi",
    amenitiesList: ["1 Queen Size Bed", "Aromatic Wooden Paneling", "Forest View", "En-suite Bathroom", "High-Speed Wi-Fi"],
    pricePerNight: 3600,
    otaPricePerNight: 4300,
    directSavings: "Save ₹700 (16%) Direct",
    directPerks: [
      "Natural Himalayan cedar wood paneling releasing calming essential oils",
      "Save 16% Direct vs Agoda/Booking.com",
      "Cozy thermal warmth year-round"
    ],
    image: "/images/rooms/cedar-room.webp",
    alt: "Cedar Room interior with 1 Queen Size Bed, beautiful wooden paneling and natural light",
    description: "Cozy heritage deluxe room lined with aromatic cedar wood paneling, featuring 1 Queen Size Bed and tranquil forest outlook."
  },
  {
    id: "stonewood-family-retreat",
    name: "Stonewood Family Retreat",
    slug: "stonewood-family-retreat",
    subtitle: "Multi-Generational Luxury Suite with Living Lounge & Private Balcony",
    capacity: "4-6 Guests",
    maxOccupancy: 6,
    minOccupancy: 2,
    bedType: "2 King Size Beds",
    idealFor: "Families & Multi-Generational Groups",
    view: "Panoramic View",
    viewType: "180° Panoramic Mountain & Valley Vistas",
    amenities: "Private Balcony, Wi-Fi",
    amenitiesList: ["2 King Size Beds", "Private Balcony", "Living Lounge Area", "Panoramic Mountain Views", "En-suite Bathroom", "High-Speed Wi-Fi"],
    pricePerNight: 7500,
    otaPricePerNight: 9000,
    directSavings: "Save ₹1,500 (17%) Direct",
    directPerks: [
      "Exclusive multi-room layout with private living lounge",
      "Private panoramic balcony for family stargazing and morning tea",
      "Save ₹1,500 Direct vs MakeMyTrip"
    ],
    image: "/images/rooms/stonewood-family-retreat.webp",
    alt: "Stonewood Family Retreat with two king size beds for multi-generational stays",
    description: "Premium multi-generational family suite with 2 King Size Beds, private living lounge, and panoramic mountain-view balcony.",
    isSuite: true,
    featured: true
  },
  {
    id: "stone-and-story-room",
    name: "Stone and Story Room",
    slug: "stone-and-story-room",
    subtitle: "Artisan Woodcrafted Suite Honoring Kumaoni Storytelling",
    capacity: "2-3 Guests",
    maxOccupancy: 3,
    minOccupancy: 1,
    bedType: "1 King Size Bed",
    idealFor: "Couples & Heritage Lovers",
    view: "Mountain View",
    viewType: "Elevated Himalayan Panorama",
    amenities: "Premium Setup, Wi-Fi",
    amenitiesList: ["1 King Size Bed", "Cedar Wood Interiors", "Mountain View", "Artisan Furnishings", "En-suite Bathroom", "High-Speed Wi-Fi"],
    pricePerNight: 4500,
    otaPricePerNight: 5400,
    directSavings: "Save ₹900 (17%) Direct",
    directPerks: [
      "Custom handcrafted artisan decor and mountain book collection",
      "Save 17% Direct vs OTAs",
      "Complimentary evening tea and local snacks"
    ],
    image: "/images/rooms/stone-and-story-suite-homestay.webp",
    alt: "Stone and Story Room offering 1 King Size Bed and premium comfort in Mukteshwar",
    description: "Cedar wood interior cottage room featuring 1 King Size Bed, mountain views, and artistic Kumaon storytelling aesthetic.",
    featured: true
  },
  {
    id: "himalayan-workation-room",
    name: "Himalayan Workation Room",
    slug: "himalayan-workation-room",
    subtitle: "Dedicated Fiber-Optic Workspace with Snow Peak Inspiration",
    capacity: "1-2 Guests",
    maxOccupancy: 2,
    minOccupancy: 1,
    bedType: "Workstation Setup",
    idealFor: "Remote Workers & Solo Travellers",
    view: "Himalayan View",
    viewType: "Direct Snow Peak Workstation View",
    amenities: "High-Speed Wi-Fi, Desk",
    amenitiesList: ["Dedicated Workstation Setup", "High-Speed Fiber Wi-Fi", "Ergonomic Desk & Chair", "Himalayan Mountain View", "Power Backup"],
    pricePerNight: 2800,
    otaPricePerNight: 3400,
    directSavings: "Save ₹600 (18%) Direct",
    directPerks: [
      "100+ Mbps uninterrupted optical fiber connection",
      "Ergonomic desk and mountain-facing workstation",
      "Long-stay weekly and monthly workation discounts via WhatsApp"
    ],
    image: "/images/property/himalayan-view-terrace-mukteshwar.webp",
    alt: "Outdoor terrace and dedicated workspace for a Himalayan workation at Stone Heritage",
    description: "Dedicated workstation setup with high-speed fiber Wi-Fi, ergonomic desk, and inspiring Himalayan mountain vistas."
  },
  {
    id: "stone-cottage-room",
    name: "Stone Cottage Room",
    slug: "stone-cottage-room",
    alias: "Sunset Heritage Cottage",
    subtitle: "Standalone Private Stone Cottage with Sunset Terrace",
    capacity: "2-4 Guests",
    maxOccupancy: 4,
    minOccupancy: 1,
    bedType: "1 King Size Bed",
    idealFor: "Families & Couples",
    view: "Sunset & Mountain View",
    viewType: "Commanding Sunset & Himalayan Horizon",
    amenities: "Private Terrace, Wi-Fi",
    amenitiesList: ["1 King Size Bed", "Private Terrace Balcony", "Sunset & Mountain Views", "Standalone Cottage Privacy", "En-suite Bathroom", "High-Speed Wi-Fi"],
    pricePerNight: 5500,
    otaPricePerNight: 6600,
    directSavings: "Save ₹1,100 (17%) Direct",
    directPerks: [
      "Complete standalone cottage privacy with zero shared walls",
      "Private terrace balcony facing dramatic golden mountain sunsets",
      "Save ₹1,100 Direct vs OTAs"
    ],
    image: "/images/property/homestay-in-mukteshwar.webp",
    alt: "Stone Cottage Room featuring 1 King Size Bed, private terrace and panoramic mountain views",
    description: "Standalone stone cottage featuring private terrace balcony, 1 King Size Bed, and panoramic mountain sunset views.",
    featured: true
  }
];

export const rooms: RoomOption[] = ROOMS_INVENTORY;
export const ROOM_OPTIONS = ROOMS_INVENTORY;

/**
 * Featured Accommodations for Homepage & Landing Showcase
 */
export const FEATURED_ROOMS: FeaturedRoom[] = [
  {
    name: "Stonewood Family Retreat (Suite)",
    tag: "Built for Multi-Generational Stays",
    image: "/images/rooms/stonewood-family-retreat.webp",
    alt: "Stonewood Family Retreat for multi-generational stays",
    description: "2 King Beds, private balcony & living lounge. Ideal for 4-6 family members.",
    slug: "stonewood-family-retreat"
  },
  {
    name: "Copper & Brass Rooms",
    image: "/images/rooms/copper-room.webp",
    alt: "Spacious Copper Room setup with mountain views, ideal for families staying in Mukteshwar",
    description: "Heritage stone architecture with en-suite bathrooms and flexible bed arrangements.",
    slug: "copper-room"
  },
  {
    name: "Sunset Heritage Cottage",
    image: "/images/property/homestay-in-mukteshwar.webp",
    alt: "Sunset Heritage Cottage featuring private terrace balcony at Stone Heritage",
    description: "Exclusive standalone cottage setup with commanding sunset & valley panoramas.",
    slug: "stone-cottage-room"
  },
  {
    name: "Stone and Story Suite",
    image: "/images/rooms/stone-and-story-suite-homestay.webp",
    alt: "Stone and Story Suite offering premium comfort in Mukteshwar",
    description: "Cedar wood ceiling and artisan craftsmanship paired with modern boutique amenities.",
    slug: "stone-and-story-room"
  }
];

export const featuredRooms = FEATURED_ROOMS;

/**
 * Categorized General Amenities for Rich Sectional Display
 */
export const GENERAL_AMENITIES: AmenityCategory[] = [
  {
    title: "180° Himalayan Peak Panoramas",
    icon: "Mountain",
    description: "Breathtaking unobstructed 180-degree panoramas of the snow-crested Nanda Devi range directly from our ridge cottages and garden terraces.",
    features: [
      "180° Unobstructed Ridge Views of Nanda Devi & Trishul",
      "Snow-Crested Peaks Visible from Room Windows & Balconies",
      "Spectacular Golden Sunrise & Sunset Mountain Vistas Year-Round"
    ]
  },
  {
    title: "100% Pure Vegetarian Kumaoni & North Indian Dining",
    icon: "UtensilsCrossed",
    description: "Freshly prepared home-cooked food and breakfast available daily, blending local Kumaoni mountain recipes with comforting North Indian home cuisine.",
    features: [
      "100% Pure Vegetarian Kitchen Cooked Fresh to Order",
      "Authentic Regional Delicacies (Bhatt ki Churkani, Kumaoni Raita, Aloo ke Gutke)",
      "Farm-Fresh Locally Sourced Organic Vegetables & Mountain Grains"
    ]
  },
  {
    title: "High-Speed Optical Fiber WiFi for Workcations",
    icon: "Wifi",
    description: "Blazing fast 100+ Mbps fiber-optic internet across all rooms, cottages, and outdoor gardens, paired with inverter backup for uninterrupted work.",
    features: [
      "100+ Mbps High-Speed Fiber Internet Connection",
      "Full Power & Inverter Backup for Unbroken Video Calls",
      "Ergonomic Workstation Setup in Himalayan Workation Room"
    ]
  },
  {
    title: "Pet-Friendly Grounds & Mountain Trails",
    icon: "Dog",
    description: "We warmly welcome furry family members! Expansive enclosed mountain lawns and surrounding pine forest paths give pets freedom to explore safely.",
    features: [
      "Spacious Enclosed Mountain Lawns for Dogs to Play",
      "Direct Pine Forest Walking Trail Access from Property Gate",
      "Safe, Peaceful Setting Away from Highway Traffic"
    ]
  },
  {
    title: "24x7 Hot Water, Power Backup & Secure Parking",
    icon: "ShieldCheck",
    description: "Essential mountain utilities executed flawlessly for year-round luxury and peace of mind.",
    features: [
      "24x7 Geyser Hot Water in All En-Suite Bathrooms",
      "Reliable Inverter Power Backup Throughout the Homestay",
      "Free Gated On-Site Private Vehicle Parking"
    ]
  },
  {
    title: "Outdoor Bonfire & Stargazing Lawn",
    icon: "Flame",
    description: "Gather around warm cedar wood open bonfires under pollution-free high-altitude skies for unforgettable Himalayan stargazing evenings.",
    features: [
      "Nightly Bonfire Setup with Mountain Storytelling",
      "Pristine Low Light Pollution Sky for Stargazing & Astrophotography",
      "Outdoor Garden Seating with Sweeping Valley Views"
    ]
  }
];

export const AMENITY_CATEGORIES = GENERAL_AMENITIES;

/**
 * Itemized Property Amenities for Schema & Checklists
 */
export const propertyAmenities: AmenityFeature[] = [
  { name: "High-Speed Fiber WiFi for Workcations", value: true, category: 'connectivity' },
  { name: "Pet-Friendly Accommodation", value: true, category: 'comfort' },
  { name: "Fresh Food & Breakfast Available", value: true, category: 'dining' },
  { name: "Pure Vegetarian Home-Cooked Kumaoni Meals", value: true, category: 'dining' },
  { name: "Panoramic 180° Himalayan Peak View Balconies", value: true, category: 'outdoors' },
  { name: "Outdoor Bonfire & Stargazing Lawn", value: true, category: 'outdoors' },
  { name: "24x7 Geyser Hot Water in All Bathrooms", value: true, category: 'comfort' },
  { name: "Full Power Backup", value: true, category: 'comfort' },
  { name: "Free On-Site Private Parking", value: true, category: 'comfort' }
];

/**
 * Property Services
 */
export const PROPERTY_SERVICES: ResortService[] = [
  {
    title: "Fresh Home-Cooked Dining",
    icon: "Utensils",
    description: "Hot, freshly prepared 100% pure vegetarian Kumaoni specialties and North Indian comfort meals served in our dining hall or outdoor lawn."
  },
  {
    title: "Bonfires & Stargazing",
    icon: "Flame",
    description: "Evening crackling bonfires under clear Himalayan skies with hot tea, snacks, and soulful acoustic conversations."
  },
  {
    title: "Sightseeing & Taxi Coordination",
    icon: "Car",
    description: "Assistance with trusted local cabs for Mukteshwar Dham Temple, Kainchi Dham Ashram, and Kathgodam station transfers."
  },
  {
    title: "Daily Housekeeping",
    icon: "Sparkles",
    description: "Attentive daily room cleaning and fresh linen ensuring your mountain cottage remains fresh and comfortable."
  },
  {
    title: "Guided Village & Orchard Treks",
    icon: "Compass",
    description: "Explore nearby apple and peach orchards, oak forest trails, and local Kumaoni village pathways with local guidance."
  }
];

export const RESORT_SERVICES = PROPERTY_SERVICES;

/**
 * Sister Properties (Sister Network)
 */
export const sisterProperties: SisterProperty[] = [
  {
    name: "The Mukteshwar Villa",
    type: "Boutique Luxury Villa",
    url: "https://themukteshwarvilla.com/",
    location: "Mukteshwar, Uttarakhand",
    gtmContainerId: "GTM-PC5P9B63",
    description: "Boutique luxury sister villa stay in Mukteshwar offering luxury mountain living, private gardens, and personalized hospitality."
  }
];

/**
 * Nearby Attractions — Strictly Preserves Rule 11 Invariant:
 * Mukteshwar Dham Temple and Kainchi Dham Ashram MUST ALWAYS remain two separate entities.
 */
export const LOCAL_EXPERIENCES: LocalExperience[] = [
  {
    id: "mukteshwar-dham-temple",
    name: "Mukteshwar Dham Temple",
    distance: "8.2 km (20-min Drive)",
    category: "Spiritual",
    description: "350-year-old historic Shiva temple situated on Mukteshwar's highest ridge at 7,500 ft with 180° Himalayan views.",
    tag: "Spiritual Landmark",
    image: "/images/experiences/Uttarakhand-Nainital-Mukteshwar-Temple.webp",
    alt: "Historic 350-year-old Mukteshwar Dham Shiva Temple atop the mountain ridge in Mukteshwar, Uttarakhand"
  },
  {
    id: "chauli-ki-jali",
    name: "Chauli Ki Jali",
    distance: "1.5 km (Scenic Walk / 5-min Drive)",
    category: "Adventure",
    description: "Natural rock ledge offering sheer cliff drops, Himalayan vistas, rock climbing, and spiritual sunset panoramas.",
    tag: "Adventure & Sunset",
    image: "/images/experiences/chauli-ki-jali-in-mukteshwar.webp",
    alt: "Chauli Ki Jali cliff rock climbing and sunset vantage point in Mukteshwar"
  },
  {
    id: "kainchi-dham-ashram",
    name: "Kainchi Dham Ashram",
    distance: "39 km (~75-min Drive)",
    category: "Spiritual",
    description: "Renowned Neem Karoli Baba ashram in the serene Bhowali valley, visited by pilgrims and seekers globally.",
    tag: "World-Famous Ashram",
    image: "/images/experiences/Kainchi_dham_mukteshwar.webp",
    alt: "Kainchi Dham Neem Karoli Baba Ashram in Bhowali valley near Mukteshwar"
  },
  {
    id: "bhalu-gaad-waterfall",
    name: "Bhalu Gaad Waterfall",
    distance: "12 km (25-min Drive + Trek)",
    category: "Nature",
    description: "Scenic 60-foot natural waterfall tucked inside an oak-pine mountain forest trail with a pristine plunge pool.",
    tag: "Jungle Trek & Falls",
    image: "/images/experiences/Bhalugaad-Waterfall-Mukteshwar.webp",
    alt: "Bhalu Gaad Waterfall jungle trek and swimming pool near Mukteshwar"
  }
];

export const nearbyAttractions = LOCAL_EXPERIENCES;
export const NEARBY_ATTRACTIONS = LOCAL_EXPERIENCES;

/**
 * Authentic Verbatim Testimonials from Google Reviews
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Satya Prakash",
    rating: 5,
    source: "Google Review",
    date: "August 2026",
    comment: "Had an amazing experience at Stone Heritage. Special thanks to Host - Harsh for being such a professional and welcoming host. His communication, confidence, hospitality, and the way he handled everything made the stay feel very comfortable and memorable. The service, atmosphere, and overall facilities were excellent. Definitely one of the best homestay experiences in Mukteshwar – highly recommended! ⭐⭐⭐⭐⭐",
    text: "Had an amazing experience at Stone Heritage. Special thanks to Host - Harsh for being such a professional and welcoming host. The service, atmosphere, and overall facilities were excellent."
  },
  {
    name: "Priyanka Todkari",
    rating: 5,
    source: "Google Review",
    date: "July 2026",
    comment: "The Stone Heritage Homestay, Mukteshwar is truly a hidden gem. The property is absolutely beautiful, surrounded by serene mountains, old-world charm, and peaceful vibes that instantly make you feel calm and connected to nature. Every corner reflects warmth, heritage, and thoughtful detailing. What made our stay even more special was the exceptional hospitality.",
    text: "The Stone Heritage Homestay, Mukteshwar is truly a hidden gem. The property is absolutely beautiful, surrounded by serene mountains, old-world charm, and peaceful vibes."
  },
  {
    name: "Manish Joshi",
    rating: 5,
    source: "Google Review",
    date: "May 2026",
    comment: "We had a wonderful stay at the hotel. Harsh was a great host, very warm and especially good with kids, which made our stay even more comfortable. The food was delicious, and the room had all the necessary facilities for a cold location, making it cozy and convenient. Parking was easily available, and having a general store nearby was very helpful.",
    text: "We had a wonderful stay at the hotel. Harsh was a great host, very warm and especially good with kids. The food was delicious, and the room had all the necessary facilities for a cold location."
  },
  {
    name: "Neel Infinity",
    rating: 5,
    source: "Google Review",
    date: "April 2026",
    comment: "best homestay located very close to mukteshwar Uttarakhand, india. Good for relaxation and Staycation.",
    text: "best homestay located very close to mukteshwar Uttarakhand, india. Good for relaxation and Staycation."
  },
  {
    name: "Abhineet Singh",
    rating: 5,
    source: "Google Review",
    date: "June 2026",
    comment: "Amazing property, peaceful location and you can have breathtaking views from the property itself. Hospitality was fantastic and staff was very co-operative. Only vegetarian food is allowed but tastes good and is freshly prepared. Overall highly recommended!",
    text: "Amazing property, peaceful location and you can have breathtaking views from the property itself. Only vegetarian food is allowed but tastes good and is freshly prepared."
  }
];

export const testimonials = TESTIMONIALS;

/**
 * Frequently Asked Questions across 6 Strategic Categories
 */
export const FAQS: FAQItem[] = [
  {
    category: "Booking & Tariffs",
    question: "How can I contact Stone Heritage Mukteshwar for direct bookings?",
    answer: "You can reach our reservations desk directly by calling +91 90278 44424 or +91 79002 00563, or message us on WhatsApp at +91 90278 44424. Booking directly through our official channels eliminates third-party commissions and guarantees 15–20% savings compared to OTA portals."
  },
  {
    category: "Booking & Tariffs",
    question: "Do you offer better tariffs than MakeMyTrip, Agoda, or Booking.com?",
    answer: "Yes! By reserving directly via our WhatsApp concierge or official phone (+91 90278 44424), you bypass intermediate platform markups and receive our guaranteed lowest rates, priority 180° Himalayan view room allocation, and complimentary evening bonfire setups."
  },
  {
    category: "Rooms & Cottages",
    question: "What room configurations are available at Stone Heritage Mukteshwar?",
    answer: "Stone Heritage offers 9 verified room units: Brass Room (1 King Bed, 2–3 guests), Copper Room (1 King Bed + Sofa Bed, 2–4 guests), Vintage Stone Room (1 King Bed, 2–3 guests), Iron Room (1 King Bed, 2 guests), Cedar Room (1 Queen Bed, 2 guests), Stonewood Family Retreat (2 King Beds, living lounge & balcony, 4–6 guests), Stone and Story Room (1 King Bed, 2–3 guests), Himalayan Workation Room (Dedicated Workstation Setup, 1–2 guests), and Stone Cottage Room (1 King Bed, standalone sunset terrace, 2–4 guests)."
  },
  {
    category: "Dining & Food",
    question: "Is food and breakfast available at Stone Heritage Mukteshwar?",
    answer: "Yes! Freshly prepared home-cooked food and breakfast are available on site from our 100% pure vegetarian kitchen. We specialize in authentic regional Kumaoni delicacies (such as Bhatt ki Churkani and Aloo ke Gutke) as well as North Indian comfort food, cooked fresh to order with locally sourced organic vegetables."
  },
  {
    category: "Policies & Amenities",
    question: "What are the standard check-in and check-out timings?",
    answer: "Our standard check-in time is 13:00 PM (1:00 PM IST) and check-out time is 11:00 AM (11:00 AM IST). Early check-in or late check-out can be accommodated based on room availability when requested in advance via WhatsApp."
  },
  {
    category: "Policies & Amenities",
    question: "Is Stone Heritage Mukteshwar a pet-friendly homestay?",
    answer: "Yes, we are 100% pet-friendly! We warmly welcome your dogs and cats. Our spacious enclosed mountain lawns and safe walking trails provide an ideal environment for your pets to enjoy fresh Himalayan air."
  },
  {
    category: "Workation & WiFi",
    question: "Is high-speed Wi-Fi available for workcations in Mukteshwar?",
    answer: "Yes. Stone Heritage Mukteshwar is equipped with commercial optical fiber Wi-Fi providing 100+ Mbps speeds across all rooms and outdoor areas. Combined with dependable inverter power backup, it is a premier mountain workation destination for remote founders and professionals."
  },
  {
    category: "Location & Transit",
    question: "How far is Stone Heritage from Mukteshwar Dham Temple and Kainchi Dham Ashram?",
    answer: "Stone Heritage is situated along the Bhowali-Dhanachuli Road in Mukteshwar. We are located approximately 8.2 km (about 20 minutes) from the 350-year-old Mukteshwar Dham Shiva Temple and 1.5 km from Chauli Ki Jali cliffs. The famous Neem Karoli Baba Kainchi Dham Ashram in Bhowali is 39 km away (approx. 75 minutes scenic drive)."
  },
  {
    category: "Location & Transit",
    question: "How do I reach Stone Heritage Mukteshwar from Delhi NCR?",
    answer: "Stone Heritage is approximately 320–340 km (7.5 to 8 hours drive) from Delhi NCR via NH 9 through Moradabad, Rampur, Haldwani, and Bhowali. If arriving by train, Kathgodam Railway Station is 75 km away (~2.5 hours by taxi). Our front desk can assist with trusted taxi pickups upon request."
  },
  {
    category: "Policies & Amenities",
    question: "Is there secure on-site private parking available?",
    answer: "Yes. We provide free, secure on-site private parking directly in front of the homestay. The approach is a smooth paved drive with ample room for private SUVs and sedans."
  }
];

/**
 * Dedicated Contact Page FAQ Matrix (Pre-loaded with verified telephone & location context)
 */
export const CONTACT_FAQS: FAQItem[] = [
  {
    category: "Booking & Tariffs",
    question: "What is the official Stone Heritage Mukteshwar contact number?",
    answer: "The official Stone Heritage Mukteshwar contact number is +91 90278 44424 for direct reservations, room availability, tariffs, and WhatsApp inquiries. For secondary front desk assistance, you can call +91 79002 00563 or email thestoneheritage@gmail.com."
  },
  {
    category: "Rooms & Cottages",
    question: "Which is the best homestay in Mukteshwar for families?",
    answer: "Stone Heritage is widely recognized as one of the best homestays in Mukteshwar, rated 4.9/5 across 250+ Google reviews. It offers authentic Kumaoni heritage architecture, panoramic Himalayan views, and personalized hospitality for families, couples, and remote workers."
  },
  {
    category: "Rooms & Cottages",
    question: "What makes Stone Heritage suitable for family reunions or group bookings?",
    answer: "With 9 distinct rooms sleeping up to 25+ guests total — including the Stonewood Family Retreat (2 King Beds, 4-6 guests) and Copper Room (King Bed + Sofa Bed) — families can easily combine adjoining cottage rooms with private lawns, group bonfires, and customized pure vegetarian catering."
  },
  {
    category: "Location & Transit",
    question: "How far is Stone Heritage homestay from Delhi?",
    answer: "Stone Heritage is approximately a 7.5 to 8-hour drive (~320–340 km) from Delhi via Moradabad, Haldwani, and Bhowali, making it an ideal weekend mountain getaway destination for Delhi NCR travelers."
  },
  {
    category: "Location & Transit",
    question: "How far is Stone Heritage from Mukteshwar Temple and Chauli Ki Jali?",
    answer: "Mukteshwar Dham Temple is approximately 8.2 km (20 minutes) and Chauli Ki Jali cliff is about 1.5 km from the property — both easily accessible during your stay."
  }
];

/**
 * Conversion-Optimized WhatsApp Direct Booking URL Generator
 * Supports string parameter signature or options object with attribution tracking.
 */
export function generateWhatsAppLink(
  roomNameOrOptions: string | WhatsAppLinkOptions = "",
  checkIn = "",
  checkOut = "",
  guests = "2",
  guestNote = ""
): string {
  let room = "";
  let cin = checkIn;
  let cout = checkOut;
  let gst = guests;
  let note = guestNote;
  let source = "";
  let utm = "";

  if (typeof roomNameOrOptions === "object" && roomNameOrOptions !== null) {
    room = roomNameOrOptions.roomName || "";
    cin = roomNameOrOptions.checkIn || "";
    cout = roomNameOrOptions.checkOut || "";
    gst = roomNameOrOptions.guests || "2";
    note = roomNameOrOptions.guestNote || "";
    source = roomNameOrOptions.source || "";
    utm = roomNameOrOptions.utmCampaign || "";
  } else if (typeof roomNameOrOptions === "string") {
    room = roomNameOrOptions;
  }

  // Auto-enrich attribution from browser session if running client-side
  if (!source && !utm && typeof window !== "undefined") {
    try {
      const rawAttr = sessionStorage.getItem("shm_ads_attribution");
      if (rawAttr) {
        const saved = JSON.parse(rawAttr);
        if (saved.gclid) {
          source = `Google Ads (${saved.gclid.substring(0, 8)})`;
        } else if (saved.utm_campaign || saved.utm_source) {
          source = `${saved.utm_source || 'Campaign'}: ${saved.utm_campaign || ''}`;
        }
      }
    } catch (e) {
      // Ignore session storage errors
    }
  }

  let baseMsg = "Hi! I'm interested in booking a stay at Stone Heritage Mukteshwar.";
  if (room) baseMsg += `\n\nRoom Type: *${room}*`;
  if (cin) baseMsg += `\nCheck-In Date: *${cin}*`;
  if (cout) baseMsg += `\nCheck-Out Date: *${cout}*`;
  if (gst) baseMsg += `\nNumber of Guests: *${gst}*`;
  if (note) baseMsg += `\nSpecial Request: ${note}`;

  baseMsg += "\n\nPlease let me know if these dates are available and share your direct booking tariff with perks!";
  if (source || utm) {
    baseMsg += `\n\n[Channel: Direct Website | Ref: ${source || utm}]`;
  }

  return `https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(baseMsg)}`;
}

/**
 * Standard Helper: Generate simple WhatsApp booking URL
 */
export function getWhatsAppBookingUrl(roomName?: string, guestNote?: string): string {
  const baseMessage = roomName
    ? `Hi, I'm interested in booking the ${roomName} at Stone Heritage Mukteshwar.`
    : "Hi, I'm interested in booking a stay at Stone Heritage Mukteshwar. Can you share availability and tariffs?";

  const finalMessage = guestNote ? `${baseMessage} ${guestNote}` : baseMessage;
  return `https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
}

/**
 * Helper: Find room by URL slug
 */
export function getRoomBySlug(slug: string): RoomOption | undefined {
  return ROOMS_INVENTORY.find((r) => r.slug === slug);
}

/**
 * Helper: Find room by name or alias
 */
export function getRoomByName(name: string): RoomOption | undefined {
  const normalized = name.toLowerCase().trim();
  return ROOMS_INVENTORY.find(
    (r) => r.name.toLowerCase() === normalized || r.alias?.toLowerCase() === normalized
  );
}

export default {
  RESORT_CONTACT,
  PROPERTY_CONTACT,
  propertyDetails,
  contactDetails,
  operationalPolicies,
  ROOMS_INVENTORY,
  rooms,
  FEATURED_ROOMS,
  featuredRooms,
  GENERAL_AMENITIES,
  AMENITY_CATEGORIES,
  propertyAmenities,
  PROPERTY_SERVICES,
  RESORT_SERVICES,
  sisterProperties,
  LOCAL_EXPERIENCES,
  nearbyAttractions,
  TESTIMONIALS,
  testimonials,
  FAQS,
  CONTACT_FAQS,
  generateWhatsAppLink,
  getWhatsAppBookingUrl,
  getRoomBySlug,
  getRoomByName
};
