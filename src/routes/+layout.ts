//--- settings to ngenerate static pages
export const prerender = true;
// export const ssr = true;
// export const trailingSlash = 'always';

import type { Load } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load: Load = async () => {
    const toc = [
        {
            slug: 'example',
            title: 'Markdown example (./docs/*)',
            link: `${base}/docs/example`,
        },
        {
            slug: 'mdx',
            title: 'MDsveX example (./routes/*)',
            link: `${base}/mdx`,
        },
        {
            slug: 'keypad',
            title: 'Keypad example testing Tailwind CSS',
            link: `${base}/keypad`,
        },
    ];
    return { toc };
};
