import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { resolve } from 'path';

const copyStaticFiles = () => {
  return {
    name: 'copy-static-files',
    closeBundle() {
      try {
        copyFileSync(resolve(__dirname, 'sitemap.xml'), resolve(__dirname, 'dist/sitemap.xml'));
        copyFileSync(resolve(__dirname, 'robots.txt'), resolve(__dirname, 'dist/robots.txt'));
      } catch (err) {
        console.warn("⚠️ Skipping static files copy (not found)", err.message);
      }
    }
  };
};

export default defineConfig({
  base: "/nppm/",
  plugins: [react(), copyStaticFiles()],
  build: {
    outDir: "dist",
  },
  server: {
    host: true, // expose to LAN
    port: 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '192.168.1.34',      // your LAN device
      '.ngrok-free.app',   // allow any ngrok tunnel
    ]
  }
});
