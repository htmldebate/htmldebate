import type { DebatePart } from './debate-part';
import { PartStatus } from './part-status';

export const debateParts: ReadonlyArray<DebatePart> = [
    {
        number: 1,
        status: PartStatus.Written,
        path: '/Programming',
        title: 'What counts as',
        highlight: 'programming?',
        summary:
            'Before we can say whether HTML is a programming language, we have to agree what one is. There is no single ' +
            'definition, so we set out the tests people actually use, and measure everything after against them.',
        points: [
            'How dictionaries, teachers and computer scientists define programming, and where they disagree.',
            'Four tests: it can compute anything; it gives a computer instructions; it makes decisions and keeps state; it builds things people call programs.',
            'Why "it\'s a markup language" settles nothing: XSLT is a markup language that can compute anything.',
        ],
    },
    {
        number: 2,
        status: PartStatus.Written,
        path: '/HTML',
        title: 'HTML',
        highlight: 'on its own',
        summary:
            'What HTML can do with no help at all: structure, meaning, and more built-in behaviour than its reputation ' +
            'suggests. And what it plainly cannot do.',
        points: [
            'Forms, disclosure widgets, dialogs and popovers: behaviour that needs no script.',
            'The best case for HTML: Professor Brailsford\'s view of it as a simple functional language, where elements are functions the browser evaluates.',
            'What\'s missing: variables, arithmetic, loops and functions of your own.',
            '"The browser does the real work." True, but a Python script leans on Python in the same way.',
        ],
    },
    {
        number: 3,
        status: PartStatus.Written,
        path: '/CSS',
        title: 'CSS',
        highlight: 'on its own',
        summary:
            'CSS is usually treated as decoration. Look closer and you find rules that choose, count, calculate and ' +
            'react, with more arriving every year.',
        points: [
            'Selectors as conditions, counters as arithmetic, media and container queries as branches.',
            'calc(), custom properties and @property: values that are worked out, not just written down.',
            'CSS needs a document to act on, but not necessarily HTML: it styles SVG and XML too.',
        ],
    },
    {
        number: 4,
        status: PartStatus.Written,
        path: '/Together',
        title: 'HTML and CSS',
        highlight: 'together',
        summary:
            'HTML holds the state and CSS reads it and decides what follows. Together they can do real, if limited, ' +
            'computation, and the demos prove it.',
        points: [
            'Checkboxes and radio buttons as memory; :checked and :has() as logic.',
            'The demos: FizzBuzz, the sieve of Eratosthenes, Boolean logic, a quine, an adding machine, Rule 110, noughts and crosses, and a knight\'s tour.',
            'The limit, and how it moved: from a person clicking as the clock to x86CSS, a processor that runs by itself.',
        ],
    },
    {
        number: 5,
        status: PartStatus.Written,
        path: '/Verdict',
        title: 'The verdict is',
        highlight: 'it depends',
        shortTitle: 'The verdict',
        summary:
            'The answer changes with the test you choose. Here is how HTML, CSS and the two together score against ' +
            'each one, and why the honest conclusion is undecided.',
        points: [
            'A scorecard: each test against HTML, CSS, and HTML with CSS.',
            'Why the label matters less than the question it makes us ask: when do rules and state become programming?',
        ],
    },
];
