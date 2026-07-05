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
    fs.writeFileSync(path.join(distPath, `${route}.html`), indexContent);
    const routeDir = path.join(distPath, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent);
  });
  
  // Create 404.html for GitHub Pages support
  fs.writeFileSync(path.join(distPath, '404.html'), indexContent);
  
  console.log('Successfully generated HTML files and 404.html for all routes.');
} else {
  console.error('dist/index.html not found. Make sure to run this after build.');
}
