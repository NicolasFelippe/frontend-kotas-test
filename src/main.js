import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/app.scss'
import 'material-icons/iconfont/material-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
