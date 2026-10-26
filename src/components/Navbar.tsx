import React, { useState } from 'react';

export function Navbar({ currentPath = "/" }: { currentPath?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Stay', path: '/stay/' },
    { name: 'Experiences', path: '/experiences/' },
    { name: 'Our Story', path: '/our-story/' },
    { name: 'Gallery', path: '/gallery/' },
    { name: 'Blog', path: '/blog/' },
    { name: 'Contact', path: '/contact/' },
  ];

  const personaSilos = [
    { name: 'Family Suites & Retreats', path: '/blog/best-homestay-in-mukteshwar-for-families/' },
    { name: 'Himalayan Workations', path: '/blog/workation-in-mukteshwar/' },
    { name: 'Pet-Friendly Homestay', path: '/blog/pet-friendly-homestay-in-mukteshwar/' },
    { name: 'Delhi NCR Road Trip Guide', path: '/blog/delhi-to-mukteshwar-road-trip/' },
    { name: 'Kainchi Dham & Pilgrimage', path: '/blog/mukteshwar-ramgarh-travel-guide/' },
  ];

  const isLinkActive = (linkPath: string) => {
    const cleanCurrent = (currentPath || '/').replace(/\/$/, '') || '/';
    const cleanLink = (linkPath || '/').replace(/\/$/, '') || '/';
    if (cleanLink === '/') return cleanCurrent === '/';
    return cleanCurrent === cleanLink || cleanCurrent.startsWith(`${cleanLink}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full text-primary transition-all duration-300 bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2.5 z-50" onClick={closeMobileMenu}>
            <img 
              src="/Logo.webp" 
              alt="Stone Heritage Logo" 
              width="48"
              height="48"
              className="h-10 md:h-12 w-auto" 
              loading="eager" 
              fetchPriority="high" 
              decoding="async"
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-serif font-semibold text-primary tracking-normal leading-none">
                Stone Heritage
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] text-accent font-medium uppercase mt-1">
                Mukteshwar
              </span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-5 lg:gap-8 items-center" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <a 
                  key={link.path}
                  href={link.path} 
                  className={`text-sm font-medium transition-colors hover:text-accent relative py-2 ${
                    active ? "text-accent font-semibold" : "text-primary/75"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>
          
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="tel:+919027844424"
              className="p-2.5 rounded-full text-stone-600 hover:text-accent hover:bg-stone-100 transition-colors"
              title="Call Front Desk (+91 90278 44424)"
              aria-label="Call Stone Heritage"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
            <a 
              href="https://booking.thestoneheritage.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-stone-50 bg-primary hover:bg-secondary px-5 py-2.5 rounded-full transition-colors shadow-sm hover:shadow-md"
            >
              <span>Book Direct</span>
            </a>
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-2 md:hidden z-50">
            <a 
              href="https://booking.thestoneheritage.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-stone-50 bg-primary hover:bg-secondary px-4 py-2 rounded-full transition-colors shadow-sm whitespace-nowrap"
            >
              Book Direct
            </a>
            <button 
              className="p-2 text-primary hover:text-accent transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-stone-50 border-b border-stone-200 shadow-xl transform origin-top transition-all duration-300 ease-in-out md:hidden overflow-y-auto max-h-[85vh] text-primary ${
          isMobileMenuOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-4 px-6 divide-y divide-stone-200/70">
          
          {/* Main Navigation Links */}
          <div className="flex flex-col pb-3">
            <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-accent mb-2">
              Menu
            </span>
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <a 
                  key={link.path}
                  href={link.path} 
                  className={`py-2.5 text-base font-medium transition-colors flex items-center justify-between ${
                    active ? "text-accent font-semibold" : "text-primary hover:text-accent"
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span>{link.name}</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-stone-400">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </a>
              );
            })}
          </div>

          {/* Persona & Travel Guides Silos */}
          <div className="flex flex-col py-4">
            <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-accent mb-2">
              Curated Travel Guides
            </span>
            {personaSilos.map((silo) => (
              <a
                key={silo.path}
                href={silo.path}
                className="py-2 text-xs text-stone-600 hover:text-primary transition-colors flex items-center justify-between"
                onClick={closeMobileMenu}
              >
                <span>{silo.name}</span>
                <span className="text-accent text-[11px]">→</span>
              </a>
            ))}
          </div>

          {/* Quick Contact Actions in Mobile Drawer */}
          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href="tel:+919027844424"
              className="w-full flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-primary py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-accent">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call Front Desk (+91 90278 44424)</span>
            </a>
            <a
              href="https://wa.me/919027844424"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366]/15 text-[#128C7E] hover:bg-[#25D366]/25 py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#25D366]">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
              </svg>
              <span>WhatsApp Direct Inquiry</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
