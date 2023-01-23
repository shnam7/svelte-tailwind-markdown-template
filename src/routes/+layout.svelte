<script>
    import { base } from '$app/paths';
    import '../app.postcss';
</script>

<svelte:head>
    <!-- https://fonts.google.com/share?selection.family=Inter:wght@400;700%7CNanum%20Gothic -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Nanum+Gothic&display=swap"
        rel="stylesheet"
    />
    <link rel="stylesheet" href={`${base}/prism/prism.css`} />
</svelte:head>

<div class="prose max-w-none text-gray-900">
    <div class="max-w-4xl p-4 mx-auto">
        <slot />
    </div>
</div>
