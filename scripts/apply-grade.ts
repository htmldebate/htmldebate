import type { AuraGrade } from './aura-grade.ts';

// CSS's saturate() then brightness(), on straight (not premultiplied) RGBA pixels, clamping after each as the browser
// does. The arithmetic is the ONIXLabs site's (its scripts/generate-auras.ts), so the glow matches the ones there.
export function applyGrade(pixels: Buffer, grade: AuraGrade): void {
    const clamp: (value: number) => number = (value: number): number => Math.min(255, Math.max(0, Math.round(value)));
    const grey: number = 1 - grade.saturation;

    for (let offset: number = 0; offset < pixels.length; offset += 4) {
        const red: number = pixels.readUInt8(offset);
        const green: number = pixels.readUInt8(offset + 1);
        const blue: number = pixels.readUInt8(offset + 2);
        const shared: number = grey * (0.2126 * red + 0.7152 * green + 0.0722 * blue);

        [red, green, blue].forEach((channel: number, index: number): void => {
            pixels.writeUInt8(clamp(clamp(shared + grade.saturation * channel) * grade.brightness), offset + index);
        });
    }
}
