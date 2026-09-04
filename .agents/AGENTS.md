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

---

## 11. Spiritual & Cultural Attraction Separation Invariant
- **Mukteshwar Dham Temple** (350-year-old Shiva temple, 8.2 km, highest ridge at 7,500 ft, image: `/images/experiences/Uttarakhand-Nainital-Mukteshwar-Temple.webp`) and **Kainchi Dham Ashram** (Neem Karoli Baba ashram, 39 km, Bhowali valley, image: `/images/experiences/Kainchi_dham_mukteshwar.webp`) must **ALWAYS** remain two separate, dedicated entities in:
  1. `src/components/experiences/PlacesToVisit.tsx` (Individual cards)
  2. `src/pages/experiences/index.astro` (Schema.org `ItemListElement`)
  3. All travel guides and attraction matrices
  - **Do NOT** merge them into a single combined pilgrimage entry.


