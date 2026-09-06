const HOST = 'thestoneheritage.in';
const KEY = '593c87e7da264df4a721010fb72224ed';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Comprehensive list of all site URLs to submit to Bing & IndexNow search engines
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

async function submitIndexNow() {
  console.log('Sending IndexNow ping to Bing & search engines...');
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlsToSubmit
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✅ IndexNow successfully submitted ${urlsToSubmit.length} URLs to Bing! Status: ${response.status}`);
    } else {
      console.log(`ℹ️ IndexNow ping sent. Response status: ${response.status} ${response.statusText}`);
      const text = await response.text();
      if (text) console.log(text);
    }
  } catch (error) {
    console.error('❌ IndexNow submission error:', error);
  }
}

submitIndexNow();
