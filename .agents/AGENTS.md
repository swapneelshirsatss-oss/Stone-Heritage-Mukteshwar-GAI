# Stone Heritage Mukteshwar — Workspace Cockpit & Project Rules

## 1. Property Identity & Brand Context
- **Official Brand Name**: Stone Heritage Mukteshwar - Luxury Heritage Homestay
- **Entity Type**: Luxury Heritage Mountain Homestay / Villa in Mukteshwar, Uttarakhand
- **Target Audience**: Discerning luxury travelers, family gatherings, peace seekers, high-ticket private buyouts.
- **Positioning**: Traditional Kumaoni stone-and-timber mountain architecture paired with modern boutique luxury comforts.

---

## 2. Tech Stack & Environment
- **Framework**: Astro 5.x, React 19, Tailwind CSS v4, Motion, Lucide Icons
- **Search Engine**: Pagefind (`npx pagefind --site dist`)
- **Indexing**: Custom IndexNow automated script (`scripts/indexnow.mjs`)
- **Package Manager**: npm (Node.js >= 18.0.0)
- **Commands**:
  - Dev: `npm run dev` (Port 3000)
  - Build: `npm run build` (`astro build && npx pagefind --site dist`)
  - Preview: `npm run preview`
  - IndexNow: `npm run indexnow`
- **Hosting Target**: Hostinger (FTP deployment via GitHub Actions on `main`) and Vercel.

---

## 3. SEO & Rich Snippets Standards
- **Structured Data**: `["BedAndBreakfast", "Resort", "Hotel"]` (omit generic `LodgingBusiness`), `BreadcrumbList`, `FAQPage`, `ContactPage`, and `Review`.
- **AggregateRating Invariants**: Every `AggregateRating` block must include `"ratingValue"`, `"reviewCount"`, `"bestRating": "5"`, and `"worstRating": "1"`. It must be mounted across Homepage (`/`), Room Listings (`/stay`), Landing Pages (`/mukteshwar-valley-resort`), Testimonials (`/testimonials`), Contact (`/contact`), and all Blog Articles (`/blog/[slug]` publisher entity) to ensure Google SERP golden star rich snippet eligibility.
- **Google Travel Schema Linking**: Google Travel profiles belong strictly in Schema.org `sameAs` arrays for lodging entities. Always prioritize the canonical entity URL (`https://www.google.com/travel/hotels/entity/ChkI5er19pnxwbVGGg0vZy8xMXhjeWtwNzJwEAE`). Do NOT inject external script widgets or iframes.
- **Entity Brand Aliasing**: Maintain `alternateName` arrays containing "Stone Heritage Resort", "Stone Heritage", and "Stone Heritage Homestay" across `WebSite` and root business schemas.
- **Review Veracity**: All displayed guest testimonials must reflect verbatim Google Reviews with authentic reviewer names, dates, and sub-score metrics (Rooms, Service, Location).
- **Search Directives**:
  - Trailing slash consistency as configured in `astro.config.mjs`.
  - Maintain verified IndexNow key in `public/` for real-time search engine crawling.
- **Target Keywords**:
  - `stone heritage mukteshwar`
  - `luxury heritage homestay mukteshwar`
  - `boutique villa stay mukteshwar`
  - `kumaoni stone cottage uttarakhand`

---

