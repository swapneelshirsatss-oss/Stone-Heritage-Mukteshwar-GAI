const fs = require('fs');
const file = 'src/components/react-pages/Stay.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add Lucide imports
const importRegex = /import \{ OptimizedImage \} from '\.\.\/\.\.\/components\/OptimizedImage';/;
content = content.replace(importRegex, "import { OptimizedImage } from '../../components/OptimizedImage';\nimport { Wifi, UtensilsCrossed, Mountain, Castle, Dog } from 'lucide-react';");

// Replace the Why Choose Our Homestay section
const startSection = '        <section className="mb-20">';
const endSection = '        </section>\n\n        <section className="bg-accent';

const startIndex = content.indexOf(startSection);
const endIndex = content.indexOf(endSection);

const newSection = `        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">The Stone Heritage Experience</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              Discover the unique features that make our homestay the perfect mountain getaway, preventing you from ever wanting to leave.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-accent">
                <Wifi className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Connectivity</h3>
              <p className="text-primary/70">
                High-Speed Wi-Fi optimized for mountain workations. Stay connected and productive while enjoying the serene Himalayan environment.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-accent">
                <UtensilsCrossed className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Dining</h3>
              <p className="text-primary/70">
                Authentic pure vegetarian Kumaoni home-cooked meals and delicious Indian food, prepared fresh with local ingredients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-accent">
                <Mountain className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Views</h3>
              <p className="text-primary/70">
                Unobstructed Nanda Devi and Himalayan panoramic windows and terrace access. Wake up to majestic snow-capped peaks.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-accent">
                <Castle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Architecture</h3>
              <p className="text-primary/70">
                Authentic Kumaoni stone heritage construction seamlessly blended with modern luxury facilities for the ultimate comfort.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow lg:col-span-2 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center text-accent">
                <Dog className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Accessibility</h3>
                <p className="text-primary/70">
                  Fully pet-friendly accommodations. We welcome your furry friends to explore the wide open spaces and enjoy the mountain air alongside you.
                </p>
              </div>
            </div>
          </div>
        </section>\n`;

content = content.substring(0, startIndex) + newSection + content.substring(endIndex + endSection.length - 35); // Adjust for the end section string length

fs.writeFileSync(file, content);
console.log("Stay.tsx patched with new USPs!");
