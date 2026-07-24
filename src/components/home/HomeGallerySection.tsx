import React from 'react';
import { GalleryCarousel } from '../GalleryCarousel';

export function HomeGallerySection() {
  return (
    <section className="py-24 px-4 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Take a Tour</span>
        <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">A Glimpse into Our World</h2>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light mb-12">
          Discover the beauty and serenity that awaits you at Stone Heritage Mukteshwar.
        </p>
        <div className="mb-12 relative px-4 md:px-8">
          <GalleryCarousel />
        </div>
        <a 
          href="/gallery/" 
          className="inline-block bg-primary text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-10 hover:bg-primary/90 transition-colors shadow-sm"
        >
          View Full Gallery
        </a>
      </div>
    </section>
  );
}
