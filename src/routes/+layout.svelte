<script>
    import '../app.postcss';
    import { base } from '$app/paths';
    import { Layout, Header, Container, Sidebar, Content, Footer } from '@components/layout';
    import Fonts from './fonts.svelte';
    import GitHub from '@lib/icons/git-hub.svelte';

    export let data;
    let { toc } = data;
</script>

<Fonts />
<Layout>
    <Header class="border-2 border-sky-800">
        <div class="mx-auto">
            <h1 class="text-center text-3xl font-bold p-4">Svelte-Tailwind-Markdown Template</h1>
        </div>
        <div class="block p-2 pr-3.5 border-1 border-red-900">
            <a
                href="https://github.com/shnam7/ardukit"
                target="_blank"
                rel="noopener noreferrer"
                class="border-[4px] border-red-800 justify-center"><GitHub /></a
            >
        </div>
    </Header>
    <Container class="border-2 border-red-800 border-dotted h-screen">
        <Sidebar class="border-2 border-sky-800">
            <h2 class="text-2xl">Table of contents</h2>
            <li><a href="{base}/">Home</a></li>
            {#each toc as item}
                <li><a href="{item.link}/">{item.title}</a></li>
            {/each}
        </Sidebar>
        <Content class="border-2 border-sky-800">
            <slot />
        </Content>
    </Container>
    <Footer class="border-2 border-sky-800" />
</Layout>
