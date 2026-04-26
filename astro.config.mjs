// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://PolinaBalanyeva.github.io',
  base: '/Polya-Website',
  vite: {
    plugins: [tailwindcss()]
  }
});