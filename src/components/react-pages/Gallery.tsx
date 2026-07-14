import React from 'react';

import { motion } from 'motion/react';
import { galleryImages } from '../../components/InteractiveGallery';
import { OptimizedImage } from '../../components/OptimizedImage';
import { ShareButtons } from '../../components/ShareButtons';

export function Gallery() {
  return (
    <div className="pt-20">
      
      
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Take a Tour</span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-primary tracking-tight">A Glimpse into Our World</h1>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Discover the beauty and serenity that awaits you at Stone Heritage Mukteshwar.
          </p>
          <ShareButtons url={typeof window !== 'undefined' ? window.location.href : 'https://thestoneheritage.in/gallery'} title="Stone Heritage Gallery - A Glimpse into Our World" className="justify-center" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
