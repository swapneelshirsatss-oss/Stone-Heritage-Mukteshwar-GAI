import { getCollection } from 'astro:content';

export async function GET({ site }: { site?: URL }) {
  const posts = await getCollection('blog');
  
  // Fallback to the live domain if the 'site' variable isn't passed during build
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://thestoneheritage.in';

  const highPrioritySlugs: Record<string, { priority: string; changefreq: string }> = {
    'diwali-vacation-in-mukteshwar': { priority: '0.90', changefreq: 'weekly' },
    'homestay-near-mukteshwar-uttarakhand': { priority: '0.90', changefreq: 'weekly' },
    'pet-friendly-homestay-in-mukteshwar': { priority: '0.85', changefreq: 'weekly' },
    'mukteshwar-ramgarh-travel-guide': { priority: '0.85', changefreq: 'weekly' },
    'best-homestay-in-mukteshwar-for-families': { priority: '0.85', changefreq: 'weekly' }
  };

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts.map(post => {
  const cfg = highPrioritySlugs[post.slug] || { priority: '0.80', changefreq: 'monthly' };
  return `  <url>
    <loc>${baseUrl}/blog/${post.slug}/</loc>
    <lastmod>${new Date(post.data.date).toISOString()}</lastmod>
    <changefreq>${cfg.changefreq}</changefreq>
    <priority>${cfg.priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
