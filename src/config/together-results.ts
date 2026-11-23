import { Score } from './score';
import type { TestResult } from './test-result';

// HTML and CSS together, against the four tests. Part 4 shows these, and the verdict will gather them with the rest.
export const togetherResults: ReadonlyArray<TestResult> = [
    {
        testId: 'compute',
        score: Score.Partly,
        reason:
            'With a person clicking, they can run a machine that computes anything (Rule 110). With the newest CSS, an ' +
            'emulated processor runs by itself (x86CSS), but only in some browsers, slowly and in little memory.',
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
        reason:
            'Games, puzzles and calculators, and even compiled C programs on an emulated processor; but nobody would build ' +
            'real software this way, or should.',
    },
];
