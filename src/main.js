// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import store from './store'

// 引入Element-ui
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import './assets/css/reset.css'
import './assets/css/base.css'

// 引入vue-resource
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(ElementUi)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.http.interceptors.push(function (request, next) {
  // modify method
  var token = localStorage.token
  if (token) {
    request.headers.set('x-access-token', token)
  }
  // // modify headers
  // request.headers.set('X-CSRF-TOKEN', 'TOKEN')
  // request.headers.set('Authorization', 'Bearer TOKEN')

  // continue to next interceptor
  next((response) => {
    if (response.status === 400 || response.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('usr')
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
