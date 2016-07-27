import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import CommonHeader from './components/CommonHeader'
import Index from './pages/index'
import AboutUs from './pages/aboutUs'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

// vue router
Vue.use(VueRouter)

const router = new VueRouter({
  // history: true  //启用 HTML5 history 模式
})

router.map({
  '/': {
    component: CommonHeader,
    subRoutes: {
      '/': {
        component: Index
      },
      '/about': {
        component: {
          AboutUs
        }
      }
    }
  }
})

router.start(App, '#app')
