import React, { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(intervalId);
  }, [goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-stone-100 relative overflow-hidden transition-all duration-500">
        <Quote className="absolute top-6 right-6 w-16 h-16 text-accent/10 -rotate-6" />
        
        <div className="flex flex-col md:flex-row gap-8 items-center min-h-[250px]">
          {/* Image */}
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-stone-50 shadow-md bg-stone-200">
            {currentTestimonial.image ? (
              <OptimizedImage
                src={currentTestimonial.image}
                alt={`Portrait of guest ${currentTestimonial.name}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-accent/20 text-accent font-bold text-3xl">
                {currentTestimonial.name.charAt(0)}
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-grow text-center md:text-left relative z-10">
            <p className="text-lg md:text-xl text-primary/80 italic mb-6 leading-relaxed">
              "{currentTestimonial.text}"
            </p>
            <div>
              <h4 className="font-bold text-primary text-lg">{currentTestimonial.name}</h4>
              {currentTestimonial.role && (
                <p className="text-accent text-sm font-medium">{currentTestimonial.role}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-stone-100 hover:bg-stone-50 text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-stone-100 hover:bg-stone-50 text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-accent w-6' : 'bg-stone-300 hover:bg-stone-400'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
