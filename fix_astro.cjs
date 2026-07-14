const fs = require('fs');

const pages = [
  { name: 'stay', component: 'Stay' },
  { name: 'experiences', component: 'Experiences' },
  { name: 'blog', component: 'Blog' },
  { name: 'gallery', component: 'Gallery' },
  { name: 'contact', component: 'Contact' },
  { name: 'testimonials', component: 'Testimonials' },
  { name: 'privacy-policy', component: 'PrivacyPolicy' },
  { name: 'terms-conditions', component: 'TermsConditions' },
  { name: 'volunteer-work-exchange-mukteshwar', component: 'Volunteer' },
  { name: 'sitemap', component: 'Sitemap' }
];

pages.forEach(page => {
  const content = [
    '---',
    'import Layout from "../../layouts/Layout.astro";',
    `import { ${page.component} } from "../../components/react-pages/${page.component}";`,
    '---',
    '',
    '<Layout title="Stone Heritage">',
    `  <${page.component} client:load />`,
    '</Layout>'
  ].join('\n');
  const filePath = `src/pages/${page.name}/index.astro`;
  fs.writeFileSync(filePath, content);
});

const homeContent = [
    '---',
    'import Layout from "../layouts/Layout.astro";',
    'import { Home } from "../components/react-pages/Home";',
    '---',
    '',
    '<Layout title="Stone Heritage">',
    '  <Home client:load />',
    '</Layout>'
].join('\n');
fs.writeFileSync('src/pages/index.astro', homeContent);

