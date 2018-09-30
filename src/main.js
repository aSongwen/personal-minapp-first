import Vue from 'vue'
import App from './App'
import Http from './api/http'
import store from './store'
// import GobalCom from '@/components'
import '@/style/common.scss'

Vue.config.productionTip = false
App.mpType = 'app'

// Vue.use(GobalCom.titleCom)

Vue.prototype.$store = store
Vue.prototype.$http = new Http()

const app = new Vue(App)

app.$mount()
