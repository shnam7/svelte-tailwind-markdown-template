const config = {
    content: ['./src/**/*.{html,js,svelte,ts,md}'],

    theme: {
        extend: {},
    },

    plugins: [require('@tailwindcss/typography')],
};

module.exports = config;
