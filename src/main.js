import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { axiosInstance } from './axios/index'
import VueAxios from 'vue-axios'
import '@fortawesome/fontawesome-pro/css/all.css'

Vue.config.productionTip = false
Vue.use(VueAxios, {
  wrapper: axiosInstance
})

new Vue({
  router,
  store,
  axiosInstance,
  render: h => h(App)
}).$mount('#app')
