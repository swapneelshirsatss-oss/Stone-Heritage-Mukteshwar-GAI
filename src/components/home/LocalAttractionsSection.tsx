import React from 'react';
import { motion } from 'motion/react';
import { OptimizedImage } from '../OptimizedImage';

export function LocalAttractionsSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Discover Mukteshwar</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary tracking-tight">Things to Do Near Stone Heritage Mukteshwar</h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-3xl mx-auto font-light leading-relaxed">
            Explore the rich heritage and natural wonders surrounding our homestay. From breathtaking Himalayan peaks to ancient spiritual sites, Mukteshwar offers an unforgettable experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: "Chauli Ki Jali Rock Climbing",
              description: "A stunning cliff known for overhanging rocks, deep valley views, and adventure sports. Perfect for rock climbing, rappelling, and mesmerizing sunsets.",
              image: "/chauli-ki-jali-in-mukteshwar.webp",
              alt: "View of the deep valley from Chauli Ki Jali cliff, a popular tourist attraction for sunsets in Mukteshwar",
              distance: "1.5 km away",
              tag: "Adventure & Views"
            },
            {
              name: "Bhalu Gaad Waterfall Trek",
              description: "Embark on guided or self-guided nature trails through lush forests, discovering the rich biodiversity and charming local villages of Mukteshwar.",
              image: "/Bhalugaad-Waterfall-Mukteshwar.webp",
              alt: "Scenic nature trails and village walks around Stone Heritage in Mukteshwar",
              distance: "Around the property",
              tag: "Nature & Trekking"
            },
            {
              name: "Mukteshwar Dham Temple Visit",
              description: "Visit the historic 350-year-old Shiva temple atop the highest point in Mukteshwar, offering spiritual serenity and panoramic valley views.",
              image: "/himalayan-view-terrace-mukteshwar.webp",
              alt: "Mukteshwar Dham Temple and surrounding mountain scenery near Stone Heritage Mukteshwar",
              distance: "15 mins drive",
              tag: "Spiritual & Heritage"
            }
          ].map((place, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm border border-stone-200/80 hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              <div className="h-64 relative overflow-hidden bg-stone-100">
                <OptimizedImage 
                  src={place.image} 
                  alt={place.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-stone-900/60 backdrop-blur-md px-3.5 py-1 text-[11px] uppercase tracking-wider font-medium text-stone-100 shadow-sm border border-white/10 rounded-full">
                  {place.tag}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-medium text-primary group-hover:text-accent transition-colors">{place.name}</h3>
                </div>
                <p className="text-primary/70 mb-6 text-sm leading-relaxed flex-grow font-light">{place.description}</p>
                
                <div className="pt-5 border-t border-stone-200/60 flex items-center gap-3 text-xs tracking-wider uppercase text-primary/80 font-medium">
                  <span className="text-accent">Location</span>
                  <span>—</span>
                  <span>{place.distance}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/experiences/" 
            className="inline-flex items-center gap-3 bg-transparent border border-primary text-primary font-sans font-medium uppercase tracking-widest py-3.5 px-8 hover:bg-primary hover:text-stone-50 transition-colors text-xs sm:text-sm group"
          >
            See All Local Experiences
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
