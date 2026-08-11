import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { OptimizedImage } from '../OptimizedImage';

export interface BlogPostItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

interface BlogCarouselSectionProps {
  posts: BlogPostItem[];
}

export function BlogCarouselSection({ posts }: BlogCarouselSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-stone-50 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 block flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" /> From Our Journal
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-primary tracking-tight">
            Mukteshwar Travel Guides & Stories
          </h2>
          <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
            Insider travel tips, scenic road trip routes from Delhi NCR, Himalayan birding, and heritage homestay experiences.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-1 sm:px-4">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-6 pt-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="flex-none w-[88%] sm:w-[46%] lg:w-[31%] snap-start rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-stone-200/80 transition-all duration-300 flex flex-col group/card"
              >
                {/* Thumbnail Image */}
                <a href={`/blog/${post.slug}/`} className="block relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/60 backdrop-blur-md text-stone-100 text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full border border-white/10 z-10">
                    {post.category}
                  </div>
                </a>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-xs text-stone-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-semibold text-lg md:text-xl text-primary group-hover/card:text-accent transition-colors line-clamp-2 mb-3 leading-snug">
                      <a href={`/blog/${post.slug}/`}>
                        {post.title}
                      </a>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-stone-600 text-sm font-light line-clamp-3 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer link */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                    <span className="text-xs text-stone-500 font-medium">By {post.author}</span>
                    <a
                      href={`/blog/${post.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors uppercase tracking-wider"
                    >
                      Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/card:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Arrow Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md border border-stone-200 text-primary hover:bg-stone-50 hover:text-accent transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent z-10"
            aria-label="Scroll left blog posts"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md border border-stone-200 text-primary hover:bg-stone-50 hover:text-accent transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent z-10"
            aria-label="Scroll right blog posts"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="/blog/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-stone-50 font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <span>Explore All Travel Guides & Blog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
