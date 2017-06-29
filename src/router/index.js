import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import userHome from '@/components/user/userHome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/user',
      name: 'userHome',
      component: userHome
    }
  ]
})
