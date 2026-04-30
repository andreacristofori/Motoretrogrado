import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
