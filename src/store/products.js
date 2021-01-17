export default {
    state: {
      products: []
    },
    mutations: {
      SET_PRODUCTS_TO_STATE(state, products){
        state.products = products;
      }
    },
    actions: {
      async GET_PRODUCTS({commit}, category){
        try {
          const products = await fetch(`https://frontend-test.idaproject.com/api/product?category=${category}`);
          const prodJson = await products.json();

          commit("SET_PRODUCTS_TO_STATE", prodJson);
  
        } catch(e){
          commit("setError", e);
          throw e;
        }
      } 
    },
    getters: {
      PRODUCTS: s => s.products
    }
}