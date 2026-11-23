import { describe, expect, it } from 'vitest';

import { buildKnightsTourCss } from './build-knights-tour-css';
import { knightMoves } from './knight-moves';

describe('knightMoves', () => {
    it('reaches two squares from a corner of a 5 by 5 board', () => {
        expect(knightMoves(0, 5)).toEqual([7, 11]);
    });

    it('reaches all eight squares from the centre of a 5 by 5 board', () => {
        expect(knightMoves(12, 5)).toEqual([1, 3, 5, 9, 15, 19, 21, 23]);
    });

    it('never leaves the board', () => {
        for (let square: number = 0; square < 25; square++) {
            for (const target of knightMoves(square, 5)) {
                expect(target).toBeGreaterThanOrEqual(0);
                expect(target).toBeLessThan(25);
            }
        }
    });

    it('is symmetric: if a knight can go there, it can come back', () => {
        for (let square: number = 0; square < 25; square++) {
            for (const target of knightMoves(square, 5)) {
                expect(knightMoves(target, 5)).toContain(square);
            }
        }
    });
});

describe('buildKnightsTourCss', () => {
    const css: string = buildKnightsTourCss(5);

    it('offers the next move from wherever the last one landed', () => {
        expect(css).toContain('.tour:has([name="m3"][value="12"]:checked) .move-4.from-12 { display: grid; }');
    });

    it('recognises a complete tour on the last square', () => {
        expect(css).toContain('.tour:has([name="m25"]:checked) .status::before');
    });
});
