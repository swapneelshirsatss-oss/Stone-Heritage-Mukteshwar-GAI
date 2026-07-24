import React from 'react';

export function BookingCtaSection() {
  return (
    <section className="py-16 px-4 bg-stone-50 text-center border-t border-stone-200">
      <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-primary">Book Your Mukteshwar Homestay Direct</h2>
      <p className="text-lg text-primary/70 mb-8 max-w-2xl mx-auto">Get the best rates, complimentary upgrades, and personalized service when you bypass OTAs and book directly with us.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://booking.thestoneheritage.in/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-8 hover:bg-primary/90 transition-colors shadow-sm w-full sm:w-auto">
          Book Online Now
        </a>
        <a href="https://wa.me/919027844424" target="_blank" rel="noopener noreferrer" className="inline-block bg-highlight text-primary font-sans font-medium uppercase tracking-widest py-3.5 px-8 hover:bg-white transition-colors border border-highlight shadow-sm w-full sm:w-auto">
          Book via WhatsApp
        </a>
      </div>
    </section>
  );
}
