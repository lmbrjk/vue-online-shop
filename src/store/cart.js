export default {
    state: {
        cart: []
    },
    mutations: {
        ADD_PRODUCT(state, product){
            state.cart.push(product);
        }
    },
    actions: {
        ADD_TO_CART({commit}, product){
            commit("ADD_PRODUCT", product);
        }
    },
    getters: {
       CART: s => s.cart
    }
}