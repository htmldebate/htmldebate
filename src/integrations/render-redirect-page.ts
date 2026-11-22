import type { LegacyRedirect } from '../config/legacy-redirect';

// A page that forwards to another without JavaScript: the browser follows the refresh at once, search engines take the
// canonical link as the page's new home, and the link is there for anything that does neither.
export function renderRedirectPage(redirect: LegacyRedirect, siteUrl: string): string {
    const target: string = new URL(redirect.to, siteUrl).href;

    return [
        '<!doctype html>',
        '<html lang="en-GB">',
        '<meta charset="utf-8">',
        `<title>Moved to ${target}</title>`,
        `<meta http-equiv="refresh" content="0; url=${redirect.to}">`,
        '<meta name="robots" content="noindex">',
        `<link rel="canonical" href="${target}">`,
        `<p>This page has moved to <a href="${redirect.to}">${target}</a>.</p>`,
        '</html>',
        '',
    ].join('\n');
}
