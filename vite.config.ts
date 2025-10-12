import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import path, { resolve } from 'path';

// Plugin to copy static files like sitemap and robots
const copyStaticFiles = () => {
  return {
    name: 'copy-static-files',
    closeBundle() {
      try {
        copyFileSync(resolve(__dirname, 'sitemap.xml'), resolve(__dirname, 'dist/sitemap.xml'));
        copyFileSync(resolve(__dirname, 'robots.txt'), resolve(__dirname, 'dist/robots.txt'));
      } catch (err: any) {
        console.warn("⚠️ Skipping static files copy (not found)", err.message);
      }
    }
  };
};

export default defineConfig({
  base: "/nppm/", // 👈 important for deployment path on Render
  plugins: [react(), copyStaticFiles()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "$": path.resolve(__dirname, "./src/assets/visa"), // 👈 use $ for assets imports
    },
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1000, // 👈 suppress >500KB warnings
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('react-router-dom')) return 'router-vendor';
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    host: true, // expose to LAN for testing
    port: 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '192.168.1.34',      // your LAN device
      '.ngrok-free.app',   // allow any ngrok tunnel
    ]
  }
});
