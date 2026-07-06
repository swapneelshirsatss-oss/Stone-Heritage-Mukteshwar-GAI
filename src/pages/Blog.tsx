import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { ShareButtons } from '../components/ShareButtons';
import { OptimizedImage } from '../components/OptimizedImage';

const blogPosts = [
  {
    id: 5,
    slug: 'delhi-to-mukteshwar-3-day-road-trip-guide',
    title: 'Escaping Delhi: The Perfect 3-Day Road Trip Guide to Mukteshwar',
    excerpt: 'Planning a weekend getaway? Discover the ultimate 3-day road trip guide from Delhi to Mukteshwar. Experience the quiet side of the mountains in a beautiful Vintage style Homestay.',
    date: 'July 6, 2026',
    author: 'Swapneel',
    category: 'Road Trip',
    image: '/best-family-homestay-in-mukteshwar.webp',
    readTime: '6 min read'
  },
  {
    id: 1,
    title: 'Top 5 Things to Do in Mukteshwar This Winter',
    excerpt: 'Discover the magic of winter in Mukteshwar. From snow-capped Himalayan views to cozy bonfires and hot Kumaoni delicacies, here is how to make the most of your winter getaway at Stone Heritage.',
    date: 'October 15, 2023',
    author: 'Harsh & Priyanka',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1543372993-9c87d4669cb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  },
  {
    id: 2,
    title: 'Why Stone Heritage is the Best Pet-Friendly Homestay in Mukteshwar',
    excerpt: 'Traveling with pets can be tricky, but not when you visit the South Gola Range. Learn why our wide open spaces, pet-friendly rooms, and welcoming environment make us the ideal choice for your furry friends.',
    date: 'November 2, 2023',
    author: 'Stone Heritage Team',
    category: 'Accommodation',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read'
  },
  {
    id: 3,
    title: 'The Ultimate Delhi to Mukteshwar Road Trip Itinerary',
    excerpt: 'Planning a weekend getaway from Delhi to Mukteshwar? We have mapped out the best driving routes, scenic pit stops, and travel tips to ensure a smooth and memorable 8-hour journey to the mountains.',
    date: 'November 18, 2023',
    author: 'Harsh & Priyanka',
    category: 'Road Trip',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'A Guide to Himalayan Bird Watching at South Gola Range',
    excerpt: 'Mukteshwar is a paradise for bird watchers. Explore the diverse avian life you can spot right from your balcony or during a short nature walk around our vintage stone cottage.',
    date: 'December 5, 2023',
    author: 'Stone Heritage Team',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1552728089-57168ab18da2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  }
];

export function Blog() {
  return (
    <>
      <Helmet>
        <title>Stone Heritage Blog | Discover Mukteshwar & Travel Guides</title>
        <meta name="description" content={`Read our ${blogPosts.length} latest articles and travel guides for travel tips, local insights, and guides on the best things to do during your stay at our stone cottage in Mukteshwar.`} />
        <link rel="canonical" href="https://thestoneheritage.in/blog" />
      </Helmet>
      
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Journal</span>
          <h1 className="text-4xl font-bold mb-4 text-primary">Discover Mukteshwar</h1>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Travel stories, local insights, and expert guides to help you make the most of your stay at Stone Heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
              <div className="aspect-[16/9] overflow-hidden relative">
                <OptimizedImage 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary rounded-full">
                  {post.category}
                </div>
              </div>
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
                
                {post.slug ? (
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-primary mb-3 leading-tight hover:text-accent transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                  </Link>
                ) : (
                  <h2 className="text-2xl font-bold text-primary mb-3 leading-tight hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                )}
                
                <p className="text-primary/70 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-stone-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary/50">{post.readTime}</span>
                    {post.slug ? (
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button className="flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <ShareButtons url={post.slug ? `https://thestoneheritage.in/blog/${post.slug}` : `${typeof window !== 'undefined' ? window.location.href : 'https://thestoneheritage.in/blog'}#post-${post.id}`} title={post.title} />
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
