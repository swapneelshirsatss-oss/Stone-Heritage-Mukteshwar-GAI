import React from 'react';
import { motion } from 'motion/react';
import { OptimizedImage } from '../OptimizedImage';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-primary text-stone-50 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-stone-900">
        <OptimizedImage 
          src="/best-family-homestay-in-mukteshwar.webp" 
          alt="Panoramic view of the Himalayan mountains from Stone Heritage homestay in Mukteshwar" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-primary/90"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-stone-50 md:drop-shadow-lg leading-tight tracking-tight">
          Luxury Homestay in Mukteshwar — Stone Heritage
          <span className="block text-2xl md:text-4xl mt-4 font-normal italic text-stone-200">An Authentic Himalayan Retreat</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light text-stone-100 max-w-2xl mx-auto leading-relaxed md:drop-shadow-md">
          Escape to the serene hills of Uttarakhand. Experience a perfect blend of heritage architecture, panoramic mountain views, and exceptional Kumaoni hospitality.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
          <a 
            href="https://wa.me/919027844424" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-highlight text-primary font-sans font-medium uppercase tracking-widest py-3.5 px-8 rounded-none hover:bg-white transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto shadow-sm flex items-center justify-center gap-3 border border-highlight"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Book via WhatsApp
        </a>
        <a 
          href="/stay/" 
          className="bg-transparent border border-stone-200/50 text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-8 rounded-none hover:bg-white/10 hover:border-white transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto flex items-center justify-center backdrop-blur-sm"
        >
          Explore Rooms
        </a>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-stone-200 font-medium">
        <a href="https://www.google.com/search?q=Stone+Heritage+Mukteshwar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 cursor-pointer shadow-lg hover:shadow-xl group">
          <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full p-0.5 shadow-sm">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <div className="flex gap-0.5 text-[#FBBC05] text-base drop-shadow-sm">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <span className="font-bold text-white group-hover:text-stone-100 transition-colors">4.9/5 (245 Google reviews)</span>
        </a>
      </div>
    </motion.div>
  </section>
  );
}
