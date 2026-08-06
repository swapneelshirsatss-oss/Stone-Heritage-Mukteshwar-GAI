import React from 'react';
import { ExternalLink, ShieldCheck, Star } from 'lucide-react';

export function PartnersSection() {
  const partners = [
    {
      name: "Google Travel",
      url: "https://www.google.com/travel/hotels/entity/ChkI5er19pnxwbVGGg0vZy8xMXhjeWtwNzJwEAE",
      badge: "4.9 ★ Rating",
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span className="text-lg md:text-xl font-bold tracking-tight text-slate-800">
            Google <span className="text-blue-500 font-normal">Travel</span>
          </span>
        </div>
      )
    },
    {
      name: "MakeMyTrip",
      url: "https://www.makemytrip.com/hotels/stone_heritage_mukteshwar-details-mukteshwar.html",
      badge: "Verified Stay",
      logo: (
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold text-xs tracking-tighter">
            MMT
          </span>
          <span className="text-lg md:text-xl font-extrabold tracking-tight text-slate-800">
            Make<span className="text-red-600">My</span>Trip
          </span>
        </div>
      )
    },
    {
      name: "TripAdvisor",
      url: "https://www.tripadvisor.in/Hotel_Review-g1162527-d33498951-Reviews-Stone_Heritage_Mukteshwar-Mukteshwar_Nainital_District_Uttarakhand.html",
      badge: "Top Reviewed",
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 flex-shrink-0 text-[#00aa6c]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-5 13.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm10 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-lg md:text-xl font-black tracking-tighter text-[#00aa6c]">
            Tripadvisor
          </span>
        </div>
      )
    },
    {
      name: "agoda",
      url: "https://www.agoda.com/en-in/stone-heritage-mukteshwar/hotel/mukteshwar-in.html?cid=1844104&ds=Qpdp%2B0q8QKidankK",
      badge: "Superb Host",
      logo: (
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          </div>
          <span className="text-lg md:text-xl font-black tracking-tight text-blue-600 lowercase">
            agoda
          </span>
        </div>
      )
    },
    {
      name: "goibibo",
      url: "https://www.goibibo.com/hotels/address-of-stone-heritage-mukteshwar-hotel-in-mukteshwar-4624059796128013456/",
      badge: "GoStays Certified",
      logo: (
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-[10px]">
            go
          </span>
          <span className="text-lg md:text-xl font-extrabold tracking-tight text-orange-500 lowercase">
            go<span className="text-blue-600">ibibo</span>
          </span>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-stone-100/90 via-stone-50 to-stone-100/90 border-y border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 border border-stone-300/50 text-stone-600 font-sans font-medium text-xs tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Trusted & Verified Stays</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary tracking-tight mb-2">
            Featured & Listed On Leading Platforms
          </h2>
          <p className="text-xs md:text-sm text-stone-500 font-light max-w-xl mx-auto">
            Book directly with us for exclusive rates, or reserve your stay through your preferred travel portal.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-between p-5 md:p-6 bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-1"
              aria-label={`View Stone Heritage Mukteshwar on ${partner.name}`}
            >
              {/* Badge Tag */}
              <div className="w-full flex items-center justify-between text-[11px] font-medium text-stone-400 mb-4">
                <span className="inline-flex items-center gap-1 text-amber-600/90 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/50">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                  {partner.badge}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-300 group-hover:text-accent transition-colors" />
              </div>

              {/* Logo */}
              <div className="my-2 py-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {partner.logo}
              </div>

              {/* Link CTA indicator */}
              <span className="mt-4 text-[11px] font-medium text-stone-400 group-hover:text-accent transition-colors flex items-center gap-1">
                View Listing <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </a>
          ))}
        </div>

        {/* Direct Booking Highlight */}
        <div className="mt-10 text-center">
          <p className="text-xs md:text-sm text-stone-600 bg-white/80 backdrop-blur-sm border border-stone-200 inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full shadow-xs">
            <span className="font-semibold text-primary">💡 Best Price Guarantee:</span>
            <span>Book directly on our official site for complimentary perks & lowest direct rates.</span>
            <a
              href="https://booking.thestoneheritage.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:underline inline-flex items-center gap-1 ml-1"
            >
              Book Direct Now →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
