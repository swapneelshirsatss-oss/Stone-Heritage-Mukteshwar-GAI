#!/bin/bash
set -e

echo "Updating package.json..."
cat << 'JS_EOF' > update_pkg.cjs
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.scripts = {
  "dev": "astro dev --port 3000 --host 0.0.0.0",
  "build": "astro build && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --outfile=dist/server.cjs",
  "start": "node dist/server.cjs",
  "preview": "astro preview --port 3000 --host 0.0.0.0"
};

pkg.dependencies["astro"] = "^5.0.0";
pkg.dependencies["@astrojs/react"] = "^4.0.0";
delete pkg.dependencies["@vitejs/plugin-react"];
delete pkg.dependencies["prerender-node"];
delete pkg.dependencies["react-router-dom"];
delete pkg.dependencies["react-helmet-async"];

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
JS_EOF
node update_pkg.cjs
rm update_pkg.cjs

echo "Installing dependencies..."
npm install

echo "Reorganizing directories..."
mkdir -p src/components/react-pages
if [ -d src/pages ]; then
  mv src/pages/*.tsx src/components/react-pages/ 2>/dev/null || true
fi

echo "Creating Astro config..."
cat << 'JS_EOF' > astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
JS_EOF

echo "Creating Layout..."
mkdir -p src/layouts
cat << 'JS_EOF' > src/layouts/Layout.astro
---
import '../index.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export interface Props {
	title?: string;
}
const { title = "Stone Heritage Mukteshwar" } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.ico" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
	</head>
	<body class="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900 antialiased selection:bg-accent/20 selection:text-accent">
		<Navbar client:load currentPath={Astro.url.pathname} />
		<main class="flex-grow">
			<slot />
		</main>
		<Footer client:visible />
	</body>
</html>
JS_EOF

echo "Generating Astro pages..."
cat << 'JS_EOF' > generate_pages.cjs
const fs = require('fs');

if (!fs.existsSync('src/pages')) fs.mkdirSync('src/pages', { recursive: true });

const pages = [
  { name: 'index', component: 'Home' },
  { name: 'stay', component: 'Stay' },
  { name: 'experiences', component: 'Experiences' },
  { name: 'blog', component: 'Blog' },
  { name: 'gallery', component: 'Gallery' },
  { name: 'contact', component: 'Contact' },
  { name: 'testimonials', component: 'Testimonials' },
  { name: 'privacy-policy', component: 'PrivacyPolicy' },
  { name: 'terms-conditions', component: 'TermsConditions' },
  { name: 'volunteer-work-exchange-mukteshwar', component: 'Volunteer' },
  { name: 'sitemap', component: 'Sitemap' }
];

const template = `---
import Layout from '../layouts/Layout.astro';
import { COMPONENT_NAME } from '../components/react-pages/COMPONENT_NAME';
---

<Layout title="Stone Heritage">
  <COMPONENT_NAME client:load />
</Layout>
`;

pages.forEach(page => {
  const content = template.replace(/COMPONENT_NAME/g, page.component);
  const dir = page.name === 'index' ? 'src/pages' : `src/pages/${page.name}`;
  if (page.name !== 'index' && !fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const filePath = page.name === 'index' ? 'src/pages/index.astro' : `${dir}/index.astro`;
  fs.writeFileSync(filePath, content);
});
JS_EOF
node generate_pages.cjs
rm generate_pages.cjs

echo "Patching React components..."
cat << 'JS_EOF' > patch_react.cjs
const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('src/components', (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove react-router-dom imports
    content = content.replace(/import\s+\{[^}]*\}\s+from\s+['"]react-router-dom['"];?/g, '');
    
    // Remove Helmet imports
    content = content.replace(/import\s+\{[^}]*Helmet[^}]*\}\s+from\s+['"]react-helmet-async['"];?/g, '');
    
    // Replace <Link> with <a>
    content = content.replace(/<Link /g, '<a ');
    content = content.replace(/<\/Link>/g, '</a>');
    
    // Replace to= with href=
    content = content.replace(/ to="/g, ' href="');
    
    // Remove <Helmet>...</Helmet> blocks
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    
    // Fix Navbar useLocation
    if (filePath.includes('Navbar.tsx')) {
      content = content.replace(/const location = useLocation\(\);/g, '');
      content = content.replace(/location\.pathname/g, 'currentPath');
      content = content.replace(/export function Navbar\(\) \{/, 'export function Navbar({ currentPath = "/" }: { currentPath?: string }) {');
    }

    fs.writeFileSync(filePath, content);
  }
});
JS_EOF
node patch_react.cjs
rm patch_react.cjs

echo "Updating server.ts..."
cat << 'JS_EOF' > server.ts
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const distPath = path.join(process.cwd(), 'dist');
app.use(express.static(distPath, { extensions: ['html'] }));

// Handle 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(distPath, '404.html'));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
JS_EOF

echo "Cleaning up..."
rm -f index.html vite.config.ts prerender.js prerender-html.js src/main.tsx src/App.tsx src/entry-server.tsx src/components/Layout.tsx src/components/ScrollToTop.tsx

echo "Done!"
