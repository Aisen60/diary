import Vue from 'vue'
import { WEB_TITLE, APP_VERSION } from '../config'
import filters from './filters'
import methods from './methods'

Object.keys(filters).forEach((key) => {
  return Vue.filter(key, filters[key])
})

Vue.use(methods)

// eslint-disable-next-line no-console
console.log(
  `%c ${WEB_TITLE} %c current version: ${APP_VERSION}`,
  'background: #35495e; padding: 1px; color: #fff',
  'background: #2b61c5; padding: 1px; color: #fff'
)
