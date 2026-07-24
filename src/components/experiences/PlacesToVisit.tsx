import React from 'react';
import { motion } from 'motion/react';
import { OptimizedImage } from '../OptimizedImage';

const placesToVisit = [
  {
    name: "Nanda Devi Peak Viewpoint: Unmatched Himalayan Vistas from Stone Heritage",
    description: "The second highest mountain in India, visible from various vantage points in Mukteshwar, offering breathtaking panoramic views of the majestic snow-capped Himalayas.",
    distance: "Visible from Mukteshwar town",
    activities: "Sunrise photography, nature walks, and scenic sightseeing.",
    tips: "Best time to view is early morning on clear days. Carry a good camera or binoculars.",
    image: "/nanda-devi-peak-view-mukteshwar.webp",
    alt: "Panoramic sunrise view of the majestic Nanda Devi Peak from Mukteshwar"
  },
  {
    name: "Adventure: Rock Climbing at Chauli Ki Jali",
    description: "A stunning cliff behind the Mukteshwar temple known for its overhanging rocks, deep valley views, and fascinating local legends.",
    distance: "1.5 km from the town center",
    activities: "Rock climbing, rappelling, ziplining, and sunset watching.",
    tips: "Moderate walking involved. Hire certified local guides for adventure sports. Best visited in the late afternoon.",
    image: "/chauli-ki-jali-in-mukteshwar.webp",
    alt: "Tourists enjoying rock climbing and adventure sports at the scenic Chauli Ki Jali cliff in Mukteshwar"
  },
  {
    name: "Bhalu Gaad Waterfall Trek: Itinerary & Nearby Stays",
    description: "A beautiful hidden gem tucked away in dense forests, featuring a continuous 60-foot water plunge into a pristine clear pool.",
    distance: "Approx. 10 km from Mukteshwar",
    activities: "Short jungle trek, bird watching, and picnicking by the water.",
    tips: "Involves a 2 km moderate trek from the road head. Wear comfortable trekking shoes and carry drinking water.",
    image: "/Bhalugaad-Waterfall-Mukteshwar.webp",
    alt: "Hidden 60-foot water plunge into a pristine clear pool at Bhalu Gaad Waterfall near Mukteshwar"
  },
  {
    name: "Mukteshwar Temple",
    description: "The ancient, 350-year-old Shiva temple from which the town derives its name, situated gracefully atop the highest point in the area.",
    distance: "Located in the town center",
    activities: "Offering prayers, meditation, and ringing the traditional copper bells.",
    tips: "The temple is accessible via stone steps. Dress modestly and visit early morning for a peaceful spiritual experience.",
    image: "",
    alt: "The ancient 350-year-old Mukteshwar Dham Temple, a spiritual Shiva temple at the highest point of town"
  },
  {
    name: "Mukteshwar Inspection Bungalow",
    description: "A historic PWD inspection bungalow offering architectural charm and sweeping views of the majestic Nanda Devi peak.",
    distance: "Near the Mukteshwar Temple",
    activities: "Enjoying the architecture, Himalayan viewing, and peaceful walks.",
    tips: "Great spot for sunrise and sunset photography. Prior permission might be needed for a stay.",
    image: "/mukteshwar-inspection.webp",
    alt: "Historic PWD inspection bungalow in Mukteshwar offering stunning views of the Nanda Devi peak"
  },
  {
    name: "Kainchi Dham Ashram",
    description: "The famous spiritual ashram of Neem Karoli Baba, set beautifully amidst lush green hills. It is a place of deep peace and spiritual significance attracting visitors globally.",
    distance: "Approx. 40 km from Mukteshwar",
    activities: "Spiritual reflection, meditation, and seeking blessings.",
    tips: "Plan a half-day trip. Dress modestly and visit during early morning hours to avoid heavy traffic and crowds.",
    image: "/Kainchi_dham_mukteshwar.webp",
    alt: "The peaceful Kainchi Dham Ashram of Neem Karoli Baba set amidst lush green hills"
  },
  {
    name: "Starscapes Observatory Mukteshwar",
    description: "An astronomical observatory offering a mesmerizing stargazing experience. Explore the night sky, planets, and galaxies through professional telescopes.",
    distance: "A short drive from the town center",
    activities: "Stargazing, astrophotography, and guided astronomy tours.",
    tips: "Book in advance as slots are limited. Best visited on clear, moonless nights. Dress warmly.",
    image: "/sky-obesration-in- Mukteshwar.webp",
    alt: "Professional telescopes set up for stargazing and astrophotography at the Starscapes Observatory in Mukteshwar"
  },
  {
    name: "Brahmeswara Temple",
    description: "An important historic temple dating back to ancient times, known for its spiritual ambiance and peaceful surroundings.",
    distance: "Short distance from the main temple complex",
    activities: "Exploring historical architecture and enjoying the serene environment.",
    tips: "Often less crowded, making it perfect for a quiet, peaceful visit. Respect the local customs."
  }
];

export function PlacesToVisit() {
  return (
    <div className="mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Discover</span>
        <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary tracking-tight">Best Places to Visit & Things to Do in Mukteshwar</h2>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
        <p className="text-lg text-primary/70 max-w-3xl mx-auto font-light leading-relaxed">
          Discover the rich heritage and natural wonders surrounding our homestay. From breathtaking Himalayan peaks and hidden waterfalls to ancient spiritual sites, these nearby attractions are easily accessible and promise to enrich your Mukteshwar experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {placesToVisit.map((place, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index % 2 === 0 ? 0 : 0.1 }}
            className="bg-white shadow-sm border border-stone-200 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group"
          >
            {place.image && (
              <div className="h-72 relative overflow-hidden bg-stone-200 shrink-0">
                <OptimizedImage 
                  src={place.image} 
                  alt={place.alt || `${place.name} - Mukteshwar`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-10 flex-grow flex flex-col">
              <h3 className="text-3xl font-serif font-medium text-primary mb-4 group-hover:text-accent transition-colors">{place.name}</h3>
              <p className="text-primary/80 mb-8 font-light leading-relaxed flex-grow">{place.description}</p>
              
              <ul className="space-y-4 pt-6 border-t border-stone-200/60 font-light text-sm">
                <li className="flex items-start gap-4">
                  <span className="text-accent mt-0.5 text-base">📍</span>
                  <div>
                    <span className="font-medium text-primary block sm:inline uppercase tracking-widest text-[10px] mr-2">Distance</span>
                    <span className="text-primary/70">{place.distance}</span>
                  </div>
                </li>
                {place.activities && (
                  <li className="flex items-start gap-4">
                    <span className="text-accent mt-0.5 text-base">✨</span>
                    <div>
                      <span className="font-medium text-primary block sm:inline uppercase tracking-widest text-[10px] mr-2">Activities</span>
                      <span className="text-primary/70">{place.activities}</span>
                    </div>
                  </li>
                )}
                {place.tips && (
                  <li className="flex items-start gap-4">
                    <span className="text-accent mt-0.5 text-base">💡</span>
                    <div>
                      <span className="font-medium text-primary block sm:inline uppercase tracking-widest text-[10px] mr-2">Pro Tip</span>
                      <span className="text-primary/70">{place.tips}</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
