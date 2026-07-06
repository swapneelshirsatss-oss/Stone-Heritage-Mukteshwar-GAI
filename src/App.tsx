import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Stay = React.lazy(() => import('./pages/Stay').then(module => ({ default: module.Stay })));
const Experiences = React.lazy(() => import('./pages/Experiences').then(module => ({ default: module.Experiences })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Testimonials = React.lazy(() => import('./pages/Testimonials').then(module => ({ default: module.Testimonials })));
const Blog = React.lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const Gallery = React.lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsConditions = React.lazy(() => import('./pages/TermsConditions').then(module => ({ default: module.TermsConditions })));
const Volunteer = React.lazy(() => import('./pages/Volunteer').then(module => ({ default: module.Volunteer })));
const Sitemap = React.lazy(() => import('./pages/Sitemap').then(module => ({ default: module.Sitemap })));
const DelhiMukteshwarRoadTrip = React.lazy(() => import('./pages/blog/DelhiMukteshwarRoadTrip').then(module => ({ default: module.DelhiMukteshwarRoadTrip })));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-stone-50"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="stay" element={<Stay />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/delhi-to-mukteshwar-3-day-road-trip-guide" element={<DelhiMukteshwarRoadTrip />} />
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
    </>
  );
}
