import { describe, expect, it } from 'vitest';

import { buildNoughtsAndCrossesCss } from './build-noughts-and-crosses-css';
import { playerForMove } from './player-for-move';
import { winningLines } from './winning-lines';

describe('winningLines', () => {
    it('has the three rows, three columns and two diagonals', () => {
        const keys: ReadonlyArray<string> = winningLines.map((line: ReadonlyArray<number>): string => line.join(''));

        expect(new Set<string>(keys).size).toBe(8);
        expect(keys).toEqual(expect.arrayContaining(['012', '345', '678', '036', '147', '258', '048', '246']));
    });
});

describe('playerForMove', () => {
    it('gives X the first move and alternates', () => {
        expect([1, 2, 3, 9].map(playerForMove)).toEqual(['x', 'o', 'x', 'x']);
    });
});

describe('buildNoughtsAndCrossesCss', () => {
    const css: string = buildNoughtsAndCrossesCss();

    it('opens each move only after the one before', () => {
        expect(css).toContain('.game:has([name="m4"]:checked):not(:has([name="m5"]:checked)) .move-5 { display: grid; }');
    });

    it('says O plays after X\'s first move', () => {
        expect(css).toContain('.game:has([name="m1"]:checked) .status::before { content: "O to play"; }');
    });

    it('recognises every line for both players', () => {
        expect(css.match(/wins!/g)).toHaveLength(16);
        expect(css).toContain('.game:has(.o[value="2"]:checked):has(.o[value="4"]:checked):has(.o[value="6"]:checked) .status::before { content: "O wins!"; }');
    });

    it('announces a win after a draw, so a winning last move counts as a win', () => {
        expect(css.indexOf('It\'s a draw.')).toBeLessThan(css.indexOf('wins!'));
    });
});
