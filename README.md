# Svelte-Tailwind-Markdown-template

This is a template for Svelte project using:

-   [Svelte](https://svelte.dev) and [SvelteKit](https://kit.svelte.dev)
-   [Tailwind CSS](https://tailwindcss.com)
-   [MDsveX](https://mdsvex.pngwn.io)
-   [Vite](https://vitejs-kr.github.io)

Options and additional features

-   TypeScript is used as default language
-   [Prism](https://prismjs.com) code highlighting enabled with line numbering option (using temporary workaround).
-   Configured for static website as default (ready for gh-pages)

## Using the template

You can download the template using `degit`, a simplest way.

```bash
# install degit if it's not installed yet
npm i -g degit

# download the template
degit shnam7/svelte-tailwind-markdown-template my-app

# optionally, init git repository of the project
cd my-app
git init
```

## Creating project from scratch

You can build the project from scratch in this process.

```bash
# create svelte project
# select 'Skeleton project' and 'TypeScript' option during the installation process
pnpm create svelte@latest my-app

# install Tailwind CSS using svelte-add utility
# https://github.com/svelte-add/mdsvex
pnpx svelte-add@latest tailwindcss

# install MDsveX using svelte-add utility
pnpx svelte-add@latest mdsvex
```

And to give it static website option, follow the 3 steps below:

1.  Replace svelte adapter to static

    ```bash
    pnpm remove @sveltejs/adapter-auto
    pnpm i -D @sveltejs/adapter-static
    ```

2.  Edit the svelte.config.js file:

    ```js
    - import adapter from "@sveltejs/adapter-auto";
    + import adapter from "@sveltejs/adapter-static";
    ```

3.  create ./src/routes/+layout.ts with following contents

    ```js
    // settings for github pages
    export const prerender = true;
    export const trailingSlash = 'always';
    ```

If you see any type error messages, then run `check` scrit in package.json. It will execute 'svelte-kit sync' to fix the issue.

```bash
pnpm run check
```

### Enable Markdown

Tailwind initializer([preflight](https://tailwindcss.com/docs/preflight)) removes all the markdown styles. So, to use markdown with Tailwind CSS, you have to install [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) plugin to `tailwind.config.js`, and enable it using `prose` style markdown container. We can add this to `./src/routes/+layout.svelte` to enable markdown for whole pages.

```js
// # ./tailwind.config.js

const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {},
    },

    plugins: [require('@tailwindcss/typography')],
};
```

```html
<div class="prose max-w-none text-gray-900">
    <div class="max-w-4xl p-4 mx-auto">
        <slot />
    </div>
</div>
```

To use Tailwind CSS in markdown files, you need to add paths of markdown files to `content` field in `./tailwind.config.js`.

```js
const config = {
    content: ['./src/**/*.{html,js,svelte,ts,md}'],

    theme: {
        extend: {},
    },

    plugins: [require('@tailwindcss/typography')],
};
```

### Enable Prism Code Highlighting

To use prism code highlighting feature from MDsveX, you need to add prism CSS file. This can be done by `<link ...>` script in html or you can use `<svelte:head>` element.

```svelte
# ./src/routes/+layout.svelte

<svelte:head>
    <link rel="stylesheet" href={`${base}/prism/prism.css`} />
</svelte:head>
```

In this project, 'Tomorrow Night' theme is downloaded as `./static/prism/prism.css` with couple of options including line numbers.
You can see the option details in this link: [Prism Download](https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+c+cpp&plugins=line-highlight+line-numbers+show-invisibles+autolinker+wpd+show-language+data-uri-highlight+toolbar+copy-to-clipboard+match-braces):

Loading prism.js script in <head> section does not work beause the contents are loaded later than the prism.js script even with the `defer` attribute. So, as a workaround, script loader is added in `./src/app.html`. `setTimerout()` will make the prism script to run 200ms after page load. 200ms is a heuristic value, which may need to be adjusted later according to the page loading speed.

```html
<html lang="en">
    <head>
        <!-- ... -->
    </body>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(() => {
                let tag = document.createElement('script');
                tag.setAttribute('src', '%sveltekit.assets%/prism/prism.js');
                tag.setAttribute('defer', 'true');
                document.getElementsByTagName('head')[0].appendChild(tag);
            }, 200);
        });
    </script>
</html>
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
