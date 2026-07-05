import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export const galleryImages = [
  { src: '/heritage-stone-architecture-exterior.webp', alt: 'Exterior view of Stone Heritage Mukteshwar homestay featuring traditional Kumaoni stone architecture' },
  { src: '/hero-bg.webp', alt: 'Panoramic view of the Himalayan mountains from Stone Heritage homestay in Mukteshwar' },
  { src: '/garden-area-stone-heritage.webp', alt: 'Lush green garden area and outdoor seating at Stone Heritage Mukteshwar' },
  { src: '/vintage-room.webp', alt: 'The Vintage Room interior with classic wooden furniture and cozy bedding at Stone Heritage Mukteshwar' },
  { src: '/copper-room.webp', alt: 'Spacious Copper Room interior featuring a comfortable king bed and traditional decor in Mukteshwar' },
  { src: '/brass-room.webp', alt: 'Brass Room interior showing a luxurious bed setup at Stone Heritage homestay' },
  { src: '/brass-room-mountain-view-detail.webp', alt: 'Beautiful mountain view from the window of the Brass Room at Stone Heritage Mukteshwar' },
  { src: '/cedar-room.webp', alt: 'Cozy Cedar Room interior with wooden paneling and modern amenities at Stone Heritage' },
  { src: '/iron-room.webp', alt: 'Comfortable Iron Room setup perfect for couples staying at Stone Heritage Mukteshwar' },
  { src: '/stone-and-story-room.webp', alt: 'Stone and Story Room featuring heritage architecture and a relaxing ambiance' },
  { src: '/stonewood-family-retreat.webp', alt: 'Stonewood Family Retreat room with two king beds, ideal for family workations in Mukteshwar' },
  { src: '/himalayan-view-terrace-mukteshwar.webp', alt: 'Outdoor terrace at Stone Heritage offering stunning sunset views over the Himalayas' },
  { src: '/mountain-living-best-homestay-Mukteshwar.webp', alt: 'Relaxing balcony setting with majestic mountain views at the best homestay in Mukteshwar' },
  { src: '/luxury-heritage-homestay-in-mukteshwar.webp', alt: 'Cozy evening ambiance and lighting at the luxury Stone Heritage homestay property' },
  { src: '/Mukteshwar-homestay (6).webp', alt: 'Scenic pine forests surrounding the peaceful Stone Heritage homestay in Mukteshwar' },
  { src: '/luxury-homestay-UttarakhandMukteshwar-homestay.webp', alt: 'Enjoying morning tea with a scenic valley view at Stone Heritage Mukteshwar' }
];

export function InteractiveGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, isFullscreen]);

  // Autoplay
  useEffect(() => {
    if (isFullscreen) return;
    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [goToNext, isFullscreen]);

  // Lock body scroll when fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-stone-900 shadow-xl group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        {/* Main Image Display */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}

          {/* Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-between p-4 z-20 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex flex-col h-full justify-between items-end py-2">
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="View fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="hidden md:block bg-stone-900 p-4 overflow-x-auto hide-scrollbar">
          <div className="flex gap-3 min-w-max">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative w-20 h-14 md:w-24 md:h-16 rounded-md overflow-hidden flex-shrink-0 transition-all duration-300 focus:outline-none ${
                  index === currentIndex 
                    ? 'ring-2 ring-accent opacity-100 scale-105 -translate-y-1 shadow-md' 
                    : 'opacity-50 hover:opacity-100 hover:-translate-y-1 hover:shadow-sm'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <OptimizedImage
                  src={image.src}
                  alt={`Thumbnail of ${image.alt}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-md">
          <button
            onClick={toggleFullscreen}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            aria-label="Close fullscreen"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[110]"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[110]"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-7xl px-4 md:px-20 h-[80vh] flex items-center justify-center">
            <OptimizedImage
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-w-full max-h-full object-contain select-none"
            />
          </div>
        </div>
      )}
    </>
  );
}
