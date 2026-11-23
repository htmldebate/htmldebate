import { readFile } from 'node:fs/promises';

// readdir lists folders too; reading one fails with EISDIR, and a folder holds nothing to check.
export async function readFileOrUndefined(path: string): Promise<Buffer | undefined> {
    try {
        return await readFile(path);
    } catch (error: unknown) {
        if (error instanceof Error && 'code' in error && error.code === 'EISDIR') {
            return undefined;
        }

        throw error;
    }
}
