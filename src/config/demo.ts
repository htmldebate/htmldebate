import type { DemoStatus } from './demo-status';

// A demo built from HTML and CSS alone. `shows` is the one thing it proves, for the demos overview in part 4. A standalone
// demo (the quine, which can't carry the site's layout) is listed with the rest, but the demos don't step through it.
// `searchTitle` and `description` are what search results show.
export interface Demo {
    readonly path: string;
    readonly title: string;
    readonly summary: string;
    readonly searchTitle: string;
    readonly description: string;
    readonly shows: string;
    readonly status: DemoStatus;
    readonly isStandalone?: boolean;
}
