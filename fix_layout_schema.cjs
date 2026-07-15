const fs = require('fs');
const content = `---
import '../index.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export interface Props {
  title?: string;
}
const { title = 'Stone Heritage Mukteshwar' } = Astro.props;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://thestoneheritage.in/#localbusiness",
      "additionalType": [
        "https://en.wikipedia.org/wiki/Homestay",
        "https://en.wikipedia.org/wiki/Villa",
        "https://en.wikipedia.org/wiki/Cottage"
      ],
      "name": "Stone Heritage Mukteshwar",
      "description": "Recognized as the best homestay in Mukteshwar, this authentic Kumaoni heritage property and boutique stone cottage offers luxury family-friendly and pet-friendly workation stays with panoramic Himalayan mountain views.",
      "url": "https://thestoneheritage.in/",
      "telephone": "+919027844424",
      "email": "thestoneheritage@gmail.com",
      "logo": "https://thestoneheritage.in/Logo.webp",
      "sameAs": [
        "https://www.facebook.com/thestoneheritage/",
        "https://www.instagram.com/thestoneheritage/",
        "https://www.youtube.com/@StoneHeritageMukteshwar",
        "https://x.com/stone_heritage",
        "https://in.pinterest.com/thestoneheritage/",
        "https://www.linkedin.com/company/stone-heritage-mukteshwar/"
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
        "latitude": 29.4346873,
        "longitude": 79.6447246
      },
      "hasMap": "https://maps.google.com/maps?cid=5074157692820223333",
      "image": [
        "https://thestoneheritage.in/luxury-heritage-homestay-in-mukteshwar.webp",
        "https://thestoneheritage.in/mountain-living-best-homestay-Mukteshwar.webp",
        "https://thestoneheritage.in/himalayan-view-terrace-mukteshwar.webp",
        "https://thestoneheritage.in/garden-area-stone-heritage.webp"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "245",
        "bestRating": "5",
        "worstRating": "1"
      },
      "priceRange": "$$",
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "High-Speed WiFi for Workations",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Pet-Friendly Accommodation",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Pure Vegetarian Home-Cooked Food",
          "value": true
        }
      ],
      "containsPlace": [
        {
          "@type": "HotelRoom",
          "name": "Brass Room",
          "description": "Quadroom King Bed setup with alternative floor mattress and private washroom.",
          "image": "https://thestoneheritage.in/brass-room-homestay-in-mukteshwar.webp"
        },
        {
          "@type": "HotelRoom",
          "name": "Copper Room",
          "description": "Spacious family setup configured with 1 King Bed and 1 Single Bed.",
          "image": "https://thestoneheritage.in/copper-room.webp"
        },
        {
          "@type": "HotelRoom",
          "name": "The Vintage Room",
          "description": "Charming heritage architecture featuring 1 ultra-comfortable King Bed.",
          "image": "https://thestoneheritage.in/vintage-room.webp"
        },
        {
          "@type": "Suite",
          "name": "Stonewood Family Retreat",
          "description": "Premium group or multi-generational stay equipped with 2 large King Beds. Functions as a standalone cottage experience.",
          "image": "https://thestoneheritage.in/stonewood-family-retreat.webp"
        },
        {
          "@type": "HotelRoom",
          "name": "Stone And Story Family Homestay",
          "description": "Accommodation featuring 1 King Bed.",
          "image": "https://thestoneheritage.in/best-family-homestay-in-mukteshwar.webp"
        },
        {
          "@type": "HotelRoom",
          "name": "Iron Room",
          "description": "Accommodation featuring 1 King Bed.",
          "image": "https://thestoneheritage.in/iron-room.webp"
        },
        {
          "@type": "HotelRoom",
          "name": "Cedar Room",
          "description": "Premium accommodation.",
          "image": "https://thestoneheritage.in/cedar-room.webp"
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
      "publisher": {
        "@id": "https://thestoneheritage.in/#localbusiness"
      }
    }
  ]
};
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
    <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
  </head>
  <body class="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900 antialiased selection:bg-accent/20 selection:text-accent">
    <Navbar client:load currentPath={Astro.url.pathname} />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer client:visible />
  </body>
</html>`;
fs.writeFileSync('src/layouts/Layout.astro', content);
