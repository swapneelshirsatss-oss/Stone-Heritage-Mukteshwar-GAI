import React from 'react';

export function PartnersSection() {
  return (
    <section className="py-12 px-4 bg-stone-50 border-y border-stone-200">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-stone-500 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-8 block">We Are Listed On</span>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 transition-all duration-500">
          <a href="https://www.makemytrip.com/hotels/stone_heritage_mukteshwar-details-mukteshwar.html" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center">
             <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800">Make<span className="text-red-600">My</span>Trip</span>
          </a>
          <a href="https://www.tripadvisor.in/Hotel_Review-g1162527-d33498951-Reviews-Stone_Heritage_Mukteshwar-Mukteshwar_Nainital_District_Uttarakhand.html" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#00aa6c]">Tripadvisor</span>
          </a>
          <a href="https://www.agoda.com/en-in/stone-heritage-mukteshwar/hotel/mukteshwar-in.html?cid=1844104&ds=Qpdp%2B0q8QKidankK" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center">
             <span className="text-2xl md:text-3xl font-black tracking-tight text-blue-500 lowercase">agoda</span>
          </a>
          <a href="https://www.goibibo.com/hotels/address-of-stone-heritage-mukteshwar-hotel-in-mukteshwar-4624059796128013456/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center">
             <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-orange-500 lowercase">go<span className="text-blue-600">ibibo</span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
