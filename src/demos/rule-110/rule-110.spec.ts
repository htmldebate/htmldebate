import { describe, expect, it } from 'vitest';

import { applyRule110 } from './apply-rule-110';
import { buildRule110Selectors } from './build-rule-110-selectors';
import type { NeighbourhoodTerm } from './neighbourhood-term';
import { offTerms, onTerms } from './rule-110-terms';
import type { Rule110Selectors } from './rule-110-selectors';
import { termMatches } from './term-matches';

const states: ReadonlyArray<boolean> = [false, true];

describe('applyRule110', () => {
    it('follows the published rule table', () => {
        const table: ReadonlyArray<string> = ['111', '110', '101', '100', '011', '010', '001', '000'].map((pattern: string): string => {
            const isOn: (position: number) => boolean = (position: number): boolean => pattern.charAt(position) === '1';

            return applyRule110(isOn(0), isOn(1), isOn(2)) ? '1' : '0';
        });

        expect(table.join('')).toBe('01101110');
    });
});

describe('the on and off terms', () => {
    for (const left of states) {
        for (const centre of states) {
            for (const right of states) {
                const expected: boolean = applyRule110(left, centre, right);

                it(`agree with the rule for ${String(Number(left))}${String(Number(centre))}${String(Number(right))}`, () => {
                    const isOn: boolean = onTerms.some((term: NeighbourhoodTerm): boolean => termMatches(term, left, centre, right));
                    const isOff: boolean = offTerms.some((term: NeighbourhoodTerm): boolean => termMatches(term, left, centre, right));

                    expect(isOn).toBe(expected);
                    expect(isOff).toBe(!expected);
                });
            }
        }
    }
});

describe('buildRule110Selectors', () => {
    const selectors: Rule110Selectors = buildRule110Selectors(3, 2);

    it('styles every cell when it is on', () => {
        expect(selectors.on).toHaveLength(6);
    });

    it('works out the second row from the boxes above it, in reading order', () => {
        expect(selectors.missing).toContain('#r0c0:not(:checked) ~ #r0c1:checked ~ #r1c1:not(:checked) ~ [for="r1c1"]');
    });

    it('treats cells beyond the left edge as off', () => {
        expect(selectors.missing).toContain('#r0c0:checked ~ #r1c0:not(:checked) ~ [for="r1c0"]');
        expect(selectors.wrong.some((selector: string): boolean => selector.includes('#r0c-1'))).toBe(false);
    });

    it('drops conditions that need a cell beyond the right edge to be on', () => {
        const rightEdge: ReadonlyArray<string> = selectors.wrong.filter((selector: string): boolean => selector.endsWith('[for="r1c2"]'));

        expect(rightEdge).toEqual(['#r0c2:not(:checked) ~ #r1c2:checked ~ [for="r1c2"]']);
    });
});
