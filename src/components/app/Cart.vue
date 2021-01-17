<template>
    <div
        v-bind:class="{open: value}"
        class="cart__wrapper" 
    >
        <div class="cart__background"></div>
        <div class="cart__column">
            <div class="cart__row">
                <h1 class="title">Корзина</h1>
                <div
                    v-on:click="$emit('switch-cart')"
                    class="cart__close"
                >
                    &#10006;
                </div>                
            </div>
            <div
                v-if="!CART.length"          
                class="cart_empty"
            >
                <div class="text">Пока что вы ничего не добавили в корзину.</div>
                <div
                    v-on:click="$emit('switch-cart')"
                    class="button button_black"
                >
                    Перейти к выбору
                </div>
            </div>
            <ProductsInCart 
                v-else
            />
        </div>
    </div>
</template>

<script>
import ProductsInCart from "@/components/app/ProductsInCart.vue"
import {mapGetters} from "vuex"

export default {
    props: ['value'],
    components: {
        ProductsInCart
    },
    data(){
        return {}
    },
    computed: {
        ...mapGetters(["CART"])
    }    
}
</script>

<style lang="scss">

.cart {
    &__wrapper,
    &__row,
    &_empty {
        width: 100%;
    }

    &__wrapper {
        // для скрытия корзины
        display: none;

        position: fixed;
        height: 100%;
    }

    &__background {
        flex: 1 1 auto;  
        background: #FFFFFF;      
        opacity: 0.8;
    }

    &__column {
        padding: 48px 52px;
        flex: 1 1 auto;
        max-width: 460px;
        min-width: 320px;
        @include fl-center;
        flex-direction: column;
        @include white;
        z-index: 100;
    }

    &__row {
        @include fl-center;
        justify-content: space-between;
        @include m-b-cart-element;

        .title {
            line-height: $line-height-41;
        }

    }    

    &_empty {
        font-size: 22px;
        line-height: 28px;
        text-align: left;
        @include m-b-cart-element;

        .text {
            @include m-b-cart-element
        }
    }
}

// для скрытия корзины
.open {
    display: flex;
}
</style>