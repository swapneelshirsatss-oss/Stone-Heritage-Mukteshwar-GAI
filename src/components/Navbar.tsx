import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Stay', path: '/stay' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full text-primary transition-all duration-300 bg-stone-50 shadow-sm border-b border-stone-200"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 z-50" onClick={closeMobileMenu}>
            <img src="/Logo.webp" alt="Stone Heritage Logo" className="h-10 md:h-12 w-auto" />
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-serif font-semibold text-primary tracking-normal leading-none">
                Stone Heritage
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] text-accent font-medium uppercase mt-1">
                Mukteshwar
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative py-2",
                  location.pathname === link.path ? "text-accent" : "text-primary/70"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://booking.thestoneheritage.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-stone-50 bg-primary hover:bg-primary/90 px-5 py-2.5 rounded-full transition-colors shadow-sm hover:shadow-md"
            >
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-2 md:hidden z-50">
            <a 
              href="https://booking.thestoneheritage.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-stone-50 bg-primary hover:bg-primary/90 px-4 py-2 rounded-full transition-colors shadow-sm whitespace-nowrap"
            >
              Book Now
            </a>
            <button 
              className="p-2 text-primary hover:text-accent transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 w-full bg-stone-50 border-b border-stone-200 shadow-md transform origin-top transition-all duration-300 ease-in-out md:hidden overflow-hidden text-primary",
          isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col py-2 px-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={cn(
                "py-3 text-base font-medium transition-colors border-b border-stone-200/50 last:border-0",
                location.pathname === link.path ? "text-accent" : "text-primary hover:text-accent"
              )}
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
