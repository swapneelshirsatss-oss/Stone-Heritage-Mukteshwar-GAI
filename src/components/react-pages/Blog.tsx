import React from 'react';


import { Calendar, User, ArrowRight } from 'lucide-react';
import { ShareButtons } from '../../components/ShareButtons';
import { OptimizedImage } from '../../components/OptimizedImage';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  slug: string;
}

export function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      
      
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Journal</span>
          <h1 className="text-4xl font-bold mb-4 text-primary">Discover Mukteshwar</h1>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Travel stories, local insights, and expert guides to help you make the most of your stay at Stone Heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
              <a href={`/blog/${post.slug}/`} className="aspect-[16/9] overflow-hidden relative block">
                <OptimizedImage 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary rounded-full">
                  {post.category}
                </div>
              </a>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-primary/60 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <a href={`/blog/${post.slug}/`}><h2 className="text-2xl font-bold text-primary mb-3 leading-tight hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </h2></a>
                
                <p className="text-primary/70 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-stone-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary/50">{post.readTime}</span>
                    <a href={`/blog/${post.slug}/`} className="flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  <ShareButtons url={`https://thestoneheritage.in/blog/${post.slug}`} title={post.title} />
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter / CTA Section */}
        <div className="mt-20 bg-stone-100 rounded-3xl p-10 md:p-16 text-center border border-stone-200">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Get the latest stories directly to your inbox.</h3>
          <p className="text-primary/70 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive travel tips, seasonal offers, and updates from Stone Heritage Mukteshwar.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            />
            <button 
              type="submit" 
              className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
