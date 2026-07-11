import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { ComponentProps } from 'react';

type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  key?: React.Key;
};

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border border-stone-200 bg-stone-50 mb-4 overflow-hidden rounded-md">
      <button 
        className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center bg-stone-50 hover:bg-stone-100 transition-colors"
        onClick={onClick}
      >
        <h3 className="text-xl font-bold text-secondary pr-4">{question}</h3>
        <span className="text-accent text-2xl flex-shrink-0 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-1 text-primary/80">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    question: "What is the contact number for Stone Heritage Mukteshwar?",
    answer: <>You can reach us directly for bookings and inquiries at <a href="tel:+919027844424" className="text-accent underline font-medium">+91 9027844424</a> or email us at thestoneheritage@gmail.com. We are happy to help you plan your stay at the stone heritage!</>
  },
  {
    question: "What makes Stone Heritage the best homestay in Mukteshwar for families?",
    answer: <>As a premium heritage property and earthen home in Mukteshwar, we offer spacious, family-friendly rooms. We serve pure vegetarian home-cooked food, provide high-speed WiFi for workations, and are a fully pet-friendly accommodation. Many guests consider us the best homestay in Mukteshwar for family vacations.</>
  },
  {
    question: "Where can I find Stone Heritage Mukteshwar photos and reviews?",
    answer: <>You can view authentic Stone Heritage Mukteshwar photos of our boutique stone cottage and panoramic Himalayan views in our website's <a href="/gallery" className="text-accent underline font-medium">Gallery section</a>. We are proud of our Stone Heritage Mukteshwar reviews, being one of the best rated places to stay in Kumaon, with a 4.9/5 aggregate rating across Google and other review platforms.</>
  },
  {
    question: "What are the Stone Heritage Mukteshwar prices?",
    answer: <>Our prices vary depending on the season, room type (such as The Stone Room or Vintage Stone Cottage Mukteshwar), and availability. We offer a blend of a budget stay and a luxury homestay in Mukteshwar. For the best and most accurate Stone Heritage Mukteshwar prices, please contact us directly or use our booking widget.</>
  },
  {
    question: "Are you a hotel, resort, or a homestay in Mukteshwar?",
    answer: <>We are an authentic Kumaoni heritage homestay. While offering the luxury and comfort you'd expect from the best resorts in Mukteshwar, we provide a much more personalized, peaceful "stone house" experience that large commercial properties cannot match. Whether you are looking for rooms in Mukteshwar or a cozy stone stay, we offer a unique retreat.</>
  },
  {
    question: "Where is the best place to stay in Mukteshwar, Uttarakhand?",
    answer: <>If you are looking for an authentic, peaceful retreat, The Stone Heritage Mukteshwar is often reviewed as the best place to stay in Mukteshwar. We are conveniently located, offering easy access to nearby attractions like Bento the nature walk Mukteshwar while remaining a serene nature retreat.</>
  },
  {
    question: "Do you offer rooms like The Vintage Stone Cottage Mukteshwar or The Stone Room?",
    answer: <>Yes, our property is a traditional stone cottage Mukteshwar featuring beautifully crafted rooms like The Stone Room. Our accommodations are designed to give you the feel of an authentic stone shelter or stone farmhouse with modern comforts.</>
  },
  {
    question: "Does Stone Heritage Mukteshwar offer a Himalayan mountain view?",
    answer: <>Yes! If you're looking for a stay in Mukteshwar with a mountain view, our property offers panoramic Himalayan views. You can enjoy the breathtaking snow-capped peaks directly from your stone house Mukteshwar or our homestay balcony.</>
  },
  {
    question: "Is The Stone Heritage similar to The Himalayan Stone Hamlet or Amravati Estate Mukteshwar?",
    answer: <>The Stone Heritage is a distinct, independently owned Mukteshwar heritage property. Like The Himalayan Stone Hamlet or Amravati Estate Mukteshwar, we celebrate traditional Kumaoni architecture. However, we offer our own unique blend of vintage charm, operating as a boutique stone palace and stone ridge valley retreat.</>
  },
  {
    question: "Is the property considered a British retreat or a traditional Mukteshwar heritage property?",
    answer: <>We are a traditional Kumaoni heritage property. While the area has a rich colonial history similar to The British Retreat Mukteshwar, our focus is on authentic local architecture, making us a true stone cottage and stone stay experience.</>
  },
  {
    question: "Are there glass houses or earthen homes available?",
    answer: <>We specialize in authentic Kumaoni heritage stone houses rather than modern glass houses. Our property is built as a traditional Himalayan stone hamlet, giving you an authentic earthen home feel, but with large windows to enjoy the Himalayan views.</>
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
