import { parseTime } from '../utils'

export default {
  parseTime: (str, cFormat = '{y}-{m}-{d} {h}:{i}') => {
    return parseTime(str, cFormat)
  },
}
