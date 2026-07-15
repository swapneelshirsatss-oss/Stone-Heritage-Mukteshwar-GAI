const fs = require('fs');

let content = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

const target1 = `export interface Props {
  title?: string;
}`;

const replace1 = `export interface Props {
  title?: string;
  description?: string;
}`;

const target2 = `const { title = 'Stone Heritage Mukteshwar' } = Astro.props;`;

const replace2 = `const { 
  title = 'Stone Heritage Mukteshwar',
  description = 'Recognized as the best homestay in Mukteshwar, this authentic Kumaoni heritage property offers luxury family-friendly and pet-friendly stays with panoramic Himalayan views.' 
} = Astro.props;`;

const target3 = `<title>{title}</title>`;

const replace3 = `<title>{title}</title>\n    <meta name="description" content={description} />`;

content = content.replace(target1, replace1);
content = content.replace(target2, replace2);
content = content.replace(target3, replace3);

fs.writeFileSync('src/layouts/Layout.astro', content);
