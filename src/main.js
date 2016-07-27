import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import BaseContainer from './pages/baseContainer'
import Index from './pages/index'
import AboutUs from './pages/aboutUs'
import Friends from './pages/friends'

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
    component: BaseContainer,
    subRoutes: {
      '/': {
        component: Index
      },
      '/about': {
        component: AboutUs
      },
      '/friends': {
        component: Friends
      }
    }
  }
})

router.start(App, '#root')
