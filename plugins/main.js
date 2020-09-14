import Vue from 'vue'
import config, { APP_TITLE, APP_VERSION } from '../config'
import filters from './filters'
import methods from './methods'

Vue.prototype.config = config

Object.keys(filters).forEach((key) => {
  return Vue.filter(key, filters[key])
})

Vue.use(methods)

// eslint-disable-next-line no-console
console.log(
  `%c ${APP_TITLE} %c current version: ${APP_VERSION}`,
  'background: #35495e; padding: 1px; color: #fff',
  'background: #2b61c5; padding: 1px; color: #fff'
)

// eslint-disable-next-line no-console
console.log('hello, why are you open the devtools?')

// eslint-disable-next-line no-console
console.log('If it helps you or if you like it, can you give me a star? thanks')

// eslint-disable-next-line no-console
console.log('repository url: https://github.com/Aisen60/blog')
