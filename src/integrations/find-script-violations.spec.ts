import { describe, expect, it } from 'vitest';

import { findScriptViolations } from './find-script-violations';
import type { ScriptViolation } from './script-violation';

function reasonsFor(file: string, contents: string | Buffer): ReadonlyArray<string> {
    const bytes: Buffer = typeof contents === 'string' ? Buffer.from(contents, 'utf8') : contents;

    return findScriptViolations(file, bytes).map((violation: ScriptViolation): string => violation.reason);
}

describe('findScriptViolations', () => {
    it('passes a page of plain HTML and CSS', () => {
        const page: string = '<!doctype html><html><head><style>li:nth-child(3n)::before { content: "fizz"; }</style></head>'
            + '<body><input type="checkbox" id="a"><label for="a">On</label><button popovertarget="menu">Menu</button></body></html>';

        const reasons: ReadonlyArray<string> = reasonsFor('index.html', page);

        expect(reasons).toEqual([]);
    });

    it('passes code that is shown on the page rather than run', () => {
        const page: string = '<p>The old way was <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> or '
            + '<code>&lt;button onclick="go()"&gt;</code>.</p>';

        const reasons: ReadonlyArray<string> = reasonsFor('index.html', page);

        expect(reasons).toEqual([]);
    });

    it('passes prose that merely mentions the words', () => {
        const reasons: ReadonlyArray<string> = reasonsFor('index.html', '<p>Turn the switch on=off, no javascript: required.</p>');

        expect(reasons).toEqual([]);
    });

    it('reports a script element, whatever its case', () => {
        const reasons: ReadonlyArray<string> = reasonsFor('index.html', '<body><SCRIPT type="module" src="/a.js"></SCRIPT></body>');

        expect(reasons).toEqual(['contains a <script> element']);
    });

    it('reports a script element inside an SVG', () => {
        const reasons: ReadonlyArray<string> = reasonsFor('logo.svg', '<svg><script>alert(1)</script></svg>');

        expect(reasons).toEqual(['contains a <script> element']);
    });

    it('reports an event-handler attribute', () => {
        const reasons: ReadonlyArray<string> = reasonsFor('index.html', '<img src="a.png" alt="" onload="go()">');

        expect(reasons).toEqual(['contains an event-handler attribute']);
    });

    it('reports a javascript: URL', () => {
        const reasons: ReadonlyArray<string> = reasonsFor('index.html', '<a href="javascript:go()">Go</a>');

        expect(reasons).toEqual(['contains a javascript: URL']);
    });

    it('reports an embedded document', () => {
        const reasons: ReadonlyArray<string> = reasonsFor('index.html', '<iframe src="https://example.com"></iframe>');

        expect(reasons).toEqual(['embeds another document or plugin']);
    });

    it('reports a JavaScript file, whatever it contains', () => {
        const reasons: ReadonlyArray<string> = reasonsFor('_astro/page.mjs', '');

        expect(reasons).toEqual(['is a .mjs file']);
    });

    it('reports a WebAssembly module by its contents, whatever it is called', () => {
        const module: Buffer = Buffer.from([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]);

        const reasons: ReadonlyArray<string> = reasonsFor('image.png', module);

        expect(reasons).toEqual(['is a WebAssembly module']);
    });

    it('ignores scripts written inside a stylesheet, which cannot run them', () => {
        const reasons: ReadonlyArray<string> = reasonsFor('site.css', '.a::after { content: "<script>"; }');

        expect(reasons).toEqual([]);
    });
});
