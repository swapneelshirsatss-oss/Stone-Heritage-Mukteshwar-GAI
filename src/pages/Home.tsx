import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { GalleryCarousel } from '../components/GalleryCarousel';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { OptimizedImage } from '../components/OptimizedImage';

export function Home() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Best Homestay in Mukteshwar | Stone Heritage</title>
        <meta name="description" content="Discover the best homestay in Mukteshwar for families & pets. Enjoy vintage rooms, free WiFi, veg meals & Himalayan sunsets. Book direct for best rates." />
        <link rel="canonical" href="https://thestoneheritage.in/" />
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "Hotel",
        "BedAndBreakfast"
      ],
      "@id": "https://thestoneheritage.in/#localbusiness",
      "name": "Stone Heritage Mukteshwar",
      "alternateName": "Stone Heritage Homestay",
      "url": "https://thestoneheritage.in/",
      "telephone": "+919027844424",
      "email": "thestoneheritage@gmail.com",
      "description": "Recognized as the best homestay in Mukteshwar, this authentic Kumaoni heritage property and boutique stone cottage offers luxury family-friendly and pet-friendly workation stays with panoramic Himalayan mountain views. Book direct for the best rates.",
      "additionalType": [
        "https://en.wikipedia.org/wiki/Homestay",
        "https://en.wikipedia.org/wiki/Villa"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhowali Dhanachuli Rd, South Gola Range",
        "addressLocality": "Mukteshwar",
        "addressRegion": "Uttarakhand",
        "postalCode": "263138",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 29.4346202,
        "longitude": 79.6446521
      },
      "hasMap": [
        "https://maps.google.com/maps?cid=5074157692820223333",
        "https://www.google.com/maps/place/?q=place_id:ChIJl-SiNX29oDkRZXXdnokHa0Y"
      ],
      "sameAs": [
        "https://www.facebook.com/thestoneheritage/",
        "https://www.instagram.com/thestoneheritage/",
        "https://www.youtube.com/@StoneHeritageMukteshwar",
        "https://x.com/stone_heritage",
        "https://www.linkedin.com/company/stone-heritage-mukteshwar/",
        "https://g.page/r/CWV13Z6JB2tGEBM/review",
        "https://www.google.com/travel/hotels/entity/ChkQ6sSVrPGm1N1cGg0vZy8xMW1sX3c3dDVwEAI"
      ],
      "image": [
        "https://thestoneheritage.in/mountain-living-best-homestay-Mukteshwar.webp"
      ],
      "checkinTime": "14:00:00",
      "checkoutTime": "11:00:00",
      "petsAllowed": true,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "241", 
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Lotte"
          },
          "reviewBody": "Traveling with family felt very comfortable here. Pawan and Naveen were always helpful, and the calm atmosphere made it perfect for a relaxed family stay. Definitely one of the best family homestays in Mukteshwar."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Gagan"
          },
          "reviewBody": "Stone Heritage Mukteshwar is an ideal choice if you're looking for a family-friendly, pet friendly, budget homestay in Mukteshwar. With good WIFI for workation, tasty vegetarian food, and beautiful sunsets, it offers a complete hill-stay experience."
        }
      ],
      "priceRange": "INR 1500 - 12000",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "High-Speed WiFi for Workations", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Pet-Friendly Accommodation", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Pure Vegetarian Home-Cooked Food", "value": true }
      ],
      "containsPlace": [
        {
          "@type": "HotelRoom",
          "name": "Brass Room",
          "description": "Quadroom King Bed setup with alternative floor mattress and private washroom.",
          "image": "https://thestoneheritage.in/brass-room-homestay-in-mukteshwar.webp",
          "bed": { "@type": "BedDetails", "numberOfBeds": 1, "type": "King Bed" }
        },
        {
          "@type": "HotelRoom",
          "name": "Copper Room",
          "description": "Spacious family setup configured with 1 King Bed and 1 Single Bed.",
          "image": "https://thestoneheritage.in/himalayan-view-terrace-mukteshwar.webp",
          "bed": { "@type": "BedDetails", "numberOfBeds": 2, "type": "1 King Bed, 1 Single Bed" }
        },
        {
          "@type": "HotelRoom",
          "name": "The Vintage Room",
          "description": "Charming heritage architecture featuring 1 ultra-comfortable King Bed.",
          "image": "https://thestoneheritage.in/vintage-room.webp",
          "bed": { "@type": "BedDetails", "numberOfBeds": 1, "type": "King Bed" }
        },
        {
          "@type": "HotelRoom",
          "name": "Stonewood Family Retreat",
          "description": "Premium group or multi-generational stay equipped with 2 large King Beds. Functions as a standalone cottage experience.",
          "image": "https://thestoneheritage.in/stonewood-family-retreat.webp",
          "bed": { "@type": "BedDetails", "numberOfBeds": 2, "type": "King Bed" }
        },
        {
          "@type": "HotelRoom",
          "name": "Stone And Story room",
          "description": "Accommodation featuring 1 King Bed.",
          "image": "https://thestoneheritage.in/balcony-stone-heritage-mukteshwar.webp",
          "bed": { "@type": "BedDetails", "numberOfBeds": 1, "type": "King Bed" }
        },
        {
          "@type": "HotelRoom",
          "name": "Iron Room",
          "description": "Accommodation featuring 1 King Bed.",
          "image": "https://thestoneheritage.in/mountain-living-best-homestay-Mukteshwar.webp",
          "bed": { "@type": "BedDetails", "numberOfBeds": 1, "type": "King Bed" }
        },
        {
          "@type": "HotelRoom",
          "name": "Cedar Room",
          "description": "Premium accommodation.",
          "image": "https://thestoneheritage.in/cedar-room.webp",
          "bed": { "@type": "BedDetails", "numberOfBeds": 1, "type": "King Bed" }
        }
      ],
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://booking.thestoneheritage.in/",
          "inLanguage": "en-US",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "LodgingReservation",
          "name": "Direct Booking via Native Engine"
        }
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://thestoneheritage.in/#website",
      "url": "https://thestoneheritage.in/",
      "name": "Stone Heritage Mukteshwar",
      "publisher": { "@id": "https://thestoneheritage.in/#localbusiness" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://thestoneheritage.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the contact number for Stone Heritage Mukteshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach us directly for bookings and inquiries at +919027844424 or email us at thestoneheritage@gmail.com. We are happy to help you plan your Mukteshwar weekend tours and itinerary!"
          }
        },
        {
          "@type": "Question",
          "name": "What makes Stone Heritage the best homestay in Mukteshwar for families?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a premium heritage property and earthen home in Mukteshwar, we offer spacious, family-friendly rooms like the Stonewood Family Retreat. We serve pure vegetarian home-cooked food, provide high-speed WiFi for workations, and are a fully pet-friendly accommodation."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find Stone Heritage Mukteshwar photos and reviews?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can view authentic photos of our boutique stone cottage and panoramic Himalayan views in our website's Gallery section. We are proud to be one of the best rated places to stay in Kumaon, with a 4.9/5 aggregate rating across Google and other review platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best activities and weekend tours in Mukteshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There are plenty of activities near our property! Popular options include visiting the Mukteshwar Dham Temple, taking a nature walk through the pine forests, bird watching, and enjoying the breathtaking Himalayan sunsets directly from our terrace."
          }
        },
        {
          "@type": "Question",
          "name": "Are you a hotel, resort, or a homestay in Mukteshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are an authentic Kumaoni heritage homestay. While offering the luxury and comfort you'd expect from the best hotels or resorts in Mukteshwar, we provide a much more personalized, peaceful 'stone house' experience that large commercial properties cannot match."
          }
        },
        {
          "@type": "Question",
          "name": "Where is the best place to stay in Mukteshwar, Uttarakhand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you are looking for an authentic, peaceful retreat, Stone Heritage is often reviewed as the best place to stay in Mukteshwar. We are conveniently located on the Bhowali-Dhanachuli Road, offering easy access to nearby attractions while remaining a serene nature retreat."
          }
        },
        {
          "@type": "Question",
          "name": "Does Stone Heritage Mukteshwar offer a Himalayan mountain view?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! If you're looking for a Mukteshwar homestay with a mountain view, our property offers panoramic Himalayan views. You can enjoy the breathtaking snow-capped peaks directly from your stone room or our homestay balcony."
          }
        },
        {
          "@type": "Question",
          "name": "Is it a budget stay or a luxury homestay in Mukteshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer a blend of both! The Stone Heritage is a premium yet affordable stone cottage in Mukteshwar. Whether you are looking for a luxury homestay experience or a peaceful, budget stay, we provide excellent value. Check our website for the latest Stone Heritage Mukteshwar prices."
          }
        },
        {
          "@type": "Question",
          "name": "Are there glass houses or earthen homes available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in authentic Kumaoni heritage stone houses rather than a modern glass house. Our property is built as a traditional Himalayan stone hamlet, giving you an authentic 'maati living' or earthen home feel, but with large windows to enjoy the Himalayan views."
          }
        }
      ]
    }
  ]
}`}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary text-stone-50 overflow-hidden">
        {/* Abstract pattern or image overlay could go here. Keeping it clean with CSS. */}
        <div className="absolute inset-0 z-0 bg-stone-900">
          <OptimizedImage 
            src="/best-family-homestay-in-mukteshwar.webp" 
            alt="Panoramic view of the Himalayan mountains from Stone Heritage homestay in Mukteshwar" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-primary/90"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-stone-50 md:drop-shadow-lg leading-tight tracking-tight">
            The Best Homestay in Mukteshwar
            <span className="block text-2xl md:text-4xl mt-4 font-normal italic text-stone-200">An Authentic Himalayan Retreat</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 font-light text-stone-100 max-w-2xl mx-auto leading-relaxed md:drop-shadow-md">
            Escape to the serene hills of Uttarakhand. Experience a perfect blend of heritage architecture, panoramic mountain views, and exceptional Kumaoni hospitality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <a 
              href="https://wa.me/919027844424" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-highlight text-primary font-sans font-medium uppercase tracking-widest py-3.5 px-8 rounded-none hover:bg-white transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto shadow-sm flex items-center justify-center gap-3 border border-highlight"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Book via WhatsApp
            </a>
            <Link 
              to="/stay" 
              className="bg-transparent border border-stone-200/50 text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-8 rounded-none hover:bg-white/10 hover:border-white transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto flex items-center justify-center backdrop-blur-sm"
            >
              Explore Rooms
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-stone-200 font-medium">
            <a href="https://www.google.com/search?q=Stone+Heritage+Mukteshwar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 cursor-pointer shadow-lg hover:shadow-xl group">
              <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full p-0.5 shadow-sm">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex gap-0.5 text-[#FBBC05] text-base drop-shadow-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="font-bold text-white group-hover:text-stone-100 transition-colors">4.9/5</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Welcome to Your Sanctuary</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 text-primary max-w-4xl mx-auto leading-tight">
            A Vintage Stone Homestay in Mukteshwar: Reimagined in Stone & Vintage Charm
          </h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-8"></div>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto leading-relaxed mb-20 font-light">
            Situated amidst the lush green forests and majestic peaks, Stone Heritage Mukteshwar is widely recognized as the best homestay in Uttarakhand. Whether you are seeking a romantic getaway, a peaceful workcation, or a family retreat in the mountains, our meticulously designed property provides the perfect backdrop for unforgettable memories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Heritage Architecture",
                desc: "Authentic stone cottages blending seamlessly with the natural landscape.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              },
              {
                title: "Panoramic Views",
                desc: "Breathtaking sunrises and uninterrupted views of the Himalayan ranges.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: "Authentic Kumaoni Cuisine",
                desc: "Pure vegetarian homemade food prepared with fresh local ingredients.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                )
              },
              {
                title: "The Perfect Weekend Getaway",
                desc: "The ideal escape from the city to the serene and pristine Himalayas.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "Premium Comfort",
                desc: "Modern amenities, cozy bonfires, and high-speed WiFi for workcations.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                )
              },
              {
                title: "Pet Friendly",
                desc: "Bring your furry friends along for an unforgettable mountain adventure.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-stone-200/60 bg-transparent hover:bg-stone-50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6 mx-auto text-accent">
                  {feature.icon}
                </div>
                <h3 className="font-serif font-medium text-xl mb-3 text-primary">{feature.title}</h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-24 px-4 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Our Accommodations</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">Vintage Stone Cottages & Family Suites</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">Experience comfort in our thoughtfully designed rooms, blending traditional stone architecture with modern amenities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { name: "Brass Room", image: "/brass-room-homestay-in-mukteshwar.webp", alt: "Luxurious Brass Room interior featuring a king-size bed and traditional Kumaoni architecture at Stone Heritage" },
              { name: "Copper Room", image: "/copper-room.webp", alt: "Spacious Copper Room setup with mountain views, ideal for families staying in Mukteshwar" },
              { name: "The Vintage Room", image: "/vintage-room.webp", alt: "The Vintage Room at Stone Heritage showing cozy wooden interiors and premium bedding" }
            ].map((room) => (
              <div key={room.name} className="bg-white overflow-hidden shadow-sm border border-stone-200 flex flex-col group hover:shadow-lg transition-all duration-500">
                <div className="h-72 relative overflow-hidden bg-stone-200">
                  <OptimizedImage 
                    src={room.image} 
                    alt={room.alt} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 w-full text-center">
                      <a 
                        href={`https://wa.me/919027844424?text=${encodeURIComponent(`Hi, I'm interested in booking the ${room.name}.`)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-highlight text-primary font-sans font-medium uppercase tracking-widest py-2.5 px-6 border border-highlight hover:bg-white transition-colors text-xs shadow-sm"
                      >
                        Book via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-serif font-medium mb-3 text-primary">{room.name}</h3>
                  <p className="text-primary/70 text-sm font-light leading-relaxed">
                    Enjoy panoramic views and premium comfort. Perfect for your Mukteshwar getaway.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/stay" 
              className="inline-block bg-primary text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-10 hover:bg-primary/90 transition-colors shadow-sm"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Take a Tour</span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">A Glimpse into Our World</h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light mb-12">
            Discover the beauty and serenity that awaits you at Stone Heritage Mukteshwar.
          </p>
          <div className="mb-12 relative px-4 md:px-8">
            <GalleryCarousel />
          </div>
          <Link 
            to="/gallery" 
            className="inline-block bg-primary text-stone-50 font-sans font-medium uppercase tracking-widest py-3.5 px-10 hover:bg-primary/90 transition-colors shadow-sm"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Guest Experiences</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary tracking-tight">Loved by Our Guests</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto leading-relaxed">
              Discover why guests rate their stay at Stone Heritage Mukteshwar 4.9/5 stars. Read stories of peaceful getaways, warm hospitality, and unforgettable Himalayan views.
            </p>
          </div>
          
          <TestimonialCarousel />
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Exclusive Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Book Directly With Us?</h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">Connect directly with our team to secure the best rates and personalized experiences for your Himalayan getaway.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Price Guarantee",
                desc: "Bypass third-party commissions and hidden fees. When you book directly via WhatsApp or phone, we guarantee the most competitive rates available.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Priority Upgrades & Requests",
                desc: "Direct guests receive priority for room assignments, complimentary early check-ins (subject to availability), and tailored dietary or special event arrangements.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: "Flexible Modifications",
                desc: "Enjoy peace of mind with our direct booking policies, offering greater flexibility for date changes and cancellations compared to strict online travel agencies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-stone-800/50 border border-stone-700 hover:border-accent/50 transition-colors"
              >
                <div className="text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-stone-50">{feature.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Attractions Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Discover Mukteshwar</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary tracking-tight">Top Attractions & Places to Visit</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-3xl mx-auto font-light leading-relaxed">
              Explore the rich heritage and natural wonders surrounding our homestay. From breathtaking Himalayan peaks to ancient spiritual sites, Mukteshwar offers an unforgettable experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Chauli Ki Jali",
                description: "A stunning cliff known for overhanging rocks, deep valley views, and adventure sports. Perfect for rock climbing, rappelling, and mesmerizing sunsets.",
                image: "/chauli-ki-jali-in-mukteshwar.webp",
                alt: "View of the deep valley from Chauli Ki Jali cliff, a popular tourist attraction for sunsets in Mukteshwar",
                distance: "1.5 km away",
                tag: "Adventure & Views"
              },
              {
                name: "Bhalugaad Waterfall",
                description: "A beautiful hidden gem tucked away in dense forests, featuring a continuous 60-foot water plunge into a pristine clear pool.",
                image: "/Bhalugaad-Waterfall-Mukteshwar.webp",
                alt: "Pristine clear pool and 60-foot plunge at Bhalugaad Waterfall, a hidden natural gem in Mukteshwar",
                distance: "10 km away",
                tag: "Nature & Trekking"
              },
              {
                name: "Mukteshwar Dham Temple",
                description: "The ancient, 350-year-old Shiva temple gracefully atop the highest point in the area, offering a peaceful spiritual experience.",
                image: "/Kainchi_dham_mukteshwar.webp",
                alt: "The ancient 350-year-old Shiva temple, Mukteshwar Dham Temple, located at the highest point in town",
                distance: "Town center",
                tag: "Spiritual Heritage"
              }
            ].map((place, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-stone-50 overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg transition-all duration-500 group flex flex-col"
              >
                <div className="h-64 relative overflow-hidden bg-stone-200">
                  <OptimizedImage 
                    src={place.image} 
                    alt={place.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium text-primary shadow-sm border border-stone-200/50">
                    {place.tag}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-medium text-primary group-hover:text-accent transition-colors">{place.name}</h3>
                  </div>
                  <p className="text-primary/70 mb-6 text-sm leading-relaxed flex-grow font-light">{place.description}</p>
                  
                  <div className="pt-5 border-t border-stone-200/60 flex items-center gap-3 text-xs tracking-wider uppercase text-primary/80 font-medium">
                    <span className="text-accent">Location</span>
                    <span>—</span>
                    <span>{place.distance}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/experiences" 
              className="inline-flex items-center gap-3 bg-transparent border border-primary text-primary font-sans font-medium uppercase tracking-widest py-3.5 px-8 hover:bg-primary hover:text-stone-50 transition-colors text-xs sm:text-sm group"
            >
              See All Local Experiences
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted OTA Partners Section */}
      <section className="py-12 px-4 bg-stone-50 border-y border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-stone-500 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-8 block">We Are Listed On</span>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 transition-all duration-500">
            <a href="https://www.makemytrip.com/hotels/stone_heritage_mukteshwar-details-mukteshwar.html" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center">
               <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800">Make<span className="text-red-600">My</span>Trip</span>
            </a>
            <a href="https://www.tripadvisor.in/Hotel_Review-g1162527-d33498951-Reviews-Stone_Heritage_Mukteshwar-Mukteshwar_Nainital_District_Uttarakhand.html" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#00aa6c]">Tripadvisor</span>
            </a>
            <a href="https://www.agoda.com/en-in/stone-heritage-mukteshwar/hotel/mukteshwar-in.html?cid=1844104&ds=Qpdp%2B0q8QKidankK" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center">
               <span className="text-2xl md:text-3xl font-black tracking-tight text-blue-500 lowercase">agoda</span>
            </a>
            <a href="https://www.goibibo.com/hotels/address-of-stone-heritage-mukteshwar-hotel-in-mukteshwar-4624059796128013456/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform flex items-center">
               <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-orange-500 lowercase">go<span className="text-blue-600">ibibo</span></span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Common Queries</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">Frequently Asked Questions</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">Find answers to the most common questions about our heritage property in Mukteshwar.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-bold mb-3 text-secondary">What is the contact number for Stone Heritage Mukteshwar?</h3>
              <p className="text-primary/80">You can reach us directly for bookings and inquiries at <a href="tel:+919027844424" className="text-accent underline font-medium">+91 9027844424</a> or email us at thestoneheritage@gmail.com. We are happy to help you plan your Mukteshwar weekend tours and itinerary!</p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-bold mb-3 text-secondary">What makes Stone Heritage the best homestay in Mukteshwar for families?</h3>
              <p className="text-primary/80">As a premium heritage property and earthen home in Mukteshwar, we offer spacious, family-friendly rooms like the Stonewood Family Retreat. We serve pure vegetarian home-cooked food, provide high-speed WiFi for workations, and are a fully pet-friendly accommodation.</p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-bold mb-3 text-secondary">Where can I find Stone Heritage Mukteshwar photos and reviews?</h3>
              <p className="text-primary/80">You can view authentic photos of our boutique stone cottage and panoramic Himalayan views in our website's <a href="/gallery" className="text-accent underline font-medium">Gallery section</a>. We are proud to be one of the best rated places to stay in Kumaon, with a 4.9/5 aggregate rating across Google and other review platforms.</p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-bold mb-3 text-secondary">What are the best activities and weekend tours in Mukteshwar?</h3>
              <p className="text-primary/80">There are plenty of activities near our property! Popular options include visiting the Mukteshwar Dham Temple, taking a nature walk through the pine forests, bird watching, and enjoying the breathtaking Himalayan sunsets directly from our terrace.</p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-bold mb-3 text-secondary">Are you a hotel, resort, or a homestay in Mukteshwar?</h3>
              <p className="text-primary/80">We are an authentic Kumaoni heritage homestay. While offering the luxury and comfort you'd expect from the best hotels or resorts in Mukteshwar, we provide a much more personalized, peaceful &quot;stone house&quot; experience that large commercial properties cannot match.</p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-bold mb-3 text-secondary">Where is the best place to stay in Mukteshwar, Uttarakhand?</h3>
              <p className="text-primary/80">If you are looking for an authentic, peaceful retreat, Stone Heritage is often reviewed as the best place to stay in Mukteshwar. We are conveniently located on the Bhowali-Dhanachuli Road, offering easy access to nearby attractions while remaining a serene nature retreat.</p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-bold mb-3 text-secondary">Does Stone Heritage Mukteshwar offer a Himalayan mountain view?</h3>
              <p className="text-primary/80">Yes! If you&apos;re looking for a Mukteshwar homestay with a mountain view, our property offers panoramic Himalayan views. You can enjoy the breathtaking snow-capped peaks directly from your stone room or our homestay balcony.</p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-bold mb-3 text-secondary">Is it a budget stay or a luxury homestay in Mukteshwar?</h3>
              <p className="text-primary/80">We offer a blend of both! The Stone Heritage is a premium yet affordable stone cottage in Mukteshwar. Whether you are looking for a luxury homestay experience or a peaceful, budget stay, we provide excellent value. Check our website for the latest Stone Heritage Mukteshwar prices.</p>
            </div>
            <div className="bg-stone-50 p-8 border border-stone-200">
              <h3 className="text-xl font-bold mb-3 text-secondary">Are there glass houses or earthen homes available?</h3>
              <p className="text-primary/80">We specialize in authentic Kumaoni heritage stone houses rather than a modern glass house. Our property is built as a traditional Himalayan stone hamlet, giving you an authentic &apos;maati living&apos; or earthen home feel, but with large windows to enjoy the Himalayan views.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Location</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary">Find Us Here</h2>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">Located in the serene hills of Mukteshwar, offering breathtaking views and authentic hospitality.</p>
          </div>
          <div className="overflow-hidden h-[400px] md:h-[500px] shadow-sm border border-stone-200">
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
    </div>
  );
}
