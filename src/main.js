import Vue from 'vue'

// Importamos instancia do axios 
import './plugins/axios';

import './assets/css/allcss';


import { App } from './App'
import router from './router'
import store from './store'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
