const fs = require('fs');

const pages = [
  { 
    file: 'src/pages/index.astro', 
    title: 'Stone Heritage Mukteshwar',
    description: 'Experience the best homestay in Mukteshwar. Stone Heritage offers an authentic Kumaoni boutique stone cottage with luxury, pet-friendly stays and panoramic Himalayan views.' 
  },
  { 
    file: 'src/pages/volunteer-work-exchange-mukteshwar/index.astro', 
    title: 'Volunteer Work Exchange | Stone Heritage Mukteshwar',
    description: 'Join our volunteer work exchange program in Mukteshwar. Immerse yourself in the Himalayan lifestyle, learn local Kumaoni culture, and contribute to our heritage homestay.'
  },
  { 
    file: 'src/pages/contact/index.astro', 
    title: 'Contact Us | Stone Heritage Mukteshwar',
    description: 'Get in touch with Stone Heritage Mukteshwar for direct bookings, inquiries, and directions to the best homestay near Nanda Devi. Call or email us today.'
  },
  { 
    file: 'src/pages/stay/index.astro', 
    title: 'Our Rooms & Stays | Stone Heritage Mukteshwar',
    description: 'Explore luxury mountain accommodations at Stone Heritage. Choose from the Copper Room, Brass Room, Vintage Room, or our Stonewood Family Retreat for your perfect getaway.'
  },
  { 
    file: 'src/pages/sitemap/index.astro', 
    title: 'Sitemap | Stone Heritage Mukteshwar',
    description: 'Navigate the Stone Heritage Mukteshwar website easily. Find quick links to our rooms, experiences, blog, gallery, and contact information.'
  },
  { 
    file: 'src/pages/terms-conditions/index.astro', 
    title: 'Terms & Conditions | Stone Heritage Mukteshwar',
    description: 'Read the terms and conditions for booking and staying at Stone Heritage Mukteshwar. Learn about our policies to ensure a seamless and pleasant stay.'
  },
  { 
    file: 'src/pages/experiences/index.astro', 
    title: 'Experiences | Stone Heritage Mukteshwar',
    description: 'Discover unique experiences in Mukteshwar. From forest trails and Himalayan stargazing to authentic Kumaoni dining, create unforgettable memories at Stone Heritage.'
  },
  { 
    file: 'src/pages/gallery/index.astro', 
    title: 'Gallery | Stone Heritage Mukteshwar',
    description: 'Browse our gallery to see the beauty of Stone Heritage Mukteshwar. View our authentic stone architecture, cozy rooms, and breathtaking Himalayan scenery.'
  },
  { 
    file: 'src/pages/testimonials/index.astro', 
    title: 'Guest Reviews & Testimonials | Stone Heritage Mukteshwar',
    description: 'Read what our guests say about their stay at Stone Heritage Mukteshwar. With a 4.9-star rating, discover why we are the top-rated family homestay in the region.'
  },
  { 
    file: 'src/pages/privacy-policy/index.astro', 
    title: 'Privacy Policy | Stone Heritage Mukteshwar',
    description: 'Read the privacy policy of Stone Heritage Mukteshwar to understand how we collect, use, and protect your personal information.'
  },
  { 
    file: 'src/pages/blog/index.astro', 
    title: 'Blog | Stone Heritage Mukteshwar',
    description: 'Read the Stone Heritage blog for travel tips, local Mukteshwar guides, and insights into the Kumaoni lifestyle and Himalayan heritage.'
  }
];

pages.forEach(page => {
  try {
    let content = fs.readFileSync(page.file, 'utf8');
    
    const simpleLayoutRegex = /<Layout[^>]*>/;
    content = content.replace(simpleLayoutRegex, '<Layout title="' + page.title + '" description="' + page.description + '">');
    
    fs.writeFileSync(page.file, content);
    console.log('Updated ' + page.file);
  } catch(e) {
    console.log('Error with ' + page.file + ': ' + e.message);
  }
});
