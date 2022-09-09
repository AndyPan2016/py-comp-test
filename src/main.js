import Vue from 'vue'
import App from './App.vue'
import './service/axios.service'
import router from './router'
import store from './store'
import { PYComp } from 'py-comp'
PYComp.install(Vue)

Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
