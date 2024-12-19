/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '40px',
                screens: {
                    '2xl': '2560px',
                },
            },
            height: {
                900: '900px',
            },
            maxHeight: {
                900: '900px',
            },
            minWidth: {
                944: '944px',
            },
            screens: {
                'sm-320': '320px',
                'sm-375': '375px',
                'sm-425': '425px',
                'md-768': '768px',
                mobile: '425px',
                tablet: '769px',
                laptop: '1025px',
                desktop: '1441px',
            },
            zIndex: {
                1000: '1000',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
