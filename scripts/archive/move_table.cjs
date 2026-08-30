const fs = require('fs');
const file = 'src/components/react-pages/Stay.tsx';
let content = fs.readFileSync(file, 'utf8');

const tableSectionMatch = content.match(/<section className="mb-16">\s*<h3 className="sr-only">Room Comparison<\/h3>[\s\S]*?<\/table>\s*<\/div>\s*<\/section>/);

if (tableSectionMatch) {
  const tableSection = tableSectionMatch[0];
  content = content.replace(tableSection, ''); // Remove from original position

  // Insert it after the room cards section (which ends before the Experience section)
  // Let's find the end of the cards section.
  const cardsEndMatch = content.match(/<\/article>\s*\)\)}\s*<\/section>/);
  
  if (cardsEndMatch) {
    const insertPosition = cardsEndMatch.index + cardsEndMatch[0].length;
    content = content.slice(0, insertPosition) + '\n\n        ' + tableSection + content.slice(insertPosition);
    fs.writeFileSync(file, content);
    console.log("Table moved successfully!");
  } else {
    console.log("Could not find cards end position.");
  }
} else {
  console.log("Could not find table section.");
}
