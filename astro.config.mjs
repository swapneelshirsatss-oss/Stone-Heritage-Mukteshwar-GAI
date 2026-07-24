import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://thestoneheritage.in',
  output: 'static',
  integrations: [react(), partytown({ config: { forward: ['dataLayer.push'] } })],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['react']
    }
  },
  prefetch: {
    prefetchAll: true
  }
});
