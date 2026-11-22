// The eight lines of three on a noughts and crosses board, with squares numbered 0 to 8 in reading order.
export const winningLines: ReadonlyArray<ReadonlyArray<number>> = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];
