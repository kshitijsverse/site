// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kshitijsverse.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
