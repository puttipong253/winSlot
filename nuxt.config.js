export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'winslot888',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/styles/global.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vee-validate.js',
        { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
        { src: '~/plugins/vue-select.js', ssr: false },
        { src: '~/plugins/vue-clipboard2.js', ssr: false },
        { src: '~/plugins/vue-notification.js', ssr: false },
        { src: '~/plugins/vue-carousel-3d.js', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    tailwindcss: {
        // add '~tailwind.config` alias
        cssPath: '~/assets/styles/global.scss',
        configPath: 'tailwind.config.js',
        exposeConfig: true
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/svg-sprite',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate/dist/rules'],
    },

    env: {
        baseName: process.env.baseName
    }
}
