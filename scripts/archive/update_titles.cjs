const fs = require('fs');

const pages = [
  { file: 'src/pages/volunteer-work-exchange-mukteshwar/index.astro', title: 'Volunteer Work Exchange | Stone Heritage Mukteshwar' },
  { file: 'src/pages/contact/index.astro', title: 'Contact Us | Stone Heritage Mukteshwar' },
  { file: 'src/pages/stay/index.astro', title: 'Our Rooms & Stays | Stone Heritage Mukteshwar' },
  { file: 'src/pages/sitemap/index.astro', title: 'Sitemap | Stone Heritage Mukteshwar' },
  { file: 'src/pages/terms-conditions/index.astro', title: 'Terms & Conditions | Stone Heritage Mukteshwar' },
  { file: 'src/pages/experiences/index.astro', title: 'Experiences | Stone Heritage Mukteshwar' },
  { file: 'src/pages/gallery/index.astro', title: 'Gallery | Stone Heritage Mukteshwar' },
  { file: 'src/pages/testimonials/index.astro', title: 'Guest Reviews & Testimonials | Stone Heritage Mukteshwar' },
  { file: 'src/pages/privacy-policy/index.astro', title: 'Privacy Policy | Stone Heritage Mukteshwar' },
  { file: 'src/pages/blog/index.astro', title: 'Blog | Stone Heritage Mukteshwar' }
];

pages.forEach(page => {
  try {
    let content = fs.readFileSync(page.file, 'utf8');
    content = content.replace('<Layout title="Stone Heritage">', '<Layout title="' + page.title + '">');
    fs.writeFileSync(page.file, content);
    console.log('Updated ' + page.file);
  } catch(e) {
    console.log('Error with ' + page.file + ': ' + e.message);
  }
});
