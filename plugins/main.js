import Vue from 'vue'
import filters from './filters'
import methods from './methods'

Object.keys(filters).forEach((key) => {
  return Vue.filter(key, filters[key])
})

Vue.use(methods)
