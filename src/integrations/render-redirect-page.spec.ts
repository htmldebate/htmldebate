import { describe, expect, it } from 'vitest';

import { findScriptViolations } from './find-script-violations';
import { renderRedirectPage } from './render-redirect-page';

describe('renderRedirectPage', () => {
    const page: string = renderRedirectPage({ from: 'about.html', to: '/Verdict' }, 'https://www.htmldebate.com');

    it('forwards to the new page at once', () => {
        expect(page).toContain('<meta http-equiv="refresh" content="0; url=/Verdict">');
    });

    it('names the new page as the canonical address', () => {
        expect(page).toContain('<link rel="canonical" href="https://www.htmldebate.com/Verdict">');
    });

    it('lets search engines follow the move', () => {
        expect(page).not.toContain('noindex');
    });

    it('forwards without JavaScript', () => {
        expect(findScriptViolations('about.html', Buffer.from(page, 'utf8'))).toEqual([]);
    });
});
