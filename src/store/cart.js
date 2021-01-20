export default {
    state: {
        cart: []
    },
    mutations: {
        ADD_PRODUCT(state, product){
            state.cart.push(product);
        },
        DELETE_PRODUCT(state, product){
            state.cart.splice(product, 1)
        },
        CLEAR_CART(state){
            state.cart = [];
        } 
    },
    actions: {
        ADD_TO_CART({commit}, product){
            commit("ADD_PRODUCT", product);
        },
        DELETE_FROM_CART({commit}, index){
            commit("DELETE_PRODUCT", index);
        }
    },
    getters: {
       CART: s => s.cart
    }
}