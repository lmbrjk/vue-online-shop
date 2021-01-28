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
      PRODUCTS: s => s.products,
      // сортировка товаров по цене (по возрастанию)
      PRODUCTS_BY_PRICE: function(s){
        s.products.sort(function(a, b){
          return a.price - b.price;
        })
      },
      // сортировка товаров по рейтингу (по возрастанию)
      PRODUCTS_BY_RATING: function(s){
        s.products.sort(function(a, b){
          return a.rating - b.rating;
        })
      }
    }
}