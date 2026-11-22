import type { Player } from './player';

// X makes the odd-numbered moves, O the even ones.
export function playerForMove(move: number): Player {
    return move % 2 === 1 ? 'x' : 'o';
}
