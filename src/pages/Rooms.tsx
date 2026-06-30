import React from 'react';

const rooms = [
  { name: "Brass Room", image: "/brass-room.webp" },
  { name: "Copper Room", image: "/copper-room.webp" },
  { name: "The Vintage Room", image: "/vintage-room.webp" },
  { name: "Stonewood Family Retreat", image: "/stonewood-family-retreat.webp" },
  { name: "Stone And Story Room", image: "/stone-and-story-room.webp" },
  { name: "Iron Room", image: "/iron-room.webp" },
  { name: "Cedar Room", image: "/cedar-room.webp" }
];

export function Rooms() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">Our Accommodations</h1>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto">
          Experience rustic elegance in our thoughtfully designed rooms, blending traditional stone architecture with modern comforts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col group">
            <div className="h-56 relative overflow-hidden bg-stone-200">
              <img 
                src={room.image} 
                alt={room.name} 
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
          </div>
        ))}
      </div>
    </div>
  );
}
