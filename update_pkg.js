const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.scripts = {
  "dev": "astro dev --port 3000 --host 0.0.0.0",
  "build": "astro build && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --outfile=dist/server.cjs",
  "start": "node dist/server.cjs",
  "preview": "astro preview --port 3000 --host 0.0.0.0"
};

pkg.dependencies["astro"] = "^5.4.0";
pkg.dependencies["@astrojs/react"] = "^4.2.0";
delete pkg.dependencies["@vitejs/plugin-react"];
delete pkg.dependencies["prerender-node"];
delete pkg.dependencies["react-router-dom"];
delete pkg.dependencies["react-helmet-async"];

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
