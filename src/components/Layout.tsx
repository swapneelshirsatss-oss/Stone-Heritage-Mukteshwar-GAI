import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsAppButton } from './FloatingWhatsAppButton';
import { BreadcrumbSchema } from './BreadcrumbSchema';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <BreadcrumbSchema />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
