# Netlify Deployment Guide (Lovable + TanStack Start)

Use this checklist for future projects to avoid 404s and SSR routing issues on Netlify.

## 1) Install Netlify TanStack plugin

```bash
npm install -D @netlify/vite-plugin-tanstack-start
```

## 2) Update `vite.config.ts`

Use the Netlify plugin and disable Cloudflare plugin wiring from the Lovable preset:

```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  cloudflare: false,
  plugins: [netlify()],
});
```

## 3) Add `netlify.toml`

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
```

Netlify usually auto-detects publish/function paths with the plugin.

## 4) Build locally before pushing

```bash
npm run build
```

Confirm build succeeds and Netlify output is generated:

- `.netlify/v1/functions/server.mjs`

## 5) Netlify dashboard settings

- Build command: `npm run build`
- Publish directory:
  - Prefer empty/auto-detect when framework detection works
  - If required manually, use `dist/client`

## 6) Important: Do NOT use SPA redirects for TanStack Start SSR

For TanStack Start SSR deployments, do **not** use:

- `public/_redirects` with `/* /index.html 200`
- `[[redirects]]` to `/index.html` in `netlify.toml`

Those are SPA-only patterns and can break SSR route handling.

## 7) Optional `.gitignore` update

Ignore local Netlify build artifacts:

```gitignore
.netlify
```

## Troubleshooting

### Still seeing 404 on refresh/deep links

- Verify `vite.config.ts` includes `netlify()` plugin
- Ensure `cloudflare: false` is set in `defineConfig(...)`
- Re-run `npm run build` and confirm `.netlify/v1/functions/server.mjs` exists
- In Netlify deploy logs, verify framework/plugin detection happened
- Ensure project is using TanStack Start SSR, not a pure SPA setup

### Build succeeds locally but fails on Netlify

- Confirm Node version in Netlify matches project expectations
- Clear cache and redeploy from Netlify dashboard
- Confirm `package-lock.json` is committed when using npm

---

If the project is a **pure Vite SPA** (not TanStack Start SSR), then use SPA fallback:

`public/_redirects`

```txt
/* /index.html 200
```
