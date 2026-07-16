const fs = require('fs');
const file = 'src/components/react-pages/Experiences.tsx';
let content = fs.readFileSync(file, 'utf8');

const discoverStart = content.indexOf('<div className="mb-32">');
const onsiteStart = content.indexOf('<motion.div \n        initial={{ opacity: 0, y: 20 }}\n        whileInView={{ opacity: 1, y: 0 }}\n        viewport={{ once: true }}\n        transition={{ duration: 0.8 }}\n        className="text-center mb-16"\n      >\n        <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">On-Site Activities</span>');

if (discoverStart === -1) {
  console.log("Discover start not found");
  process.exit(1);
}
if (onsiteStart === -1) {
  console.log("Onsite start not found");
  process.exit(1);
}

const discoverEnd = onsiteStart;
const onsiteEnd = content.indexOf('</div>\n    </>\n  );\n}');

const before = content.substring(0, discoverStart);
const discover = content.substring(discoverStart, discoverEnd);
const onsite = content.substring(onsiteStart, onsiteEnd);
const after = content.substring(onsiteEnd);

fs.writeFileSync(file, before + onsite + discover + after);
console.log("File patched successfully!");
