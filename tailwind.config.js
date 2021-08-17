module.exports = {
    mode: 'jit',
    // These paths are just examples, customize them to match your project structure
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            'pink-1': '#FF4359',
            'white': '#ffffff',
            'background': '#000000',
            'yellow': '#FFD348',
            'gray-1': '#4F4F4F',
            'gold-1' : '#BE7A22',
            'gold-2' : '#FFCF5A',
            'black-1' : '#111111',
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'mdx': '950px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px'
            // => @media (min-width: 1280px) { ... }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
