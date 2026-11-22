import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { AstroIntegration } from 'astro';

import type { LegacyRedirect } from '../config/legacy-redirect';
import { legacyRedirects } from '../config/legacy-redirects';
import { site } from '../config/site';
import { renderRedirectPage } from './render-redirect-page';

// Writes a forwarding page at each of the original site's addresses (see src/config/legacy-redirects.ts).
export function emitLegacyRedirects(): AstroIntegration {
    return {
        name: 'emit-legacy-redirects',
        hooks: {
            'astro:build:done': async ({ dir }: { readonly dir: URL }): Promise<void> => {
                const outputDirectory: string = fileURLToPath(dir);
                await Promise.all(legacyRedirects.map(async (redirect: LegacyRedirect): Promise<void> => {
                    await writeFile(join(outputDirectory, redirect.from), renderRedirectPage(redirect, site.url), 'utf8');
                }));
            },
        },
    };
}
