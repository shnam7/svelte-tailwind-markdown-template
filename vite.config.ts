import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
    plugins: [sveltekit()],
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            // docs, ...
            allow: ['..'],
        }
    }
};

export default config;
