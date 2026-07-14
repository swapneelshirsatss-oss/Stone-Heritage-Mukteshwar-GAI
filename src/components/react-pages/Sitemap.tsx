import React from 'react';



export function Sitemap() {
  const pages = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Stay & Accommodations", path: "/stay/" },
        { name: "Experiences", path: "/experiences/" },
        { name: "Gallery", path: "/gallery/" },
        { name: "Testimonials", path: "/testimonials/" },
        { name: "Blog", path: "/blog/" },
        { name: "Contact Us", path: "/contact/" }
      ]
    },
    {
      category: "Special Programs",
      links: [
        { name: "Uttarakhand Volunteer Programs & Homestay Work", path: "/volunteer-work-exchange-mukteshwar/" }
      ]
    },
    {
      category: "Legal & Policies",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy/" },
        { name: "Terms and Conditions", path: "/terms-conditions/" }
      ]
    }
  ];

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      
      
      <div className="py-24 px-4 max-w-4xl mx-auto bg-white shadow-sm border border-stone-200 p-8 md:p-12 my-8">
        <h1 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-primary tracking-tight text-center">Sitemap</h1>
        <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-12"></div>
        
        <div className="text-primary/80 font-light leading-relaxed space-y-12">
          {pages.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-serif font-medium text-primary mb-4 pb-2 border-b border-stone-200">
                {section.category}
              </h2>
              <ul className="list-disc pl-5 space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a to={link.path} className="hover:text-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
