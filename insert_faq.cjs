const fs = require('fs');

let content = fs.readFileSync('src/components/react-pages/Home.tsx', 'utf8');

// Insert import at the top
const importStatement = "import { FaqAccordion } from '../../components/FaqAccordion';\n";
content = content.replace("import { OptimizedImage } from '../../components/OptimizedImage';", "import { OptimizedImage } from '../../components/OptimizedImage';\n" + importStatement);

// Insert the section above Location Section
const targetLocation = "{/* Location Section */}";
const faqSection = `
      {/* FAQ Section */}
      <FaqAccordion />

      `;
content = content.replace(targetLocation, faqSection + targetLocation);

fs.writeFileSync('src/components/react-pages/Home.tsx', content);
