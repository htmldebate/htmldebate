import type { Score } from './score';

// How HTML, CSS, or the two together fare against one test (programming-tests.ts), and why.
export interface TestResult {
    readonly testId: string;
    readonly score: Score;
    readonly reason: string;
}
