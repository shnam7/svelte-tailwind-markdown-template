import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { highlight } from './scripts/highlight.mjs';

const config = defineConfig({
    extensions: ['.svelte.md', '.md', '.svx'],

    smartypants: { dashes: 'oldschool' },
    highlight: { highlighter: highlight },

    remarkPlugins: [],
    rehypePlugins: [],
});

export default config;
