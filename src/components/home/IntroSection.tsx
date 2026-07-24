import React from 'react';
import { motion } from 'motion/react';

export function IntroSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Welcome to Your Sanctuary</span>
        <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 text-primary max-w-4xl mx-auto leading-tight">
          Welcome to Stone Heritage — A Heritage Homestay in Mukteshwar
        </h2>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-8"></div>
        <p className="text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed mb-20 font-light">
          Situated amidst the lush green forests and majestic peaks, Stone Heritage Mukteshwar is widely recognized as the best homestay in Uttarakhand. Whether you are seeking a romantic getaway, a peaceful workcation, or a family retreat in the mountains, our meticulously designed property provides the perfect backdrop for unforgettable memories.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Heritage Architecture",
              desc: "Authentic stone cottages blending seamlessly with the natural landscape.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )
            },
            {
              title: "Panoramic Views",
              desc: "Breathtaking sunrises and uninterrupted views of the Himalayan ranges.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              )
            },
            {
              title: "Authentic Kumaoni Cuisine",
              desc: "Pure vegetarian homemade food prepared with fresh local ingredients.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              )
            },
            {
              title: "The Perfect Weekend Getaway",
              desc: "The ideal escape from the city to the serene and pristine Himalayas.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )
            },
            {
              title: "Premium Comfort",
              desc: "Modern amenities, cozy bonfires, and high-speed WiFi for workcations.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              )
            },
            {
              title: "Pet Friendly",
              desc: "Bring your furry friends along for an unforgettable mountain adventure.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              )
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 border border-stone-200/60 bg-transparent hover:bg-stone-50 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 mx-auto text-accent">
                {feature.icon}
              </div>
              <h3 className="font-serif font-medium text-xl mb-3 text-primary">{feature.title}</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
