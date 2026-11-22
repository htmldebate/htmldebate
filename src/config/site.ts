import type { SiteSettings } from './site-settings';

// The canonical host is www.htmldebate.com because that's what CNAME serves.
export const site: SiteSettings = {
    name: 'The Great HTML Debate',
    shortName: 'HTML Debate',
    url: 'https://www.htmldebate.com',
    description:
        'Is HTML a programming language? A guided look at the definitions, the arguments and the evidence, with demos ' +
        'built from nothing but HTML and CSS.',
    locale: 'en_GB',
    firstPublished: 2023,
    author: 'Matthew Layton',
    authorUrl: 'https://www.onixlabs.io/Contributors/Matthew-Layton',
    companyName: 'ONIXLabs',
    companyUrl: 'https://www.onixlabs.io',
    companyTagline: 'Think beyond code. Build beyond limits.',
    repositoryUrl: 'https://github.com/htmldebate/htmldebate',
};
