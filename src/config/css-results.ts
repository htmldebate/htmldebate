import { Score } from './score';
import type { TestResult } from './test-result';

// CSS on its own, against the four tests. Part 3 shows these, and the verdict will gather them with HTML's.
export const cssResults: ReadonlyArray<TestResult> = [
    {
        testId: 'compute',
        score: Score.Partly,
        reason:
            'Everyday CSS can\'t: nothing it works out feeds the next step. But with the newest features, animations ' +
            'can carry state forward, enough to run an emulated processor (x86CSS), so far only in some browsers.',
    },
    {
        testId: 'instruct',
        score: Score.Yes,
        reason: 'Every rule is an instruction to the browser about how something should look and behave.',
    },
    {
        testId: 'decide',
        score: Score.Partly,
        reason:
            'It decides constantly, through selectors, media queries and container queries, but in everyday use it ' +
            'remembers nothing: its decisions follow state that something else holds.',
    },
    {
        testId: 'programs',
        score: Score.No,
        reason: 'It styles and arranges documents; on its own it makes nothing that does a job.',
    },
];
