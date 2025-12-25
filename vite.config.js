import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about/index.html'),
        research: resolve(__dirname, 'src/research/index.html'),
        data: resolve(__dirname, 'src/data/index.html'),
        resources: resolve(__dirname, 'src/resources/index.html'),
        contact: resolve(__dirname, 'src/contact/index.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
