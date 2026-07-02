import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Stay } from './pages/Stay';
import { Experiences } from './pages/Experiences';
import { Contact } from './pages/Contact';
import { Testimonials } from './pages/Testimonials';
import { Blog } from './pages/Blog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stay" element={<Stay />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
