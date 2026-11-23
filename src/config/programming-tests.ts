import type { ProgrammingTest } from './programming-test';

export const programmingTests: ReadonlyArray<ProgrammingTest> = [
    { id: 'compute', name: 'Computes anything', question: 'Given enough time and memory, can it work out anything a computer can?' },
    { id: 'instruct', name: 'Gives instructions', question: 'Does it tell a machine what to do?' },
    { id: 'decide', name: 'Decides and remembers', question: 'Can it make decisions, and keep track of what has happened?' },
    { id: 'programs', name: 'Builds programs', question: 'Would people call the things you make with it programs?' },
];
