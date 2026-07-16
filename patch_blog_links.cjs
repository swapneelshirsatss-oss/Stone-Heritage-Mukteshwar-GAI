const fs = require('fs');
const file = 'src/components/react-pages/Blog.tsx';
let content = fs.readFileSync(file, 'utf8');

// Make the image clickable
content = content.replace(
  '<div className="aspect-[16/9] overflow-hidden relative">',
  '<a href={`/blog/${post.slug}`} className="aspect-[16/9] overflow-hidden relative block">'
);
content = content.replace(
  '</div>\n              <div className="p-8 flex flex-col flex-grow">',
  '</a>\n              <div className="p-8 flex flex-col flex-grow">'
);

// Make the title clickable
content = content.replace(
  '<h2 className="text-2xl font-bold text-primary mb-3 leading-tight hover:text-accent transition-colors cursor-pointer">\n                  {post.title}\n                </h2>',
  '<a href={`/blog/${post.slug}`}><h2 className="text-2xl font-bold text-primary mb-3 leading-tight hover:text-accent transition-colors cursor-pointer">\n                  {post.title}\n                </h2></a>'
);

fs.writeFileSync(file, content);
console.log("Blog.tsx patched successfully with links!");
