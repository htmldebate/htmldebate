import type { Gate } from './gate';

const both: ReadonlyArray<string> = ['a', 'b'];

export const gates: ReadonlyArray<Gate> = [
    {
        id: 'and',
        name: 'AND',
        notation: 'A • B',
        isNegated: false,
        inputs: both,
        rule: '1 when A and B are both 1',
        explanation:
            'One rule. It looks for a gate that has a checked A and a checked B. Writing two :has() tests side by side means ' +
            'both must hold, so the rule only applies when both switches are on.',
        css: `.gate-and:has(.a:checked):has(.b:checked) .output {
    --bit: "1";
}`,
        evaluate: (a: boolean, b: boolean): boolean => a && b,
    },
    {
        id: 'or',
        name: 'OR',
        notation: 'A + B',
        isNegated: false,
        inputs: both,
        rule: '1 when A or B (or both) is 1',
        explanation:
            'Two selectors, one for each input, separated by a comma. A comma in CSS already means "or": either selector can ' +
            'switch the output on, and if both match, it\'s simply on.',
        css: `.gate-or:has(.a:checked) .output,
.gate-or:has(.b:checked) .output {
    --bit: "1";
}`,
        evaluate: (a: boolean, b: boolean): boolean => a || b,
    },
    {
        id: 'xor',
        name: 'XOR',
        notation: 'A ⊕ B',
        isNegated: false,
        inputs: both,
        rule: '1 when exactly one of A and B is 1',
        explanation:
            'Exclusive or: one or the other, but not both. Two selectors cover the two ways that can happen, A on with B off, ' +
            'and A off with B on. When both are on, neither matches, so the output falls back to 0.',
        css: `.gate-xor:has(.a:checked):has(.b:not(:checked)) .output,
.gate-xor:has(.a:not(:checked)):has(.b:checked) .output {
    --bit: "1";
}`,
        evaluate: (a: boolean, b: boolean): boolean => a !== b,
    },
    {
        id: 'nand',
        name: 'NAND',
        notation: 'A • B',
        isNegated: true,
        inputs: both,
        rule: '0 only when A and B are both 1',
        explanation:
            'Not and: the opposite of AND. The output is on whenever A is unchecked or B is unchecked, so there\'s a selector ' +
            'for each. Only when both are checked does neither match.',
        css: `.gate-nand:has(.a:not(:checked)) .output,
.gate-nand:has(.b:not(:checked)) .output {
    --bit: "1";
}`,
        evaluate: (a: boolean, b: boolean): boolean => !(a && b),
    },
    {
        id: 'nor',
        name: 'NOR',
        notation: 'A + B',
        isNegated: true,
        inputs: both,
        rule: '1 only when A and B are both 0',
        explanation:
            'Not or: the opposite of OR. One rule, which needs A to be unchecked and B to be unchecked at the same time. ' +
            'Checking either one switches it off.',
        css: `.gate-nor:has(.a:not(:checked)):has(.b:not(:checked)) .output {
    --bit: "1";
}`,
        evaluate: (a: boolean, b: boolean): boolean => !(a || b),
    },
    {
        id: 'xnor',
        name: 'XNOR',
        notation: 'A ⊕ B',
        isNegated: true,
        inputs: both,
        rule: '1 when A and B are the same',
        explanation:
            'The opposite of XOR, so it\'s a test for equality. Two selectors cover the two ways the inputs can match: both ' +
            'checked, or both unchecked.',
        css: `.gate-xnor:has(.a:checked):has(.b:checked) .output,
.gate-xnor:has(.a:not(:checked)):has(.b:not(:checked)) .output {
    --bit: "1";
}`,
        evaluate: (a: boolean, b: boolean): boolean => a === b,
    },
    {
        id: 'not',
        name: 'NOT',
        notation: 'A',
        isNegated: true,
        inputs: ['a'],
        rule: 'The opposite of A',
        explanation: 'The simplest gate, with a single input and a single rule: the output is on when A is unchecked.',
        css: `.gate-not:has(.a:not(:checked)) .output {
    --bit: "1";
}`,
        evaluate: (a: boolean): boolean => !a,
    },
];
