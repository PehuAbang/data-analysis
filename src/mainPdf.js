import Vue from 'vue'
import App from './AppPdf.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// actually mount to DOM


var  app = new Vue({
  router,
  render (h) { return h(App) } 
})

app.$mount('#app')
