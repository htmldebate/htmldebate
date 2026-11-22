import type { DemoStatus } from './demo-status';

// A demo built from HTML and CSS alone. `shows` is the one thing it proves, for the demos overview in part 4.
export interface Demo {
    readonly path: string;
    readonly title: string;
    readonly summary: string;
    readonly shows: string;
    readonly status: DemoStatus;
}
