import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { site } from './src/config/site';
import { emitLegacyRedirects } from './src/integrations/emit-legacy-redirects';
import { emitSectionIndexes } from './src/integrations/emit-section-indexes';
import { forbidScripts } from './src/integrations/forbid-scripts';

// The site sends no JavaScript and no WebAssembly to the browser: that's the point of it. Astro renders every page to
// HTML at build time, and forbid-scripts fails the build if anything that could run code reaches dist/. It's listed
// last so it sees what the other integrations write.
//
// URLs are PascalCase and extension-less, as on onixlabs.io. `build.format: 'file'` emits /Verdict.html, which GitHub
// Pages serves at /Verdict without a trailing-slash redirect.
export default defineConfig({
    site: site.url,
    output: 'static',
    // Compression drops the line break between a word and a tag that starts the next source line, gluing them together
    // ("HTML is<strong>declarative</strong>"). Pages are mostly prose, and GitHub Pages gzips them anyway.
    compressHTML: false,
    trailingSlash: 'ignore',
    build: {
        format: 'file',
    },
    // The toolbar is a script the dev server injects; leaving it out keeps `astro dev` as script-free as the build.
    devToolbar: {
        enabled: false,
    },
    vite: {
        build: {
            // Vite inlines small assets (including some font subsets) as data: URIs, which font-src 'self' blocks.
            assetsInlineLimit: 0,
        },
    },
    integrations: [
        sitemap(),
        emitLegacyRedirects(),
        emitSectionIndexes(),
        forbidScripts(),
    ],
});
