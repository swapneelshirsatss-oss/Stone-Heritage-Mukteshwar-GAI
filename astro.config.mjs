import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://thestoneheritage.in',
  trailingSlash: 'always',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js']
      }
    },
    ssr: {
      external: ['react']
    }
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  }
});
