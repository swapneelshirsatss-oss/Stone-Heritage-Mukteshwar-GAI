export interface GalleryImage {
  src: string;
  alt: string;
  category: 'rooms' | 'views' | 'experiences';
  categoryLabel: string;
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  { src: '/best-family-homestay-in-mukteshwar.webp', alt: 'Panoramic view of the Himalayan mountains from Stone Heritage homestay in Mukteshwar', category: 'views', categoryLabel: 'Himalayan Views', featured: true },
  { src: '/garden-area-stone-heritage.webp', alt: 'Lush green garden area and outdoor seating at Stone Heritage Mukteshwar', category: 'views', categoryLabel: 'Gardens & Outdoors' },
  { src: '/vintage-room.webp', alt: 'The Vintage Room interior with classic wooden furniture and cozy bedding at Stone Heritage Mukteshwar', category: 'rooms', categoryLabel: 'Cottages & Rooms', featured: true },
  { src: '/copper-room.webp', alt: 'Spacious Copper Room interior featuring a comfortable king bed and traditional decor in Mukteshwar', category: 'rooms', categoryLabel: 'Cottages & Rooms' },
  { src: '/brass-room-homestay-in-mukteshwar.webp', alt: 'Beautiful mountain view from the window of the Brass Room at Stone Heritage Mukteshwar', category: 'rooms', categoryLabel: 'Cottages & Rooms' },
  { src: '/cedar-room.webp', alt: 'Cozy Cedar Room interior with wooden paneling and modern amenities at Stone Heritage', category: 'rooms', categoryLabel: 'Cottages & Rooms' },
  { src: '/iron-room.webp', alt: 'Comfortable Iron Room setup perfect for couples staying at Stone Heritage Mukteshwar', category: 'rooms', categoryLabel: 'Cottages & Rooms' },
  { src: '/stonewood-family-retreat.webp', alt: 'Stonewood Family Retreat room with two king beds, ideal for family workations in Mukteshwar', category: 'rooms', categoryLabel: 'Cottages & Rooms', featured: true },
  { src: '/himalayan-view-terrace-mukteshwar.webp', alt: 'Outdoor terrace at Stone Heritage offering stunning sunset views over the Himalayas', category: 'views', categoryLabel: 'Himalayan Views' },
  { src: '/mountain-living-best-homestay-Mukteshwar.webp', alt: 'Relaxing balcony setting with majestic mountain views at the best homestay in Mukteshwar', category: 'views', categoryLabel: 'Himalayan Views' },
  { src: '/luxury-heritage-homestay-in-mukteshwar.webp', alt: 'Cozy evening ambiance and lighting at the luxury Stone Heritage homestay property', category: 'views', categoryLabel: 'Architecture & Ambiance' },
  { src: '/Mukteshwar-homestay (6).webp', alt: 'Scenic pine forests surrounding the peaceful Stone Heritage homestay in Mukteshwar', category: 'views', categoryLabel: 'Surrounding Forests' },
  { src: '/luxury-homestay-UttarakhandMukteshwar-homestay.webp', alt: 'Enjoying morning tea with a scenic valley view at Stone Heritage Mukteshwar', category: 'views', categoryLabel: 'Himalayan Views' },
  { src: '/homestay-mukteshwar-mountains-view-from-room.webp', alt: 'Beautiful mountain view from the room window', category: 'views', categoryLabel: 'Himalayan Views' },
  { src: '/vintage-homestay-in-mukteshwar.webp', alt: 'Vintage stone homestay exterior architecture in Mukteshwar', category: 'rooms', categoryLabel: 'Heritage Cottages' },
  { src: '/modern-ensuite-bathroom-luxury.webp', alt: 'Modern luxury ensuite bathroom facilities at Stone Heritage', category: 'rooms', categoryLabel: 'Room Amenities' },
  { src: '/stonewood-family-retreat-group-stay.webp', alt: 'Stonewood family retreat group stay room setup', category: 'rooms', categoryLabel: 'Family Suites' },
  { src: '/Bhalugaad-Waterfall-Mukteshwar.webp', alt: 'Bhalugaad Waterfall jungle trek near Mukteshwar', category: 'experiences', categoryLabel: 'Treks & Experiences', featured: true },
  { src: '/Kainchi_dham_mukteshwar.webp', alt: 'Kainchi Dham Temple near Mukteshwar', category: 'experiences', categoryLabel: 'Spiritual Sites' },
  { src: '/chauli-ki-jali-in-mukteshwar.webp', alt: 'Chauli Ki Jali cliff rock climbing in Mukteshwar', category: 'experiences', categoryLabel: 'Adventure & Views' },
  { src: '/nanda-devi-peak-view-mukteshwar.webp', alt: 'Nanda Devi Peak View from Mukteshwar', category: 'views', categoryLabel: 'Himalayan Views' },
  { src: '/sky-observation-in-mukteshwar.webp', alt: 'Stargazing and night sky observation at Stone Heritage Mukteshwar', category: 'experiences', categoryLabel: 'Night Sky Stargazing' },
  { src: '/homestay-in-mukteshwar.webp', alt: 'A serene view of our heritage stone homestay property in Mukteshwar', category: 'rooms', categoryLabel: 'Heritage Cottages' },
  { src: '/thing-to-do-in-mukteshwar.webp', alt: 'Exploring activities and things to do in Mukteshwar', category: 'experiences', categoryLabel: 'Treks & Experiences' }
];
