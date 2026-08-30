import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const base = path.resolve(__dirname, '..');
const srcDir = path.join(base, 'src');

const pathMap = {
  // Rooms
  'copper-room.webp': 'images/rooms/copper-room.webp',
  'brass-room-homestay-in-mukteshwar.webp': 'images/rooms/brass-room-homestay-in-mukteshwar.webp',
  'cedar-room.webp': 'images/rooms/cedar-room.webp',
  'iron-room.webp': 'images/rooms/iron-room.webp',
  'vintage-room.webp': 'images/rooms/vintage-room.webp',
  'stone-and-story-suite-homestay.webp': 'images/rooms/stone-and-story-suite-homestay.webp',
  'stonewood-family-retreat.webp': 'images/rooms/stonewood-family-retreat.webp',
  'stonewood-family-retreat-group-stay.webp': 'images/rooms/stonewood-family-retreat-group-stay.webp',
  'modern-ensuite-bathroom-luxury.webp': 'images/rooms/modern-ensuite-bathroom-luxury.webp',
  'vintage-homestay-in-mukteshwar.webp': 'images/rooms/vintage-homestay-in-mukteshwar.webp',

  // Property & Views
  'best-family-homestay-in-mukteshwar.webp': 'images/property/best-family-homestay-in-mukteshwar.webp',
  'best-family-homestay-in-mukteshwar-mobile.webp': 'images/property/best-family-homestay-in-mukteshwar-mobile.webp',
  'garden-area-stone-heritage.webp': 'images/property/garden-area-stone-heritage.webp',
  'himalayan-view-terrace-mukteshwar.webp': 'images/property/himalayan-view-terrace-mukteshwar.webp',
  'homestay-in-mukteshwar.webp': 'images/property/homestay-in-mukteshwar.webp',
  'homestay-mukteshwar-mountains-view-from-room.webp': 'images/property/homestay-mukteshwar-mountains-view-from-room.webp',
  'luxury-heritage-homestay-in-mukteshwar.webp': 'images/property/luxury-heritage-homestay-in-mukteshwar.webp',
  'luxury-homestay-UttarakhandMukteshwar-homestay.webp': 'images/property/luxury-homestay-UttarakhandMukteshwar-homestay.webp',
  'mountain-living-best-homestay-Mukteshwar.webp': 'images/property/mountain-living-best-homestay-Mukteshwar.webp',
  'mukteshwar-inspection.webp': 'images/property/mukteshwar-inspection.webp',
  'nanda-devi-peak-view-mukteshwar.webp': 'images/property/nanda-devi-peak-view-mukteshwar.webp',
  'pet-friendly-homestay-resort.webp': 'images/property/pet-friendly-homestay-resort.webp',
  'Mukteshwar-homestay (6).webp': 'images/property/Mukteshwar-homestay-6.webp',
  'Mukteshwar-homestay-6.webp': 'images/property/Mukteshwar-homestay-6.webp',
  'akash.webp': 'images/property/akash.webp',
  'Best-place-souvenier.webp': 'images/property/Best-place-souvenier.webp',

  // Experiences
  'Bhalugaad-Waterfall-Mukteshwar.webp': 'images/experiences/Bhalugaad-Waterfall-Mukteshwar.webp',
  'chauli-ki-jali-in-mukteshwar.webp': 'images/experiences/chauli-ki-jali-in-mukteshwar.webp',
  'Kainchi_dham_mukteshwar.webp': 'images/experiences/Kainchi_dham_mukteshwar.webp',
  'sky-observation-in-mukteshwar.webp': 'images/experiences/sky-observation-in-mukteshwar.webp',
  'thing-to-do-in-mukteshwar.webp': 'images/experiences/thing-to-do-in-mukteshwar.webp',

  // Blog
  'Best-Homestay-in-Mukteshwar-for-Families-2026-Guide.webp': 'images/blog/Best-Homestay-in-Mukteshwar-for-Families-2026-Guide.webp',
  'Best-Homestay-in-Mukteshwar-for-Families.webp': 'images/blog/Best-Homestay-in-Mukteshwar-for-Families.webp',
  'Why-stay-near-mukteshwar.webp': 'images/blog/Why-stay-near-mukteshwar.webp',
  'best-places-to-stay-mukteshwar-stone-heritage-hero-1920x1080.webp': 'images/blog/best-places-to-stay-mukteshwar-stone-heritage-hero-1920x1080.webp',
  'Blog-images/Complete-Travel-Guide-to-Mukteshwar-and-Ramgarh-2026.webp': 'images/blog/Complete-Travel-Guide-to-Mukteshwar-and-Ramgarh-2026.webp',
  'Blog-images/What-to-See-and-Do-Top-Experiences-in-Mukteshwar-and-Ramgarh.webp': 'images/blog/What-to-See-and-Do-Top-Experiences-in-Mukteshwar-and-Ramgarh.webp',
  'Blog-images/best-resort-near-mukteshwar-uttarkhand.webp': 'images/blog/best-resort-near-mukteshwar-uttarkhand.webp',
  'Complete-Travel-Guide-to-Mukteshwar-and-Ramgarh-2026.webp': 'images/blog/Complete-Travel-Guide-to-Mukteshwar-and-Ramgarh-2026.webp',
  'What-to-See-and-Do-Top-Experiences-in-Mukteshwar-and-Ramgarh.webp': 'images/blog/What-to-See-and-Do-Top-Experiences-in-Mukteshwar-and-Ramgarh.webp',
  'best-resort-near-mukteshwar-uttarkhand.webp': 'images/blog/best-resort-near-mukteshwar-uttarkhand.webp',
  "workation-blog/Stone-Heritage-Mukteshwar's-Workation-Setup.webp": "images/blog/Stone-Heritage-Mukteshwar's-Workation-Setup.webp",
  'workation-blog/Why-Remote-Workers-Are-Choosing-Mukteshwar-Over-Goa-or-Dharamshala.webp': 'images/blog/Why-Remote-Workers-Are-Choosing-Mukteshwar-Over-Goa-or-Dharamshala.webp',
  'workation-blog/workation-in-mukteshwar.webp': 'images/blog/workation-in-mukteshwar.webp',
  "Stone-Heritage-Mukteshwar's-Workation-Setup.webp": "images/blog/Stone-Heritage-Mukteshwar's-Workation-Setup.webp",
  'Why-Remote-Workers-Are-Choosing-Mukteshwar-Over-Goa-or-Dharamshala.webp': 'images/blog/Why-Remote-Workers-Are-Choosing-Mukteshwar-Over-Goa-or-Dharamshala.webp',
  'workation-in-mukteshwar.webp': 'images/blog/workation-in-mukteshwar.webp',

  // Testimonials
  'gagan.webp': 'images/testimonials/gagan.webp',
  'Khushi.webp': 'images/testimonials/Khushi.webp',
  'nikhil.webp': 'images/testimonials/nikhil.webp',
  'Rashmi.webp': 'images/testimonials/Rashmi.webp',
  'saransh.webp': 'images/testimonials/saransh.webp'
};

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allSrcFiles = getAllFiles(srcDir);
let modifiedCount = 0;

