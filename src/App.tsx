import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';

const Stay = lazy(() => import('./pages/Stay').then(module => ({ default: module.Stay })));
const Experiences = lazy(() => import('./pages/Experiences').then(module => ({ default: module.Experiences })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Testimonials = lazy(() => import('./pages/Testimonials').then(module => ({ default: module.Testimonials })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const Gallery = lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsConditions = lazy(() => import('./pages/TermsConditions').then(module => ({ default: module.TermsConditions })));
const Volunteer = lazy(() => import('./pages/Volunteer').then(module => ({ default: module.Volunteer })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.Sitemap })));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="flex h-screen w-full items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
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
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
