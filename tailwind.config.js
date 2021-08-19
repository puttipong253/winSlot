module.exports = {
    mode: 'jit',
    // These paths are just examples, customize them to match your project structure
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                'fade-ping': {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0)'
                    },
                    // '100%': {
                    //     opacity: '1',
                    //     transform: 'scale(0)'
                    // },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-in-right': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
            },
            animation: {
                'fade-ping': 'fade-ping 0.2s ease-out',
                'fade-in-up': 'fade-in-up 1s ease-out',
                'fade-in-right': 'fade-in-right 1s ease-out',
            },
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
            'gold' : '0px 4px 48px rgba(255, 207, 90, 0.5)'
        },
        colors: {
            'pink-1': '#FF4359',
            'white': '#ffffff',
            'background': '#000000',
            'yellow': '#FFD348',
            'gray-1': '#4F4F4F',
            'gray-2': 'rgba(255, 255, 255, 0.05)',
            'gold-1' : '#BE7A22',
            'gold-2' : '#FFCF5A',
            'black': '#000000',
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
