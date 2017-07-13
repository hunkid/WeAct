/**
 * @author Seant
 * @date 17/7/12
 */
import Vuex from 'vuex'
import Vue from 'vue'
export const USR_SIGNOUT = 'USR_SIGNOUT'
export const USR_SIGNIN = 'USR_SIGNIN'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    usr: null, // 目前登录的
    token: ''
  },
  mutations: {
    [USR_SIGNIN] (state, data) {
      localStorage.setItem('token', JSON.stringify(data.token))
      localStorage.setItem('usr', JSON.stringify(data.usr))
      state.usr = data.usr
      state.token = data.token
    },
    [USR_SIGNOUT] (state) {
      localStorage.removeItem('token')
      localStorage.removeItem('usr')
      state.usr = null
    }
  },
  actions: {
    [USR_SIGNIN] ({commit}, data) {
      commit(USR_SIGNIN, data)
    },
    [USR_SIGNOUT] ({commit}) {
      commit(USR_SIGNOUT)
    }
  }
})

export default store
