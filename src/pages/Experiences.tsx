import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

const experiences = [
  {
    title: "Stargazing under Himalayan Skies",
    description: "The clear mountain air offers pristine views of the night sky. Enjoy a guided stargazing session right from our terrace.",
    icon: "✨"
  },
  {
    title: "Nature Trail & Village Walk",
    description: "Explore the beautiful pine and oak forests surrounding the property. Take a guided walk through the village to experience local life and discover hidden trails.",
    icon: "🥾"
  },
  {
    title: "Guided Treks & Nature Retreats",
    description: "Embark on curated nature retreats and guided trekking experiences through scenic trails, designed for both beginners and seasoned adventurers. Personally hosted and guided by Harsh & Priyanka.",
    icon: "🏕️"
  },
  {
    title: "Curated Experiences: Bonfires, BBQ & Stargazing",
    description: "Experience clear-sky stargazing and curated outdoor bonfires & barbeque at Stone Heritage Mukteshwar. Book direct for complimentary winter camping access and hot Kumaoni snacks.",
    icon: "🔥"
  },
  {
    title: "Special Yoga Sessions For Group",
    description: "Rejuvenate your mind and body with our guided group yoga sessions amidst the serene mountain environment.",
    icon: "🧘‍♀️"
  }
];

const placesToVisit = [
  {
    name: "Nanda Devi Peak Viewpoint: Unmatched Himalayan Vistas from Stone Heritage",
    description: "The second highest mountain in India, visible from various vantage points in Mukteshwar, offering breathtaking panoramic views of the majestic snow-capped Himalayas.",
    distance: "Visible from Mukteshwar town",
    activities: "Sunrise photography, nature walks, and scenic sightseeing.",
    tips: "Best time to view is early morning on clear days. Carry a good camera or binoculars.",
    image: "/nanda-devi-peak-view-mukteshwar.webp"
  },
  {
    name: "Adventure: Rock Climbing at Chauli Ki Jali",
    description: "A stunning cliff behind the Mukteshwar temple known for its overhanging rocks, deep valley views, and fascinating local legends.",
    distance: "1.5 km from the town center",
    activities: "Rock climbing, rappelling, ziplining, and sunset watching.",
    tips: "Moderate walking involved. Hire certified local guides for adventure sports. Best visited in the late afternoon.",
    image: "/chauli-ki-jali-in-mukteshwar.webp"
  },
  {
    name: "Bhalu Gaad Waterfall Trek: Itinerary & Nearby Stays",
    description: "A beautiful hidden gem tucked away in dense forests, featuring a continuous 60-foot water plunge into a pristine clear pool.",
    distance: "Approx. 10 km from Mukteshwar",
    activities: "Short jungle trek, bird watching, and picnicking by the water.",
    tips: "Involves a 2 km moderate trek from the road head. Wear comfortable trekking shoes and carry drinking water.",
    image: "/Bhalugaad Waterfall.webp"
  },
  {
    name: "Mukteshwar Temple",
    description: "The ancient, 350-year-old Shiva temple from which the town derives its name, situated gracefully atop the highest point in the area.",
    distance: "Located in the town center",
    activities: "Offering prayers, meditation, and ringing the traditional copper bells.",
    tips: "The temple is accessible via stone steps. Dress modestly and visit early morning for a peaceful spiritual experience.",
    image: "/Mukteshwar Dham Temple.webp"
  },
  {
    name: "Mukteshwar Inspection Bungalow",
    description: "A historic PWD inspection bungalow offering architectural charm and sweeping views of the majestic Nanda Devi peak.",
    distance: "Near the Mukteshwar Temple",
    activities: "Enjoying the architecture, Himalayan viewing, and peaceful walks.",
    tips: "Great spot for sunrise and sunset photography. Prior permission might be needed for a stay.",
    image: "/mukteshwar-inspection.webp"
  },
  {
    name: "Starscapes Observatory Mukteshwar",
    description: "An astronomical observatory offering a mesmerizing stargazing experience. Explore the night sky, planets, and galaxies through professional telescopes.",
    distance: "A short drive from the town center",
    activities: "Stargazing, astrophotography, and guided astronomy tours.",
    tips: "Book in advance as slots are limited. Best visited on clear, moonless nights. Dress warmly.",
    image: "/sky-obesration-in- Mukteshwar.webp"
  },
  {
    name: "Brahmeswara Temple",
    description: "An important historic temple dating back to ancient times, known for its spiritual ambiance and peaceful surroundings.",
    distance: "Short distance from the main temple complex",
    activities: "Exploring historical architecture and enjoying the serene environment.",
    tips: "Often less crowded, making it perfect for a quiet, peaceful visit. Respect the local customs."
  }
];

