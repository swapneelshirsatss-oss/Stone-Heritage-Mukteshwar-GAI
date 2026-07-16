const fs = require('fs');
const file = 'src/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/to=\{link\.path\}/g, 'href={link.path}');

fs.writeFileSync(file, content);
console.log("Navbar patched successfully!");
