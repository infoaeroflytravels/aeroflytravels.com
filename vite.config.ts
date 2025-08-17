import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { resolve } from 'path';

const copyStaticFiles = () => {
  return {
    name: 'copy-static-files',
    closeBundle() {
      copyFileSync(resolve(__dirname, 'sitemap.xml'), resolve(__dirname, 'dist/sitemap.xml'));
      copyFileSync(resolve(__dirname, 'robots.txt'), resolve(__dirname, 'dist/robots.txt'));
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
    middlewareMode: false,
    historyApiFallback: true,
    host: true, // allows access from other devices
    port: 5173, // optional, choose your port
  },
  },
);