## 4. Asset Management Rules
- Web images must reside in `src/assets/` or `public/images/` and be optimized for Core Web Vitals (WebP/AVIF format).
- Never place 30MB+ raw photoshoot files into this repository (keep raw media in `D:\_RAW_MEDIA_VAULT\Stone_Heritage_Photos\`).

---

## 5. Active Antigravity Skills
- `cro-booking-funnel-optimizer`: High-ticket direct reservation CRO, sticky floating WhatsApp concierge.
- `schema-jsonld-generator`: Generate and validate JSON-LD structured data.
- `core-web-vitals-perf`: Ensure Astro 5 asset pipelines achieve sub-1.5s LCP.
- `anti-ai-polish-craft`: Maintain authentic, human-editorial Kumaon heritage storytelling across all descriptions.

---

## 6. Git & Deployment Guardrails
- **No Auto-Commit / No Auto-Push**: Run local test build (`npm run build`) before pushing. Only commit and push when explicitly requested by user.

---

## 7. Tracking, Analytics & Tag Manager
- **Container ID (Stone Heritage)**: `GTM-WDVGR88X` (domain: `thestoneheritage.in`)
  *(Note: Sister property "The Mukteshwar Villa" uses `GTM-PC5P9B63`)*
- **Astro Inline Requirement**: Always use `<script is:inline>` for GTM and synchronous tracking tags in `src/layouts/Layout.astro` so Astro compiler does not defer or convert them into module bundles.
- **Never Sandbag Tags in Partytown**: Never place primary analytics tags (`gtag.js`, GTM) inside `@astrojs/partytown` Web Workers. Google Tag Assistant and tag validators operate on the main window thread and will report connection or CSP failures.
- **Content Security Policy (CSP) Invariants**:
  - Both HTTP response headers (`public/.htaccess`, `vercel.json`) and the HTML `<head>` (`src/layouts/Layout.astro`) must explicitly allowlist:
    - `script-src`: `'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://tagmanager.google.com https://*.google-analytics.com https://ssl.google-analytics.com https://news.google.com https://*.google.com https://*.google.co.in https://*.gstatic.com`
    - `connect-src`: `'self' https://www.googletagmanager.com https://tagmanager.google.com https://*.google-analytics.com https://*.analytics.google.com https://*.doubleclick.net https://news.google.com https://*.google.com https://*.google.co.in`
    - `frame-ancestors`: `'self' https://tagassistant.google.com` (essential for Google Tag Assistant troubleshooting mode to avoid iframe CSP blocks).
  - The GTM container snippet must include official nonce-propagation query logic (`var n=d.querySelector('[nonce]'); n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));`).

---

## 8. Deployment Workflow (Direct Hostinger MCP)
- **Primary Live Deployment**: Use the Hostinger MCP server (`hostinger-hosting`) for zero-friction production deployments (bypasses broken GitHub Actions FTP credentials):
  1. Compile static bundle: `npm run build`
  2. Verify assets: `node scripts/verify-assets.mjs`
  3. Create root-level archive: `Compress-Archive -Path dist/* -DestinationPath dist_TIMESTAMP.zip`
  4. Deploy via `hosting_deployStaticWebsite` (domain: `thestoneheritage.in`, removeArchive: true)
  5. Flush cache via `hosting_clearWebsiteCacheV1` (domain: `thestoneheritage.in`, username: `u629155100`)
  6. Verify live HTTP response via curl.
- **GitHub Sync**: Commit and push to GitHub `main` only when explicitly requested by user.

---

## 9. Experience & Attraction Asset Synchronization
When adding or updating local attraction photos in `public/images/experiences/`, sync all 5 touchpoints:
1. `src/components/home/LocalAttractionsSection.tsx` (Homepage carousel/cards)
2. `src/data/galleryImages.ts` (Interactive gallery categories)
3. `src/pages/gallery/index.astro` (Schema.org `ImageGallery` structured data)
4. `src/content/blog/mukteshwar-ramgarh-travel-guide.md` (Pillar travel guide article)
5. Run `node scripts/verify-assets.mjs` to ensure zero broken paths.

---

## 10. Verified Property Inventory & Operational Policies (Ground Truth)

### A. Room Inventory & Bed Configurations
Always maintain exact room names and bed configurations across all page listings, comparison tables, and Schema.org data:
1. **Brass Room**: 1 King Size Bed (2–3 Guests)
2. **Copper Room**: 1 King Size Bed + Sofa cum 1 bed (2–4 Guests)
3. **Vintage Stone Room**: 1 King Size Bed (2–3 Guests)
4. **Iron Room**: 1 King Size Bed (2 Guests)
5. **Cedar Room**: 1 Queen Size Bed (2 Guests) *(Never list as King Bed)*
6. **Stonewood Family Retreat**: 2 King Size Beds (4–6 Guests, living lounge & private balcony)
7. **Stone and Story Room**: 1 King Size Bed (2–3 Guests)
8. **Himalayan Workation Room**: Workstation Setup + Mountain Views (1–2 Guests)
9. **Stone Cottage Room (Sunset Heritage Cottage)**: 1 King Size Bed (2–4 Guests)

### B. Standard Timings & Schema Invariants
- **Check-in Time**: `13:00 PM` (`13:00 hrs IST`) -> Schema: `"checkinTime": "13:00"`
- **Check-out Time**: `11:00 AM` (`11:00 hrs IST`) -> Schema: `"checkoutTime": "11:00"`

### C. Dining & Meal Amenities
- **On-Site Dining**: Fresh home-cooked Food & Breakfast is available daily.
- **Kitchen Type**: 100% Pure Vegetarian (Kumaoni specialties & North Indian comfort food cooked fresh to order).
- **Schema Amenity**: Always include `{"@type": "LocationFeatureSpecification", "name": "Fresh Food & Breakfast Available", "value": true}` in lodging schemas.

### D. Reputation & Review Ground Truth (Till-Date Baseline)
- **Google Rating**: `4.8★` (Schema `ratingValue`: `"4.8"`)
- **Review Count**: `267+` verified Google reviews (Schema `reviewCount`: `"267"`)
- **Scale Boundaries**: `bestRating`: `"5"`, `worstRating`: `"1"`
- **Google Travel Entity**: `https://www.google.com/travel/hotels/entity/ChkI5er19pnxwbVGGg0vZy8xMXhjeWtwNzJwEAE`
- **Sync Touchpoints**: When updating review metrics, simultaneously update `src/data.ts`, `src/layouts/Layout.astro`, `src/pages/blog/[slug].astro`, `src/pages/mukteshwar-valley-resort/index.astro`, `src/pages/testimonials/index.astro`, `src/pages/stay/index.astro`, `src/pages/contact/index.astro`, and AI search documents (`public/llms.txt`, `public/llms-full.txt`).

---

## 11. Spiritual & Cultural Attraction Separation Invariant
- **Mukteshwar Dham Temple** (350-year-old Shiva temple, 8.2 km, highest ridge at 7,500 ft, image: `/images/experiences/Uttarakhand-Nainital-Mukteshwar-Temple.webp`) and **Kainchi Dham Ashram** (Neem Karoli Baba ashram, 39 km, Bhowali valley, image: `/images/experiences/Kainchi_dham_mukteshwar.webp`) must **ALWAYS** remain two separate, dedicated entities in:
  1. `src/components/experiences/PlacesToVisit.tsx` (Individual cards)
  2. `src/pages/experiences/index.astro` (Schema.org `ItemListElement`)
  3. All travel guides and attraction matrices
  - **Do NOT** merge them into a single combined pilgrimage entry.

---

## 12. Blog Publishing & Asset Invariants
- **No Hero Duplicate in Markdown**: `src/pages/blog/[slug].astro` automatically mounts `post.data.image` as the top hero banner above `<Content />`. Never embed the featured cover image again at the beginning of `src/content/blog/*.md`.
- **Full Infographic Coverage**: When an article has dedicated infographics or charts in `public/images/blog/<folder>/`, audit 100% of the image files and embed all provided graphics across their matching narrative sections with descriptive alt text and context.

---

## 13. Direct Booking CRO, Global Conversion Bar & Tracking Invariants

### A. Global Sticky Conversion Bar (`StickyDirectBookingBar`)
- Must reside in `src/components/StickyDirectBookingBar.astro` and be rendered globally in `src/layouts/Layout.astro` before `</body>`.
- Specs: `z-index: 9999`, background `#602E08`, top border `2px solid #b36b39`, text `#FDFBF7`.
- Left identity/rating: "Stone Heritage Mukteshwar (4.8★)" with subtext "Save 20% Direct • ₹0 Pet Fee".
- Right primary CTA: "💬 WhatsApp Cottages" (`+91-9027844424`).
- Must dynamically inject `window.location.pathname` into WhatsApp pre-fill text so hosts know the referring page or blog article.
- Mobile Layout Safety: Always apply `padding-bottom: 70px` to `body` on viewports `< 768px` so sticky conversion UI never obscures footer links.

### B. Canonical GA4 & DataLayer Conversion Events
All interactive conversion elements must push to `window.dataLayer` and fire `window.gtag('event', ...)` using these exact 3 event names via a global event delegation listener on `document`:
1. `whatsapp_chat_click` (all `wa.me` and `whatsapp.com` links)
2. `phone_call_click` (all `tel:` links)
3. `booking_engine_click` (all `booking.thestoneheritage.in` and `/stay` links)

### C. Direct vs. OTA Comparison Table Standard (`DirectVsOtaTable`)
- Follows the Stone Heritage Mukteshwar luxury palette: Primary `#602E08`, Deep Taupe `#5c4d43`, Warm Copper `#b36b39`, Warm Cream `#FDFBF7`.
- 4 Core Invariant Rows:
  1. Cottage & Suite Tariffs (Save 20% Direct vs 18%–25% OTA commission markup)
  2. Dining & Perks (Complimentary Home-Cooked Pure-Veg Kumaoni Breakfast vs Room-only/paid add-ons)
  3. Views & Room Allocation (Priority 180° Himalayan Snow-Peak Balcony & Fireplace Access vs Standard unguaranteed allocation)
  4. Pet & Workcation Policy (100% Pet-Friendly with ₹0 Pet Fee + 150 Mbps Fiber Wi-Fi vs Hidden pet fees & rigid policies)
- Placement Guidelines:
  - `/stay`: Mount directly below the room cards grid before comparison tables.
  - SEO Pillar Pages (e.g. `/mukteshwar-valley-resort`): Mount immediately below the 45-word AEO direct answer block under the first H2.
  - Content Collection Blogs (`.md`): Inject `<div id="direct-vs-ota-table-placeholder"></div>` in markdown, and let `src/pages/blog/[slug].astro` relocate the server-rendered `<DirectVsOtaTable />` inside a `.not-prose` container into the placeholder.

### D. Layout FAQPage Schema Non-Duplication
- `src/layouts/Layout.astro` supports an optional `faqs` prop (`Array<{ question: string; answer: string }>`) rendering a dedicated `<script type="application/ld+json">` `FAQPage` block in `<head>`.
- When passing `faqs` to `<Layout>`, do NOT duplicate `FAQPage` inside page-level `schema` (`lodgingSchema["@graph"]`). Keep `lodgingSchema` focused on `["BedAndBreakfast", "Hotel", "Resort"]` and `WebPage`.
