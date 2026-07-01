import React from 'react';

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
  }
];

const placesToVisit = [
  {
    name: "Nanda Devi Peak (Viewpoint)",
    description: "The second highest mountain in India, visible from various vantage points in Mukteshwar, offering breathtaking panoramic views of the majestic snow-capped Himalayas.",
    distance: "Visible from Mukteshwar town",
    activities: "Sunrise photography, nature walks, and scenic sightseeing.",
    tips: "Best time to view is early morning on clear days. Carry a good camera or binoculars."
  },
  {
    name: "Chauli Ki Jali",
    description: "A stunning cliff behind the Mukteshwar temple known for its overhanging rocks, deep valley views, and fascinating local legends.",
    distance: "1.5 km from the town center",
    activities: "Rock climbing, rappelling, ziplining, and sunset watching.",
    tips: "Moderate walking involved. Hire certified local guides for adventure sports. Best visited in the late afternoon."
  },
  {
    name: "Bhalugaad Waterfall",
    description: "A beautiful hidden gem tucked away in dense forests, featuring a continuous 60-foot water plunge into a pristine clear pool.",
    distance: "Approx. 10 km from Mukteshwar",
    activities: "Short jungle trek, bird watching, and picnicking by the water.",
    tips: "Involves a 2 km moderate trek from the road head. Wear comfortable trekking shoes and carry drinking water."
  },
  {
    name: "Mukteshwar Temple",
    description: "The ancient, 350-year-old Shiva temple from which the town derives its name, situated gracefully atop the highest point in the area.",
    distance: "Located in the town center",
    activities: "Offering prayers, meditation, and ringing the traditional copper bells.",
    tips: "The temple is accessible via stone steps. Dress modestly and visit early morning for a peaceful spiritual experience."
  },
  {
    name: "Mukteshwar Dham",
    description: "A tranquil spiritual complex adjoining the main temple, offering a serene and grounding atmosphere for seekers and devotees.",
    distance: "Adjacent to the Mukteshwar Temple",
    activities: "Spiritual retreats, exploring the ashram premises, and quiet meditation.",
    tips: "Maintain silence within the premises. It's a highly recommended spot to unwind and reflect."
  },
  {
    name: "Mukteshwar Mahadev Temple",
    description: "Part of the sacred shrine cluster dedicated to Lord Shiva, renowned for its traditional stone architecture and deep historical significance.",
    distance: "Within the Mukteshwar temple precinct",
    activities: "Participating in morning aartis (rituals) and observing local traditions.",
    tips: "Photography might be restricted inside the inner sanctum. Check local timings for special prayers."
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
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">Experiences & Local Attractions</h1>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto">
          Immerse yourself in the culture, adventure, and natural beauty of Mukteshwar.
        </p>
      </div>

      <div className="mb-24">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Discover</span>
          <h2 className="text-3xl font-bold mb-4 text-primary">Places to Visit Near Mukteshwar</h2>
          <p className="text-lg text-primary/70 max-w-3xl mx-auto">
            Discover the rich heritage and natural wonders surrounding our homestay. From breathtaking Himalayan peaks and hidden waterfalls to ancient spiritual sites, these nearby attractions are easily accessible and promise to enrich your Mukteshwar experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {placesToVisit.map((place, index) => (
             <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
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
          ))}
        </div>
      </div>

      <div className="text-center mb-12">
        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">On-Site Activities</span>
        <h2 className="text-3xl font-bold mb-4 text-primary">Curated Experiences</h2>
      </div>

      <div className="space-y-12 mb-24">
        {experiences.map((exp) => (
          <div key={exp.title} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-all">
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
          </div>
        ))}
      </div>
    </div>
  );
}
