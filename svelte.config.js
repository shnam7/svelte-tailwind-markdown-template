import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],

    preprocess: [vitePreprocess(), preprocess({ postcss: true }), mdsvex(mdsvexConfig)],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
        }),
        paths: {
            base: dev ? '' : '/svelte-tailwind-markdown-template',
        },
        alias: {
            '@components': resolve('./src/lib/components'),
            '@lib': resolve('./src/lib'),
            '@icons': resolve('./src/lib/icons'),
        },
    },
};

export default config;
