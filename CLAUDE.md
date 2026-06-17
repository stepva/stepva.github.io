# CLAUDE.md

Štěpán Vácha's personal website — [stepva.github.io](https://stepva.github.io). A small
Next.js + Tailwind site (about, races, blog, projects, coffee, CV) deployed as a static
export to GitHub Pages.

## Commands

```bash
npm run dev      # local dev server at http://localhost:3000
npm run build    # production build (also type-checks + lints)
npm run export   # static export to ./out  (build then export, as the deploy does)
npm run lint     # next lint
```

There are no tests. `npm run build` is the closest thing to a CI check — it runs type
checking and linting. Note: `build`/`export` **require Contentful env vars** (see below)
or they fail while collecting data for `/blog` and `/coffee`. `npm run dev` works without
them until you actually open a CMS-backed page.

## Stack & conventions

- **Next.js 13** using the **`pages/` router** (not the app router). Each file in `pages/`
  is a route.
- **TypeScript**, **Tailwind CSS** (`darkMode: "class"`). Plain Tailwind utility classes in
  JSX — no CSS modules; `styles/globals.css` only holds the Tailwind directives plus the
  print styles for the CV.
- Import alias: **`@/*` maps to the repo root** (e.g. `import { getPosts } from "@/lib/content"`).
- Page `<title>` is set by rendering a bare `<title>` element inside the page component
  (this codebase's pattern), not via `next/head`.
- React `react-icons` (`fa`) and `@heroicons/react` are used for icons.

### Page layout pattern
Every sub-page follows the same shape — copy an existing page when adding one:
```tsx
<div className="flex min-h-screen flex-col p-4">
  <title>...</title>
  <header className="flex p-3 justify-center">
    {/* breadcrumb: Home / Section using next/link, with hover:font-bold transition-opacity */}
  </header>
  {/* content, usually centered with max-w-2xl / max-w-3xl */}
</div>
```
The dark-mode toggle (`_app.tsx`) only renders its button on the home route (`/`); other
pages inherit whatever theme state is set but have no toggle of their own. Theme defaults
to `"light"`.

### Data-driven, edit-in-source pages
Several pages keep their content in a plainly-commented array/object at the **top of the
file**, then render it below — designed to be edited by hand without touching layout code.
Follow this style for content that Štěpán updates himself:
- [`pages/races/history.tsx`](pages/races/history.tsx) — `pastRaces` array
- [`pages/races/index.tsx`](pages/races/index.tsx) — `races` summary
- [`pages/cv.tsx`](pages/cv.tsx) — `profile` / `experience` / `education` / `skills` /
  `languages` / `certifications` / `awards`. Doubles as a printable CV: a "Download PDF"
  button calls `window.print()`, and `@media print` rules in `styles/globals.css` (hiding
  `.no-print`, forcing white bg / black text) produce a clean sheet.

## Content / CMS (Contentful)

Blog and coffee posts come from **Contentful**, fetched at build time via
[`lib/content.tsx`](lib/content.tsx):
- `getPosts("blog" | "coffee")` and `getPostFromSlug(...)` wrap the Contentful client.
- `/blog` and `/blog/[slug]` use `getStaticProps` + `getStaticPaths` (`fallback: false`),
  so posts are baked in at build time — a new post requires a redeploy.
- Rich text is rendered through [`components/rich_text.tsx`](components/rich_text.tsx).
- Requires env vars (see `.env.example`):
  ```
  CONTENTFUL_SPACE_ID=
  CONTENTFUL_ACCESS_TOKEN=
  ```
  In production these are GitHub Actions secrets; locally put them in `.env.local`.

The coffee page embeds a **Leaflet map** ([`components/map.tsx`](components/map.tsx)) of
roasteries/cafés, loaded with `next/dynamic` and `ssr: false` (Leaflet is browser-only).
Markers are hard-coded in that component.

## Deployment

- GitHub Actions ([`.github/workflows/node.js.yml`](.github/workflows/node.js.yml)) builds
  on **push to `master`**, runs `npm run build && npm run export`, adds `.nojekyll`, and
  deploys `./out` to the `gh-pages` branch. The site is then served by GitHub Pages.
- `next.config.js` sets `images.unoptimized: true` (required for static export) and
  whitelists the Contentful image host.
- So: **commit to `master` to ship.** There's no Vercel/preview step despite the default
  README text.

## Layout of the repo

- `pages/` — routes (`index`, `about`, `cv`, `projects/`, `blog/`, `coffee/`, `races/`).
- `components/` — `map`, `rich_text`, `blog_post_prev`, `coffee_post_prev`.
- `lib/content.tsx` — Contentful client + `Post` type.
- `archive/` — old/unused page files kept for reference; not part of the build.
- `styles/globals.css`, `tailwind.config.js`, `next.config.js` — config.
