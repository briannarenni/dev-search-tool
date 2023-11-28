import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
// !RENAME PATHS
export default defineConfig({
  plugins: [svelte()],
  server: {
    open: true
  },
  base: '/dev-search-tool/',
  resolve: {
    alias: {
      '@': './',
      '@src': './src',
      '@lib': './src/lib',
      '@scripts': './src/scripts',
      '@styles': './src/styles',
      '@components': './src/lib/components',
    },
  },
});
