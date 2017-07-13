import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

// import userHome from '@/components/user/userHome'

import acting from '@/components/activity/acting'
import draft from '@/components/activity/draft'
import garbage from '@/components/activity/garbage'
import newAct from '@/components/activity/new'

import loginOrRegist from '@/components/login/in'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: {name: 'userHome', usrname: store.state.usr},
      component: acting,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/act/home',
      name: 'userHome',
      component: acting,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/act/draft',
      name: 'draft',
      component: draft,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/act/garbage',
      name: 'garbage',
      component: garbage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/act/new',
      name: 'newAct',
      component: newAct,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/usr/login',
      name: 'login',
      component: loginOrRegist // TODO: 需要用鉴权
    },
    {
      path: '/usr/registe',
      name: 'register',
      component: loginOrRegist // TODO: 需要用鉴权
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.usr && localStorage.token) {
      next()
    } else {
      next({
        path: '/usr/login'
      })
    }
  } else {
    next()
  }
})

export default router
