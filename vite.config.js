import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
  plugins: [
    svelte({ preprocess: sveltePreprocess() }),
  ],
  server: {
    open: '/public/index.html',
  },
  build: {
    sourcemap: true,
    lib: {
      entry: './src/main.ts',
      name: 'Annotorious'
    }
  }
})