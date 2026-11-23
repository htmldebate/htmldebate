import type { GateFunction } from './gate-function';

// A logic gate, as the logic gates demo shows and explains it. `notation` is how Boolean algebra writes it, under a bar
// when `isNegated`; `css` is the rule the page uses, with the output it sets left out.
export interface Gate {
    readonly id: string;
    readonly name: string;
    readonly notation: string;
    readonly isNegated: boolean;
    readonly inputs: ReadonlyArray<string>;
    readonly rule: string;
    readonly explanation: string;
    readonly css: string;
    readonly evaluate: GateFunction;
}
