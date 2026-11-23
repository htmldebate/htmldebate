import type { MarkupRule } from './markup-rule';
import type { ScriptViolation } from './script-violation';

// Every WebAssembly module starts with these four bytes ("\0asm"), whatever its file is called.
const wasmMagic: Buffer = Buffer.from([0x00, 0x61, 0x73, 0x6d]);
const scriptExtensions: ReadonlyArray<string> = ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.wasm'];
const markupExtensions: ReadonlyArray<string> = ['.html', '.htm', '.svg', '.xml', '.xhtml'];

// Markup that can run code: a script element; an element that embeds another document or plugin; an event-handler
// attribute (onclick, onload…) inside a tag; and a javascript: URL in an attribute. Code shown on a page is escaped
// (&lt;script&gt;), so it never matches.
const markupRules: ReadonlyArray<MarkupRule> = [
    { pattern: /<script[\s>/]/i, reason: 'contains a <script> element' },
    { pattern: /<(?:iframe|object|embed|frame)[\s>/]/i, reason: 'embeds another document or plugin' },
    { pattern: /<[a-z][^>]*\son[a-z]+\s*=/i, reason: 'contains an event-handler attribute' },
    { pattern: /=\s*["']?\s*javascript:/i, reason: 'contains a javascript: URL' },
];

// The reasons a built file breaks the site's one absolute rule: no JavaScript and no WebAssembly reach the visitor.
export function findScriptViolations(file: string, contents: Buffer): ReadonlyArray<ScriptViolation> {
    const extension: string = file.slice(file.lastIndexOf('.')).toLowerCase();
    const violations: ScriptViolation[] = [];

    if (scriptExtensions.includes(extension)) {
        violations.push({ file, reason: `is a ${extension} file` });
    }

    if (contents.subarray(0, wasmMagic.length).equals(wasmMagic)) {
        violations.push({ file, reason: 'is a WebAssembly module' });
    }

    if (markupExtensions.includes(extension)) {
        const text: string = contents.toString('utf8');

        for (const rule of markupRules) {
            if (rule.pattern.test(text)) {
                violations.push({ file, reason: rule.reason });
            }
        }
    }

    return violations;
}
