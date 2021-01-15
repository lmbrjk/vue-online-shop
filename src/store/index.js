import Vue from 'vue'
import Vuex from 'vuex'

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
  actions: {
    async fetchProducts({commit}, category){
      try {
        const products = await fetch(`https://frontend-test.idaproject.com/api/product?category=${category}`);
        const prodJson = await products.json();

        return prodJson;

      } catch(e){
        commit("setError", e);
        throw e;
      }
    }
    
  },
  modules: {
  }
})
