import type { Load } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import { marked } from 'marked';
import { highlightStripped } from '../../../../scripts/highlight.mjs';

export const load: Load = async ({ params }) => {
    try {
        let file = params.slug ?? 'installation/';
        if (file.endsWith('/')) file = file.slice(0, -1);
        file = `./docs/${file}.md`;

        const page = marked.parse(fs.readFileSync(file, 'utf-8'), {
            smartypants: true,
            highlight: highlightStripped,
        });

        return {
            slug: params.slug,
            file,
            html: page,
        };
    } catch (err: any) {
        throw error(404, err.message);
    }
};
