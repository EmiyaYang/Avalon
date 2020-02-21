import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('moment', function(
  dataStr:
    | string
    | number
    | void
    | moment.Moment
    | Date
    | (string | number)[]
    | moment.MomentInputObject
    | undefined,
  pattern: string = 'YYYY-MM-DD HH:mm:ss'
) {
  if (!dataStr) {
    return ''
  }

  return moment(dataStr).format(pattern)
})
