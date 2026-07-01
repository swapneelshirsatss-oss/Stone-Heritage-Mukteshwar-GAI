import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BookingWidget } from './BookingWidget';
import { FloatingWhatsAppButton } from './FloatingWhatsAppButton';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <BookingWidget />
    </div>
  );
}
