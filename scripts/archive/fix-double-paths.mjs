import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const base = path.resolve(__dirname, '..');
const srcDir = path.join(base, 'src');

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
let fixedCount = 0;

for (const filePath of allSrcFiles) {
  if (!filePath.endsWith('.astro') && !filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.md') && !filePath.endsWith('.json') && !filePath.endsWith('.css')) {
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace any duplicate /images/xyz//images/xyz/ with single /images/xyz/
  content = content.replace(/(\/images\/(?:rooms|property|experiences|blog|testimonials|brand)\/)+/g, (match, p1) => p1);
  content = content.replace(/images\/(?:rooms|property|experiences|blog|testimonials|brand)\/\/images\/(?:rooms|property|experiences|blog|testimonials|brand)\//g, (match) => {
    const parts = match.split('//');
    return parts[1] || parts[0];
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed double path in:', path.relative(base, filePath));
    fixedCount++;
  }
}

console.log(`Cleaned double paths in ${fixedCount} files.`);
