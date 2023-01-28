const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
    content: ['./src/**/*.{html,js,svelte,ts,md}', './docs/**/*.md'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '"Nanum Gothic"', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/typography')],
    darkMode: 'class',
};

module.exports = config;
