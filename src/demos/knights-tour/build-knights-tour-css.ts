// The rules of a knight's tour, as CSS. The board holds a radio group for each move (m1 up to one per square), with an
// option for every square; each option sits inside its label, `.cell.move-<n>.square-<s>`, which also carries
// `.from-<t>` for every square t a knight could reach it from. Hiding a label hides its option too, so only legal moves
// can be chosen, by mouse or keyboard.
export function buildKnightsTourCss(size: number): string {
    const squareCount: number = size * size;
    const rules: string[] = [];

    rules.push('/* The first move can go anywhere. */');
    rules.push('.tour:not(:has([name="m1"]:checked)) .move-1 { display: grid; }');
    rules.push('/* Each later move offers only the squares a knight can reach from where the last move landed. */');

    for (let move: number = 2; move <= squareCount; move++) {
        for (let square: number = 0; square < squareCount; square++) {
            rules.push(`.tour:has([name="m${String(move - 1)}"][value="${String(square)}"]:checked) .move-${String(move)}.from-${String(square)} { display: grid; }`);
        }
    }

    rules.push('/* A move that has been made is closed, and a square that has been visited can\'t be visited again. */');

    for (let move: number = 1; move <= squareCount; move++) {
        rules.push(`.tour:has([name="m${String(move)}"]:checked) .move-${String(move)}:not(:has(:checked)) { display: none !important; }`);
    }

    for (let square: number = 0; square < squareCount; square++) {
        rules.push(`.tour:has([value="${String(square)}"]:checked) .square-${String(square)}:not(:has(:checked)) { display: none !important; }`);
    }

    rules.push('/* The knight stands on the square of the latest move, in place of its number. */');
    const latest: string[] = [];

    for (let move: number = 1; move < squareCount; move++) {
        latest.push(`.tour:not(:has([name="m${String(move + 1)}"]:checked)) .move-${String(move)}:has(:checked)`);
    }

    latest.push(`.tour:has([name="m${String(squareCount)}"]:checked) .move-${String(squareCount)}:has(:checked)`);
    rules.push(`${latest.map((selector: string): string => `${selector} .knight`).join(',\n')} { display: inline; }`);
    rules.push(`${latest.map((selector: string): string => `${selector} .number`).join(',\n')} { display: none; }`);
    rules.push('/* Once the first move is made, the instructions change; once every square is visited, the tour is complete. */');
    rules.push('.tour:has([name="m1"]:checked) .status::before { content: "Pick one of the highlighted squares. If none are highlighted, the knight is stuck."; }');
    rules.push(`.tour:has([name="m${String(squareCount)}"]:checked) .status::before { content: "Tour complete: every square visited once, every move a knight's move."; }`);

    return rules.join('\n');
}

