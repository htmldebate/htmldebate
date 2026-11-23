import { openSync } from 'fontkit';
import type { Font, FontCollection, GlyphRun } from 'fontkit';
import sharp from 'sharp';

// The image other sites show when a page is shared (1200×630): the site's question beside the glowing HTML5 logo, on the
// dark page colour with the brand spectrum along the bottom, as on the ONIXLabs site's. Run by npm run images, after the
// logo's own images, which it uses.
const background: string = '#212529';
const font: Font | FontCollection = openSync('node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2');

// Lines of text as outlines, since the renderer can't be relied on to find the font.
function outlineText(lines: ReadonlyArray<string>, size: number, leading: number): string {
    if (!('layout' in font)) {
        throw new Error('Expected a single Poppins font, not a collection.');
    }

    const scale: number = size / font.unitsPerEm;
    const tracking: number = -0.032 * size;

    return lines.map((line: string, row: number): string => {
        const run: GlyphRun = font.layout(line);
        let x: number = 0;

        return run.glyphs.map((glyph: GlyphRun['glyphs'][number], index: number): string => {
            const path: string = `<path transform="translate(${String(x)} ${String(size + row * leading)}) scale(${String(scale)} ${String(-scale)})" d="${glyph.path.toSVG()}"/>`;
            x += (run.positions[index]?.xAdvance ?? 0) * scale + tracking;

            return path;
        }).join('');
    }).join('');
}

const headline: Buffer = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="400" fill="#f8f9fa">${outlineText(['Is HTML a', 'programming', 'language?'], 92, 102)}</svg>`,
);
const glow: Buffer = await sharp('public/images/html5-aura-dark.webp').resize({ width: 1100 }).extract({ left: 0, top: 255, width: 820, height: 630 }).png().toBuffer();
const logo: Buffer = await sharp('public/images/html5.webp').resize({ width: 400 }).png().toBuffer();
const brand: Buffer = await sharp('public/onixlabs/images/logo/logo-full-dark.webp').resize({ width: 200 }).png().toBuffer();
const spectrum: Buffer = Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="24"><defs><linearGradient id="spectrum">' +
    '<stop offset="0" stop-color="#F79533"/><stop offset="0.3" stop-color="#EF4E7B"/><stop offset="0.6" stop-color="#5073B8"/>' +
    '<stop offset="1" stop-color="#6FBA82"/></linearGradient></defs><rect width="1200" height="24" fill="url(#spectrum)"/></svg>',
);

await sharp({ create: { width: 1200, height: 630, channels: 4, background } })
    .composite([
        { input: glow, left: 380, top: 0 },
        { input: logo, left: 730, top: 95 },
        { input: headline, left: 72, top: 90 },
        { input: brand, left: 76, top: 510 },
        { input: spectrum, left: 0, top: 606 },
    ])
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile('public/images/social.png');
