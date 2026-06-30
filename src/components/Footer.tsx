import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-stone-100 py-12 pb-32 md:pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Stone Heritage Mukteshwar</h3>
            <p className="text-stone-300 text-sm leading-relaxed mb-4">
              Authentic Kumaoni heritage homestay offering breathtaking Himalayan views. The perfect escape for couples, families, and remote workers.
            </p>
            <p className="text-sm font-medium text-highlight">
              Best Price Guarantee on Direct Bookings
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-stone-300">
              <li><Link to="/rooms" className="hover:text-highlight transition-colors">Our Rooms</Link></li>
              <li><Link to="/experiences" className="hover:text-highlight transition-colors">Experiences</Link></li>
              <li><Link to="/contact" className="hover:text-highlight transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Information</h3>
            <address className="not-italic text-sm text-stone-300 space-y-2">
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
        </div>
        
        <div className="border-t border-stone-700 mt-12 pt-8 text-center text-xs text-stone-400">
          <p>&copy; {new Date().getFullYear()} Stone Heritage Mukteshwar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
