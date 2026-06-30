import React from 'react';

const experiences = [
  {
    title: "Traditional Kumaoni Cooking Workshop",
    description: "Learn the secrets of local cuisine with Chef Akshay. Prepare and savor authentic dishes using fresh, organic ingredients.",
    icon: "🍳"
  },
  {
    title: "Rock Climbing at Chauli Ki Jali",
    description: "Experience the thrill of rock climbing and rappelling at the famous Chauli Ki Jali cliffs, guided by certified experts.",
    icon: "🧗"
  },
  {
    title: "Stargazing under Himalayan Skies",
    description: "The clear mountain air offers pristine views of the night sky. Enjoy a guided stargazing session right from our terrace.",
    icon: "✨"
  }
];

const testimonials = [
  {
    text: "This was a perfect weekend getaway from Delhi to Mukteshwar. After a long drive, the peaceful vibe, stone architecture, and warm hospitality helped us unwind completely. Watching the sunset here was unforgettable.",
    name: "Khushi",
    role: "Product Analyst · Tech Studio",
    image: ""
  },
  {
    text: "Stone Heritage Mukteshwar is a great budget homestay in Mukteshwar, Uttarakhand without compromising on experience. Clean rooms, beautiful views, and excellent hospitality make it great value for money.",
    name: "Saransh",
    role: "Software Developer",
    image: ""
  },
  {
    text: "We chose this place for a short weekend trip from Delhi, mainly because it’s pet-friendly. It turned out to be a great decision. Peaceful location, friendly staff, and lots of open space for our pet.",
    name: "Nikhil",
    role: "",
    image: ""
  },
  {
    text: "The pure vegetarian food prepared by chef Akshay was delicious and homely. Pawan and Naveen took great care of us and made sure everything was comfortable. A wonderful experience overall.",
    name: "Rashmi Negi",
    role: "",
    image: ""
  },
  {
    text: "This place is special not just because it’s on the main state highway of Mukteshwar, but also because the staff are so friendly and helpful. When I reached earlier than planned, they let me check in right away with no problems.",
    name: "Akash",
    role: "",
    image: ""
  },
  {
    text: "Stone Heritage Mukteshwar is an ideal choice if you’re looking for a family-friendly, pet-friendly, budget homestay in Mukteshwar. With good WiFi for workation, tasty vegetarian food, and beautiful sunsets, it offers a complete hill-stay experience.",
    name: "Gagan",
    role: "Maati Living",
    image: ""
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

      <div className="text-center mb-10">
        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Guest Experiences</span>
        <h2 className="text-3xl font-bold mb-4 text-primary">What Our Guests Say</h2>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto">
          Read what travelers have to say about their stay at Stone Heritage Mukteshwar.
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col items-center hover:shadow-md transition-all">
            <div className="w-20 h-20 bg-stone-200 rounded-full overflow-hidden mb-6 border-2 border-stone-100 flex-shrink-0">
              {testimonial.image ? (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-600 text-2xl font-bold uppercase">
                  {testimonial.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex text-accent mb-4 text-sm gap-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-primary/80 leading-relaxed text-center italic mb-6 text-sm flex-grow">
              "{testimonial.text}"
            </p>
            <h3 className="text-base font-bold text-primary">- {testimonial.name}</h3>
            {testimonial.role && <p className="text-xs text-primary/60 mt-1">{testimonial.role}</p>}
          </div>
        ))}
      </div>

      <div className="text-center">
        <a 
          href="https://www.google.com/maps/place/?cid=5074157692820223333" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-stone-50 border border-stone-200 transition-colors shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-current"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          See our reviews on Google
        </a>
      </div>
    </div>
  );
}
