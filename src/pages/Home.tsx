import React from 'react';
import { Link } from 'react-router-dom';
import { InteractiveGallery } from '../components/InteractiveGallery';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary text-stone-50 overflow-hidden">
        {/* Abstract pattern or image overlay could go here. Keeping it clean with CSS. */}
        <div className="absolute inset-0 z-0 bg-stone-900">
          <img 
            src="/hero-bg.webp" 
            alt="Stone Heritage Mukteshwar" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-primary"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 text-stone-50 md:drop-shadow-lg leading-tight">
            Stone Heritage Mukteshwar
            <span className="block text-xl md:text-4xl mt-4 font-normal italic opacity-90">An Authentic Himalayan Retreat</span>
          </h1>
          <p className="text-base md:text-xl mb-8 font-light text-stone-100 max-w-3xl mx-auto leading-relaxed md:drop-shadow-md">
            Escape to the serene hills of Uttarakhand. Experience a perfect blend of heritage and modern comfort with our traditional stone cottages, panoramic mountain views, and exceptional Kumaoni hospitality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a 
              href="https://wa.me/919027844424" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-highlight text-primary font-bold py-3 px-6 rounded-full hover:bg-highlight/90 transition-transform hover:scale-105 active:scale-95 text-base w-full sm:w-auto"
            >
              Check Availability on WhatsApp
            </a>
            <Link 
              to="/rooms" 
              className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-6 rounded-full hover:bg-accent hover:text-primary transition-all text-base w-full sm:w-auto"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Welcome to Your Sanctuary</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary max-w-3xl mx-auto leading-tight">
            A Haven of Peace, Crafted from Stone and Wood
          </h2>
          <p className="text-lg text-primary/80 max-w-4xl mx-auto leading-relaxed mb-16">
            Situated amidst the lush green forests and majestic peaks of Mukteshwar, Stone Heritage offers a unique boutique resort experience. Whether you are seeking a romantic getaway, a peaceful workcation, or a family retreat in the mountains, our meticulously designed property provides the perfect backdrop for unforgettable memories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-stone-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Heritage Architecture</h3>
              <p className="text-sm text-stone-600">Authentic stone cottages blending seamlessly with the natural landscape.</p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Panoramic Views</h3>
              <p className="text-sm text-stone-600">Breathtaking sunrises and uninterrupted views of the Himalayan ranges.</p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Premium Comfort</h3>
              <p className="text-sm text-stone-600">Modern amenities, cozy bonfires, and high-speed WiFi for workcations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Pet Friendly</h3>
              <p className="text-sm text-stone-600">Bring your furry friends along for an unforgettable mountain adventure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20 px-4 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Our Accommodations</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Stay in Rustic Elegance</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">Experience comfort in our thoughtfully designed rooms, blending traditional stone architecture with modern amenities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Brass Room", image: "/brass-room.webp" },
              { name: "Copper Room", image: "/copper-room.webp" },
              { name: "The Vintage Room", image: "/vintage-room.webp" }
            ].map((room) => (
              <div key={room.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 relative overflow-hidden bg-stone-200">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full text-center">
                      <a 
                        href={`https://wa.me/919027844424?text=${encodeURIComponent(`Hi, I'm interested in booking the ${room.name}.`)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-accent hover:bg-highlight text-primary font-semibold py-2 px-6 rounded-full transition-colors text-sm"
                      >
                        Book via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{room.name}</h3>
                  <p className="text-primary/70 text-sm">
                    Enjoy panoramic views and premium comfort. Perfect for your Mukteshwar getaway.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/rooms" 
              className="inline-block bg-primary text-stone-50 font-semibold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Take a Tour</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">A Glimpse into Our World</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Discover the beauty and serenity that awaits you at Stone Heritage Mukteshwar.
          </p>
        </div>
        <InteractiveGallery />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Guest Experiences</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary tracking-tight">Loved by Our Guests</h2>
          <p className="text-lg text-primary/70 mb-10 leading-relaxed">
            Discover why guests rate their stay at Stone Heritage Mukteshwar 4.9/5 stars. Read stories of peaceful getaways, warm hospitality, and unforgettable Himalayan views.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-stone-50 font-semibold py-3 px-8 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
            >
              Read All Testimonials
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a 
              href="https://www.google.com/maps/place/?cid=5074157692820223333" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-stone-50 border border-stone-200 transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-current"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              See our reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition: Why Book Direct */}
      <section className="py-20 px-4 bg-primary text-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Exclusive Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Book Directly With Us?</h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">Connect directly with our team to secure the best rates and personalized experiences for your Himalayan getaway.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-stone-800/50 border border-stone-700 hover:border-accent/50 transition-colors">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-50">Best Price Guarantee</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Bypass third-party commissions and hidden fees. When you book directly via WhatsApp or phone, we guarantee the most competitive rates available.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-stone-800/50 border border-stone-700 hover:border-accent/50 transition-colors">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-50">Priority Upgrades & Requests</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Direct guests receive priority for room assignments, complimentary early check-ins (subject to availability), and tailored dietary or special event arrangements.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-stone-800/50 border border-stone-700 hover:border-accent/50 transition-colors">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-50">Flexible Modifications</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Enjoy peace of mind with our direct booking policies, offering greater flexibility for date changes and cancellations compared to strict online travel agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Find Us Here</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">Located in the serene hills of Mukteshwar, offering breathtaking views and authentic hospitality.</p>
          </div>
          <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] shadow-sm border border-stone-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.798426132153!2d79.64472459999999!3d29.434687300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0bd7d35a2e497%3A0x466b07899edd7565!2sStone%20Heritage%20Mukteshwar!5e0!3m2!1sen!2sin!4v1782816534338!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Local Attractions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Discover Mukteshwar</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary tracking-tight">Top Attractions & Places to Visit</h2>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto leading-relaxed">
              Explore the rich heritage and natural wonders surrounding our homestay. From breathtaking Himalayan peaks to ancient spiritual sites, Mukteshwar offers an unforgettable experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Chauli Ki Jali",
                description: "A stunning cliff known for overhanging rocks, deep valley views, and adventure sports. Perfect for rock climbing, rappelling, and mesmerizing sunsets.",
                image: "https://images.unsplash.com/photo-1626071465997-7504f7a59124?q=80&w=1000&auto=format&fit=crop",
                distance: "1.5 km away",
                tag: "Adventure & Views"
              },
              {
                name: "Bhalugaad Waterfall",
                description: "A beautiful hidden gem tucked away in dense forests, featuring a continuous 60-foot water plunge into a pristine clear pool.",
                image: "https://images.unsplash.com/photo-1620857322964-b52994c502b4?q=80&w=1000&auto=format&fit=crop",
                distance: "10 km away",
                tag: "Nature & Trekking"
              },
              {
                name: "Mukteshwar Dham Temple",
                description: "The ancient, 350-year-old Shiva temple gracefully atop the highest point in the area, offering a peaceful spiritual experience.",
                image: "https://images.unsplash.com/photo-1601058269784-0a3733ccfb13?q=80&w=1000&auto=format&fit=crop",
                distance: "Town center",
                tag: "Spiritual Heritage"
              }
            ].map((place, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                <div className="h-56 relative overflow-hidden bg-stone-200">
                  <img 
                    src={place.image} 
                    alt={`${place.name} - Tourist attraction in Mukteshwar`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm">
                    {place.tag}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{place.name}</h3>
                  </div>
                  <p className="text-primary/70 mb-6 text-sm leading-relaxed flex-grow">{place.description}</p>
                  
                  <div className="pt-4 border-t border-stone-200 flex items-center gap-2 text-sm text-primary/80 font-medium">
                    <span className="text-accent text-lg">📍</span>
                    {place.distance}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/experiences" 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-full hover:bg-primary hover:text-stone-50 transition-all text-base group"
            >
              See All Local Experiences
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
