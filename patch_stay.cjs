const fs = require('fs');
const file = 'src/components/react-pages/Stay.tsx';
let content = fs.readFileSync(file, 'utf8');

const newContent = `
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Why Choose Our Homestay?</h2>
              <div className="space-y-6 text-lg text-primary/80">
                <p>
                  Experience the perfect blend of traditional architecture and modern comfort. Our homestay is built using authentic Kumaoni stonework that keeps the rooms warm in winter and cool in summer.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-stone-100 p-4 rounded-xl border border-stone-200">
                    <h3 className="font-bold text-primary mb-2 text-xl">🐾 Pet Friendly</h3>
                    <p className="text-sm">We welcome your furry friends with open arms. Wide open spaces for them to run and play.</p>
                  </div>
                  <div className="bg-stone-100 p-4 rounded-xl border border-stone-200">
                    <h3 className="font-bold text-primary mb-2 text-xl">💻 Workations</h3>
                    <p className="text-sm">High-speed Wi-Fi and power backup make us the perfect destination for remote workers.</p>
                  </div>
                  <div className="bg-stone-100 p-4 rounded-xl border border-stone-200">
                    <h3 className="font-bold text-primary mb-2 text-xl">🍲 Local Food</h3>
                    <p className="text-sm">Enjoy authentic, home-cooked Kumaoni meals prepared with fresh, locally sourced ingredients.</p>
                  </div>
                  <div className="bg-stone-100 p-4 rounded-xl border border-stone-200">
                    <h3 className="font-bold text-primary mb-2 text-xl">🏔️ Scenic Views</h3>
                    <p className="text-sm">Wake up to unobstructed, panoramic views of the majestic Nanda Devi and Himalayan ranges.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <OptimizedImage
                src="/luxury-heritage-homestay-in-mukteshwar.webp"
                alt="Luxury heritage homestay exterior with Himalayan views"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
`;

content = content.replace(
  '        <section className="bg-accent text-white rounded-3xl',
  newContent + '\n        <section className="bg-accent text-white rounded-3xl'
);

fs.writeFileSync(file, content);
console.log("Stay.tsx patched with more content!");
