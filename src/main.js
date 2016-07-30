import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'

import BaseContainer from '#/pages/BaseContainer'
import TopicList from '#/pages/TopicList'
import { TopicDetail } from '#/pages'
import Index from '#/pages/index'
import AboutUs from '#/pages/aboutUs'
import Friends from '#/pages/friends'

//vue-resource config
Vue.use(VueResource)
Vue.http.options.root = '/root'
// Vue.http.options.commom['Accept'] = 'application/json'

// vue router
Vue.use(VueRouter)

const router = new VueRouter({
  history: true  //启用 HTML5 history 模式
})

router.map({
  '/': {
    component: BaseContainer,
    subRoutes: {
      '/': {
        component: TopicList
      },
      '/topicdetail/:id': {
        component: TopicDetail
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
