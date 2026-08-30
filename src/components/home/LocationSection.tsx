import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Train, 
  Plane, 
  Bus, 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Clock, 
  Route, 
  ChevronDown, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface TransitItem {
  hub: string;
  distance: string;
  duration: string;
  mode: string;
  category: 'transit' | 'local';
  typeIcon: any;
  mapLink?: string;
  badge?: string;
}

const quickTransitMatrix: TransitItem[] = [
  {
    hub: "New Delhi (City Center)",
    distance: "~357 km (222 mi)",
    duration: "~7 – 7.5 hrs",
    mode: "Self-Drive / Cab (NE-3 & NH-9)",
    category: "transit",
    typeIcon: Car,
    badge: "Direct Highway Route",
    mapLink: "https://www.google.com/maps/dir/New+Delhi,+Delhi,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJLbZ-NFv9DDkRzk0gTkm3wlI!2m2!1d77.2088282!2d28.613929799999998!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
  },
  {
    hub: "Kathgodam Railway Station (KGM)",
    distance: "~60 km (37.4 mi)",
    duration: "~2 – 2.5 hrs",
    mode: "Express Train + Direct Taxi",
    category: "transit",
    typeIcon: Train,
    badge: "Most Popular",
    mapLink: "https://www.google.com/maps/dir/Kathgodam+railway+station,+Kathgodam,+Uttarakhand/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJPb44596joDkRfv2cR-eL27k!2m2!1d79.5443206!2d29.2731113!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
  },
  {
    hub: "Pantnagar Airport (PGH)",
    distance: "~93 km (58 mi)",
    duration: "~3 – 3.5 hrs",
    mode: "Domestic Flight + Taxi",
    category: "transit",
    typeIcon: Plane,
    badge: "Nearest Airport",
    mapLink: "https://www.google.com/maps/dir/Pantnagar+Airport,+Pantnagar,+Uttarakhand+263145,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJ87HLZTOHoDkRqPbMBjFb2OI!2m2!1d79.4689842!2d29.033527!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
  },
  {
    hub: "Bareilly Airport (BEK)",
    distance: "~160 km",
    duration: "~4.5 – 5 hrs",
    mode: "Commercial Flights + Taxi",
    category: "transit",
    typeIcon: Plane,
    badge: "Regional Hub",
    mapLink: "https://www.google.com/maps/dir/Bareilly+Airport,+Civil+Airport+Bareilly,+Mudia+Ahmad+Nagar,+Bareilly,+Uttar+Pradesh/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJx23fU-0lnjkRw_3w47c_q-g!2m2!1d79.458999!2d28.423999!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
  },
  {
    hub: "IGI Airport, New Delhi (DEL)",
    distance: "~375 km",
    duration: "~8 – 8.5 hrs",
    mode: "International Flight + Road/Train",
    category: "transit",
    typeIcon: Plane,
    badge: "International Hub"
  },
  {
    hub: "Kainchi Dham (Neem Karoli Baba Ashram)",
    distance: "~39 km (24.3 mi)",
    duration: "~1 hr 35 min",
    mode: "Scenic Hill Drive via Bhowali",
    category: "local",
    typeIcon: Compass,
    badge: "Pilgrimage",
    mapLink: "https://www.google.com/maps/dir/Shree+Kainchi+Dham+-+Param+Pujya+Baba+Shri+Neem+Karori+Maharaj,+Chaukhuta,+Uttarakhand+263132,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJ2cWOG6ujoDkR0H3tJvqGd-o!2m2!1d79.5124091!2d29.422562499999998!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
  },
  {
    hub: "Nainital (Mall Road)",
    distance: "~44 km (27.1 mi)",
    duration: "~2 hrs",
    mode: "Scenic Hill Drive via Ramgarh",
    category: "local",
    typeIcon: Compass,
    badge: "Day Trip",
    mapLink: "https://www.google.com/maps/dir/Nainital,+Uttarakhand,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJYZ39KLyhoDkRs32YFql7rnw!2m2!1d79.4533773!2d29.392413899999998!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
  },
  {
    hub: "Bhimtal (Lake & Promenade)",
    distance: "~42 km (26.2 mi)",
    duration: "~1 hr 50 min",
    mode: "Mountain Road via Dhanachuli",
    category: "local",
    typeIcon: Compass,
    badge: "Lakes & Boating",
    mapLink: "https://www.google.com/maps/dir/Bhimtal,+Uttarakhand,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJDf-QRiGYoDkR3EGXQkQy3Do!2m2!1d79.5519144!2d29.346082!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
  },
  {
    hub: "Mukteshwar Dham Shiva Temple",
    distance: "~10 km",
    duration: "~20 – 25 min",
    mode: "Local Scenic Ridge Drive",
    category: "local",
    typeIcon: Compass,
    badge: "350-Yr Heritage"
  },
  {
    hub: "Bhalu Gaad Waterfall",
    distance: "~13 km",
    duration: "~24 min",
    mode: "Drive + 1.5km Pine Forest Trek",
    category: "local",
    typeIcon: Compass,
    badge: "Waterfall Trek"
  }
];

