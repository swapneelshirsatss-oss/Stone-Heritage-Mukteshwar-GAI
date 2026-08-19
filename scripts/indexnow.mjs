const HOST = 'thestoneheritage.in';
const KEY = 'a3f890b21c4e76d589e0214f5678ab9c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// List of updated or new URLs to submit to Bing & IndexNow search engines
const urlsToSubmit = [
  `https://${HOST}/blog/workation-in-mukteshwar/`,
  `https://${HOST}/blog/best-places-to-stay-in-mukteshwar/`,
  `https://${HOST}/blog/mukteshwar-ramgarh-travel-guide/`,
  `https://${HOST}/blog/`,
  `https://${HOST}/sitemap.xml`,
  `https://${HOST}/sitemap-blog.xml`
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
