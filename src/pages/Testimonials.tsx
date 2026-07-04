import React from 'react';
import { Helmet } from 'react-helmet-async';
import { testimonials } from '../data/testimonials';
import { OptimizedImage } from '../components/OptimizedImage';

export function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Guest Reviews & Testimonials | Stone Heritage Mukteshwar</title>
        <meta name="description" content={`Read ${testimonials.length}+ genuine guest reviews about their stay at Stone Heritage Mukteshwar. Discover why we have a 4.9 star rating from our happy guests.`} />
      </Helmet>
      <div className="py-16 px-4 max-w-7xl mx-auto bg-stone-50/50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tight">Guest Experiences</h1>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto leading-relaxed">
          Read what our wonderful guests have to say about their stay at Stone Heritage Mukteshwar.
        </p>
      </div>

      <div className="flex justify-center mb-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 bg-white w-fit p-6 md:px-12 rounded-2xl shadow-sm border border-stone-200">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-black text-primary tracking-tighter">4.9</div>
            <div className="text-left">
              <div className="flex text-accent text-sm mb-1 gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div className="text-sm font-medium text-primary/70">From 251+ Reviews</div>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-stone-200"></div>
          <div className="flex items-center gap-4">
            <div className="text-5xl font-black text-primary tracking-tighter">10k+</div>
            <div className="text-left">
              <div className="text-sm font-bold text-primary mb-1">Happy Guests</div>
              <div className="text-sm font-medium text-primary/70">Hosted at our property</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-stone-200 rounded-full overflow-hidden mb-6 border-4 border-stone-50 shadow-sm flex-shrink-0">
              {testimonial.image ? (
                <OptimizedImage 
                  src={testimonial.image} 
                  alt={`Portrait of guest ${testimonial.name}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-600 text-3xl font-bold uppercase">
                  {testimonial.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex text-accent mb-6 text-base gap-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-primary/80 leading-relaxed text-center italic mb-8 text-base md:text-lg tracking-wide flex-grow">
              "{testimonial.text}"
            </p>
            <div className="text-center">
              <h3 className="text-lg font-bold text-primary">{testimonial.name}</h3>
              {testimonial.role && <p className="text-sm text-primary/60 mt-1">{testimonial.role}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
