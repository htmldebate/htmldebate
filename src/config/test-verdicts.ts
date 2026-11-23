import { Score } from './score';
import type { TestVerdict } from './test-verdict';

export const testVerdicts: ReadonlyArray<TestVerdict> = [
    {
        testId: 'compute',
        score: Score.Partly,
        headline: 'HTML: no. HTML and CSS: yes, with conditions.',
        body:
            'HTML can\'t calculate anything at all. HTML and CSS together can run Rule 110, which can compute ' +
            'anything, as long as a person keeps clicking; and the newest CSS can run an emulated processor by ' +
            'itself, in some browsers. By the strictest test, HTML alone is out, and the pair have only just got ' +
            'in.',
    },
    {
        testId: 'instruct',
        score: Score.Yes,
        headline: 'Yes: HTML is a programming language, and so is CSS.',
        body:
            'Every element and every rule is an instruction a browser carries out. The trouble with this test is ' +
            'how much else passes it: a knitting pattern, a sat-nav route, the settings on a washing machine. If ' +
            'you choose it, you\'ve chosen a very big club.',
    },
    {
        testId: 'decide',
        score: Score.Partly,
        headline: 'Neither alone. Together: yes.',
        body:
            'HTML remembers without deciding; CSS, in everyday use, decides without remembering. Put them ' +
            'together and you get choices, memory and logic, and every demo on this site is the proof. By this ' +
            'test, HTML on its own falls short, but HTML and CSS together are a programming language, if a very ' +
            'limited one.',
    },
    {
        testId: 'programs',
        score: Score.No,
        headline: 'Mostly not.',
        body:
            'People build pages and applications\' screens with HTML and CSS, and leave the logic to other ' +
            'languages. The demos show games and calculators can be built from them, and x86CSS even runs ' +
            'compiled programs, but nobody would build real software that way. By the test of everyday use, ' +
            'they\'re languages for describing, not for programming.',
    },
];
