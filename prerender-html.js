import fs from 'fs';
import path from 'path';

const routes = [
  'stay',
  'experiences',
  'blog',
  'gallery',
  'privacy-policy',
  'terms-conditions',
  'volunteer-work-exchange-mukteshwar',
  'contact',
  'testimonials',
  'sitemap'
];

const distPath = path.join(process.cwd(), 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (fs.existsSync(indexHtmlPath)) {
  const indexContent = fs.readFileSync(indexHtmlPath, 'utf8');

  routes.forEach(route => {
    // Create direct .html file (e.g. experiences.html)
    fs.writeFileSync(path.join(distPath, `${route}.html`), indexContent);
    
    // Also create folder with index.html (e.g. experiences/index.html)
    const routeDir = path.join(distPath, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent);
  });
  
  console.log('Successfully generated HTML files for all routes to prevent 404s.');
} else {
  console.error('dist/index.html not found. Make sure to run this after build.');
}
