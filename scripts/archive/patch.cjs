const fs = require('fs');
const file = 'src/components/react-pages/Experiences.tsx';
let content = fs.readFileSync(file, 'utf8');

const discoverStart = content.indexOf('<div className="mb-32">');
// Notice the spaces in the original string!
const onsiteRegex = /<motion\.div\s+initial=\{\{ opacity: 0, y: 20 \}\}\s+whileInView=\{\{ opacity: 1, y: 0 \}\}\s+viewport=\{\{ once: true \}\}\s+transition=\{\{ duration: 0\.8 \}\}\s+className="text-center mb-16"\s*>\s*<span className="text-secondary font-sans font-medium tracking-\[0\.2em\] uppercase text-xs mb-6 block">On-Site Activities<\/span>/;
const match = content.match(onsiteRegex);

if (discoverStart === -1) {
  console.log("Discover start not found");
  process.exit(1);
}
if (!match) {
  console.log("Onsite start not found");
  process.exit(1);
}
const onsiteStart = match.index;

const discoverEnd = onsiteStart;
const onsiteEnd = content.lastIndexOf('</div>\n    </>\n  );\n}');

if (onsiteEnd === -1) {
  console.log("Onsite end not found");
  process.exit(1);
}

const before = content.substring(0, discoverStart);
const discover = content.substring(discoverStart, discoverEnd);
const onsite = content.substring(onsiteStart, onsiteEnd);
const after = content.substring(onsiteEnd);

fs.writeFileSync(file, before + onsite + discover + after);
console.log("File patched successfully!");
