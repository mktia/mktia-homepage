export default {
  // mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@mktia' },
      { name: 'twitter:creator', content: '@mktia' },
      { property: 'og:url', content: 'https://www.mktia.com' },
      { property: 'og:title', content: 'mktia is' },
      {
        property: 'og:description',
        content: 'ひよこエンジニア / Python / JS / Blockchain'
      },
      { property: 'og:image', content: 'https://www.mktia.com/ogp.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'MKTIA.COM' },
      { property: 'og:locale', content: 'ja_JP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/ga.js', ssr: false }, '~/plugins/fontawesome.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'nuxt-svg-loader',
    'nuxt-webfontloader'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  webfontloader: {
    custom: {
      families: [
        'Noto Sans JP:n3,n4',
        'Marcellus'
      ],
      urls:[
        "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap",
        "https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
      ]
    }
  }
}
