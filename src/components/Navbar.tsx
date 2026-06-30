import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full text-primary transition-all duration-300",
        isScrolled 
          ? "bg-stone-50/85 backdrop-blur-md shadow-sm border-b border-stone-200/50" 
          : "bg-stone-50 shadow-sm border-b border-stone-200"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 z-50" onClick={closeMobileMenu}>
            <img src="/Logo.webp" alt="Stone Heritage Logo" className="h-10 md:h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-primary tracking-tight leading-none mb-1">
                Stone Heritage
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-secondary uppercase">
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
              href="tel:+919027844424" 
              className="flex items-center gap-2 text-sm font-semibold text-stone-50 bg-primary hover:bg-primary/90 px-5 py-2.5 rounded-full transition-colors shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary hover:text-accent transition-colors z-50 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-stone-50 z-40 md:hidden flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto">
          {navLinks.map((link) => (
             <Link 
              key={link.path}
              to={link.path} 
              className={cn(
                "text-xl font-medium transition-colors w-full text-center py-4 border-b border-stone-200",
                location.pathname === link.path ? "text-accent" : "text-primary"
              )}
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
          
          <a 
            href="tel:+919027844424" 
            className="mt-8 flex items-center justify-center gap-2 text-lg font-semibold text-stone-50 bg-primary hover:bg-primary/90 w-full py-4 rounded-xl transition-colors shadow-md"
            onClick={closeMobileMenu}
          >
            <Phone className="w-5 h-5" />
            <span>Call to Book</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
