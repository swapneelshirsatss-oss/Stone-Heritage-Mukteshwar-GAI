import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryImages } from '../../data/galleryImages';
import { OptimizedImage } from '../../components/OptimizedImage';
import { Facebook, Instagram, Youtube, Twitter, X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Star, Camera } from 'lucide-react';

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'views' | 'experiences'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (imageSrc: string) => {
    const globalIndex = galleryImages.findIndex(img => img.src === imageSrc);
    setSelectedImageIndex(globalIndex >= 0 ? globalIndex : 0);
  };

  const closeLightbox = () => setSelectedImageIndex(null);

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <div className="py-20 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Take a Tour</span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-primary tracking-tight">Homestay in Mukteshwar — Photo Gallery</h1>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Explore authentic photos of our heritage stone cottages, panoramic Himalayan views, and local experiences at Stone Heritage Mukteshwar.
          </p>
          
          {/* E-E-A-T Trust Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white px-6 py-3 rounded-2xl border border-stone-200 shadow-sm text-xs font-medium text-primary/80 mb-8">
            <div className="flex items-center gap-1.5 text-amber-500 font-semibold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" /> 4.9★ Rated (250+ Google Reviews)
            </div>
            <div className="w-1 h-1 rounded-full bg-stone-300 hidden sm:block"></div>
            <div className="flex items-center gap-1.5 text-accent">
              <Camera className="w-4 h-4" /> 100% Real Property Photography
            </div>
            <div className="w-1 h-1 rounded-full bg-stone-300 hidden sm:block"></div>
            <div className="flex items-center gap-1.5 text-primary">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified On-Site Experience
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 mr-2">Follow Us:</span>
            <a
              href="https://www.facebook.com/thestoneheritage/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-stone-200 hover:bg-primary hover:text-white text-stone-600 transition-all shadow-sm"
              aria-label="Follow on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/thestoneheritage/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-stone-200 hover:bg-primary hover:text-white text-stone-600 transition-all shadow-sm"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@StoneHeritageMukteshwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-stone-200 hover:bg-primary hover:text-white text-stone-600 transition-all shadow-sm"
              aria-label="Follow on YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/stone_heritage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-stone-200 hover:bg-primary hover:text-white text-stone-600 transition-all shadow-sm"
              aria-label="Follow on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'rooms', label: 'Stone Cottages & Rooms' },
            { id: 'views', label: 'Himalayan Views & Outdoors' },
            { id: 'experiences', label: 'Treks & Local Experiences' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeFilter === tab.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-primary/80 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Feature Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div 
                layout
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(image.src)}
                className={`group relative rounded-2xl overflow-hidden bg-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-stone-200/80 ${
                  image.featured ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-square' : 'aspect-[4/3]'
                }`}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index < 8 ? "eager" : "lazy"}
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-stone-900/70 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full z-10">
                  {image.categoryLabel}
                </div>

                {/* Overlay Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-stone-100 text-xs md:text-sm font-light leading-relaxed mb-3 line-clamp-3">
                    {image.alt}
                  </p>
                  <div className="flex items-center gap-1.5 text-highlight text-xs font-semibold uppercase tracking-wider">
                    <Maximize2 className="w-3.5 h-3.5" /> View Photo
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div 
              className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <OptimizedImage
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                loading="eager"
              />
              <div className="mt-4 text-center max-w-2xl px-4">
                <span className="inline-block bg-accent/20 text-accent text-[11px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full mb-2">
                  {galleryImages[selectedImageIndex].categoryLabel}
                </span>
                <p className="text-stone-200 text-sm md:text-base font-light leading-relaxed">
                  {galleryImages[selectedImageIndex].alt}
                </p>
                <span className="text-xs text-stone-500 mt-2 block font-mono">
                  {selectedImageIndex + 1} of {galleryImages.length} verified photos
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
