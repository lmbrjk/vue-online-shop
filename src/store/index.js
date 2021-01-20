import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'
import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error){
      state.error = error;
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    products, cart
  }
})
