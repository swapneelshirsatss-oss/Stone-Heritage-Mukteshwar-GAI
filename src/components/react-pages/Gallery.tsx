import React from 'react';

import { motion } from 'motion/react';
import { galleryImages } from '../../data/galleryImages';
import { OptimizedImage } from '../../components/OptimizedImage';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
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
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-stone-500 mr-2">Follow Us:</span>
            <a
              href="https://www.facebook.com/thestoneheritage/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
              aria-label="Follow on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/thestoneheritage/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@StoneHeritageMukteshwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
              aria-label="Follow on YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/stone_heritage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
              aria-label="Follow on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
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
