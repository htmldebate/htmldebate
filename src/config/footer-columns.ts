import type { FooterColumn } from './footer-column';

// The ONIXLabs website's footer, link for link. That site builds its columns from its own content (product families and
// policies), so a change there needs copying here.
export const footerColumns: ReadonlyArray<FooterColumn> = [
    {
        id: 'products',
        name: 'Products',
        links: [
            { label: 'Studio', path: '/Products/Studio' },
            { label: 'Aero', path: '/Products/Aero' },
            { label: '.NET libraries', path: '/Products/DotNet' },
            { label: 'Corda libraries', path: '/Products/Corda' },
            { label: 'Kotlin libraries', path: '/Products/Kotlin' },
        ],
    },
    {
        id: 'company',
        name: 'Company',
        links: [
            { label: 'Consulting', path: '/Consulting' },
            { label: 'Engineering with AI', path: '/Engineering-With-AI' },
            { label: 'Documentation', path: '/Documentation/' },
            { label: 'About', path: '/About' },
            { label: 'Contact', path: '/Contact' },
            { label: 'Company Information', path: '/Legal/Company-Information' },
        ],
    },
    {
        id: 'legal',
        name: 'Legal',
        links: [
            { label: 'Privacy', path: '/Legal/Privacy' },
            { label: 'Cookies', path: '/Legal/Cookies' },
            { label: 'Terms', path: '/Legal/Terms' },
            { label: 'Disclaimer', path: '/Legal/Disclaimer' },
            { label: 'Accessibility', path: '/Legal/Accessibility' },
        ],
    },
    {
        id: 'responsibility',
        name: 'Responsibility',
        links: [
            { label: 'Code of Conduct', path: '/Legal/Code-Of-Conduct' },
            { label: 'Anti-Bribery', path: '/Legal/Anti-Bribery' },
            { label: 'DEI Policy', path: '/Legal/Equality-Diversity-Inclusion' },
            { label: 'Modern Slavery', path: '/Legal/Modern-Slavery' },
            { label: 'Information Security', path: '/Legal/Information-Security' },
            { label: 'Responsible Disclosure', path: '/Legal/Responsible-Disclosure' },
        ],
    },
];
