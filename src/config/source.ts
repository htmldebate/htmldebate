import type { SourceGroup } from './source-group';
import type { Stance } from './stance';

// A source the site draws on. `archived` is set when the original is gone and `url` is a copy in the Internet Archive.
export interface Source {
    readonly title: string;
    readonly by: string;
    readonly url: string;
    readonly group: SourceGroup;
    readonly summary: string;
    readonly stance?: Stance;
    readonly archived?: boolean;
}
