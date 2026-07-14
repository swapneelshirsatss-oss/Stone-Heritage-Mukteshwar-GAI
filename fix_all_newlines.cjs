const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('src', (filePath) => {
  if (filePath.endsWith('.astro')) return; // Already fixed these
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('\n') && content.length > 200) {
      console.log('Fixing single line issue in:', filePath);
      // It's all on one line. This means ALL components are broken!
    }
  }
});