export function LocationSection() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'transit' | 'local'>('all');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const filteredMatrix = quickTransitMatrix.filter(item => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-stone-100/80 border-t border-stone-200" id="transit-matrix">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-stone-200/80 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
            <Navigation className="w-3.5 h-3.5 text-accent" />
            Traveler Connectivity & Route Guide
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-primary tracking-tight mb-5">
            Distance & Transit Matrix to Stone Heritage Mukteshwar
          </h2>
          <div className="w-16 h-[1px] bg-accent/60 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-primary/75 max-w-3xl mx-auto font-light leading-relaxed">
            Planning your Himalayan getaway from <strong>Delhi NCR</strong> or nearby pilgrimage circuits like <strong>Kainchi Dham</strong>? Here is your complete transit blueprint with exact distances, estimated travel times, and recommended highway routes.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-white mb-16">
          <div className="w-full h-[380px] sm:h-[460px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.798426132153!2d79.64472459999999!3d29.434687300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0bd7d35a2e497%3A0x466b07899edd7565!2sStone%20Heritage%20Mukteshwar!5e0!3m2!1sen!2sin!4v1782816534338!5m2!1sen!2sin" 
              title="Google Maps Location of Stone Heritage Mukteshwar"
              width="100%" 
              height="100%" 
              className="w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          
          <div className="bg-stone-50 border-t border-stone-200 p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-stone-700 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span><strong>Stone Heritage Mukteshwar</strong>, Bhowali-Dhanachuli Road, Mukteshwar, Uttarakhand 263138</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Stone+Heritage+Mukteshwar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white py-2 px-4 rounded-xl text-xs font-medium tracking-wide transition-colors shadow-sm shrink-0 w-full sm:w-auto"
              >
                <Navigation className="w-3.5 h-3.5" />
                Get Driving Directions
              </a>
              <a 
                href="https://www.google.com/maps/place/?cid=5074157692820223333" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center gap-1.5 bg-white hover:bg-stone-100 text-stone-700 py-2 px-4 rounded-xl text-xs font-medium border border-stone-200 transition-colors shrink-0"
              >
                <ExternalLink className="w-3.5 h-3.5 text-accent" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* 1. Quick Transit Matrix Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-stone-200 pb-6">
            <div>
              <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Quick Transit Matrix</span>
              </div>
              <h3 className="text-2xl font-serif font-medium text-primary">Distance, Duration & Travel Mode</h3>
            </div>

            {/* Filter Toggle */}
            <div className="inline-flex bg-stone-100 p-1 rounded-xl border border-stone-200/80 shrink-0">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filterCategory === 'all' ? 'bg-primary text-white shadow-sm' : 'text-stone-600 hover:text-primary'
                }`}
              >
                All Hubs
              </button>
              <button
                onClick={() => setFilterCategory('transit')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filterCategory === 'transit' ? 'bg-primary text-white shadow-sm' : 'text-stone-600 hover:text-primary'
                }`}
              >
                Airports & Rail
              </button>
              <button
                onClick={() => setFilterCategory('local')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filterCategory === 'local' ? 'bg-primary text-white shadow-sm' : 'text-stone-600 hover:text-primary'
                }`}
              >
                Kumaon Circuit
              </button>
            </div>
          </div>

          {/* Table for Desktop / Card Grid for Mobile */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-500 bg-stone-50/50">
                  <th className="py-4 px-4">Starting Point / Hub</th>
                  <th className="py-4 px-4">Distance</th>
                  <th className="py-4 px-4">Travel Time</th>
                  <th className="py-4 px-4">Recommended Mode</th>
                  <th className="py-4 px-4 text-right">Route Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sm">
                {filteredMatrix.map((item, idx) => {
                  const Icon = item.typeIcon;
                  return (
                    <tr key={idx} className="hover:bg-stone-50/80 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-accent shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-medium text-primary block">{item.hub}</span>
                            {item.badge && (
                              <span className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-mono font-medium text-stone-800">{item.distance}</td>
                      <td className="py-4 px-4 text-stone-700">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-accent" />
                          {item.duration}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-stone-600 font-light">{item.mode}</td>
                      <td className="py-4 px-4 text-right">
                        {item.mapLink ? (
                          <a
                            href={item.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-primary transition-colors underline underline-offset-4"
                          >
                            <span>Open Route</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-xs text-stone-400">Via Delhi Hub</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card List */}
          <div className="md:hidden space-y-4">
            {filteredMatrix.map((item, idx) => {
              const Icon = item.typeIcon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-stone-200 flex items-center justify-center text-accent shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-medium text-primary text-base">{item.hub}</h4>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] bg-stone-200 px-2 py-0.5 rounded-full text-stone-700 font-medium shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-stone-200/60">
                    <div>
                      <span className="text-stone-500 block">Distance</span>
                      <span className="font-semibold text-primary">{item.distance}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Duration</span>
                      <span className="font-semibold text-primary">{item.duration}</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 font-light">{item.mode}</p>
                  {item.mapLink && (
                    <div className="pt-2 border-t border-stone-200/60">
                      <a
                        href={item.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-primary transition-colors underline underline-offset-4"
                      >
                        <span>Google Maps Turn-by-Turn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Detailed Route Breakdown Accordion */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200">
          <div className="mb-8 border-b border-stone-200 pb-6">
            <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
              Step-by-Step Directions
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-primary">
              Detailed Route Breakdown for Travelers
            </h3>
            <p className="text-stone-600 text-sm font-light mt-1">
              Select your travel mode below for comprehensive driving directions, train schedules, and airport transfers.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Accordion 1: Delhi / Delhi NCR */}
            <div className="border border-stone-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full px-6 py-5 bg-stone-50/70 hover:bg-stone-50 text-left flex items-center justify-between gap-4 transition-colors"
                aria-expanded={openAccordion === 0}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-lg text-primary">1. Reaching from Delhi / Delhi-NCR</h4>
                    <p className="text-xs text-stone-500 font-light">Road (Self-Drive / Cab), Express Trains & Volvo Buses</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${openAccordion === 0 ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openAccordion === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 space-y-6 text-sm text-stone-700 bg-white border-t border-stone-200">
                      
                      {/* Option A */}
                      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="font-serif font-semibold text-primary text-base">Option A: By Road (Self-Drive / Outstation Cab)</h5>
                          <span className="text-xs bg-accent/15 text-accent font-medium px-2.5 py-0.5 rounded-full font-mono">~357 km | ~7 to 7.5 hrs</span>
                        </div>
                        <p className="text-xs text-stone-600 mb-3 font-light leading-relaxed">
                          <strong>Route Highway Sequence:</strong> Delhi (Akshardham / Gazipur) → Delhi-Meerut Expressway (NE-3) → Hapur Bypass → Moradabad Bypass (NH 9) → Rampur → Bilaspur → Rudrapur → Haldwani → Kathgodam → Bhimtal → Bhowali-Dhanachuli Road → Stone Heritage Mukteshwar.
                        </p>
                        <p className="text-xs text-stone-600 mb-4 font-light leading-relaxed">
                          <strong>Road Conditions:</strong> 4-lane to 6-lane national highway until Kathgodam; smooth, well-paved double-lane mountain roads from Kathgodam to Mukteshwar with scenic valley vistas.
                        </p>
                        <a
                          href="https://www.google.com/maps/dir/New+Delhi,+Delhi,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJLbZ-NFv9DDkRzk0gTkm3wlI!2m2!1d77.2088282!2d28.613929799999998!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors underline underline-offset-4"
                        >
                          <span>Google Maps Directions: Delhi to Stone Heritage Mukteshwar</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Option B */}
                      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="font-serif font-semibold text-primary text-base">Option B: By Train + Taxi (Most Popular & Relaxed Option)</h5>
                          <span className="text-xs bg-stone-200 text-stone-800 font-medium px-2.5 py-0.5 rounded-full font-mono">5.5h Train + 2h Taxi</span>
                        </div>
                        <p className="text-xs text-stone-600 mb-3 font-light leading-relaxed">
                          Board an express train from New Delhi (NDLS) or Old Delhi (DLI) to <strong>Kathgodam Railway Station (KGM)</strong>:
                        </p>
                        <ul className="space-y-2 text-xs text-stone-700 mb-4 list-disc list-inside">
                          <li><strong>Kathgodam Shatabdi Express (Train #12040):</strong> Departs NDLS 06:20 AM → Arrives Kathgodam 11:55 AM (5h 35m).</li>
                          <li><strong>Uttaranchal Sampark Kranti Express (Train #15035):</strong> Departs DLI 04:00 PM → Arrives Kathgodam 10:45 PM (6h 45m).</li>
                          <li><strong>Ranikhet Express (Train #15013):</strong> Overnight train from DLI (10:00 PM) → Arrives Kathgodam 05:05 AM (7h 05m).</li>
                        </ul>
                        <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600">
                          <p>
                            <strong>Station Taxi Transfer:</strong> Dedicated taxis are available directly outside Kathgodam Station to Stone Heritage Mukteshwar (~60 km, 2 to 2.5 hours, approx. ₹1,800–₹2,400). Contact our front desk in advance if you'd like a verified pickup arranged!
                          </p>
                        </div>
                      </div>

                      {/* Option C */}
                      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
                        <h5 className="font-serif font-semibold text-primary text-base mb-2">Option C: By Intercity Bus + Local Taxi</h5>
                        <p className="text-xs text-stone-600 font-light leading-relaxed">
                          Board a state-run (UTC) or private Volvo / AC sleeper bus from <strong>Anand Vihar ISBT</strong> or <strong>Kashmiri Gate ISBT</strong> in Delhi to Haldwani / Kathgodam (~7–8 hours). From Haldwani Bus Stand / Kathgodam, private taxis and shared transport depart frequently to Mukteshwar.
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 2: Airports */}
            <div className="border border-stone-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full px-6 py-5 bg-stone-50/70 hover:bg-stone-50 text-left flex items-center justify-between gap-4 transition-colors"
                aria-expanded={openAccordion === 1}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-lg text-primary">2. Reaching from Nearby Airports</h4>
                    <p className="text-xs text-stone-500 font-light">Pantnagar (PGH), Bareilly (BEK) & Delhi IGI (DEL)</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${openAccordion === 1 ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openAccordion === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 space-y-6 text-sm text-stone-700 bg-white border-t border-stone-200">
                      
                      {/* Pantnagar */}
                      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="font-serif font-semibold text-primary text-base">Nearest Airport: Pantnagar Airport (PGH)</h5>
                          <span className="text-xs bg-accent/15 text-accent font-medium px-2.5 py-0.5 rounded-full font-mono">~93 km | ~3 to 3.5 hrs</span>
                        </div>
                        <p className="text-xs text-stone-600 mb-2 font-light leading-relaxed">
                          <strong>Flight Connectivity:</strong> Scheduled domestic flights from Delhi (Indira Gandhi International Airport), Dehradun, and Jaipur.
                        </p>
                        <p className="text-xs text-stone-600 mb-3 font-light leading-relaxed">
                          <strong>Airport Transfer:</strong> Pre-paid and on-call airport taxis are available outside the terminal to drive directly to Stone Heritage via Haldwani and Bhimtal.
                        </p>
                        <a
                          href="https://www.google.com/maps/dir/Pantnagar+Airport,+Pantnagar,+Uttarakhand+263145,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJ87HLZTOHoDkRqPbMBjFb2OI!2m2!1d79.4689842!2d29.033527!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors underline underline-offset-4"
                        >
                          <span>Google Maps Directions: Pantnagar Airport to Stone Heritage</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Bareilly */}
                      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="font-serif font-semibold text-primary text-base">Regional Airport: Bareilly Airport (BEK)</h5>
                          <span className="text-xs bg-stone-200 text-stone-800 font-medium px-2.5 py-0.5 rounded-full font-mono">~160 km | ~4.5 to 5 hrs</span>
                        </div>
                        <p className="text-xs text-stone-600 font-light leading-relaxed">
                          <strong>Commercial Flights:</strong> Operates direct flights connecting major metros (Mumbai, Bengaluru, Delhi). Transfer by private taxi via NH 30 → Kichha → Haldwani → Kathgodam → Mukteshwar.
                        </p>
                      </div>

                      {/* Delhi IGI */}
                      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="font-serif font-semibold text-primary text-base">Primary International Hub: Indira Gandhi International Airport (DEL)</h5>
                          <span className="text-xs bg-stone-200 text-stone-800 font-medium px-2.5 py-0.5 rounded-full font-mono">~375 km | ~8 hrs</span>
                        </div>
                        <p className="text-xs text-stone-600 font-light leading-relaxed">
                          International travelers can take a direct road taxi (~8 hours) or board the Airport Express Metro to New Delhi Railway Station (NDLS) to catch the morning Kathgodam Shatabdi Express.
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 3: Hill Stations & Pilgrimage */}
            <div className="border border-stone-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full px-6 py-5 bg-stone-50/70 hover:bg-stone-50 text-left flex items-center justify-between gap-4 transition-colors"
                aria-expanded={openAccordion === 2}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-lg text-primary">3. Reaching from Nearby Hill Stations & Pilgrimage Sites</h4>
                    <p className="text-xs text-stone-500 font-light">Kainchi Dham, Nainital & Bhimtal Circuit</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${openAccordion === 2 ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openAccordion === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 space-y-6 text-sm text-stone-700 bg-white border-t border-stone-200">
                      
                      {/* Kainchi Dham */}
                      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="font-serif font-semibold text-primary text-base">From Kainchi Dham (Neem Karoli Baba Ashram)</h5>
                          <span className="text-xs bg-accent/15 text-accent font-medium px-2.5 py-0.5 rounded-full font-mono">~39 km | ~1 hr 35 min</span>
                        </div>
                        <p className="text-xs text-stone-600 mb-3 font-light leading-relaxed">
                          <strong>Scenic Driving Route:</strong> Kainchi Dham → Bhowali → Bhowali-Ramgarh-Mukteshwar Road → Dhanachuli Road → Stone Heritage Mukteshwar.
                        </p>
                        <a
                          href="https://www.google.com/maps/dir/Shree+Kainchi+Dham+-+Param+Pujya+Baba+Shri+Neem+Karori+Maharaj,+Chaukhuta,+Uttarakhand+263132,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJ2cWOG6ujoDkR0H3tJvqGd-o!2m2!1d79.5124091!2d29.422562499999998!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors underline underline-offset-4"
                        >
                          <span>Google Maps Directions: Kainchi Dham to Stone Heritage</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Nainital */}
                      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="font-serif font-semibold text-primary text-base">From Nainital (Mall Road & Naini Lake)</h5>
                          <span className="text-xs bg-stone-200 text-stone-800 font-medium px-2.5 py-0.5 rounded-full font-mono">~44 km | ~2 hrs</span>
                        </div>
                        <p className="text-xs text-stone-600 mb-3 font-light leading-relaxed">
                          <strong>Scenic Driving Route:</strong> Mallital / Tallital → Bhowali → Ramgarh → Dhanachuli Road → Stone Heritage Mukteshwar.
                        </p>
                        <a
                          href="https://www.google.com/maps/dir/Nainital,+Uttarakhand,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJYZ39KLyhoDkRs32YFql7rnw!2m2!1d79.4533773!2d29.392413899999998!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors underline underline-offset-4"
                        >
                          <span>Google Maps Directions: Nainital to Stone Heritage</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Bhimtal */}
                      <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h5 className="font-serif font-semibold text-primary text-base">From Bhimtal (Lake)</h5>
                          <span className="text-xs bg-stone-200 text-stone-800 font-medium px-2.5 py-0.5 rounded-full font-mono">~42 km | ~1 hr 50 min</span>
                        </div>
                        <p className="text-xs text-stone-600 mb-3 font-light leading-relaxed">
                          <strong>Scenic Driving Route:</strong> Bhimtal Lake → Bhowali-Bhimtal Road → Dhanachuli Road → Stone Heritage Mukteshwar.
                        </p>
                        <a
                          href="https://www.google.com/maps/dir/Bhimtal,+Uttarakhand,+India/Stone+Heritage+Mukteshwar,+Bhowali+Dhanachuli+Rd,+South+Gola+Range,+Mukteshwar,+Uttarakhand+263138,+India/data=!4m14!4m13!1m5!1m1!19sChIJDf-QRiGYoDkR3EGXQkQy3Do!2m2!1d79.5519144!2d29.346082!1m5!1m1!19sChIJl-SiNX29oDkRZXXdnokHa0Y!2m2!1d79.644592899999992!2d29.4344681!3e0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors underline underline-offset-4"
                        >
                          <span>Google Maps Directions: Bhimtal to Stone Heritage</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
