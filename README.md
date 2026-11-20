# kshitijsverse.com

Website for **Kshitij's Verse**: learning AI in public, from zero to agents.

- Built with [Astro](https://astro.build) (static), typeface Overpass.
- Hosted on Cloudflare as an assets-only Worker (`cloudflare.config.ts`), on `kshitijsverse.com` and `www.kshitijsverse.com`.

## Edit

Links, calls and the course line all live in `src/data/site.ts`. Change them there and every page updates.

## Run and deploy

```sh
nvm use            # Node 24 (see .nvmrc)
npm install
npm run dev        # local preview
npm run deploy     # astro build + cf deploy ./dist
```
