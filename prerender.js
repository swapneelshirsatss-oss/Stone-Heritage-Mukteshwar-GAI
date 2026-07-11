import fs from 'fs';
import path from 'path';

const routes = [
  '/',
  '/stay',
  '/experiences',
  '/blog',
  '/gallery',
  '/privacy-policy',
  '/terms-conditions',
  '/volunteer-work-exchange-mukteshwar',
  '/contact',
  '/testimonials',
  '/sitemap'
];

async function generate() {
  const distPath = path.join(process.cwd(), 'dist');
  const indexHtmlPath = path.join(distPath, 'index.html');
  const serverEntryPath = path.join(distPath, 'server', 'entry-server.js');
  
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('index.html not found at ' + indexHtmlPath);
    process.exit(1);
  }
  
  if (!fs.existsSync(serverEntryPath)) {
    console.error('entry-server.js not found at ' + serverEntryPath);
    process.exit(1);
  }

  const template = fs.readFileSync(indexHtmlPath, 'utf8');
  
  // Use a dynamic import to load the server entry
  // In a module environment we can use await import
  const { render } = await import(new URL('file://' + serverEntryPath));

  for (const url of routes) {
    const helmetContext = {};
    const appHtml = render(url, helmetContext);
    const { helmet } = helmetContext;
    
    let html = template.replace('<!--app-html-->', appHtml);
    
    if (helmet) {
      const headTags = `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      `;
      html = html.replace('<!--head-tags-->', headTags);
    }
    
    const routeDir = path.join(distPath, url === '/' ? '' : url);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    
    console.log(`Pre-rendered ${url}`);
  }
  
  // Generate 404 page
  fs.writeFileSync(path.join(distPath, '404.html'), template);
  console.log('Successfully generated HTML files for all routes.');
}

generate().catch(console.error);
