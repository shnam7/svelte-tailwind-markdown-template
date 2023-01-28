<script>
    import { base } from '$app/paths';

    const slug = ['example'];
</script>

<h1>Svelte-tailwind-markdown-templae</h1>

{#each slug as title}
    <p><a href="{base}/docs/{title}/">{title}</a></p>
{/each}

<p><a href="{base}/mdx/">MDsveX Test</a></p>
