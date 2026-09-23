---
name: content-blog-writing
description: Guidelines and rules for writing SEO-optimized travel blogs, luxury boutique homestay articles, and local tourist guides for Stone Heritage Mukteshwar.
---

# Travel Blog & Content Writing Strategy

This skill provides rules, content guidelines, tone of voice, and SEO requirements for drafting blog posts, travel guides, and website content for **Stone Heritage Mukteshwar**.

## 1. Brand Tone & Persona
- **Tone**: Warm, serene, luxury-yet-rustic, evocative, and authentic to Kumaon culture.
- **Audience**: Families, luxury travelers, workationers, nature lovers, and couples seeking peace in Mukteshwar.
- **Key Themes**: Panoramic Himalayan views, heritage stone architecture, organic farm-to-table food, starry skies, local Kumaoni hospitality.

## 2. SEO & Keyword Placement Rules
- **Primary Keyword**: Include in the H1 title, first 100 words, meta title, meta description, and at least one H2 heading.
- **Secondary / LSI Keywords**: Distribute naturally throughout subheadings and body text.
- **Keyword Density**: Maintain a 1% – 1.5% natural density (avoid keyword stuffing).
- **Internal Links**: Every blog post MUST link to at least 2 relevant internal pages (e.g., `/stay/`, `/our-story/`, `/experiences/`).
- **Call to Action (CTA)**: Conclude every post with an engaging CTA driving direct website bookings or WhatsApp inquiries.

## 3. Article Structure Template
- **Title (H1)**: Engaging title incorporating location ("Mukteshwar") and benefit.
- **Hero Image Invariant**: NEVER re-insert the featured cover image (`post.data.image`) at the top of the markdown body. The Astro layout `[slug].astro` already displays it as the top hero banner above `<Content />`. Placing it again inside the markdown creates an amateur duplicate image bug.
- **Introduction**: Hook the reader with atmospheric imagery of the mountains + introduce topic.
- **H2 Sections**: 3–5 structured sections covering key takeaways, travel tips, or itineraries.
- **Visual Callouts**: Include image recommendations with descriptive alt text (`alt="Heritage stone cottage balcony overlooking Nanda Devi snow peaks in Mukteshwar"`).
- **Conclusion & CTA**: Highlight direct booking perks (best rate guarantee, personalized Kumaoni hospitality).

## 4. Metadata Checklist
When generating blog content files:
- `title`: Under 60 characters including primary keyword.
- `metaDescription`: 140–155 characters with compelling CTA.
- `ogImage`: Path to high-res image (1200x630).
- `canonicalUrl`: Standardized direct URL (`https://thestoneheritage.in/blog/...`).

## 5. Author Rules & Author Metadata
- **Default Single Author**: Always use **`Akash`** as the author name for single-author blog posts (e.g., `author: 'Akash'`).
- **Forbidden Names/Surnames**: Do NOT use surnames like `Bisht` or incorrect names like `Kuldeep` for single-author blog posts.
- **Co-Authors**: Use `Akash, Harsh & Priyanka` or `Akash & Stone Heritage Team` when specifying co-authors.

## Continuous Learnings
- **Author Naming**: The single author for blog posts (including the workation guide) MUST always be `Akash` (not `Kuldeep` or `Akash Bisht`).
- **Zero Duplicate Hero Images**: Do not add `![...](post.data.image)` at the top of the markdown file; doing so renders two identical images consecutively on the live page.
- **Complete Infographic Embedding**: When the user provides a folder of infographics or charts (`public/images/blog/<folder>/`), audit 100% of the image assets and embed every single infographic across its matching contextual section with descriptive alt text and captions.


