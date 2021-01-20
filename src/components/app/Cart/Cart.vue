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
                    v-on:click="closeCart"
                    class="cart__close cursor"
                >
                    &#10006;
                </div>                
            </div>
            <div
                v-if="!CART.length && !send"          
                class="cart_empty"
            >
                <div class="text">Пока что вы ничего не добавили в корзину.</div>
                <div
                    v-on:click="$emit('switch-cart')"
                    class="button button_black cursor"
                >
                    Перейти к выбору
                </div>
            </div>
            <div 
                v-else-if="!send"

                class="products-in-cart__wrapper"
            >
                <ProductsInCart />
                <Form 
                    v-on:send="send = true"
                />
            </div>
            <div
                v-else

                class="send-form-ok"
            >
                <img src="@/assets/images/ok.png">
                <p class="send-form-ok__title">Заявка успешно отправлена</p>
                <p class="send-form-ok__text">Вскоре наш менеджер свяжется с Вами</p>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsInCart from "@/components/app/Cart/ProductsInCart.vue"
import Form from "@/components/app/Cart/Form.vue"
import {mapGetters} from "vuex"

export default {
    props: ['value'],
    components: {
        ProductsInCart, Form
    },
    data(){
        return {
            send: false
        }
    },
    computed: {
        ...mapGetters(["CART"])
    },
    methods: {
        closeCart(){
            this.$emit('switch-cart');
            
            if(this.send){
                this.send = false;
            }
        }
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
        z-index: 400;
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
        align-items: stretch;
        @include white;
        z-index: 100;
        overflow: auto;
    }

    &__row {
        flex: 1 1 auto;
        @include fl-center;
        justify-content: space-between;
        max-height: 41px;
        @include m-b-cart-element;

        .title {
            line-height: $line-height-41;
        }

    }    

    &_empty {
        flex: 1 2 auto;
        font-size: 22px;
        line-height: 28px;
        text-align: left;
        @include m-b-cart-element;

        .text {
            @include m-b-cart-element
        }
    }
}

.send-form-ok {
    flex: 1 2 auto;
    @include fl-center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    
    &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
    }

    &__text {
        font-size: 16px;
        line-height: 21px;
    }
}
// для скрытия корзины
.open {
    display: flex;
}
</style>