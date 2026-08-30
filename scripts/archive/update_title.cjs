const fs = require('fs');
let content = fs.readFileSync('src/pages/index.astro', 'utf8');
content = content.replace('title="Stone Heritage Mukteshwar"', 'title="Luxury Homestay in Mukteshwar | Stone Heritage"');
fs.writeFileSync('src/pages/index.astro', content);
console.log("Done");
