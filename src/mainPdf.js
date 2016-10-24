import Vue from 'vue'
import App from './AppPdf.vue'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css'
// actually mount to DOM
Vue.use(VueResource);

var  app = new Vue({
  
  render (h) { return h(App) } 
})

app.$mount('#app')
