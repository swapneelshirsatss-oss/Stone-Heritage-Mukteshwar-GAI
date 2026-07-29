import React from 'react';
import { motion } from 'motion/react';
import { OptimizedImage } from '../OptimizedImage';
import { ShieldCheck, Heart, Leaf, Users, Star, Mountain, Award, MapPin, CheckCircle2, UserCheck, Sparkles, Building2 } from 'lucide-react';

export function OurStoryContent() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary text-stone-100 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-stone-900">
          <OptimizedImage 
            src="/luxury-heritage-homestay-in-mukteshwar.webp" 
            alt="Authentic traditional Kumaoni stone architecture of Stone Heritage Mukteshwar" 
            className="absolute inset-0 w-full h-full object-cover opacity-35"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-primary"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-accent font-sans font-medium tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15"
          >
            Our Journey & Heritage
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium mb-6 text-stone-50 leading-tight tracking-tight max-w-4xl mx-auto"
          >
            Our Story — Luxury Cottage Homestay & Boutique Resort in Mukteshwar
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-200 max-w-3xl mx-auto font-light leading-relaxed mb-8"
          >
            Welcome to Stone Heritage Mukteshwar. Whether you are looking for an authentic luxury cottage homestay, a boutique hotel experience, or a peaceful mountain resort in Mukteshwar, discover our history and meet our hosts Akash, Harsh & Priyanka.
          </motion.p>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="py-20 md:py-28 px-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Authentic Kumaoni Experience</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6 leading-tight">
                Who We Are — A Luxury Cottage Homestay & Boutique Resort in Mukteshwar
              </h2>
              <div className="w-16 h-[1px] bg-accent/50 mb-8"></div>
              
              <div className="space-y-4 text-primary/80 font-light leading-relaxed text-base md:text-lg">
                <p>
                  Stone Heritage is a luxury cottage homestay and boutique resort hotel property situated along the scenic Bhowali-Dhanachuli Road in Mukteshwar, Uttarakhand. Designed as a mountain sanctuary away from urban noise, our property pairs the warmth, personalized care, and home-cooked meals of a traditional cottage homestay with the privacy, luxury stone cottages, and modern amenities of a boutique resort hotel in Mukteshwar.
                </p>
                <p>
                  Built with hand-chiseled local stone, wooden rafters, and wide Himalayan-view balconies, Stone Heritage celebrates the rich architectural legacy of the Kumaon region while offering 9 thoughtfully configured rooms and suites.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 group">
                <OptimizedImage 
                  src="/luxury-heritage-homestay-in-mukteshwar.webp" 
                  alt="Exterior view of Stone Heritage homestay cottages in Mukteshwar" 
                  className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 backdrop-blur-md bg-black/40 rounded-xl border border-white/10">
                  <p className="font-serif text-lg font-medium text-amber-200">Boutique Heritage Resort</p>
                  <p className="text-xs text-stone-200 font-light mt-1">Authentic mountain living with panoramic Himalayan sunset views.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Meet Your Hosts (E-E-A-T Core) */}
      <section id="hosts" className="py-20 md:py-28 px-4 bg-stone-100/80 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Real People, Real Hospitality</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">Meet Your Hosts</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
              Unlike impersonal commercial chain hotels, Stone Heritage is managed directly by passionate hosts and local Kumaoni staff who take personal responsibility for your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Host Card: Akash */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm flex flex-col items-start gap-6 hover:shadow-md transition-all justify-between"
            >
              <div>
                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-4 border-2 border-accent/40 shadow-sm mx-auto sm:mx-0">
                  <OptimizedImage 
                    src="/akash.webp" 
                    alt="Akash - Founder & Host at Stone Heritage Mukteshwar" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1">Founder & Property Host</span>
                <h3 className="text-xl font-serif font-medium text-primary mb-3">Akash — Founder & Host</h3>
                <p className="text-primary/75 text-sm font-light leading-relaxed mb-4">
                  Akash founded Stone Heritage with a deep commitment to preserving Kumaon&apos;s architectural heritage while creating a warm, peaceful sanctuary for guests. Akash is dedicated to authentic Himalayan hospitality.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-accent pt-3 border-t border-stone-100 w-full">
                <UserCheck className="w-4 h-4" /> Personal On-Site Host Care
              </div>
            </motion.div>

            {/* Host Card: Harsh & Priyanka */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm flex flex-col items-start gap-6 hover:shadow-md transition-all justify-between"
            >
              <div>
                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-4 border-2 border-accent/40 shadow-sm bg-stone-100 mx-auto sm:mx-0">
                  <OptimizedImage 
                    src="/Bhalugaad-Waterfall-Mukteshwar.webp" 
                    alt="Harsh and Priyanka leading nature treks in Mukteshwar" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1">Experience & Trek Guides</span>
                <h3 className="text-xl font-serif font-medium text-primary mb-3">Harsh & Priyanka — Experience Hosts</h3>
                <p className="text-primary/75 text-sm font-light leading-relaxed mb-4">
                  Harsh & Priyanka personally host and guide our outdoor treks, forest nature walks, and stargazing evenings, ensuring safe, educational, and inspiring mountain excursions.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-3 border-t border-stone-100 w-full">
                <a href="/experiences/" className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1">
                  See Harsh & Priyanka in action on Experiences &rarr;
                </a>
              </div>
            </motion.div>

            {/* Host Card: Local Team */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm flex flex-col items-start gap-6 hover:shadow-md transition-all justify-between"
            >
              <div>
                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-4 border-2 border-accent/40 shadow-sm bg-stone-100 mx-auto sm:mx-0">
                  <OptimizedImage 
                    src="/mountain-living-best-homestay-Mukteshwar.webp" 
                    alt="Our Local Kumaoni Team preparing home-cooked vegetarian meals at Stone Heritage" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-1">Community & Service</span>
                <h3 className="text-xl font-serif font-medium text-primary mb-3">Our Local Kumaoni Team</h3>
                <p className="text-primary/75 text-sm font-light leading-relaxed mb-4">
                  Our resident team consists of local village members, cooks, and caretakers born and raised in the Mukteshwar hills. They prepare fresh, wholesome, home-cooked vegetarian meals and local stories.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-accent pt-3 border-t border-stone-100 w-full">
                <Heart className="w-4 h-4" /> Fresh Vegetarian Food & Care
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Story — From Heritage Property to Boutique Resort */}
      <section className="py-20 md:py-28 px-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Evolution & Passion</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">
              Our Story — From Heritage Property to Boutique Resort
            </h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200/80">
              <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-serif font-bold flex items-center justify-center mb-4">1</span>
              <h3 className="font-serif text-xl font-medium text-primary mb-2">The Vision</h3>
              <p className="text-primary/75 text-sm font-light leading-relaxed">
                Constructed with native Kumaoni stone craftsmen, our journey began with a promise to avoid ugly concrete blocks and honor traditional mountain architectural design.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200/80">
              <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-serif font-bold flex items-center justify-center mb-4">2</span>
              <h3 className="font-serif text-xl font-medium text-primary mb-2">Boutique Expansion</h3>
              <p className="text-primary/75 text-sm font-light leading-relaxed">
                Over time, we expanded into 9 unique rooms and suites — including multi-bedroom family retreats, romantic view balconies, and dedicated workation suites.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200/80">
              <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-serif font-bold flex items-center justify-center mb-4">3</span>
              <h3 className="font-serif text-xl font-medium text-primary mb-2">Top-Rated Sanctuary</h3>
              <p className="text-primary/75 text-sm font-light leading-relaxed">
                Today, Stone Heritage is recognized across Uttarakhand as a top-rated destination for travelers seeking peaceful Himalayan views, starry night skies, and genuine warmth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What Makes Us Different */}
      <section className="py-20 md:py-28 px-4 bg-stone-100/70 border-b border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Unique Value Proposition</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">
              What Makes Us Different from a Commercial Hotel or Resort in Mukteshwar
            </h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
              We bridge the gap between an authentic cottage homestay and a luxury boutique resort hotel — offering the personal warmth of a mountain home with the professional amenities of a boutique resort in Mukteshwar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-accent flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium text-primary mb-3">
                  Personalized Hospitality, Not Standardized Service
                </h3>
                <p className="text-primary/75 text-sm font-light leading-relaxed">
                  You are a welcomed guest in our mountain home, not a room number in a crowded commercial hotel chain. Customized meals, bonfire nights, and personal host attention make every stay memorable.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-accent flex items-center justify-center mb-6">
                  <Mountain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium text-primary mb-3">
                  Heritage Stone Architecture
                </h3>
                <p className="text-primary/75 text-sm font-light leading-relaxed">
                  Built using authentic local mountain stone and slate, our cottages maintain natural thermal comfort — remaining pleasantly cool during summer afternoons and naturally cozy during winter nights.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-accent flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium text-primary mb-3">
                  Pet-Friendly & Family-First Philosophy
                </h3>
                <p className="text-primary/75 text-sm font-light leading-relaxed">
                  We proudly welcome furry family members! Our private cottage gardens and open terrace lawns give pets and children ample room to play freely in safe mountain air.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Commitment to Guests */}
      <section className="py-20 md:py-28 px-4 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Guest Care</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">
            Our Commitment to Guests — Families, Couples & Remote Workers
          </h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200">
              <h3 className="font-serif text-lg font-medium text-primary mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" /> For Families
              </h3>
              <p className="text-xs text-primary/75 font-light leading-relaxed">
                Multi-bedroom cottages (like Stonewood Family Retreat), safe open gardens, wholesome home-cooked vegetarian meals, and stargazing bonfires.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200">
              <h3 className="font-serif text-lg font-medium text-primary mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" /> For Couples
              </h3>
              <p className="text-xs text-primary/75 font-light leading-relaxed">
                Private Himalayan-view balconies, quiet forest surroundings, candlelight terrace dinners, and romantic sunrise views over the Himalayas.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200">
              <h3 className="font-serif text-lg font-medium text-primary mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" /> For Remote Workers
              </h3>
              <p className="text-xs text-primary/75 font-light leading-relaxed">
                High-speed Wi-Fi, dedicated work desks, quiet mountain environment, power backup, and fresh tea/coffee on demand for productive workations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Recognized Across Mukteshwar & Uttarakhand */}
      <section className="py-20 md:py-28 px-4 bg-primary text-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Trust & Verification</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-white">
              Recognized Across Mukteshwar & Uttarakhand
            </h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Recognition 1 */}
            <div className="p-8 rounded-2xl bg-stone-800/60 border border-stone-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h3 className="text-2xl font-serif font-medium text-white mb-2">
                  4.9★ Rating Across 250+ Google Reviews
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Consistently rated as one of the best homestays in Mukteshwar on Google Business Profile by families, couples, and road-trippers from Delhi NCR.
                </p>
              </div>
            </div>

            {/* Recognition 2 */}
            <div className="p-8 rounded-2xl bg-stone-800/60 border border-stone-700 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-white mb-2">
                  Listed on MakeMyTrip, Tripadvisor, Agoda & Goibibo
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Verified and listed across leading travel portals while providing direct booking perks and lowest rate guarantees when booking direct on our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Plan Your Mountain Stay</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6">Experience Stone Heritage Mukteshwar</h2>
          <p className="text-lg text-primary/70 mb-8 font-light leading-relaxed">
            Connect with host Akash and our local team for direct booking offers, special family packages, or long-stay workation rates.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://booking.thestoneheritage.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-primary text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-8 hover:bg-primary/90 transition-colors shadow-sm w-full sm:w-auto text-xs sm:text-sm"
            >
              Book Direct Online
            </a>
            <a 
              href="https://wa.me/919027844424" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-highlight text-primary font-sans font-medium uppercase tracking-widest py-3.5 px-8 hover:bg-white transition-colors border border-highlight shadow-sm w-full sm:w-auto text-xs sm:text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
