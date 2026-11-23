import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { AstroIntegration } from 'astro';

import { sectionPaths } from '../config/section-paths';

// Copies each section page (Demos.html) to Demos/index.html; see src/config/section-paths.ts.
export function emitSectionIndexes(): AstroIntegration {
    return {
        name: 'emit-section-indexes',
        hooks: {
            'astro:build:done': async ({ dir }: { readonly dir: URL }): Promise<void> => {
                const outputDirectory: string = fileURLToPath(dir);
                await Promise.all(sectionPaths.map(async (sectionPath: string): Promise<void> => {
                    const page: string = sectionPath.slice(1);
                    await copyFile(join(outputDirectory, `${page}.html`), join(outputDirectory, page, 'index.html'));
                }));
            },
        },
    };
}
