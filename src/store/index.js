import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

const modules = {
  'user': user,
  'permission': permission
}

const store = new Vuex.Store({
  modules,
  getters
})

export default store;