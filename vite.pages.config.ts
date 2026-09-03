import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { defineConfig } from 'vite';
import Home from './app/page';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'prerender-homepage',
      transformIndexHtml(html) {
        const page = renderToString(createElement(Home));
        return html.replace('<div id="root"></div>', `<div id="root">${page}</div>`);
      },
    },
  ],
  resolve: {
    alias: {
      '@': projectRoot,
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: 'pages-dist',
    emptyOutDir: true,
  },
});
