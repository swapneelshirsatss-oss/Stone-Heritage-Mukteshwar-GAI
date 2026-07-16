const fs = require('fs');
const file = 'src/components/react-pages/Stay.tsx';
let content = fs.readFileSync(file, 'utf8');

const tableSectionMatch = content.match(/<section className="mb-16">\s*<h3 className="sr-only">Room Comparison<\/h3>[\s\S]*?<\/table>\s*<\/div>\s*<\/section>/);

if (tableSectionMatch) {
  const tableSection = tableSectionMatch[0];
  content = content.replace(tableSection, ''); // Remove from original position

  // Insert it before the book direct section
  const bookDirectMatch = content.match(/<section className="bg-accent text-white rounded-3xl/);
  
  if (bookDirectMatch) {
    const insertPosition = bookDirectMatch.index;
    content = content.slice(0, insertPosition) + tableSection + '\n\n        ' + content.slice(insertPosition);
    fs.writeFileSync(file, content);
    console.log("Table moved to bottom successfully!");
  } else {
    console.log("Could not find book direct section.");
  }
} else {
  console.log("Could not find table section.");
}
