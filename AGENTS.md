# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

This is a static marketing website for "Lyttle Smart Homes" built with:
- **React 19** + **TanStack Start** (SSR) + **TanStack Router**
- **Vite 7** as the build tool
- **Tailwind CSS v4** + shadcn/ui (New York style)
- **Cloudflare Workers** as the deployment target

There is no backend, database, or authentication. The contact form is client-side only (no real submission endpoint).

### Running the dev server

```bash
npm run dev
```

Starts on `http://localhost:8080/` with HMR.

### Linting & formatting

```bash
npm run lint      # ESLint (includes prettier plugin)
npm run format    # Prettier auto-fix
```

Note: The codebase has pre-existing prettier formatting violations. These are not caused by agent changes.

### Building

```bash
npm run build     # Production build (Cloudflare Workers output in dist/)
npm run preview   # Preview production build locally
```

### Key caveats

- The `vite.config.ts` uses `@lovable.dev/vite-tanstack-config` which bundles many plugins (TanStack Start, React, Tailwind, Cloudflare, etc.). Do NOT add duplicate plugins manually.
- The dev server binds to port 8080 (configured by the Lovable preset with `strictPort`).
- Both `package-lock.json` (npm) and `bun.lockb` (Bun) exist. Use **npm** as the primary package manager since `package-lock.json` is the canonical lockfile.
