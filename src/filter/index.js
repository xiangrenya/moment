import moment from 'moment'
moment.locale('zh-cn')
export default {
  install (Vue) {
    Vue.filter('formatDate', (val, format = 'YYYY-MM-DD HH:mm') => {
      return moment(val).format(format)
    })
    Vue.filter('fromNow', (val) => {
      return moment(val).fromNow()
    })
  }
}
