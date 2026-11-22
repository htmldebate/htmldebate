// The squares a knight can reach from `square` on a board `size` squares wide, numbered from 0 in reading order: two
// squares one way and one the other, staying on the board.
export function knightMoves(square: number, size: number): ReadonlyArray<number> {
    const row: number = Math.floor(square / size);
    const column: number = square % size;
    const steps: ReadonlyArray<ReadonlyArray<number>> = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    const targets: number[] = [];

    for (const [rowStep = 0, columnStep = 0] of steps) {
        const targetRow: number = row + rowStep;
        const targetColumn: number = column + columnStep;

        if (targetRow >= 0 && targetRow < size && targetColumn >= 0 && targetColumn < size) {
            targets.push(targetRow * size + targetColumn);
        }
    }

    return targets.sort((left: number, right: number): number => left - right);
}
