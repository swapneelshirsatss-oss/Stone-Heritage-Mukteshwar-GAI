import json
import re

new_hotel = {
  "@type": ["Hotel", "LodgingBusiness", "BedAndBreakfast"],
  "additionalType": "https://en.wikipedia.org/wiki/Homestay",
  "@id": "https://thestoneheritage.in/#hotel",
  "name": "Stone Heritage Mukteshwar",
  "description": "Discover Stone Heritage Mukteshwar, widely recognized as the best homestay in Mukteshwar, Uttarakhand. Perfectly positioned on the Bhowali-Dhanachuli Road, this authentic traditional stone cottage blends rustic architecture with modern premium amenities. Experience a boutique Mukteshwar homestay with Himalayan view balconies, pristine forest trails, stargazing, and wholesome home-cooked vegetarian food. Whether you are planning a weekend getaway from Delhi to Mukteshwar, searching for pet-friendly homestay options, or locking in workation stays.",
  "url": "https://thestoneheritage.in/",
  "telephone": "+919027844424",
  "email": "thestoneheritage@gmail.com",
  "checkinTime": "14:00",
  "checkoutTime": "11:00",
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
    "latitude": "29.4346202",
    "longitude": "79.6446521"
  },
  "image": [
    "https://thestoneheritage.in/assets/exterior-stone-cottage.jpg",
    "https://thestoneheritage.in/assets/kumaoni-cooking-workshop.jpg",
    "https://thestoneheritage.in/assets/himalayan-stargazing-view.jpg"
  ],
  "sameAs": [
    "https://www.facebook.com/thestoneheritage/",
    "https://www.instagram.com/thestoneheritage/",
    "https://www.youtube.com/@StoneHeritageMukteshwar",
    "https://x.com/stone_heritage",
    "https://in.pinterest.com/thestoneheritage/",
    "https://www.linkedin.com/company/stone-heritage-mukteshwar/"
  ],
  "hasMap": "https://maps.google.com/maps?cid=5074157692820223333",
  "maps": [
    "https://maps.google.com/maps?cid=5074157692820223333",
    "https://www.google.com/maps/place/?q=place_id:ChIJl-SiNX29oDkRZXXdnokHa0Y"
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
      "value": True
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Pet-Friendly Accommodation",
      "value": True
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Pure Vegetarian Home-Cooked Food",
      "value": True
    }
  ],
  "containsPlace": [
    {
      "@type": "HotelRoom",
      "name": "Brass Room",
      "description": "3 Quadroom with King Bali Floor Mattress and Private Washroom."
    },
    {
      "@type": "HotelRoom",
      "name": "Copper Room",
      "description": "Premium room featuring 1 King Bed and 1 Single Bed."
    },
    {
      "@type": "HotelRoom",
      "name": "The Vintage Room",
      "description": "Classic accommodation featuring 1 King Bed."
    },
    {
      "@type": "HotelRoom",
      "name": "Stonewood Family Retreat",
      "description": "Luxury family suite configuration featuring 2 King Beds."
    },
    {
      "@type": "HotelRoom",
      "name": "Stone And Story Room",
      "description": "Boutique heritage room featuring 1 King Bed."
    },
    {
      "@type": "HotelRoom",
      "name": "Iron Room",
      "description": "Rustic designed accommodation featuring 1 King Bed."
    },
    {
      "@type": "HotelRoom",
      "name": "Cedar Room",
      "description": "Economy category compact room option."
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
}

files_to_update = ['src/layouts/Layout.astro']

for file_path in files_to_update:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the const structuredData = { ... }; block
    match = re.search(r'const structuredData = (\{.*?\});', content, re.DOTALL)
    if not match:
        print(f"Could not find structuredData in {file_path}")
        continue
        
    structured_data_str = match.group(1)
    
    # Actually, we can just replace parts of the string
    
    # 1. Replace LodgingBusiness with Hotel, etc.
    # Since we want to parse and format it cleanly, let's write a small node script inside this python script, or just string manipulation
    
    # Let's replace the #localbusiness with #hotel everywhere inside structured_data_str
    new_str = structured_data_str.replace('"@id": "https://thestoneheritage.in/#localbusiness"', '"@id": "https://thestoneheritage.in/#hotel"')
    new_str = new_str.replace('https://thestoneheritage.in/#localbusiness', 'https://thestoneheritage.in/#hotel')
    
    # Parse the json block if we can, but JS object might not be valid JSON if it's not strictly JSON.
    # Fortunately, the object in the file looks exactly like valid JSON except for the variable assignment.
    try:
        data = json.loads(new_str)
        # Update the first item in @graph (which was LodgingBusiness)
        data['@graph'][0] = new_hotel
        
        # Format back to string
        final_str = json.dumps(data, indent=2)
        
        # Replace in content
        content = content.replace(match.group(1), final_str)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully updated {file_path}")
    except Exception as e:
        print(f"Failed to parse JSON for {file_path}: {e}")
