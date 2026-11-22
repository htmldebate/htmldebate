// Rule 110 itself: the new state of a cell, from the left, centre and right cells above it. The rule's number, 110, is
// 01101110 in binary, and reading the three cells as a binary number (left is worth 4) picks the bit that is the answer.
export function applyRule110(left: boolean, centre: boolean, right: boolean): boolean {
    const neighbourhood: number = (left ? 4 : 0) + (centre ? 2 : 0) + (right ? 1 : 0);

    return ((110 >> neighbourhood) & 1) === 1;
}
