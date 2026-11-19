import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://mithila-minidul.github.io',
  integrations: [react()],
});