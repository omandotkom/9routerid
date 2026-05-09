// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://9router.id',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
