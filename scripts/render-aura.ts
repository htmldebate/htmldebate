import sharp from 'sharp';
import type { Metadata, OutputInfo } from 'sharp';

import { applyGrade } from './apply-grade.ts';
import type { AuraGrade } from './aura-grade.ts';

const padding: number = 0.6; // Each side, as a fraction of the image's width: the canvas is 1 + 2 × padding wide.
const blur: number = 0.26; // The blur's standard deviation, as a fraction of the image's width.
const outputWidth: number = 512; // The glow is soft, so it needs far fewer pixels than the image it came from.

// An image's glow: the image on a canvas 2.2 times its size, blurred and graded. Rendered ahead of time, as on the
// ONIXLabs site, because blurring in the browser is costly and iOS Safari clips it while an ancestor animates.
export async function renderAura(source: Buffer, destination: string, grade: AuraGrade): Promise<void> {
    const { width }: Metadata = await sharp(source).metadata();
    const pad: number = Math.round(width * padding);
    const padded: Buffer = await sharp(source)
        .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
    // Blurred in the same pipeline as its resize: sharp premultiplies the alpha for a resize, so the blur spreads colour
    // rather than the transparent black around it.
    const { data, info }: { readonly data: Buffer; readonly info: OutputInfo } = await sharp(padded)
        .resize({ width: outputWidth })
        .blur((outputWidth / (1 + 2 * padding)) * blur)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

    applyGrade(data, grade);
    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
        .webp({ quality: 85, alphaQuality: 100, effort: 6 })
        .toFile(destination);
}
