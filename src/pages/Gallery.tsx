import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { InteractiveGallery } from '../components/InteractiveGallery';

export function Gallery() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Gallery | Stone Heritage Mukteshwar</title>
        <meta name="description" content="Take a visual tour of Stone Heritage Mukteshwar. View our vintage stone cottages, breathtaking Himalayan vistas, and lush gardens." />
      </Helmet>
      
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
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the beauty and serenity that awaits you at Stone Heritage Mukteshwar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InteractiveGallery />
        </motion.div>
      </div>
    </div>
  );
}
