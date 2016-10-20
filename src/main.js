import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

// actually mount to DOM
//app.$mount('#app')

import router from './components/router/index.js'


var  app = new Vue({
  router,
  render (h) { return h(App) } 
})

app.$mount('#app')
