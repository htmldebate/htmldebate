import { readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { AstroIntegration } from 'astro';

import { findScriptViolations } from './find-script-violations';
import { readFileOrUndefined } from './read-file-or-undefined';
import type { ScriptViolation } from './script-violation';
import { ScriptsFoundError } from './scripts-found-error';

// Fails the build if anything in the output could run code in a visitor's browser. It runs last, so it also sees the
// files other integrations write (the sitemap, the legacy redirects).
export function forbidScripts(): AstroIntegration {
    return {
        name: 'forbid-scripts',
        hooks: {
            'astro:build:done': async ({ dir }: { readonly dir: URL }): Promise<void> => {
                const outputDirectory: string = fileURLToPath(dir);
                const files: ReadonlyArray<string> = await readdir(outputDirectory, { recursive: true });
                const violations: ReadonlyArray<ReadonlyArray<ScriptViolation>> = await Promise.all(
                    files.map(async (file: string): Promise<ReadonlyArray<ScriptViolation>> => {
                        const path: string = join(outputDirectory, file);
                        const contents: Buffer | undefined = await readFileOrUndefined(path);

                        return contents === undefined ? [] : findScriptViolations(relative(outputDirectory, path), contents);
                    }),
                );
                const found: ReadonlyArray<ScriptViolation> = violations.flat();

                if (found.length > 0) {
                    throw new ScriptsFoundError(found);
                }
            },
        },
    };
}
