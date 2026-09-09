import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Phone, MessageSquare, PhoneCall, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

const contactFaqs = [
  {
    q: "1. What is the official Stone Heritage Mukteshwar contact number?",
    a: "The official Stone Heritage Mukteshwar contact number is +91 90278 44424 for direct reservations, room availability, tariffs, and WhatsApp inquiries. For secondary front desk assistance, you can call +91 79002 00563 or email thestoneheritage@gmail.com."
  },
  {
    q: "2. Which is the best homestay in Mukteshwar?",
    a: "Stone Heritage is widely recognized as one of the best homestays in Mukteshwar, rated 4.9/5 across 250+ Google reviews. It offers authentic Kumaoni heritage architecture, panoramic Himalayan views, and personalized hospitality for families, couples, and remote workers."
  },
  {
    q: "3. What makes Stone Heritage the best homestay in Mukteshwar for families?",
    a: "Stone Heritage offers 9 distinct rooms, including the Stonewood Family Retreat (2 King Beds, ideal for 4-6 guests), making it easy to accommodate families and multi-generational groups. The property also offers on-site bonfires, BBQ nights, and nature trails suited to all ages."
  },
  {
    q: "4. Is Stone Heritage a luxury or budget homestay in Mukteshwar?",
    a: "Stone Heritage is a boutique heritage homestay offering a mid-to-premium experience — combining authentic stone cottage architecture with modern comforts like en-suite bathrooms, high-speed Wi-Fi, and personalized service, rather than a budget stay."
  },
  {
    q: "5. What is included in a stay at Stone Heritage homestay in Mukteshwar?",
    a: "A stay includes accommodation in heritage stone cottage rooms, high-speed Wi-Fi, and access to on-site lawn grounds, bonfire setups, and stargazing areas. Freshly prepared home-cooked food and breakfast are available on site from our 100% pure vegetarian kitchen."
  },
  {
    q: "6. Is Stone Heritage a good homestay in Mukteshwar for families with kids?",
    a: "Yes — the Stonewood Family Retreat and Copper Room (King Bed + Single) are well-suited for families with children, and the property's nature trails, bonfire nights, and open outdoor spaces offer plenty for kids to enjoy."
  },
  {
    q: "7. Does Stone Heritage have family rooms or suites for groups?",
    a: "Yes. The Stonewood Family Retreat sleeps 4-6 guests with 2 King Beds and a private balcony, and the Copper Room accommodates up to 4 guests — both designed for families and small groups."
  },
  {
    q: "8. Can Stone Heritage accommodate a large family or multi-generational trip?",
    a: "Yes. With 9 individual rooms across the property, families can book multiple rooms together — combining the Stonewood Family Retreat with additional rooms like Brass, Copper, or Iron for larger multi-generational groups."
  },
  {
    q: "9. Is Stone Heritage suitable for a family reunion in Mukteshwar?",
    a: "Yes. The property's mix of room types, communal outdoor spaces, and experiences like group bonfires and BBQ nights make it well suited for family reunions and group getaways."
  },
  {
    q: "10. How far is Stone Heritage homestay from Delhi?",
    a: "Stone Heritage is approximately a 7.5 to 8-hour drive (~320–340 km) from Delhi via Moradabad, Haldwani, and Bhowali, making it a popular weekend getaway destination for Delhi NCR travelers."
  },
  {
    q: "11. What is the best route from Delhi NCR to Stone Heritage in Mukteshwar?",
    a: "The fastest route from Delhi is via Moradabad, Haldwani, and Bhowali. Stone Heritage can also help arrange taxi pickups from Kathgodam railway station for travelers arriving by train."
  },
  {
    q: "12. How far is Stone Heritage from Nainital?",
    a: "Stone Heritage is approximately a 2-hour drive from Nainital, making it an easy addition to a Kumaon hills itinerary."
  },
  {
    q: "13. Is Stone Heritage close to Mukteshwar Temple and Chauli Ki Jali?",
    a: "Yes. Chauli Ki Jali is approximately 1.5 km from the property, and Mukteshwar Temple is located in the town center, a short drive away — both easily accessible during your stay."
  },
  {
    q: "14. How can I book Stone Heritage homestay in Mukteshwar directly?",
    a: "You can book directly via WhatsApp at +91 9027844424, by calling +91 9027844424 or +91 7900200563, by emailing thestoneheritage@gmail.com, or through the booking form on this page for the best available rates."
  },
  {
    q: "15. What is the price range for rooms at Stone Heritage?",
    a: "Room rates at Stone Heritage range from approximately ₹1,500 to ₹15,000 per night, depending on the room type and season. Contact us directly for the best current rates."
  },
  {
    q: "16. Does Stone Heritage offer better rates for direct bookings than OTAs?",
    a: "Yes. Booking directly with Stone Heritage — via WhatsApp, phone, or email — offers the best available rates, along with complimentary upgrades (subject to availability) and priority room allocation, compared to booking through third-party OTA platforms."
  },
  {
    q: "17. What are the check-in and check-out times, and cancellation policy at Stone Heritage?",
    a: "Standard check-in time is 13:00 PM (1:00 PM IST) and check-out time is 11:00 AM (11:00 AM IST). Early check-in and late check-out are available subject to room availability. Cancellations made at least 24 hours before check-in time are eligible for a 100% refund, with no cancellation charges."
  },
  {
    q: "18. Is Stone Heritage a pet-friendly homestay in Mukteshwar?",
    a: "Yes, Stone Heritage is a fully pet-friendly homestay. Mention your pets in your booking inquiry so a suitable room with easy outdoor access can be allocated."
  },
  {
    q: "19. Does Stone Heritage offer bonfire, BBQ, or stargazing experiences?",
    a: "Yes. Guests can enjoy curated bonfire and BBQ nights along with guided stargazing sessions under clear Himalayan skies, right from the property's terrace."
  },
  {
    q: "20. Is Stone Heritage a good homestay in Mukteshwar for a workation?",
    a: "Yes. The Himalayan Workation room offers a dedicated workstation setup with high-speed Wi-Fi, well suited to remote work stays. Workation packages require a minimum stay of 7 days — contact us directly for pricing."
  },
  {
    q: "21. What food and breakfast options are available at Stone Heritage?",
    a: "Fresh home-cooked food and breakfast are available on site daily from our 100% pure vegetarian kitchen. We serve delicious North Indian comfort meals and authentic Kumaoni regional dishes prepared fresh with local ingredients."
  }
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', dates: '', message: '' });
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'Form_Submission',
        category: 'Lead',
        action: 'Submit',
        label: 'Contact_Page_Form'
      });
    }

    const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0ADates: ${formData.dates}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919027844424?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
      {/* Hero & AEO Direct Answer Block */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium text-stone-700 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Official Front Desk & Direct Reservations</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 text-primary tracking-tight">
          Stone Heritage Mukteshwar Contact Number
        </h1>
        <p className="aeo-answer-block text-base sm:text-lg text-primary/80 max-w-3xl mx-auto font-light leading-relaxed">
          Looking for the official Stone Heritage Mukteshwar contact number? Call or WhatsApp our reservations desk directly at <a href="tel:+919027844424" className="font-semibold text-primary underline underline-offset-2 hover:text-secondary">+91 90278 44424</a> or <a href="tel:+917900200563" className="font-semibold text-primary underline underline-offset-2 hover:text-secondary">+91 79002 00563</a> for direct booking discounts, seasonal tariffs, and immediate room availability.
        </p>

        {/* Quick Action Contact Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
          <a
            href="tel:+919027844424"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-sans font-medium px-5 py-3 rounded-xl transition-all shadow-sm hover:shadow text-sm sm:text-base group"
          >
            <Phone className="w-4 h-4 text-highlight group-hover:scale-110 transition-transform" />
            <span>Call: +91 90278 44424</span>
          </a>
          <a
            href="https://wa.me/919027844424?text=Hi%20Stone%20Heritage%20Mukteshwar!%20I%20would%20like%20to%20inquire%20about%20room%20availability%20and%20rates."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-sans font-medium px-5 py-3 rounded-xl transition-all shadow-sm hover:shadow text-sm sm:text-base"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Front Desk</span>
          </a>
          <a
            href="tel:+917900200563"
            className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-primary border border-stone-300 font-sans font-medium px-4 py-3 rounded-xl transition-all text-sm sm:text-base"
          >
            <PhoneCall className="w-4 h-4 text-stone-500" />
            <span>Alt: +91 79002 00563</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2.5">
              <Phone className="w-6 h-6 text-secondary" />
              <span>Contact Numbers & Location</span>
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
                <div className="p-2.5 bg-stone-100 rounded-xl text-secondary shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-1">
                    Direct Booking & WhatsApp
                  </h3>
                  <p className="text-primary text-base sm:text-lg font-medium">
                    <a href="tel:+919027844424" className="hover:text-secondary transition-colors underline underline-offset-2">
                      +91 90278 44424
                    </a>
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">Primary line for room inquiries, direct booking & WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
                <div className="p-2.5 bg-stone-100 rounded-xl text-secondary shrink-0 mt-0.5">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-1">
                    Secondary Front Desk Phone
                  </h3>
                  <p className="text-primary text-base font-medium">
                    <a href="tel:+917900200563" className="hover:text-secondary transition-colors underline underline-offset-2">
                      +91 79002 00563
                    </a>
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">Guest service, road navigation & check-in support</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
                <div className="p-2.5 bg-stone-100 rounded-xl text-secondary shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-1">Email</h3>
                  <p className="text-primary">
                    <a href="mailto:thestoneheritage@gmail.com" className="hover:text-secondary transition-colors underline underline-offset-2 font-medium">
                      thestoneheritage@gmail.com
                    </a>
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">For customized quotes, long stays & corporate buyouts</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pb-4 border-b border-stone-100">
                <div className="p-2.5 bg-stone-100 rounded-xl text-secondary shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-1">Property Address</h3>
                  <p className="text-primary/80 text-sm leading-relaxed">
                    <a 
                      href="https://www.google.com/maps/place/?cid=5074157692820223333" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-secondary underline underline-offset-2 transition-colors"
                    >
                      Bhowali Dhanachuli Rd, South Gola Range,<br />Mukteshwar, Uttarakhand 263138
                    </a>
                  </p>
                  <p className="text-xs text-stone-500 mt-1">~7.5 hrs drive from Delhi NCR via Moradabad & Bhowali</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-stone-100 rounded-xl text-secondary shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider mb-1">Standard Timings</h3>
                  <p className="text-primary/80 text-sm">
                    Check-in: <strong className="text-primary font-medium">13:00 PM (1:00 PM IST)</strong> • Check-out: <strong className="text-primary font-medium">11:00 AM IST</strong>
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">Direct phone assistance active daily</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden h-[360px] bg-stone-200 border border-stone-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.798426132153!2d79.64472459999999!3d29.434687300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0bd7d35a2e497%3A0x466b07899edd7565!2sStone%20Heritage%20Mukteshwar!5e0!3m2!1sen!2sin!4v1782816534338!5m2!1sen!2sin"
                title="Google Maps Location of Stone Heritage Mukteshwar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <div className="mt-3 text-left">
              <a
                href="https://www.google.com/maps/place/?cid=5074157692820223333"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary font-medium transition-colors underline underline-offset-4"
              >
                Open Location Pin on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-2xl font-bold text-primary">Direct Booking Inquiries</h2>
              <span className="hidden sm:inline-block text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium px-2.5 py-1 rounded-full">
                Best Rate Guarantee
              </span>
            </div>
            <p className="text-xs sm:text-sm text-primary/70 mb-6 leading-relaxed">
              Prefer speaking with a human? Call or WhatsApp <a href="tel:+919027844424" className="font-semibold text-primary underline hover:text-secondary">+91 90278 44424</a> directly, or send your inquiry below.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Phone Number / WhatsApp</label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="dates" className="block text-sm font-medium text-primary mb-2">Preferred Dates</label>
              <input
                type="text"
                id="dates"
                placeholder="e.g. Oct 12 - Oct 15"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                value={formData.dates}
                onChange={e => setFormData({ ...formData, dates: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message or Special Requests</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-24 border-t border-stone-200 pt-16 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Guest Help & Booking Information</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-primary/70 max-w-2xl mx-auto font-light text-sm">
            Everything you need to know about booking, room choices, driving routes, food, and amenities at Stone Heritage Mukteshwar.
          </p>
        </div>

        <div className="space-y-4">
          {contactFaqs.map((faq, index) => {
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
    </div>
  );
}
