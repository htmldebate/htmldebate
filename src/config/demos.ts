import type { Demo } from './demo';
import { DemoStatus } from './demo-status';

export const demos: ReadonlyArray<Demo> = [
    {
        path: '/Demos/Logic',
        title: 'Logic gates',
        summary: 'AND, OR, NOT and their relatives, the building blocks of every digital circuit, wired up with checkboxes.',
        shows: 'HTML holds true and false; CSS combines them.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/FizzBuzz',
        title: 'FizzBuzz',
        summary: 'The classic programming interview question: count to 100, saying "fizz" for multiples of 3 and "buzz" for multiples of 5.',
        shows: 'CSS can count and test divisibility.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Sieve',
        title: 'Sieve of Eratosthenes',
        summary: 'An ancient method for finding prime numbers, by crossing out the multiples of each prime in turn.',
        shows: 'CSS can carry out an algorithm, given a fixed range.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Quine',
        title: 'A quine',
        summary: 'A page that shows its own source code, and nothing else.',
        shows: 'CSS can reproduce the document it styles.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Adder',
        title: 'Adding machine',
        summary: 'Set two binary numbers with switches, and CSS adds them up, carries and all.',
        shows: 'HTML and CSS can compute 2 + 2.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Rule-110',
        title: 'Rule 110',
        summary: 'A row of cells that rewrites itself by one simple rule, which mathematicians have proved can compute anything.',
        shows: 'With a person clicking, HTML and CSS can compute anything.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Noughts-And-Crosses',
        title: 'Noughts and crosses',
        summary: 'A two-player game that takes turns, refuses illegal moves and spots a win or a draw.',
        shows: 'Decisions and memory together make a game.',
        status: DemoStatus.Ready,
    },
    {
        path: '/Demos/Knights-Tour',
        title: 'Knight\'s tour',
        summary: 'Move a knight so it visits every square of the board exactly once.',
        shows: 'HTML and CSS can check an answer, but not search for one.',
        status: DemoStatus.Ready,
    },
];
