import type { FooterLink } from './footer-link';

// A column of the footer. Its paths are on the ONIXLabs site.
export interface FooterColumn {
    readonly id: string;
    readonly name: string;
    readonly links: ReadonlyArray<FooterLink>;
}
