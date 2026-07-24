import React from 'react';
import { OptimizedImage } from '../OptimizedImage';

export function FeaturedRoomsSection() {
  return (
    <section className="py-24 px-4 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Our Accommodations</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">Our Stone Cottage Rooms</h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">Experience comfort in our thoughtfully designed rooms, blending traditional stone architecture with modern amenities.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { name: "Copper Room", image: "/copper-room.webp", alt: "Spacious Copper Room setup with mountain views, ideal for families staying in Mukteshwar" },
            { name: "Brass Room", image: "/brass-room-homestay-in-mukteshwar.webp", alt: "Luxurious Brass Room interior featuring a king-size bed and traditional Kumaoni architecture at Stone Heritage" },
            { name: "Stone and Story Suite", image: "/stone-and-story-suite-homestay.webp", alt: "Stone and Story Suite offering premium comfort in Mukteshwar" },
            { name: "Stonewood Family Retreat", image: "/stonewood-family-retreat.webp", alt: "Stonewood Family Retreat for multi-generational stays" }
          ].map((room) => (
            <div key={room.name} className="bg-white overflow-hidden shadow-sm border border-stone-200 flex flex-col group hover:shadow-lg transition-all duration-500">
              <div className="h-72 relative overflow-hidden bg-stone-200">
                <OptimizedImage 
                  src={room.image} 
                  alt={room.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 w-full text-center">
                    <a 
                      href={`https://wa.me/919027844424?text=${encodeURIComponent(`Hi, I'm interested in booking the ${room.name}.`)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-highlight text-primary font-sans font-medium uppercase tracking-widest py-2.5 px-6 border border-highlight hover:bg-white transition-colors text-xs shadow-sm"
                    >
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif font-medium mb-3 text-primary">{room.name}</h3>
                <p className="text-primary/70 text-sm font-light leading-relaxed">
                  Enjoy panoramic views and premium comfort. Perfect for your Mukteshwar getaway.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/stay/" 
            className="inline-block bg-primary text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-10 hover:bg-primary/90 transition-colors shadow-sm"
          >
            View All Rooms
          </a>
        </div>
      </div>
    </section>
  );
}
