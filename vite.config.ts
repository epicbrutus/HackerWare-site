import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/HackerWare-site/',
  plugins: [react()],
  server: {
    host: true
  }
});
