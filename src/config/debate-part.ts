import type { PartStatus } from './part-status';

// One part of the debate, in reading order. A planned part shows `points`, what it will cover, until its page is written;
// a written part has its own page in src/pages, at its path. `shortTitle` names it on buttons, where the whole headline
// would read awkwardly.
export interface DebatePart {
    readonly number: number;
    readonly status: PartStatus;
    readonly path: string;
    readonly title: string;
    readonly highlight: string;
    readonly shortTitle?: string;
    readonly summary: string;
    readonly points: ReadonlyArray<string>;
}
