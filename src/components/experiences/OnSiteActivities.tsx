import React from 'react';
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

export function OnSiteActivities() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">On-Site Activities</span>
        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-primary tracking-tight">Curated Experiences</h1>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
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
            className="bg-white p-10 md:p-14 shadow-sm border border-stone-200 flex flex-col md:flex-row items-center gap-10 hover:shadow-lg transition-all duration-500"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-transparent border border-accent/20 rounded-full flex items-center justify-center text-5xl">
              {exp.icon}
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-serif font-medium mb-4 text-primary">{exp.title}</h2>
              <p className="text-lg text-primary/80 mb-8 font-light leading-relaxed">{exp.description}</p>
              <a 
                href={`https://wa.me/919027844424?text=${encodeURIComponent(`I'm interested in the ${exp.title} experience.`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-8 transition-colors shadow-sm text-xs"
              >
                Book Experience
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