export function Experiences() {
  return (
    <>
      <Helmet>
        <title>Things to do in Mukteshwar | Stone Heritage Experiences</title>
        <meta name="description" content="Discover the best things to do in Mukteshwar. Enjoy rock climbing at Chauli Ki Jali, nature treks, waterfall visits, and stargazing at Stone Heritage Homestay." />
      </Helmet>
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        <h1 className="text-4xl font-bold mb-4 text-primary">Things to do in Mukteshwar: Local Experiences</h1>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto">
          Immerse yourself in the culture, adventure, and natural beauty of the Himalayas. When you are looking for things to do in Mukteshwar, we have you covered.
        </p>
      </motion.div>

      <div className="mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Discover</span>
          <h2 className="text-3xl font-bold mb-4 text-primary">Best Places to Visit & Things to Do in Mukteshwar</h2>
          <p className="text-lg text-primary/70 max-w-3xl mx-auto">
            Discover the rich heritage and natural wonders surrounding our homestay. From breathtaking Himalayan peaks and hidden waterfalls to ancient spiritual sites, these nearby attractions are easily accessible and promise to enrich your Mukteshwar experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {placesToVisit.map((place, index) => (
             <motion.div 
               key={index} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: index % 2 === 0 ? 0 : 0.1 }}
               className="bg-white rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col"
             >
               {place.image && (
                 <div className="h-64 relative overflow-hidden bg-stone-200 shrink-0">
                   <img 
                     src={place.image} 
                     alt={`${place.name} - Mukteshwar`}
                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                     loading="lazy"
                   />
                 </div>
               )}
               <div className="p-8 flex-grow">
                 <h3 className="text-2xl font-bold text-primary mb-3">{place.name}</h3>
                 <p className="text-primary/80 mb-6 leading-relaxed">{place.description}</p>
                 
                 <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <span className="text-accent mt-0.5 text-lg">📍</span>
                     <div>
                       <span className="font-semibold text-primary block sm:inline">Distance: </span>
                       <span className="text-primary/70">{place.distance}</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="text-accent mt-0.5 text-lg">✨</span>
                     <div>
                       <span className="font-semibold text-primary block sm:inline">Activities: </span>
                       <span className="text-primary/70">{place.activities}</span>
                     </div>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="text-accent mt-0.5 text-lg">💡</span>
                     <div>
                       <span className="font-semibold text-primary block sm:inline">Pro Tip: </span>
                       <span className="text-primary/70">{place.tips}</span>
                     </div>
                   </li>
                 </ul>
               </div>
             </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">On-Site Activities</span>
        <h2 className="text-3xl font-bold mb-4 text-primary">More Things to do in Mukteshwar: Curated Experiences</h2>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto mt-4">
          Thoughtfully crafted to make your stay truly memorable. From guided treks to stargazing, there are plenty of unique things to do in Mukteshwar right at Stone Heritage.
        </p>
      </motion.div>

      <div className="space-y-12 mb-24">
        {experiences.map((exp, i) => (
          <motion.div 
            key={exp.title} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-all"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-accent/10 rounded-full flex items-center justify-center text-6xl">
              {exp.icon}
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{exp.title}</h2>
              <p className="text-lg text-primary/80 mb-6">{exp.description}</p>
              <a 
                href={`https://wa.me/919027844424?text=${encodeURIComponent(`I'm interested in the ${exp.title} experience.`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-stone-50 font-semibold py-3 px-8 rounded-full transition-colors shadow-sm"
              >
                Book Experience
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
