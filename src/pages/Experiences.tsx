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

export function Experiences() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">Curated Experiences</h1>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto">
          Immerse yourself in the culture, adventure, and natural beauty of Mukteshwar.
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.title} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200 flex flex-col md:flex-row items-center gap-8">
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
                className="inline-block bg-accent hover:bg-tertiary text-primary font-bold py-3 px-8 rounded-full transition-colors"
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
