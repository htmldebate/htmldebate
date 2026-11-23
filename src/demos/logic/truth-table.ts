import type { Gate } from './gate';
import { toBit } from './to-bit';

// A gate's truth table: a row for each combination of its inputs, as 0s and 1s, with its output last.
export function truthTable(gate: Gate): ReadonlyArray<ReadonlyArray<string>> {
    const states: ReadonlyArray<boolean> = [false, true];

    if (gate.inputs.length === 1) {
        return states.map((a: boolean): ReadonlyArray<string> => [toBit(a), toBit(gate.evaluate(a, false))]);
    }

    return states.flatMap((a: boolean): ReadonlyArray<ReadonlyArray<string>> =>
        states.map((b: boolean): ReadonlyArray<string> => [toBit(a), toBit(b), toBit(gate.evaluate(a, b))]));
}
