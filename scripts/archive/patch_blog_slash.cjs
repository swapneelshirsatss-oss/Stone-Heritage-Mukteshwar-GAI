const fs = require('fs');
const file = 'src/components/react-pages/Blog.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace `/blog/${post.slug}` with `/blog/${post.slug}/`
content = content.replace(/href=\{`\/blog\/\$\{post\.slug\}`\}/g, 'href={`/blog/${post.slug}/`}');

fs.writeFileSync(file, content);
console.log("Blog.tsx patched with trailing slashes");
