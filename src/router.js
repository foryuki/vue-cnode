import Vue from 'vue'
import VueRouter from 'vue-router'
import { BaseContainer, TopicList, TopicDetail } from '#/pages'

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
    }
  }
})

export default router