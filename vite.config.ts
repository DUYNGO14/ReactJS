import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { generateSW } from 'workbox-build';

// Cấu hình Vite
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    {
      name: 'vite-plugin-workbox',
      closeBundle: async () => {
        // T o file Service Worker
        await generateSW({
          globDirectory: 'dist',
          globPatterns: ['**/*.{html,js,css,png,jpg,svg,ico,webp}'],
          swDest: 'dist/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.destination === 'document',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'html-cache',
              },
            },
            {
              urlPattern: ({ request }) =>
                ['style', 'script', 'worker'].includes(request.destination),
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'asset-cache',
              },
            },
            {
              urlPattern: ({ request }) =>
                ['image'].includes(request.destination),
              handler: 'CacheFirst',
              options: {
                cacheName: 'image-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 30 * 24 * 60 * 60, // 30 ng y
                },
              },
            },
          ],
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  }
});

