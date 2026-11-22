import type { NeighbourhoodTerm } from './neighbourhood-term';

// Rule 110, as the fewest conditions CSS has to test. A cell is on when any of `onTerms` holds, and off when any of
// `offTerms` does. The spec checks these against applyRule110 for all eight neighbourhoods.
export const onTerms: ReadonlyArray<NeighbourhoodTerm> = [
    { centre: true, right: false },
    { centre: false, right: true },
    { left: false, centre: true },
];

export const offTerms: ReadonlyArray<NeighbourhoodTerm> = [
    { centre: false, right: false },
    { left: true, centre: true, right: true },
];
