import type { NeighbourhoodTerm } from './neighbourhood-term';

export function termMatches(term: NeighbourhoodTerm, left: boolean, centre: boolean, right: boolean): boolean {
    return (term.left ?? left) === left && (term.centre ?? centre) === centre && (term.right ?? right) === right;
}