for (const filePath of allSrcFiles) {
  if (!filePath.endsWith('.astro') && !filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.md') && !filePath.endsWith('.json') && !filePath.endsWith('.css')) {
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Sort keys by length descending so longer subpaths like 'Blog-images/foo.webp' match before 'foo.webp'
  const keys = Object.keys(pathMap).sort((a, b) => b.length - a.length);

  for (const oldKey of keys) {
    const newPath = pathMap[oldKey];
    
    // Replace absolute URL: https://thestoneheritage.in/oldKey -> https://thestoneheritage.in/newPath
    const fullUrlRegex = new RegExp(`https://thestoneheritage\\.in/${oldKey.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'g');
    content = content.replace(fullUrlRegex, `https://thestoneheritage.in/${newPath}`);

    // Replace root-relative URL: "/oldKey" or '/oldKey' or `oldKey`
    // Ensure we don't accidentally match if it already has 'images/' prefix
    const relativeUrlRegex = new RegExp(`(?<=['"\`(/])/?${oldKey.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}(?=['"\`#)])`, 'g');
    content = content.replace(relativeUrlRegex, `/${newPath}`);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', path.relative(base, filePath));
    modifiedCount++;
  }
}

console.log(`Updated ${modifiedCount} files in src/!`);

// Update public/_redirects with 301 rules for all moved files
const redirectsFile = path.join(base, 'public', '_redirects');
let redirectsContent = '# 301 Redirects for organized image assets\n';
for (const [oldKey, newPath] of Object.entries(pathMap)) {
  if (!oldKey.includes('/')) {
    redirectsContent += `/${oldKey} /${newPath} 301\n`;
  }
}
redirectsContent += '\n# SPA and Astro fallback rules\n';
if (fs.existsSync(redirectsFile)) {
  const existing = fs.readFileSync(redirectsFile, 'utf8');
  // keep any other rules if present
  if (existing.includes('/*')) {
    redirectsContent += existing.split('\n').filter(l => l.includes('/*')).join('\n') + '\n';
  }
}
fs.writeFileSync(redirectsFile, redirectsContent, 'utf8');
console.log('Updated public/_redirects with 301 legacy image rewrites!');
