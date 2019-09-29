import colors from 'vuetify/es5/util/colors'
// import {routeList} from './plugins/router'


export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: '后台管理系统',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  loadingIndicator: '~/loading.html',
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.scss',
    '~/assets/app.scss',
    '~/assets/fonts.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/components' },
    { src: '@/plugins/axios' },
    { src: '@/plugins/locale' },
    { src: '@/plugins/router' },
    { src: '@/plugins/api' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    //https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        // dark: {
        //   primary: colors.blue.darken2,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3
        // }
        light: {
          main: '#1E88E5',
          success: '#00ae66',
          assist: '#ff4500'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  // router: {
  //   // middleware: ['authorities'],
  //   extendRoutes: routeList
  // }
}
