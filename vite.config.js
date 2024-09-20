import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
  ],
  server: {
    port: process.env.PORT || 3000, // Use the PORT environment variable provided by Render
    host: '0.0.0.0', // Listen on all interfaces to allow external access
  },
});
