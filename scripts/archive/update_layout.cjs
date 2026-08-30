const fs = require('fs');

let content = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

content = content.replace(
  'export interface Props {\n  title?: string;\n}\n\nconst { title = \'Stone Heritage Mukteshwar\' } = Astro.props;',
  'export interface Props {\n  title?: string;\n  description?: string;\n}\n\nconst { \n  title = \'Stone Heritage Mukteshwar\',\n  description = \'Recognized as the best homestay in Mukteshwar, this authentic Kumaoni heritage property offers luxury family-friendly and pet-friendly stays with panoramic Himalayan views.\'\n} = Astro.props;'
);

content = content.replace(
  '<title>{title}</title>',
  '<title>{title}</title>\n    <meta name="description" content={description} />'
);

fs.writeFileSync('src/layouts/Layout.astro', content);
