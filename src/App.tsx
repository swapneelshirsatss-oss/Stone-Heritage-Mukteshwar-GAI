import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Stay } from './pages/Stay';
import { Experiences } from './pages/Experiences';
import { Contact } from './pages/Contact';
import { Testimonials } from './pages/Testimonials';
import { Blog } from './pages/Blog';
import { Gallery } from './pages/Gallery';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { Volunteer } from './pages/Volunteer';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stay" element={<Stay />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="blog" element={<Blog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="volunteer-work-exchange-mukteshwar" element={<Volunteer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
