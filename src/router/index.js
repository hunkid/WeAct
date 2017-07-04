import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import userHome from '@/components/user/userHome'

import acting from '@/components/activity/acting'
import draft from '@/components/activity/draft'
import garbage from '@/components/activity/garbage'
import newAct from '@/components/activity/new'

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
    },
    {
      path: '/act/doing',
      name: 'acting',
      component: acting
    },
    {
      path: '/act/draft',
      name: 'draft',
      component: draft
    },
    {
      path: '/act/garbage',
      name: 'garbage',
      component: garbage
    },
    {
      path: '/act/new',
      name: 'newAct',
      component: newAct
    }
  ]
})
