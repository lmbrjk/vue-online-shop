<template>
    <div class="products__item">
        <div class="row">
            <div class="rating">
                <img class="rating__image" src="@/assets/images/rating.png">
                <span class="rating__number">{{ product.rating }}</span>
            </div>
            <div 
                v-on:click="addToCart"
                class="cart cursor"
            >

                <img src="@/assets/images/cart.png" class="cart__image">
            </div>
        </div>
        <div class="img__wrapper">
            <img 
                v-bind:src="'https://frontend-test.idaproject.com' + product.photo"
                class="img__image"
            >
        </div>
        <div class="description">
            <div class="title">
                {{ product.name | firstSymbolFilter }}
            </div>
            <div class="price">
                {{ product.price | currencyFilter }}
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
    props: {
        product: {
            type: Object
        }
    },
    methods: {
        ...mapActions(["ADD_TO_CART"]),
        addToCart(){
            this.ADD_TO_CART(this.product);
        }
    }
}
</script>