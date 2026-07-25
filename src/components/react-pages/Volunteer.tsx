import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OptimizedImage } from '../../components/OptimizedImage';
import { ChevronDown, Camera, Video, PenTool, Palette, Share2, Scissors } from 'lucide-react';

const skillsList = [
  { name: "Photography", icon: "📸" },
  { name: "Videography & Reels", icon: "🎥" },
  { name: "Travel Blogging", icon: "✍️" },
  { name: "Graphic Design", icon: "🎨" },
  { name: "Social Media Management", icon: "📱" },
  { name: "Video Editing", icon: "✂️" }
];

const programOffers = [
  {
    title: "Content Creation Residency",
    description: "Document the heritage architecture, Himalayan views, and local Kumaoni culture through photography and video. Ideal for creators building travel or lifestyle portfolios, in exchange for a comfortable stay and authentic home-cooked meals.",
    icon: "🎥"
  },
  {
    title: "Blog & Storytelling Exchange",
    description: "Write about your experience at Stone Heritage and Mukteshwar's surrounding attractions — from Chauli Ki Jali to Kainchi Dham. Perfect for travel bloggers looking for a genuine story to tell, with full access to the property and local experiences.",
    icon: "✍️"
  },
  {
    title: "Design & Branding Exchange",
    description: "Contribute your design skills to our social media assets, print materials, or branding — helping shape how Stone Heritage is seen online, while experiencing the property firsthand as your creative reference.",
    icon: "🎨"
  }
];

const creatorFaqs = [
  {
    q: "How long is the content creator work exchange program?",
    a: "Program durations typically range from 1 to 4 weeks depending on the project scope and creator agreement. Contact us with your proposal for custom duration requests."
  },
  {
    q: "What kind of content do I need to create in exchange for a stay?",
    a: "Deliverables usually include high-resolution photography, short-form video reels, blog articles, or branding design assets covering our homestay, surrounding trails, and local Kumaoni hospitality."
  },
  {
    q: "Do I need a large following to apply as a content creator?",
    a: "No — quality of portfolio and creative craftsmanship matter most. We welcome skilled creators regardless of social media follower count."
  },
  {
    q: "Is the work exchange open to solo creators or teams (e.g., a videographer + editor duo)?",
    a: "Yes! Both solo creators and small creator duos (such as a videographer and editor team) are welcome to apply."
  },
  {
    q: "What equipment or support does Stone Heritage provide for content creation?",
    a: "Stone Heritage provides full property access, high-speed Wi-Fi, local guided tours/retrievals to nearby spots like Chauli Ki Jali & Bhalu Gaad, comfortable room accommodation, and wholesome home-cooked vegetarian meals."
  }
];

export function Volunteer() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <OptimizedImage 
            src="/copper-room.webp" 
            alt="Himalayan Mountains at Stone Heritage Mukteshwar" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-50"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center text-stone-50 mt-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans font-medium tracking-[0.3em] uppercase text-xs mb-6 block text-highlight">Community & Creative Impact</span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
              Content Creator Work Exchange — Stay & Create at Our Homestay in Mukteshwar
            </h1>
            <div className="w-16 h-[1px] bg-highlight/50 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-stone-200">
              Join our Content Creator & Volunteer Work Exchange in Mukteshwar, Uttarakhand. Exchange your photography, videography, blogging, and design skills for a cozy mountain stay, wholesome vegetarian meals, and authentic Himalayan experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Intro Section: Who This Program Is For */}
      <section className="py-16 px-4 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-primary">Who This Program Is For</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-8"></div>
            <p className="text-lg text-primary/80 font-light leading-relaxed">
              Our Content Creator & Volunteer Work Exchange is designed for passionate travel photographers, videographers, writers, graphic designers, and social media strategists looking to immerse themselves in mountain living while contributing their creative talents. Exchange your skills for a comfortable stay, fresh home-cooked vegetarian meals, and full access to our heritage property in Mukteshwar, Uttarakhand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section: Skills We Welcome */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Your Contribution</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">Skills We Welcome</h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillsList.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white px-8 py-6 border border-stone-200/80 shadow-sm flex items-center gap-4 rounded-xl hover:border-accent/40 hover:shadow-md transition-all cursor-default text-left"
              >
                <span className="text-3xl">{skill.icon}</span>
                <span className="font-serif font-medium text-primary text-xl">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer: Program Cards */}
      <section className="py-24 px-4 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Work Exchange Paths</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">What We Offer</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
              Choose a creative track that matches your craft. We provide guidance, room accommodation, high-speed Wi-Fi, and a supportive environment in the hills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-10 bg-stone-50 border border-stone-200 rounded-2xl hover:bg-stone-100/80 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                    {offer.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-primary mb-4">{offer.title}</h3>
                  <p className="text-primary/75 font-light leading-relaxed text-sm md:text-base">
                    {offer.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 shadow-xl border border-stone-200 flex flex-col md:flex-row items-center gap-12 rounded-2xl"
          >
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-stone-200 relative h-64 md:h-80 bg-stone-100 flex items-center justify-center">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.798426132153!2d79.64472459999999!3d29.434687300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0bd7d35a2e497%3A0x466b07899edd7565!2sStone%20Heritage%20Mukteshwar!5e0!3m2!1sen!2sin!4v1782816534338!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 contrast-125"
                title="Stone Heritage Mukteshwar Location Map"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-medium text-primary mb-6">Our Location in Mukteshwar</h2>
              <p className="text-primary/70 font-light leading-relaxed mb-6">
                Situated along the scenic Bhowali-Dhanachuli Road in Mukteshwar, Stone Heritage provides full property access, fast Wi-Fi, and nearby access to rock climbing at Chauli Ki Jali, Bhalu Gaad waterfall, and pine forest trails.
              </p>
              <a 
                href="https://wa.me/919027844424?text=Hi!%20I'm%20interested%20in%20applying%20for%20the%20Content%20Creator%20%26%20Volunteer%20Work%20Exchange."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-8 transition-colors shadow-sm text-xs rounded-xl"
              >
                Apply for Work Exchange
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creator FAQ Section */}
      <section className="py-24 px-4 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Creator Help</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">Frequently Asked Questions</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
              Common questions about applying for our Content Creator & Volunteer Work Exchange in Mukteshwar.
            </p>
          </div>

          <div className="space-y-4">
            {creatorFaqs.map((faq, index) => {
              const isOpen = openFaqs.includes(index);
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left font-serif font-medium text-base md:text-lg text-primary flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-primary/80 text-sm md:text-base font-light leading-relaxed border-t border-stone-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
