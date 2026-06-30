import React from 'react';

const rooms = [
  "Brass Room",
  "Copper Room",
  "The Vintage Room",
  "Stonewood Family Retreat",
  "Stone And Story Room",
  "Iron Room",
  "Cedar Room"
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
          <div key={room} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col">
            <div className="h-48 bg-stone-200 flex items-center justify-center">
              <span className="text-stone-400">Room Image Gallery</span>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{room}</h2>
              <p className="text-primary/70 mb-6 flex-grow">
                Enjoy panoramic views and premium comfort. Perfect for your Mukteshwar getaway.
              </p>
              <a 
                href="https://wa.me/919027844424" 
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
