import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import userHome from '@/components/user/userHome'

import acting from '@/components/activity/acting'
import draft from '@/components/activity/draft'
import garbage from '@/components/activity/garbage'
import newAct from '@/components/activity/new'

import loginOrRegist from '@/components/login/in'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'acting',
      component: acting
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
    },
    {
      path: '/usr/login',
      name: 'login',
      component: loginOrRegist // TODO: 需要用鉴权
    },
    {
      path: '/usr/login',
      name: 'register',
      component: loginOrRegist // TODO: 需要用鉴权
    }
  ]
})
