# The Great HTML Debate

Is HTML a programming language? This is the source of <https://www.htmldebate.com>, a guided look at the definitions,
the arguments and the evidence, with demos built from nothing but HTML and CSS. It's an
[ONIXLabs](https://www.onixlabs.io) project, written by [Matthew Layton](https://www.onixlabs.io/Contributors/Matthew-Layton).

## The one rule

**No JavaScript and no WebAssembly ever reach the visitor's browser.** The site is part of its own argument, so every
page, menu and demo is HTML and CSS. Two things enforce it:

- The build fails if anything in `dist/` could run code: a script or WebAssembly file, a `<script>` element, an
  event-handler attribute, a `javascript:` URL, or an embedded document (`src/integrations/forbid-scripts.ts`).
- Every page carries a Content Security Policy with `script-src 'none'`, so a browser would refuse a script even if
  one got through.

Astro and Node are used at build time only, to render the pages and share the layout between them.

## Getting started

Requires Node.js 24 (see `.nvmrc`).

```sh
npm ci
npm run dev        # http://localhost:4321 with live reload
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server. |
| `npm run build` | `astro check`, then a production build into `dist/`, then the no-script check. |
| `npm run preview` | Serves `dist/` locally. |
| `npm run lint` | ESLint, type-aware. |
| `npm test` | Unit tests (Vitest). |

## Where things live

```
src/
  config/          Site settings, navigation, the five parts of the debate, and the original site's addresses
  pages/           Routes; file names match the public URLs (/Programming, /Verdict, ...)
  layouts/         BaseLayout: head, header, footer, Content Security Policy
  components/      Shared Astro components
  integrations/    Build steps: the no-script check and the forwarding pages for the original site's addresses
  styles/          The ONIXLabs design system (Stride), copied from the onixlabs.io site and adapted to follow the
                   device's light or dark setting
legacy/            The original 2023 site, kept as a reference while its content is rewritten. Not published.
```

The design is copied from the ONIXLabs website rather than shared, so changes there need copying across by hand.
Light and dark follow `prefers-color-scheme`; there's no theme switch, because remembering a choice needs JavaScript.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages on every push to `main` (`.github/workflows/site.yml`).
The repository's Pages source must be set to **GitHub Actions**.
