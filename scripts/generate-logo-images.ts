import sharp from 'sharp';

import { renderAura } from './render-aura.ts';

// The 3D HTML5 logo for the introduction, from its artwork, and its glow for each theme. Re-run it
// (npm run images) after changing the artwork; the results are committed.
const artwork: string = 'artwork/html5.png';
const shieldBottom: number = 1945; // Below this is only the shadow the logo casts, which would dirty the glow.
const canvas: number = 2048;

const shield: Buffer = await sharp(artwork)
    .extract({ left: 0, top: 0, width: canvas, height: shieldBottom })
    .extend({ bottom: canvas - shieldBottom, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

await Promise.all([
    sharp(artwork).resize({ width: 800 }).webp({ quality: 90, effort: 6 }).toFile('public/images/html5.webp'),
    renderAura(shield, 'public/images/html5-aura.webp', { saturation: 3.2, brightness: 1.05 }),
    renderAura(shield, 'public/images/html5-aura-dark.webp', { saturation: 2.6, brightness: 1.15 }),
]);
