import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import UnoCSS from '@unocss/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tomolatoon.net',
  output: 'static',
  integrations: [UnoCSS({ injectReset: true }), vue(), sitemap()],
});
