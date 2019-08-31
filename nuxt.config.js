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
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@_mktia' },
      {
        name: 'twitter:title',
        content: 'MKTIA.COM'
      },
      {
        name: 'twitter:description',
        content: 'ひよこエンジニア / Python / JS / Blockchain'
      },
      { name: 'twitter:image', content: '/ogp.jpg' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content: 'ひよこエンジニア / Python / JS / Blockchain'
      },
      { property: 'og:title', content: 'MKTIA.COM' },
      { property: 'og:url', content: 'https://www.mktia.com' },
      { property: 'og:image', content: '/ogp.jpg' },
      { property: 'og:site_name', content: 'MKTIA.COM' },
      { property: 'og:locale', content: 'ja_JP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/ga.js', ssr: false }],
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
    'bootstrap-vue/nuxt'
  ],
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
