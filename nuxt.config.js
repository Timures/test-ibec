export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
            { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: 'blue' },
    /*
     ** Global CSS
     */
    css: [
        '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/ymapPlugin.js', mode: 'client' }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        scss: [
            'assets/scss/main.scss'
        ]
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}