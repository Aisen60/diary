import { WEB_TITLE } from './config'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: `${WEB_TITLE}'s blog`,
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      {
        name: 'keywords',
        content: 'aisen60, aisen60-blog',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'aisen60的博客，分享技术，记录生活',
      },
      {
        name: 'author',
        content: 'aisen60',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/index.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/main'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
}
