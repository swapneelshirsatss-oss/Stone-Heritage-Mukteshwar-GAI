const fs = require('fs');
const file = 'src/components/react-pages/Experiences.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `      <div className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-primary tracking-tight">Things to do in Mukteshwar: Local Experiences</h1>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
          Immerse yourself in the culture, adventure, and natural beauty of the Himalayas. When you are looking for things to do in Mukteshwar, we have you covered.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">On-Site Activities</span>
        <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary tracking-tight">More Things to do in Mukteshwar: Curated Experiences</h2>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
          Thoughtfully crafted to make your stay truly memorable. From guided treks to stargazing, there are plenty of unique things to do in Mukteshwar right at Stone Heritage.
        </p>
      </motion.div>`;

const replacementStr = `      <div className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
        <span className="text-secondary font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 block">On-Site Activities</span>
        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-primary tracking-tight">Curated Experiences</h1>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-6"></div>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
          Thoughtfully crafted to make your stay truly memorable. From guided treks to stargazing, there are plenty of unique things to do in Mukteshwar right at Stone Heritage.
        </p>
      </motion.div>`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(file, content);
  console.log("Experiences patched successfully!");
} else {
  console.log("Target string not found, falling back to regex or reporting error");
  process.exit(1);
}
