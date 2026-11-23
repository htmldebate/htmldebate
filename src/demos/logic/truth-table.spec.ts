import { describe, expect, it } from 'vitest';

import type { Gate } from './gate';
import { gates } from './gates';
import { truthTable } from './truth-table';

// Outputs for inputs 00, 01, 10, 11 (0, 1 for NOT).
const expected: ReadonlyMap<string, string> = new Map<string, string>([
    ['and', '0001'],
    ['or', '0111'],
    ['xor', '0110'],
    ['nand', '1110'],
    ['nor', '1000'],
    ['xnor', '1001'],
    ['not', '10'],
]);

describe('truthTable', () => {
    for (const gate of gates) {
        it(`gives the standard outputs for ${gate.name}`, () => {
            const outputs: string = truthTable(gate).map((row: ReadonlyArray<string>): string => row.at(-1) ?? '').join('');

            expect(outputs).toBe(expected.get(gate.id));
        });
    }

    it('covers every gate', () => {
        expect(gates.map((gate: Gate): string => gate.id)).toEqual([...expected.keys()]);
    });
});
