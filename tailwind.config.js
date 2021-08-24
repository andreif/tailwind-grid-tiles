const defautTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        '_includes/**/*.html',
        '_layouts/**/*.html',
        // './_posts/*.md',
        '*.html',
    ],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: '540px',
            ...defautTheme.screens,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
