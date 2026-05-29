import { fileURLToPath, URL } from 'node:url';
import sitemap from 'vite-plugin-sitemap';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    sitemap({
      hostname: 'https://www.inhort.com.ua',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
