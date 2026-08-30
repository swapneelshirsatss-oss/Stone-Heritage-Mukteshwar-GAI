import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const base = path.resolve(__dirname, '..');
const pub = path.join(base, 'public');
const imgBase = path.join(pub, 'images');

const dirs = [
  path.join(imgBase, 'rooms'),
  path.join(imgBase, 'property'),
  path.join(imgBase, 'experiences'),
  path.join(imgBase, 'blog'),
  path.join(imgBase, 'testimonials'),
  path.join(imgBase, 'brand'),
  path.join(base, 'scripts', 'archive')
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Map of file moves
const moves = {
  // Brand
  'Logo.webp': { dest: 'images/brand/Logo.webp', keepCopyInRoot: true },

  // Rooms
  'copper-room.webp': { dest: 'images/rooms/copper-room.webp' },
  'brass-room-homestay-in-mukteshwar.webp': { dest: 'images/rooms/brass-room-homestay-in-mukteshwar.webp' },
  'cedar-room.webp': { dest: 'images/rooms/cedar-room.webp' },
  'iron-room.webp': { dest: 'images/rooms/iron-room.webp' },
  'vintage-room.webp': { dest: 'images/rooms/vintage-room.webp' },
  'stone-and-story-suite-homestay.webp': { dest: 'images/rooms/stone-and-story-suite-homestay.webp' },
  'stonewood-family-retreat.webp': { dest: 'images/rooms/stonewood-family-retreat.webp' },
  'stonewood-family-retreat-group-stay.webp': { dest: 'images/rooms/stonewood-family-retreat-group-stay.webp' },
  'modern-ensuite-bathroom-luxury.webp': { dest: 'images/rooms/modern-ensuite-bathroom-luxury.webp' },
  'vintage-homestay-in-mukteshwar.webp': { dest: 'images/rooms/vintage-homestay-in-mukteshwar.webp' },

  // Property & Views
  'best-family-homestay-in-mukteshwar.webp': { dest: 'images/property/best-family-homestay-in-mukteshwar.webp' },
  'best-family-homestay-in-mukteshwar-mobile.webp': { dest: 'images/property/best-family-homestay-in-mukteshwar-mobile.webp' },
  'garden-area-stone-heritage.webp': { dest: 'images/property/garden-area-stone-heritage.webp' },
  'himalayan-view-terrace-mukteshwar.webp': { dest: 'images/property/himalayan-view-terrace-mukteshwar.webp' },
  'homestay-in-mukteshwar.webp': { dest: 'images/property/homestay-in-mukteshwar.webp' },
  'homestay-mukteshwar-mountains-view-from-room.webp': { dest: 'images/property/homestay-mukteshwar-mountains-view-from-room.webp' },
  'luxury-heritage-homestay-in-mukteshwar.webp': { dest: 'images/property/luxury-heritage-homestay-in-mukteshwar.webp' },
  'luxury-homestay-UttarakhandMukteshwar-homestay.webp': { dest: 'images/property/luxury-homestay-UttarakhandMukteshwar-homestay.webp' },
  'mountain-living-best-homestay-Mukteshwar.webp': { dest: 'images/property/mountain-living-best-homestay-Mukteshwar.webp' },
  'mukteshwar-inspection.webp': { dest: 'images/property/mukteshwar-inspection.webp' },
  'nanda-devi-peak-view-mukteshwar.webp': { dest: 'images/property/nanda-devi-peak-view-mukteshwar.webp' },
  'pet-friendly-homestay-resort.webp': { dest: 'images/property/pet-friendly-homestay-resort.webp' },
  'Mukteshwar-homestay (6).webp': { dest: 'images/property/Mukteshwar-homestay-6.webp' },
  'akash.webp': { dest: 'images/property/akash.webp' },
  'Best-place-souvenier.webp': { dest: 'images/property/Best-place-souvenier.webp' },

  // Experiences
  'Bhalugaad-Waterfall-Mukteshwar.webp': { dest: 'images/experiences/Bhalugaad-Waterfall-Mukteshwar.webp' },
  'chauli-ki-jali-in-mukteshwar.webp': { dest: 'images/experiences/chauli-ki-jali-in-mukteshwar.webp' },
  'Kainchi_dham_mukteshwar.webp': { dest: 'images/experiences/Kainchi_dham_mukteshwar.webp' },
  'sky-observation-in-mukteshwar.webp': { dest: 'images/experiences/sky-observation-in-mukteshwar.webp' },
  'thing-to-do-in-mukteshwar.webp': { dest: 'images/experiences/thing-to-do-in-mukteshwar.webp' },

  // Blog
  'Best-Homestay-in-Mukteshwar-for-Families-2026-Guide.webp': { dest: 'images/blog/Best-Homestay-in-Mukteshwar-for-Families-2026-Guide.webp' },
  'Best-Homestay-in-Mukteshwar-for-Families.webp': { dest: 'images/blog/Best-Homestay-in-Mukteshwar-for-Families.webp' },
  'Why-stay-near-mukteshwar.webp': { dest: 'images/blog/Why-stay-near-mukteshwar.webp' },
  'best-places-to-stay-mukteshwar-stone-heritage-hero-1920x1080.webp': { dest: 'images/blog/best-places-to-stay-mukteshwar-stone-heritage-hero-1920x1080.webp' },

  // Testimonials
  'gagan.webp': { dest: 'images/testimonials/gagan.webp' },
  'Khushi.webp': { dest: 'images/testimonials/Khushi.webp' },
  'nikhil.webp': { dest: 'images/testimonials/nikhil.webp' },
  'Rashmi.webp': { dest: 'images/testimonials/Rashmi.webp' },
  'saransh.webp': { dest: 'images/testimonials/saransh.webp' }
};

for (const [srcFile, config] of Object.entries(moves)) {
  const srcPath = path.join(pub, srcFile);
  const destPath = path.join(pub, config.dest);
  if (fs.existsSync(srcPath)) {
    if (config.keepCopyInRoot) {
      fs.copyFileSync(srcPath, destPath);
      console.log('Copied:', srcFile, '->', config.dest);
    } else {
      fs.renameSync(srcPath, destPath);
      console.log('Moved:', srcFile, '->', config.dest);
    }
  } else {
    console.log('Not found:', srcFile);
  }
}

// Move files from Blog-images/ and workation-blog/ to images/blog/
const blogDir = path.join(pub, 'Blog-images');
if (fs.existsSync(blogDir)) {
  fs.readdirSync(blogDir).forEach(f => {
    fs.renameSync(path.join(blogDir, f), path.join(imgBase, 'blog', f));
    console.log('Moved Blog-images:', f);
  });
  fs.rmdirSync(blogDir);
}

const workationDir = path.join(pub, 'workation-blog');
if (fs.existsSync(workationDir)) {
  fs.readdirSync(workationDir).forEach(f => {
    fs.renameSync(path.join(workationDir, f), path.join(imgBase, 'blog', f));
    console.log('Moved workation-blog:', f);
  });
  fs.rmdirSync(workationDir);
}

// Archive root scripts
const rootFiles = fs.readdirSync(base);
rootFiles.forEach(f => {
  if (f.endsWith('.cjs') || (f.startsWith('patch_') && f.endsWith('.js')) || f === 'patch.js' || f === 'fix_astro.js' || f === 'update_pkg.js' || f === 'update_schema.py' || f === 'migrate.sh' || f === 'test-img.html') {
    fs.renameSync(path.join(base, f), path.join(base, 'scripts', 'archive', f));
    console.log('Archived script:', f);
  }
});

// Remove stray root unoptimized test images if they exist
['stone-and-story-room.webp', 'stone-and-story-room-1.webp', 'luxury-heritage-homestay-in-mukteshwar.webp'].forEach(img => {
  const rootImg = path.join(base, img);
  if (fs.existsSync(rootImg)) {
    fs.unlinkSync(rootImg);
    console.log('Cleaned stray root image:', img);
  }
});

// Clean up reorganize.js if present
const oldScript = path.join(__dirname, 'reorganize.js');
if (fs.existsSync(oldScript)) fs.unlinkSync(oldScript);

console.log('Reorganization completed successfully!');
