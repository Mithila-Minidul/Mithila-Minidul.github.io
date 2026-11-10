import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://MithilaMinidul.github.io',
  integrations: [react()],
});