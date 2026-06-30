import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/90 backdrop-blur-md border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              Stone Heritage
            </span>
            <span className="text-xs tracking-widest text-secondary uppercase">
              Mukteshwar
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-primary/80 hover:text-primary font-medium transition-colors">Home</Link>
            <Link to="/rooms" className="text-primary/80 hover:text-primary font-medium transition-colors">Rooms</Link>
            <Link to="/experiences" className="text-primary/80 hover:text-primary font-medium transition-colors">Experiences</Link>
            <Link to="/contact" className="text-primary/80 hover:text-primary font-medium transition-colors">Contact</Link>
          </nav>
          
          <div className="hidden md:block">
            <a href="tel:+919027844424" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
              +91 9027844424
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
