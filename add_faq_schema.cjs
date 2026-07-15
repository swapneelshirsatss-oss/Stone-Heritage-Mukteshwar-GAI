const fs = require('fs');

let content = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

const target = `    {
      "@type": "WebSite",
      "@id": "https://thestoneheritage.in/#website",
      "url": "https://thestoneheritage.in/",
      "name": "Stone Heritage Mukteshwar",
      "publisher": {
        "@id": "https://thestoneheritage.in/#localbusiness"
      }
    }
  ]
};`;

const replacement = `    {
      "@type": "WebSite",
      "@id": "https://thestoneheritage.in/#website",
      "url": "https://thestoneheritage.in/",
      "name": "Stone Heritage Mukteshwar",
      "publisher": {
        "@id": "https://thestoneheritage.in/#localbusiness"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I contact Stone Heritage Mukteshwar for direct bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach our front desk directly by calling +91-9027844424 or +91-7900200563. We highly recommend booking directly with us via phone or our official website to secure priority room allocation and the best available rates."
          }
        },
        {
          "@type": "Question",
          "name": "What are the guest reviews and ratings for Stone Heritage Mukteshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We proudly maintain a 4.9-star rating based on over 245 authentic guest reviews on our Google Business Profile. Families and travelers consistently praise our unobstructed Himalayan views, child-friendly environment, and authentic Kumaoni home-cooked food."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Stone Heritage the best homestay in Mukteshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stone Heritage is recognized as a premium boutique homestay due to our authentic Kumaoni stone architecture, peaceful location near Bhatelia, unobstructed Nanda Devi mountain views, and highly personalized hospitality. We provide a luxury family retreat away from commercial crowds."
          }
        },
        {
          "@type": "Question",
          "name": "How far is the homestay from the main Mukteshwar Temple?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our property is located near Bhatelia, which is a highly scenic 15-minute drive from the main Mukteshwar Dham Temple and Chauli Ki Jali. This location allows you to enjoy a secluded forest environment while remaining close to major local attractions."
          }
        },
        {
          "@type": "Question",
          "name": "Is Stone Heritage Mukteshwar a pet-friendly homestay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we are a fully pet-friendly accommodation. We warmly welcome your furry family members, and our spacious garden areas and standalone stone cottages provide the perfect, safe environment for pets to enjoy the mountain air."
          }
        }
      ]
    }
  ]
};`;

content = content.replace(target, replacement);

fs.writeFileSync('src/layouts/Layout.astro', content);
