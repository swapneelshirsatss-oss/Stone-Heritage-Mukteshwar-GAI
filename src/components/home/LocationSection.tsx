import React from 'react';

export function LocationSection() {
  return (
    <section className="py-24 px-4 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Location</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">Location & How to Reach Our Homestay in Mukteshwar</h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">Located along Bhowali-Dhanachuli Road in Mukteshwar, our homestay offers easy road connectivity from Delhi NCR and Kathgodam.</p>
        </div>
        <div className="overflow-hidden rounded-2xl h-[400px] md:h-[450px] shadow-sm border border-stone-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.798426132153!2d79.64472459999999!3d29.434687300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0bd7d35a2e497%3A0x466b07899edd7565!2sStone%20Heritage%20Mukteshwar!5e0!3m2!1sen!2sin!4v1782816534338!5m2!1sen!2sin" 
            title="Google Maps Location of Stone Heritage Mukteshwar"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div className="mt-4 text-center">
          <a 
            href="https://www.google.com/maps/place/?cid=5074157692820223333" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary font-medium transition-colors underline underline-offset-4"
          >
            Open Location Pin in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
