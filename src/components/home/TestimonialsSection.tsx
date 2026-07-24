import React from 'react';
import { TestimonialCarousel } from '../TestimonialCarousel';

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary tracking-tight">Guest Experiences at Stone Heritage</h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto leading-relaxed">
            Discover why guests rate their stay at Stone Heritage Mukteshwar 4.9/5 stars across 245 Google reviews. Read stories of peaceful getaways, warm hospitality, and unforgettable Himalayan views.
          </p>
        </div>
        
        <TestimonialCarousel />
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <a 
            href="/testimonials/" 
            className="inline-flex items-center justify-center gap-2 bg-primary text-stone-50 font-semibold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
          >
            Read All Testimonials
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a 
            href="https://www.google.com/maps/place/?cid=5074157692820223333" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-stone-50 border border-stone-200 transition-colors shadow-sm"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-current"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span>See our reviews on Google</span>
              </div>
              <span className="text-xs font-medium text-stone-500 mt-1">4.9 ★ (245 reviews)</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
