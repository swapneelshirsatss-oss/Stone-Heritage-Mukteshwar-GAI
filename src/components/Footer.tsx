import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-stone-100 pt-12 pb-44 md:pb-12 mt-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="/Logo.webp" alt="Stone Heritage Logo" className="h-16 w-auto bg-stone-50 rounded-sm p-1" />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-serif font-semibold text-accent tracking-normal leading-none mb-1">Stone Heritage</h3>
                <span className="text-[10px] tracking-[0.3em] text-stone-300 font-medium uppercase mt-1">Mukteshwar</span>
              </div>
            </div>
            <p className="text-stone-300 text-sm font-light leading-relaxed mb-6">
              Authentic Kumaoni heritage homestay offering breathtaking Himalayan views. The perfect escape for couples, families, and remote workers.
            </p>
            <h2 className="text-xs font-sans font-medium tracking-wider uppercase text-highlight mb-6">
              Book Direct for Exclusive Rates & Perks
            </h2>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/thestoneheritage/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/thestoneheritage/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@StoneHeritageMukteshwar" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://x.com/stone_heritage" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-sans font-medium tracking-widest uppercase mb-6 text-accent">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-stone-300 font-light">
              <li><Link to="/stay" className="hover:text-highlight transition-colors">Stay</Link></li>
              <li><Link to="/experiences" className="hover:text-highlight transition-colors">Experiences</Link></li>
              <li><Link to="/volunteer-work-exchange-mukteshwar" className="hover:text-highlight transition-colors">Volunteer</Link></li>
              <li><Link to="/gallery" className="hover:text-highlight transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-highlight transition-colors">Blog</Link></li>
              <li><Link to="/testimonials" className="hover:text-highlight transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-highlight transition-colors">Contact Us</Link></li>
              <li><a href="https://booking.thestoneheritage.in/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">Book Now</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-sans font-medium tracking-widest uppercase mb-6 text-accent">Contact Information</h3>
            <address className="not-italic text-sm text-stone-300 space-y-2 font-light">
              <p>Bhowali Dhanachuli Rd, South Gola Range,</p>
              <p>Mukteshwar, Uttarakhand 263138</p>
              <p className="mt-4">
                <a href="tel:+919027844424" className="hover:text-highlight transition-colors">+91 9027844424</a> <br/>
                <a href="tel:+917900200563" className="hover:text-highlight transition-colors">+91 7900200563</a>
              </p>
              <p>
                <a href="mailto:thestoneheritage@gmail.com" className="hover:text-highlight transition-colors">thestoneheritage@gmail.com</a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-sans font-medium tracking-widest uppercase mb-6 text-accent">Location</h3>
            <div className="rounded-sm overflow-hidden h-48 bg-stone-800 border border-stone-700/50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.798426132153!2d79.64472459999999!3d29.434687300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0bd7d35a2e497%3A0x466b07899edd7565!2sStone%20Heritage%20Mukteshwar!5e0!3m2!1sen!2sin!4v1782816534338!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-700 mt-12 pt-8 text-center text-xs text-stone-400 flex flex-col md:flex-row items-center justify-center gap-4">
          <p>&copy; {new Date().getFullYear()} Stone Heritage Mukteshwar. All rights reserved.</p>
          <span className="hidden md:inline text-stone-600">|</span>
          <Link to="/privacy-policy" className="hover:text-highlight transition-colors">Privacy Policy</Link>
          <span className="hidden md:inline text-stone-600">|</span>
          <Link to="/terms-conditions" className="hover:text-highlight transition-colors">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
