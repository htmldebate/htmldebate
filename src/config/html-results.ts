import { Score } from './score';
import type { TestResult } from './test-result';

// HTML on its own, against the four tests. Part 2 shows these, and the verdict will gather them with CSS's.
export const htmlResults: ReadonlyArray<TestResult> = [
    {
        testId: 'compute',
        score: Score.No,
        reason: 'It has no way to repeat a step, hold a value or calculate, so it can\'t work out anything at all.',
    },
    {
        testId: 'instruct',
        score: Score.Yes,
        reason: 'Every element is an instruction the browser carries out: draw a heading, show a form, play a video.',
    },
    {
        testId: 'decide',
        score: Score.Partly,
        reason:
            'It holds state, such as a ticked box or an open section, and the browser makes a few fixed decisions about it, ' +
            'but you can\'t write decisions of your own.',
    },
    {
        testId: 'programs',
        score: Score.No,
        reason: 'On its own it makes documents and forms, not things that do a job by themselves.',
    },
];
