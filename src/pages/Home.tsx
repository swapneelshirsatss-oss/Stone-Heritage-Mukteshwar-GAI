import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary text-stone-50 overflow-hidden">
        {/* Abstract pattern or image overlay could go here. Keeping it clean with CSS. */}
        <div className="absolute inset-0 z-0 bg-primary">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=2800" 
            alt="Mukteshwar Himalayas View" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--color-accent),transparent)]"></div>
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,var(--color-secondary),transparent)]"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/60 to-primary"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-stone-50 drop-shadow-lg leading-tight">
            Direct Booking Hotels Mukteshwar: Your Authentic Stone Cottage Retreat
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-light text-stone-200">
            Discover the best homestay for couples in Mukteshwar. Enjoy workcation stays with high-speed WiFi and pet-friendly hospitality in the heart of the Himalayas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a 
              href="https://wa.me/919027844424" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-highlight text-primary font-bold py-4 px-8 rounded-full hover:bg-highlight/90 transition-transform hover:scale-105 active:scale-95 text-lg w-full sm:w-auto"
            >
              Check Availability on WhatsApp
            </a>
            <Link 
              to="/rooms" 
              className="bg-transparent border-2 border-accent text-accent font-bold py-4 px-8 rounded-full hover:bg-accent hover:text-primary transition-all text-lg w-full sm:w-auto"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-primary">Experience Authentic Kumaoni Hospitality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10 flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🍲</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Culinary Delight</h3>
              <p className="text-primary/80">
                Savor pure vegetarian food prepared with love by <strong>Chef Akshay</strong>, featuring authentic local flavors and fresh ingredients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10 flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Warm Welcomes</h3>
              <p className="text-primary/80">
                Enjoy excellent hospitality by <strong>Pawan and Naveen</strong>, ensuring your stay is comfortable, memorable, and truly relaxing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition: Why Book Direct */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Book Direct?</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">Skip the OTAs and secure the best experience for your Himalayan getaway.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-secondary">Best Price Guarantee</h3>
              <p className="text-primary/80">
                Avoid hidden fees and OTA commissions. When you book directly with us via WhatsApp or phone, you are guaranteed the lowest rates available.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-secondary">Priority Upgrades & Requests</h3>
              <p className="text-primary/80">
                Direct bookers get first priority for room upgrades, early check-ins, and special dietary requests. We tailor your stay directly with you.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-secondary">Flexible Cancellations</h3>
              <p className="text-primary/80">
                Life happens. Direct bookings offer more lenient modification and cancellation policies compared to strict third-party platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
