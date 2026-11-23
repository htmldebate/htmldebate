import type { TestResult } from '../config/test-result';

// One column of the scorecard: what is being scored, where its part of the debate is, and its results.
export interface SubjectResults {
    readonly name: string;
    readonly path: string;
    readonly results: ReadonlyArray<TestResult>;
}
