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
- **Structured Data**: `LodgingBusiness`, `BedAndBreakfast` or `Hotel`, `BreadcrumbList`, and `FAQPage`.
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
