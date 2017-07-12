/**
 * @author Seant
 * @date 17/7/12
 */
import Vuex from 'vuex'

const USR_SIGNOUT = 'USR_SIGNOUT'
const USR_SIGNIN = 'USR_SIGNIN'
const store = new Vuex.Store({
  state: {
    usr: null, // 目前登录的
    token: null
  },
  mutations: {
    [USR_SIGNIN] (state, data) {
      localStorage.setItem('token', JSON.stringify(data.session))
      state.usr = data.usr
    },
    [USR_SIGNOUT] (state) {
      localStorage.removeItem('token')
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
