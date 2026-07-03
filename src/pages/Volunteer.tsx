import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export function Volunteer() {
  const skills = [
    { name: "Coding", icon: "💻" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Creativity", icon: "🎨" },
    { name: "Communication", icon: "🗣️" },
    { name: "Volunteering", icon: "❤️" }
  ];

  const offers = [
    {
      title: "Work Exchange",
      description: "Contribute your unique skills to our daily operations and community projects in exchange for a comfortable stay and authentic Himalayan meals. Experience the true essence of homestay living.",
      icon: "🔄"
    },
    {
      title: "Organic Farming",
      description: "Get your hands dirty in our eco-farms. Learn traditional Kumaoni agricultural practices, help with seasonal harvests, and understand sustainable living in the mountains.",
      icon: "🌱"
    },
    {
      title: "Teaching & Mentoring",
      description: "Share your knowledge with local children and youth. Whether it's English, computer skills, art, or environmental awareness, your teaching can open new horizons for the community.",
      icon: "📚"
    }
  ];

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <Helmet>
        <title>Uttarakhand Volunteer Programs & Homestay Work Exchange | Stone Heritage</title>
        <meta name="description" content="Volunteer in Uttarakhand Program & Community Impact in Mukteshwar. Join our mission through work exchange, eco-farming, and teaching." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <img 
            src="/copper-room.webp" 
            alt="Himalayan Mountains" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-50"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center text-stone-50 mt-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans font-medium tracking-[0.3em] uppercase text-xs mb-6 block text-highlight">Community & Impact</span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
              Volunteer in Uttarakhand Program & Community Impact in Mukteshwar
            </h1>
            <div className="w-16 h-[1px] bg-highlight/50 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-stone-200">
              Join our mission to uplift communities, empower individuals, and bring lasting change. Through Work exchange India, eco-farming volunteer opportunities, Himalayan community projects, and skill-sharing stays, whether you give your time, skills, or heart — every act of service counts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Overlay Section */}
      <section className="py-12 px-4 -mt-32 relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 shadow-xl border border-stone-200 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/2 rounded-sm overflow-hidden border border-stone-200 relative h-64 md:h-80 bg-stone-100 flex items-center justify-center">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.798426132153!2d79.64472459999999!3d29.434687300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0bd7d35a2e497%3A0x466b07899edd7565!2sStone%20Heritage%20Mukteshwar!5e0!3m2!1sen!2sin!4v1782816534338!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 contrast-125"
                title="Mukteshwar Map"
              ></iframe>
              <div className="absolute inset-0 border-4 border-white/20 pointer-events-none"></div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-medium text-primary mb-6">Our Location in Uttarakhand</h2>
              <p className="text-primary/70 font-light leading-relaxed mb-6">
                Nestled in the serene hills of Mukteshwar, our homestay acts as a hub for community engagement. Volunteers get to experience the authentic Kumaoni lifestyle while making a tangible difference in the surrounding villages.
              </p>
              <a 
                href="https://wa.me/919027844424?text=I%20am%20interested%20in%20the%20volunteer%20program!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-primary text-primary font-sans font-medium uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white transition-colors text-xs"
              >
                Apply to Volunteer
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Your Contribution</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-primary">Volunteer Skills We Welcome</h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-16"></div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white px-6 py-4 border border-stone-200/60 shadow-sm flex items-center gap-3 hover:border-accent/30 hover:shadow-md transition-all cursor-default"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-serif font-medium text-primary text-lg">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-4 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Programs</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">What We Offer</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
              Choose a path that aligns with your passions and skills. We provide guidance, accommodation, and a supportive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-10 bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors group"
              >
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                  {offer.icon}
                </div>
                <h3 className="text-2xl font-serif font-medium text-primary mb-4">{offer.title}</h3>
                <p className="text-primary/70 font-light leading-relaxed">
                  {offer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
