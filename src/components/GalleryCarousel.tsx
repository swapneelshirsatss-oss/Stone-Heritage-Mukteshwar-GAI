import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';
import { galleryImages } from './InteractiveGallery';

export function GalleryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Limit to maybe 8 images for the home page carousel so it's not too long, 
  // or use all of them. Let's use 12 for the home page.
  const displayImages = galleryImages.slice(0, 12);

  return (
    <div className="relative group">
      {/* Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayImages.map((image, index) => (
          <div 
            key={index} 
            className="flex-none w-[85%] md:w-[45%] lg:w-[30%] snap-center rounded-xl overflow-hidden bg-stone-100 shadow-sm transition-shadow duration-300 hover:shadow-md relative aspect-[4/3]"
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading={index < 3 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-stone-200 text-primary hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent z-10"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={scrollRight}
        className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-stone-200 text-primary hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
