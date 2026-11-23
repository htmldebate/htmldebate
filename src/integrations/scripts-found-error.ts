import type { ScriptViolation } from './script-violation';

export class ScriptsFoundError extends Error {
    public override readonly name: string = 'ScriptsFoundError';

    public constructor(public readonly violations: ReadonlyArray<ScriptViolation>) {
        super([
            'The built site would send code to the browser. This site is HTML and CSS only: no JavaScript, no WebAssembly.',
            ...violations.map((violation: ScriptViolation): string => `  ${violation.file} ${violation.reason}`),
        ].join('\n'));
    }
}
