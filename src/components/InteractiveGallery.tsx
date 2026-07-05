import React from 'react';
import { OptimizedImage } from './OptimizedImage';

export const galleryImages = [
  { src: '/best-family-homestay-in-mukteshwar.webp', alt: 'Panoramic view of the Himalayan mountains from Stone Heritage homestay in Mukteshwar' },
  { src: '/garden-area-stone-heritage.webp', alt: 'Lush green garden area and outdoor seating at Stone Heritage Mukteshwar' },
  { src: '/vintage-room.webp', alt: 'The Vintage Room interior with classic wooden furniture and cozy bedding at Stone Heritage Mukteshwar' },
  { src: '/copper-room.webp', alt: 'Spacious Copper Room interior featuring a comfortable king bed and traditional decor in Mukteshwar' },
  { src: '/brass-room.webmp', alt: 'Beautiful mountain view from the window of the Brass Room at Stone Heritage Mukteshwar' },
  { src: '/cedar-room.webp', alt: 'Cozy Cedar Room interior with wooden paneling and modern amenities at Stone Heritage' },
  { src: '/iron-room.webp', alt: 'Comfortable Iron Room setup perfect for couples staying at Stone Heritage Mukteshwar' },
  { src: '/stone-and-story-room.webp', alt: 'Stone and Story Room featuring heritage architecture and a relaxing ambiance' },
  { src: '/stonewood-family-retreat.webp', alt: 'Stonewood Family Retreat room with two king beds, ideal for family workations in Mukteshwar' },
  { src: '/himalayan-view-terrace-mukteshwar.webp', alt: 'Outdoor terrace at Stone Heritage offering stunning sunset views over the Himalayas' },
  { src: '/mountain-living-best-homestay-Mukteshwar.webp', alt: 'Relaxing balcony setting with majestic mountain views at the best homestay in Mukteshwar' },
  { src: '/luxury-heritage-homestay-in-mukteshwar.webp', alt: 'Cozy evening ambiance and lighting at the luxury Stone Heritage homestay property' },
  { src: '/Mukteshwar-homestay (6).webp', alt: 'Scenic pine forests surrounding the peaceful Stone Heritage homestay in Mukteshwar' },
  { src: '/luxury-homestay-UttarakhandMukteshwar-homestay.webp', alt: 'Enjoying morning tea with a scenic valley view at Stone Heritage Mukteshwar' },
  { src: '/homestay-mukteshwar-mountains-view-from-room.webp', alt: 'Beautiful mountain view from the room' },
  { src: '/vintage-homestay-in-mukteshwar.webp', alt: 'Vintage homestay exterior in Mukteshwar' },
  { src: '/modern-ensuite-bathroom-luxury.webp', alt: 'Modern luxury ensuite bathroom' },
  { src: '/stonewood-family-retreat-group-stay.webp', alt: 'Stonewood family retreat group stay room' },
  { src: '/Bhalugaad-Waterfall.webp', alt: 'Bhalugaad Waterfall near Mukteshwar' },
  { src: '/Kainchi_dham_mukteshwar.webp', alt: 'Kainchi Dham Temple near Mukteshwar' },
  { src: '/Mukteshwar-Dham-Temple.webp', alt: 'Mukteshwar Dham Temple' },
  { src: '/chauli-ki-jali-in-mukteshwar.webp', alt: 'Chauli Ki Jali cliff in Mukteshwar' },
  { src: '/nanda-devi-peak-view-mukteshwar.webp', alt: 'Nanda Devi Peak View from Mukteshwar' },
  { src: '/sky-obesration-in-Mukteshwar.webp', alt: 'Stargazing and sky observation in Mukteshwar' }
];

export function InteractiveGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square rounded-xl overflow-hidden bg-stone-100 shadow-sm transition-shadow duration-300 hover:shadow-md group"
        >
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading={index < 8 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}
