import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const base = path.resolve(__dirname, '..');
const imagesDir = path.join(base, 'public', 'images');

function scan(dir) {
  let results = [];
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(scan(fullPath));
    } else if (fullPath.endsWith('.webp')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function run() {
  const images = scan(imagesDir);
  console.log(`Discovered ${images.length} webp images in public/images/`);
  
  let totalSaved = 0;
  let count = 0;

  for (const img of images) {
    const stat = fs.statSync(img);
    if (stat.size < 40 * 1024) {
      continue; // Skip small assets already under 40KB
    }

    const buf = fs.readFileSync(img);
    const meta = await sharp(buf).metadata();
    const relPath = path.relative(base, img).replace(/\\/g, '/');

    let maxDim = 1100;
    let q = 76;

    if (img.includes('best-family-homestay-in-mukteshwar-mobile')) {
      maxDim = 640;
      q = 74;
    } else if (img.includes('rooms')) {
      maxDim = 1000;
      q = 76;
    } else if (img.includes('property')) {
      maxDim = 1100;
      q = 76;
    } else if (img.includes('experiences')) {
      maxDim = 1000;
      q = 76;
    } else if (img.includes('blog')) {
      maxDim = 1100;
      q = 76;
    }

    let pipeline = sharp(buf);
    if (meta.width > maxDim) {
      pipeline = pipeline.resize(maxDim, null, { withoutEnlargement: true });
    }

    const out = await pipeline.webp({ quality: q, effort: 6 }).toBuffer();

    if (out.length < stat.size) {
      const savedBytes = stat.size - out.length;
      totalSaved += savedBytes;
      count++;
      fs.writeFileSync(img, out);
      console.log(`[OPT] ${relPath}: ${(stat.size/1024).toFixed(1)} KB -> ${(out.length/1024).toFixed(1)} KB (Saved ${(savedBytes/1024).toFixed(1)} KB)`);
    }
  }

  console.log('\n========================================');
  console.log(`Optimization Completed: ${count} images optimized`);
  console.log(`Total Net Savings: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB`);
  console.log('========================================');
}

run().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
