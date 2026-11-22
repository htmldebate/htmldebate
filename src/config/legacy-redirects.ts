import type { LegacyRedirect } from './legacy-redirect';

// The original site's pages. Each keeps its address, as a page that forwards to where its content lives now.
export const legacyRedirects: ReadonlyArray<LegacyRedirect> = [
    { from: 'about.html', to: '/Verdict' },
    { from: 'research.html', to: '/Programming' },
    { from: 'arguments.html', to: '/HTML' },
    { from: 'references.html', to: '/Sources' },
    { from: 'examples.html', to: '/Demos' },
    { from: 'examples-fizzbuzz.html', to: '/Demos/FizzBuzz' },
    { from: 'examples-sieve-of-eratosthenes.html', to: '/Demos/Sieve' },
    { from: 'examples-boolean-algebra.html', to: '/Demos/Logic' },
    { from: 'examples-quine.html', to: '/Demos/Quine' },
];
