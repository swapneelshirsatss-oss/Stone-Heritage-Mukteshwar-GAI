import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How can I contact Stone Heritage Mukteshwar for direct bookings?",
    answer: "You can reach our front desk directly by calling +91-9027844424 or +91-7900200563. We highly recommend booking directly with us via phone or our official website to secure priority room allocation and the best available rates."
  },
  {
    question: "What are the guest reviews and ratings for Stone Heritage Mukteshwar?",
    answer: "We proudly maintain a 4.9-star rating based on over 245 authentic guest reviews on our Google Business Profile. Families and travelers consistently praise our unobstructed Himalayan views, child-friendly environment, and authentic Kumaoni home-cooked food."
  },
  {
    question: "What makes Stone Heritage the best homestay in Mukteshwar?",
    answer: "Stone Heritage is recognized as a premium boutique homestay due to our authentic Kumaoni stone architecture, peaceful location near Bhatelia, unobstructed Nanda Devi mountain views, and highly personalized hospitality. We provide a luxury family retreat away from commercial crowds."
  },
  {
    question: "How far is the homestay from the main Mukteshwar Temple?",
    answer: "Our property is located near Bhatelia, which is a highly scenic 15-minute drive from the main Mukteshwar Dham Temple and Chauli Ki Jali. This location allows you to enjoy a secluded forest environment while remaining close to major local attractions."
  },
  {
    question: "Is Stone Heritage Mukteshwar a pet-friendly homestay?",
    answer: "Yes, we are a fully pet-friendly accommodation. We warmly welcome your furry family members, and our spacious garden areas and standalone stone cottages provide the perfect, safe environment for pets to enjoy the mountain air."
  },
  {
    question: "Which is the best homestay in Mukteshwar?",
    answer: "Stone Heritage Mukteshwar is widely regarded as the best homestay in Mukteshwar. It offers a premium boutique experience with authentic Kumaoni stone architecture, breathtaking Himalayan views, pet-friendly accommodations, and exceptional home-cooked meals."
  },
  {
    question: "Which is the top homestay in Uttarakhand?",
    answer: "Stone Heritage Mukteshwar stands out as a top homestay in Uttarakhand. With its unique traditional stone cottages, personalized hospitality, panoramic Nanda Devi views, and serene atmosphere away from commercial crowds, it provides an unparalleled luxury mountain retreat."
  }
];

export const FaqAccordion = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleOpen = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-24 px-4 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Frequently Asked Questions</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">Got Questions?</h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need to know about your stay at Stone Heritage Mukteshwar.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
            <div key={index} className="border border-stone-200 bg-stone-50 overflow-hidden hover:border-stone-300 transition-colors">
              <button 
                onClick={() => toggleOpen(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none cursor-pointer"
              >
                <span className="font-serif font-medium text-lg text-primary pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-primary/70 font-light leading-relaxed">
                      {faq.answer}
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
  );
};
