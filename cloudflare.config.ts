import { defineConfig } from "cf/config";

// Static site: Astro builds to ./dist, deployed as an assets-only Worker.
// Deploy: npm run deploy  (builds, then `cf deploy ./dist`)
export default defineConfig({
  worker: {
    name: "kshitijsverse-site",
    compatibilityDate: "2026-11-01",
    domains: ["kshitijsverse.com", "www.kshitijsverse.com"],
    assets: {
      htmlHandling: "auto-trailing-slash",
      notFoundHandling: "404-page",
    },
  },
});
