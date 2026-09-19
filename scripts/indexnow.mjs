/**
 * Fast-Indexing Dual-Endpoint IndexNow Submission Script
 * Automatically submits all 24 canonical URLs to api.indexnow.org and bing.com/indexnow
 */

const HOST = 'thestoneheritage.in';
const KEY = '593c87e7da264df4a721010fb72224ed';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Comprehensive list of all 24 production URLs across Stone Heritage Mukteshwar
const urlsToSubmit = [
  `https://${HOST}/`,
  `https://${HOST}/mukteshwar-valley-resort/`,
  `https://${HOST}/stay/`,
  `https://${HOST}/experiences/`,
  `https://${HOST}/our-story/`,
  `https://${HOST}/contact/`,
  `https://${HOST}/gallery/`,
  `https://${HOST}/volunteer-work-exchange-mukteshwar/`,
  `https://${HOST}/blog/`,
  `https://${HOST}/testimonials/`,
  `https://${HOST}/privacy-policy/`,
  `https://${HOST}/terms-conditions/`,
  `https://${HOST}/sitemap/`,
  `https://${HOST}/search/`,
  `https://${HOST}/sitemap.xml`,
  `https://${HOST}/sitemap-pages.xml`,
  `https://${HOST}/sitemap-blog.xml`,
  `https://${HOST}/blog/best-homestay-in-mukteshwar-for-families/`,
  `https://${HOST}/blog/best-places-to-stay-in-mukteshwar/`,
  `https://${HOST}/blog/delhi-to-mukteshwar-road-trip/`,
  `https://${HOST}/blog/himalayan-bird-watching/`,
  `https://${HOST}/blog/homestay-in-mukteshwar/`,
  `https://${HOST}/blog/mukteshwar-ramgarh-travel-guide/`,
  `https://${HOST}/blog/pet-friendly-homestay/`,
  `https://${HOST}/blog/top-5-things-to-do-in-mukteshwar/`,
  `https://${HOST}/blog/workation-in-mukteshwar/`
];

const ENDPOINTS = [
  { name: 'IndexNow Gateway', url: 'https://api.indexnow.org/indexnow' },
  { name: 'Bing Webmaster Direct', url: 'https://www.bing.com/indexnow' }
];

async function submitEndpoint(endpoint, payload) {
  try {
    const response = await fetch(endpoint.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✅ [${endpoint.name}] Successfully submitted ${urlsToSubmit.length} URLs (Status: ${response.status})`);
    } else {
      console.log(`ℹ️ [${endpoint.name}] Response: ${response.status} ${response.statusText}`);
      const text = await response.text();
      if (text) console.log(`   Details: ${text}`);
    }
  } catch (err) {
    console.error(`❌ [${endpoint.name}] Error:`, err.message);
  }
}

async function submitAll() {
  console.log(`🚀 Dispatching IndexNow crawl pings for ${urlsToSubmit.length} URLs on ${HOST}...`);
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlsToSubmit
  };

  await Promise.allSettled(ENDPOINTS.map(ep => submitEndpoint(ep, payload)));
  console.log('✨ Dual-endpoint IndexNow dispatch completed.');
}

submitAll();
