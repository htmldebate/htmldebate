// Part of a condition on the three cells above a cell. A side that's left out can be either; true means on, false off.
export interface NeighbourhoodTerm {
    readonly left?: boolean;
    readonly centre?: boolean;
    readonly right?: boolean;
}
