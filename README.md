# Svelte-Tailwind-Markdown-template

This is a template for Svelte project using:

-   [Svelte](https://svelte.dev) and [SvelteKit](https://kit.svelte.dev)
-   [Tailwind CSS](https://tailwindcss.com)
-   [MDsveX](https://mdsvex.pngwn.io)
-   [Vite](https://vitejs-kr.github.io)

Options and additional features

-   TypeScript is used as default language
-   [Shiki](https://github.com/shikijs/shiki) code highlighting is enabled.
-   Configured for static website as default (ready for gh-pages)

## Installation

### Using the template

You can download the template using `degit`, which is the simplest way.

```bash
# install degit if it's not installed yet
npm i -g degit

# download the template
degit shnam7/svelte-tailwind-markdown-template my-app

# optionally, init git repository of the project
cd my-app
git init
```

### Creating project from scratch

You can build the project from scratch in this process.

#### Install core modules

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

#### Enable Markdown

Tailwind initializer([preflight](https://tailwindcss.com/docs/preflight)) removes all the markdown styles. So, to use markdown with Tailwind CSS, you have to install [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) plugin to `tailwind.config.js`, and enable it using `prose` style markdown container. We can add this to `./src/routes/+layout.svelte` to enable markdown for whole pages.

```js
// # ./tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
    content: ['./src/**/*.{html,js,svelte,ts,md}', './docs/**/*.md'],

    theme: {
        // ...
    },

    plugins: [require('@tailwindcss/typography')],
    darkMode: 'class',
};
```

```html
<div class="prose dark:prose-invert max-w-none text-gray-900">
    <div class="max-w-4xl p-4 mx-auto">
        <slot />
    </div>
</div>
```

Markdown files can also be placed in `./docs`, which is outside of root source directory `./src`. In this case, [marked](https://marked.js.org/) is used instead of MDSveX. So, Svelte is not supported there. If you need to uuse Svelte in markdown, then it suould be placed inside of `./src/routes`, or it should be imported by a module that is lacated inside `./src/routes`. Code highlighting is supported in both places.

#### Enable Tailwind CSS

To use Tailwind CSS in markdown files, you need to add paths of markdown files to `content` field in `./tailwind.config.js`.

```js
const config = {
    content: ['./src/**/*.{html,js,svelte,ts,md}', './docs/**/*.md'],

    theme: {
        extend: {},
    },

    plugins: [require('@tailwindcss/typography')],
    darkMode: 'class',
};
```

If you are going to support dark mode options, then add darkMode option as shown in the above example.
Option value `class` means you can control dark mode using class name `dark`. The other option is `media` whcih is using operating system preference. Defaule alue is `media`. You can check Tailwind CC docment on dark mode [here](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually).
To use

#### Enable Code Highlighting

Code highlighting is enabled by default. It is using [Shiki](https://github.com/shikijs/shiki). Default theme is `github-dark`, and it can be changed by adding shiki theme configuration to `./package.json`.

```json
{
    // ...
    "shiki": {
        "theme": "material-ocean"
    }
}
```

#### Allow import from external directories

Optionall, you can allow vite to import files outside of `./src` directory. For example, to import markdown file from `./docs`. to do that, add the `allow` option to `./vite.config.js`.

```js
// ./vite.config.js

const config: UserConfig = {
    plugins: [sveltekit()],
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            // docs, ...
            allow: ['..'],
        },
    },
};
```

## Deploying to GitHub Pages

To deploy the site to GitHub Pagses, base address should be adjusted because gh-pages address has project name on the site address. This can be address by svelte-kit using `svelte.cnfig.js`.

```js
// ./svelte.config.js
import { resolve } from "path";
const dev = process.env.NODE_ENV === "development";

const config = {
    // ...
    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: null,
            precompress: false,
        }),
        paths: {
            base: dev ? "" : "/my-app",
        },
    },
```

## Developing

You can use npm scriptes automatically generated by svelte-kit.

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
