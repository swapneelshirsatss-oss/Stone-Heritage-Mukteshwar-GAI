import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { OptimizedImage } from '../components/OptimizedImage';

const rooms = [
  { name: "Brass Room", image: "/brass-room-homestay-in-mukteshwar.webp", alt: "Brass Room featuring a king-size bed and scenic mountain views at Stone Heritage Mukteshwar" },
  { name: "Copper Room", image: "/copper-room.webp", alt: "Spacious Copper Room interior, perfect for families visiting Stone Heritage homestay" },
  { name: "The Vintage Room", image: "/vintage-room.webp", alt: "The Vintage Room showing classic heritage architecture and cozy bedding" },
  { name: "Stonewood Family Retreat", image: "/stonewood-family-retreat.webp", alt: "Stonewood Family Retreat with two king beds for multi-generational stays" },
  { name: "Stone and Story Suite", image: "/stonewood-family-retreat-1.webp", alt: "Stone and Story Suite offering premium comfort and a relaxing atmosphere in Mukteshwar" },
  { name: "Iron Room", image: "/iron-room.webp", alt: "Cozy Iron Room setup, ideal for couples staying at Stone Heritage" },
  { name: "Cedar Room", image: "/cedar-room.webp", alt: "Cedar Room interior with beautiful wooden paneling and natural light" },
  { name: "Himalayan Workation", image: "/himalayan-view-terrace-mukteshwar.webp", alt: "Outdoor terrace space perfect for a Himalayan workation at Stone Heritage" }
];

export function Stay() {
  return (
    <>
      <Helmet>
        <title>Stone Cottage Mukteshwar | Authentic Heritage Stays</title>
        <meta name="description" content={`Looking for a stone cottage Mukteshwar? Experience our authentic heritage stay with ${rooms.length} vintage rooms, modern luxury, and mountain views. Book direct for best rates.`} />
        <link rel="canonical" href="https://thestoneheritage.in/stay/" />
      </Helmet>
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        <h1 className="text-4xl font-bold mb-4 text-primary leading-tight">Stone Cottage Mukteshwar: Authentic Heritage Stays</h1>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto mb-8">
          Discover the charm of a true heritage stone cottage Mukteshwar experience. Our boutique homestay seamlessly blends traditional Kumaoni architecture with modern luxury for an unforgettable mountain retreat.
        </p>
        <h2 className="text-3xl font-bold text-primary">Explore Our 9 Vintage Stone Rooms</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {rooms.map((room, i) => (
          <motion.div 
            key={room.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-56 relative overflow-hidden bg-stone-200">
              <OptimizedImage 
                src={room.image} 
                alt={room.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
              <p className="text-primary/70 mb-6 flex-grow">
                Enjoy panoramic views and premium comfort. Perfect for your Mukteshwar getaway.
              </p>
              <a 
                href={`https://wa.me/919027844424?text=${encodeURIComponent(`Hi, I'm interested in booking the ${room.name}.`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-primary hover:bg-secondary text-white font-semibold py-3 px-4 rounded-xl transition-colors"
              >
                Inquire & Book
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-accent text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-md">Book Direct for Exclusive Benefits</h2>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto font-medium">
            Get the best rates, complimentary upgrades (subject to availability), and personalized service when you bypass OTAs and book directly with us.
          </p>
          <a 
            href="https://wa.me/919027844424?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20directly%20with%20you."
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-stone-900 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ring-4 ring-primary/30"
          >
            Book Direct Now
          </a>
        </div>
      </motion.div>
    </div>
    </>
  );
}
