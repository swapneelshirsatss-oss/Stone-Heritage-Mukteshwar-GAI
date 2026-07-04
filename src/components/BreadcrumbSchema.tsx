import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const routeNames: Record<string, string> = {
  '/': 'Home',
  '/stay': 'Stay & Accommodations',
  '/experiences': 'Experiences',
  '/gallery': 'Gallery',
  '/testimonials': 'Testimonials',
  '/blog': 'Blog',
  '/contact': 'Contact Us',
  '/volunteer-work-exchange-mukteshwar': 'Volunteer Programs',
  '/privacy-policy': 'Privacy Policy',
  '/terms-conditions': 'Terms & Conditions',
  '/sitemap': 'Sitemap'
};

export function BreadcrumbSchema() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  if (pathnames.length === 0) {
    return null; // Don't add breadcrumb for home page
  }

  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://thestoneheritage.in/"
    }
  ];

  let currentPath = '';
  pathnames.forEach((value, index) => {
    currentPath += `/${value}`;
    breadcrumbs.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": routeNames[currentPath] || value,
      "item": `https://thestoneheritage.in${currentPath}`
    });
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
