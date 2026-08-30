import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const base = path.resolve(__dirname, '..');
const srcDir = path.join(base, 'src');
const pubDir = path.join(base, 'public');

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
const referencedImages = new Set();
const missingImages = [];

for (const filePath of allSrcFiles) {
  if (!filePath.endsWith('.astro') && !filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.md')) {
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find all /images/... or /Logo.webp or https://thestoneheritage.in/images/...
  const matches = content.matchAll(/(?:https:\/\/thestoneheritage\.in)?\/(images\/[a-zA-Z0-9_\-./%()]+\.webp|Logo\.webp)/g);
  for (const match of matches) {
    const imgPath = match[1];
    referencedImages.add(imgPath);
    const diskPath = path.join(pubDir, imgPath);
    if (!fs.existsSync(diskPath)) {
      missingImages.push({
        file: path.relative(base, filePath),
        referenced: imgPath,
        diskPath: diskPath
      });
    }
  }
}

console.log(`Total unique image assets referenced: ${referencedImages.size}`);
if (missingImages.length === 0) {
  console.log('SUCCESS: All referenced images exist on disk with 0 missing assets!');
} else {
  console.error(`WARNING: Found ${missingImages.length} missing image references:`);
  missingImages.forEach(m => console.error(`  - In ${m.file}: ${m.referenced}`));
}
