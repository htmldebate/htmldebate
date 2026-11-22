import type { Player } from './player';
import { playerForMove } from './player-for-move';
import { winningLines } from './winning-lines';

// The rules of noughts and crosses, as CSS. The board holds a radio group for each of the nine moves (m1 to m9), with an
// option for every square; each option sits inside its label, `.cell.move-<n>.square-<s>`, and is an `.x` or an `.o`.
// Hiding a label hides its option too, so a hidden square can't be chosen, by mouse or keyboard.
export function buildNoughtsAndCrossesCss(): string {
    const rules: string[] = [];
    const moves: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const squares: ReadonlyArray<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    rules.push('/* Each move opens once the one before it has been made, and closes once it has been made itself. */');
    rules.push('.game:not(:has([name="m1"]:checked)) .move-1 { display: grid; }');

    for (const move of moves.slice(1)) {
        rules.push(`.game:has([name="m${String(move - 1)}"]:checked):not(:has([name="m${String(move)}"]:checked)) .move-${String(move)} { display: grid; }`);
    }

    rules.push('/* A square that has been played can\'t be played again. */');

    for (const square of squares) {
        rules.push(`.game:has([value="${String(square)}"]:checked) .square-${String(square)}:not(:has(:checked)) { display: none !important; }`);
    }

    rules.push('/* Whose turn it is, then a draw once all nine moves are made, unless a win below says otherwise. */');

    for (const move of moves.slice(0, -1)) {
        const next: string = playerForMove(move + 1).toUpperCase();
        rules.push(`.game:has([name="m${String(move)}"]:checked) .status::before { content: "${next} to play"; }`);
    }

    rules.push('.game:has([name="m9"]:checked) .status::before { content: "It\'s a draw."; }');
    rules.push('/* A line of three: announce the winner, stop the game, and mark the line. */');

    const players: ReadonlyArray<Player> = ['x', 'o'];

    for (const player of players) {
        for (const line of winningLines) {
            const win: string = `.game${line.map((square: number): string => `:has(.${player}[value="${String(square)}"]:checked)`).join('')}`;
            rules.push(`${win} .status::before { content: "${player.toUpperCase()} wins!"; }`);
            rules.push(`${win} .cell:not(:has(:checked)) { display: none !important; }`);
            rules.push(`${line.map((square: number): string => `${win} .square-${String(square)}`).join(', ')} { --winning: 1; }`);
        }
    }

    return rules.join('\n');
}
