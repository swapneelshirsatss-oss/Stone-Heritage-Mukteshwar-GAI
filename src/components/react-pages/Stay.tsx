import React from 'react';
import { motion } from 'motion/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { OptimizedImage } from '../../components/OptimizedImage';
import { Wifi, UtensilsCrossed, Mountain, Castle, Dog } from 'lucide-react';

const rooms = [
  { name: "Stonewood Family Retreat", type: "Standalone Premium Suite", bedType: "2 Large King Beds", idealFor: "Multi-generational families, large groups", amenities: "Private Balcony, Wi-Fi", image: "/stonewood-family-retreat.webp", alt: "Stonewood Family Retreat with two king beds for multi-generational stays" },
  { name: "Brass Room", type: "Quadroom", bedType: "1 King Bed + Floor Mattress", idealFor: "Families with young children", amenities: "En-suite Bathroom, Wi-Fi", image: "/brass-room-homestay-in-mukteshwar.webp", alt: "Brass Room featuring a king-size bed and scenic mountain views at Stone Heritage Mukteshwar" },
  { name: "Copper Room", type: "Spacious Family Room", bedType: "1 King Bed + 1 Single Bed", idealFor: "Small families (3 persons)", amenities: "En-suite Bathroom, Wi-Fi", image: "/copper-room.webp", alt: "Spacious Copper Room interior, perfect for families visiting Stone Heritage homestay" },
  { name: "The Vintage Room", type: "Heritage Room", bedType: "1 Ultra-comfortable King Bed", idealFor: "Couples, families seeking authentic architecture", amenities: "Heritage Architecture, Wi-Fi", image: "/vintage-room.webp", alt: "The Vintage Room showing classic heritage architecture and cozy bedding" },
  { name: "Stone & Story Room", type: "Standard Room", bedType: "1 King Bed", idealFor: "Couples, families", amenities: "Premium Setup, Wi-Fi", image: "/stonewood-family-retreat-1.webp", alt: "Stone and Story Suite offering premium comfort and a relaxing atmosphere in Mukteshwar" },
  { name: "Iron Room", type: "Standard Room", bedType: "1 King Bed", idealFor: "Couples", amenities: "En-suite Bathroom, Wi-Fi", image: "/iron-room.webp", alt: "Cozy Iron Room setup, ideal for couples staying at Stone Heritage" },
  { name: "Cedar Room", type: "Economy Room", bedType: "1 King Bed", idealFor: "Solo travelers", amenities: "Wooden Paneling, Wi-Fi", image: "/cedar-room.webp", alt: "Cedar Room interior with beautiful wooden paneling and natural light" }
];

export function Stay() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Stone Heritage Mukteshwar",
    "description": "Authentic heritage stone cottage homestay in Mukteshwar offering luxury mountain retreats.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mukteshwar",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "telephone": "+919027844424",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "High-Speed WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Mountain Views",
        "value": true
      }
    ]
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Vintage Stone Cottages & Family Rooms | Stone Heritage</title>
        <meta name="description" content="Stay at Stone Heritage Mukteshwar's vintage stone cottages. Pick from Copper, Brass & Stone and Story Suite or the Stonewood Family Retreat. Book direct today." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      
      <main className="py-16 px-4 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-primary leading-tight">Stone Cottage Mukteshwar: Authentic Heritage Stays</h1>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto mb-8">
              Discover the charm of a true heritage stone cottage Mukteshwar experience. Our boutique homestay seamlessly blends traditional Kumaoni architecture with modern luxury for an unforgettable mountain retreat. Located in beautiful Mukteshwar, Uttarakhand.
            </p>
            <h2 className="text-3xl font-bold text-primary">Explore Our Vintage Stone Rooms</h2>
          </motion.div>
        </header>

        

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, i) => (
            <article key={room.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-56 relative overflow-hidden bg-stone-200">
                <OptimizedImage 
                  src={room.image} 
                  alt={room.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                <div className="text-primary/70 mb-6 flex-grow">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Type: {room.type}</li>
                    <li>Bed: {room.bedType}</li>
                    <li>Ideal For: {room.idealFor}</li>
                    <li>Features: {room.amenities}</li>
                  </ul>
                </div>
                <a 
                  href={`https://wa.me/919027844424?text=${encodeURIComponent(`Hi, I'm interested in booking the ${room.name}.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center bg-primary hover:bg-secondary text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                >
                  Inquire & Book
                </a>
              </div>
            </article>
          ))}
        </section>

        


        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">The Stone Heritage Experience</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              Discover the unique features that make our homestay the perfect mountain getaway, preventing you from ever wanting to leave.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-accent">
                <Wifi className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Connectivity</h3>
              <p className="text-primary/70">
                High-Speed Wi-Fi optimized for mountain workations. Stay connected and productive while enjoying the serene Himalayan environment.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-accent">
                <UtensilsCrossed className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Dining</h3>
              <p className="text-primary/70">
                Authentic pure vegetarian Kumaoni home-cooked meals and delicious Indian food, prepared fresh with local ingredients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-accent">
                <Mountain className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Views</h3>
              <p className="text-primary/70">
                Unobstructed Nanda Devi and Himalayan panoramic windows and terrace access. Wake up to majestic snow-capped peaks.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-accent">
                <Castle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Architecture</h3>
              <p className="text-primary/70">
                Authentic Kumaoni stone heritage construction seamlessly blended with modern luxury facilities for the ultimate comfort.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow lg:col-span-2 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center text-accent">
                <Dog className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Accessibility</h3>
                <p className="text-primary/70">
                  Fully pet-friendly accommodations. We welcome your furry friends to explore the wide open spaces and enjoy the mountain air alongside you.
                </p>
              </div>
            </div>
          </div>
        </section>
      <section className="mb-16">
          <h3 className="sr-only">Room Comparison</h3>
          <div className="overflow-x-auto bg-white shadow-sm border border-stone-200 rounded-2xl mb-16">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-100 text-stone-700">
                  <th className="p-4 font-semibold border-b border-stone-200">Room Name</th>
                  <th className="p-4 font-semibold border-b border-stone-200">Type</th>
                  <th className="p-4 font-semibold border-b border-stone-200">Bed Type</th>
                  <th className="p-4 font-semibold border-b border-stone-200">Ideal For</th>
                  <th className="p-4 font-semibold border-b border-stone-200">Amenities</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, index) => (
                  <tr key={index} className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium">{room.name}</td>
                    <td className="p-4">{room.type}</td>
                    <td className="p-4">{room.bedType}</td>
                    <td className="p-4">{room.idealFor}</td>
                    <td className="p-4">{room.amenities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-accent text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-md">Book Direct for Exclusive Benefits</h2>
            <div className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto font-medium">
              <p className="mb-4">Get the best rates, complimentary upgrades (subject to availability), and personalized service when you bypass OTAs and book directly with us.</p>
              <ul className="text-left max-w-md mx-auto list-disc pl-5 space-y-2 mb-6">
                <li>Best price guarantee</li>
                <li>Priority room allocation</li>
                <li>Direct contact: +91 9027844424</li>
                <li>Location: Bhowali Dhanachuli Rd, Mukteshwar, Uttarakhand 263138</li>
              </ul>
            </div>
            <a 
              href="https://wa.me/919027844424?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20directly%20with%20you."
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-stone-900 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ring-4 ring-primary/30"
            >
              Book Direct Now
            </a>
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
}
