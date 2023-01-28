import type { Load } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load: Load = async () => {
    throw redirect(308, `${base}/docs/installation/`);
};
