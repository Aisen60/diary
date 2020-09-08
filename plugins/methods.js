import { splicingFileUrl } from '../utils'
export default {
  install(vue) {
    vue.prototype.splicingFileUrl = splicingFileUrl
  },
}
