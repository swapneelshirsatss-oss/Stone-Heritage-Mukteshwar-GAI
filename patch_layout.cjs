const fs = require('fs');
const file = 'src/layouts/Layout.astro';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import { ViewTransitions }')) {
  content = content.replace(
    '---',
    `---\nimport { ViewTransitions } from 'astro:transitions';`
  );
  content = content.replace(
    '</head>',
    `  <ViewTransitions />\n  </head>`
  );
  fs.writeFileSync(file, content);
  console.log("Layout patched with ViewTransitions");
}
