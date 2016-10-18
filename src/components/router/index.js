import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Report from '../report/ReportMain.vue'
import Home from '../Home.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/home', component: Home },
    { path: '/report/:id', component: Report }
    ,{ path: '/pdf/:id', component: Report }
    //,{ path: '*', redirect: '/home' }
  ]
})
