import type { Score } from './score';

// What one test (programming-tests.ts) says about HTML and CSS, for "Choose your test". `score` sets its colour.
export interface TestVerdict {
    readonly testId: string;
    readonly score: Score;
    readonly headline: string;
    readonly body: string;
}
