import type { Demo } from './demo';
import { DemoStatus } from './demo-status';

export const demos: ReadonlyArray<Demo> = [
    {
        path: '/Demos/Logic',
        title: 'Logic gates',
        summary: 'AND, OR, NOT and their relatives, the building blocks of every digital circuit, wired up with checkboxes.',
        searchTitle: 'Logic gates in HTML and CSS',
        description:
            'Working AND, OR, XOR, NAND, NOR, XNOR and NOT gates built with checkboxes and CSS, no JavaScript. See the rules and truth table behind each one.',
        shows: 'HTML holds true and false; CSS combines them.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/FizzBuzz',
        title: 'FizzBuzz',
        summary: 'The classic programming interview question: count to 100, saying "fizz" for multiples of 3 and "buzz" for multiples of 5.',
        searchTitle: 'FizzBuzz in HTML and CSS',
        description:
            'FizzBuzz from 1 to 100 with no JavaScript, using only CSS counters and :nth-child(). See the four rules that solve the classic interview question.',
        shows: 'CSS can count and test divisibility.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Sieve',
        title: 'Sieve of Eratosthenes',
        summary: 'An ancient method for finding prime numbers, by crossing out the multiples of each prime in turn.',
        searchTitle: 'Sieve of Eratosthenes in HTML and CSS',
        description:
            'Find every prime up to 120 with no JavaScript. A working sieve of Eratosthenes built from a list, a checkbox and CSS selectors, explained step by step.',
        shows: 'CSS can carry out an algorithm, given a fixed range.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Quine',
        title: 'A quine',
        summary: 'A page that shows its own source code, and nothing else.',
        searchTitle: 'A quine in HTML and CSS',
        description:
            'A web page that shows its own source code with no JavaScript: every tag you can see is drawn by the stylesheet, which is itself on show.',
        shows: 'CSS can reproduce the document it styles.',
        status: DemoStatus.Ready,
        isStandalone: true,
    },
    {
        path: '/Demos/Adder',
        title: 'Adding machine',
        summary: 'Set two binary numbers with switches, and CSS adds them up, carries and all.',
        searchTitle: 'A binary adder in HTML and CSS',
        description:
            'Add two binary numbers with no JavaScript. A four-bit adding machine where HTML checkboxes hold the bits and CSS works out every sum and carry.',
        shows: 'HTML and CSS can compute 2 + 2.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Rule-110',
        title: 'Rule 110',
        summary: 'A row of cells that rewrites itself by one simple rule, which mathematicians have proved can compute anything.',
        searchTitle: 'Rule 110 in HTML and CSS',
        description:
            'Run the Turing-complete Rule 110 cellular automaton in your browser with no JavaScript. CSS works out every row, and you click to move it on.',
        shows: 'With a person clicking, HTML and CSS can compute anything.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Noughts-And-Crosses',
        title: 'Noughts and crosses',
        summary: 'A two-player game that takes turns, refuses illegal moves and spots a win or a draw.',
        searchTitle: 'Noughts and crosses in HTML and CSS',
        description:
            'Play noughts and crosses (tic-tac-toe) with no JavaScript. Radio buttons remember the moves, and CSS takes turns and spots every win and draw.',
        shows: 'Decisions and memory together make a game.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Knights-Tour',
        title: 'Knight\'s tour',
        summary: 'Move a knight so it visits every square of the board exactly once.',
        searchTitle: 'Knight\'s tour in HTML and CSS',
        description:
            'Try to solve the knight\'s tour on a 5 by 5 board with no JavaScript. CSS offers only legal moves, numbers your path and recognises a full tour.',
        shows: 'Checking an answer takes a few rules; searching for one takes far more.',
        status: DemoStatus.Ready,
    },
];
