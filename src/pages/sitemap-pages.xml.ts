export async function GET({ site }: { site?: URL }) {
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://thestoneheritage.in';

  const pages = [
    { url: '/', priority: '1.00', changefreq: 'daily' },
    { url: '/stay/', priority: '0.90', changefreq: 'weekly' },
    { url: '/experiences/', priority: '0.85', changefreq: 'weekly' },
    { url: '/our-story/', priority: '0.85', changefreq: 'monthly' },
    { url: '/contact/', priority: '0.80', changefreq: 'monthly' },
    { url: '/gallery/', priority: '0.75', changefreq: 'weekly' },
    { url: '/volunteer-work-exchange-mukteshwar/', priority: '0.80', changefreq: 'monthly' },
    { url: '/blog/', priority: '0.75', changefreq: 'daily' },
    { url: '/testimonials/', priority: '0.70', changefreq: 'monthly' },
    { url: '/privacy-policy/', priority: '0.50', changefreq: 'yearly' },
    { url: '/terms-conditions/', priority: '0.50', changefreq: 'yearly' },
    { url: '/sitemap/', priority: '0.50', changefreq: 'monthly' },
    { url: '/search/', priority: '0.60', changefreq: 'monthly' }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
