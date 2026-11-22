import type { NeighbourhoodTerm } from './neighbourhood-term';
import { rule110CellId } from './rule-110-cell-id';
import { offTerms, onTerms } from './rule-110-terms';
import type { Rule110Selectors } from './rule-110-selectors';

// The CSS for a Rule 110 grid of checkboxes. Every checkbox comes first, in reading order, followed by a label for each;
// so a cell's label can be reached from the boxes above it with the sibling combinator (~), which only looks forward.
// Cells beyond the edges count as off.
export function buildRule110Selectors(width: number, height: number): Rule110Selectors {
    const on: string[] = [];
    const focus: string[] = [];
    const missing: string[] = [];
    const wrong: string[] = [];

    for (let row: number = 0; row < height; row++) {
        for (let column: number = 0; column < width; column++) {
            const cell: string = rule110CellId(row, column);
            on.push(`#${cell}:checked ~ [for="${cell}"]`);
            focus.push(`#${cell}:focus-visible ~ [for="${cell}"]`);

            if (row > 0) {
                const above: (offset: number) => string | undefined = (offset: number): string | undefined =>
                    column + offset >= 0 && column + offset < width ? rule110CellId(row - 1, column + offset) : undefined;
                const neighbours: ReadonlyArray<string | undefined> = [above(-1), above(0), above(1)];

                for (const condition of conditionsFor(onTerms, neighbours)) {
                    missing.push(`${condition}#${cell}:not(:checked) ~ [for="${cell}"]`);
                }

                for (const condition of conditionsFor(offTerms, neighbours)) {
                    wrong.push(`${condition}#${cell}:checked ~ [for="${cell}"]`);
                }
            }
        }
    }

    return { on, focus, missing, wrong };
}

// Each term as a chain of the boxes it tests, ready to be followed by the cell itself. A term that needs a missing
// neighbour to be on can never hold, so it's dropped; one that needs it off holds anyway, so that test is dropped.
function conditionsFor(terms: ReadonlyArray<NeighbourhoodTerm>, neighbours: ReadonlyArray<string | undefined>): ReadonlyArray<string> {
    const conditions: string[] = [];

    for (const term of terms) {
        const wanted: ReadonlyArray<boolean | undefined> = [term.left, term.centre, term.right];
        const tests: string[] = [];
        let isPossible: boolean = true;

        for (let index: number = 0; index < wanted.length; index++) {
            const state: boolean | undefined = wanted[index];
            const neighbour: string | undefined = neighbours[index];

            if (state === undefined) {
                continue;
            }

            if (neighbour === undefined) {
                isPossible = isPossible && !state;
                continue;
            }

            tests.push(`#${neighbour}${state ? ':checked' : ':not(:checked)'} ~ `);
        }

        if (isPossible) {
            conditions.push(tests.join(''));
        }
    }

    return conditions;
}
