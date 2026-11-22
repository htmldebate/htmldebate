import { Score } from './score';
import type { TestResult } from './test-result';

// HTML and CSS together, against the four tests. Part 4 shows these, and the verdict will gather them with the rest.
export const togetherResults: ReadonlyArray<TestResult> = [
    {
        testId: 'compute',
        score: Score.Partly,
        reason:
            'They can imitate a machine that computes anything (Rule 110), but only with a person clicking to move each ' +
            'step on, and a page big enough for the job.',
    },
    {
        testId: 'instruct',
        score: Score.Yes,
        reason: 'Both are instructions the browser carries out.',
    },
    {
        testId: 'decide',
        score: Score.Yes,
        reason: 'HTML remembers, in checkboxes and radio buttons; CSS reads that memory and decides what follows.',
    },
    {
        testId: 'programs',
        score: Score.Partly,
        reason: 'Games, puzzles and calculators, yes; but nobody would build real software this way, or should.',
    },
];
