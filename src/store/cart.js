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
        },
        LOAD_CART_FROM_LOCALSTORAGE(state, cartFromLocalStorage){
            state.cart = cartFromLocalStorage;
        }
    },
    actions: {
        ADD_TO_CART({commit, getters}, product){
            commit("ADD_PRODUCT", product);
            
            // сохраняем в localStorage корзину с товарами
            localStorage.setItem("cart", getters.CART_JSON);
            
        },
        async DELETE_FROM_CART({commit}, index){
            //удаляем из state.cart товар
            commit("DELETE_PRODUCT", index);

            /* удаляем из localStorage товар */
            const storageData = localStorage.getItem("cart");
            
            const jsonStorageData = JSON.parse(storageData);

            jsonStorageData.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(jsonStorageData));
            /* !/ удаляем из localStorage товар */

        },
        // проверка на наличие товаров в корзине при открытии окна
        CHECK_LOCALSTORAGE({commit}){
            // если есть в localStorage элемент cart то перезаписываем state.cart
            if(localStorage.cart){
                commit("LOAD_CART_FROM_LOCALSTORAGE", JSON.parse(localStorage.cart));
            }
        }
    },
    getters: {
       CART: s => s.cart,
       // используется в actions ADD_TO_CART для записи в localStorage state.cart
       CART_JSON: s => JSON.stringify(s.cart)
    }
}