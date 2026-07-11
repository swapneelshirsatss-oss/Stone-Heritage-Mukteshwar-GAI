const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public');
const MAX_WIDTH = 1920;
const RESPONSIVE_WIDTHS = [640, 768, 1024, 1280];

async function resizeImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const filePath = path.join(dir, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      
      // Skip if this is already a responsive generated image
      if (/-(\d{3,4})$/.test(baseName)) {
         continue;
      }

      try {
        const metadata = await sharp(filePath).metadata();
        
        // Generate responsive sizes
        for (const w of RESPONSIVE_WIDTHS) {
            if (metadata.width > w) {
                const responsivePath = path.join(dir, `${baseName}-${w}.webp`);
                if (!fs.existsSync(responsivePath)) {
                    console.log(`Generating ${w}px version of ${file}...`);
                    await sharp(filePath)
                        .resize({ width: w })
                        .webp({ quality: 80 })
                        .toFile(responsivePath);
                }
            }
        }

      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

resizeImages();
