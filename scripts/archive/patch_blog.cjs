const fs = require('fs');
const file = 'src/components/react-pages/Blog.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /const blogPosts = \[\s*\{[\s\S]*?\}\s*\];/;
content = content.replace(regex, `export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  slug: string;
}`);

content = content.replace('export function Blog() {', 'export function Blog({ posts }: { posts: BlogPost[] }) {');
content = content.replace(/blogPosts\.map\(\(post\)/g, 'posts.map((post)');

// also update the read article link to point to the actual post
content = content.replace(
  '<button className="flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors">',
  '<a href={`/blog/${post.slug}`} className="flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors">'
);
content = content.replace(
  'Read Article <ArrowRight className="w-4 h-4" />\n                    </button>',
  'Read Article <ArrowRight className="w-4 h-4" />\n                    </a>'
);
content = content.replace(
  'url={`${typeof window !== \'undefined\' ? window.location.href : \'https://thestoneheritage.in/blog\'}#post-${post.id}`}',
  'url={`https://thestoneheritage.in/blog/${post.slug}`}'
);

fs.writeFileSync(file, content);
console.log("Blog.tsx patched successfully!");
