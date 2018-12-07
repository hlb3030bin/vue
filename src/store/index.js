import Vue from 'vue'
import Vuex from 'vuex'
import addre from './modules/addressedit'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    address: addre
  }
})
