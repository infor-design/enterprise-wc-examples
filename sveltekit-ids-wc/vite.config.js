import { defineConfig } from 'vite'; 
import { sveltekit } from '@sveltejs/kit/vite';

const config = defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 3000
  }
});

export default config;