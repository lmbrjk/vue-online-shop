<template>
    <div class="prod-in-cart">
        <div class="prod-in-cart__text">Товары в корзине</div>
        <ul class="prod-in-cart__list">
            <NesProductInCart 
                v-for="(product, index) of CART"
                v-bind:key="product.index"

                v-bind:product="product"
                v-on:removeFromCart="removeFromCart(index)"
            />
        </ul>
    </div>
</template>

<script>
import NesProductInCart from "@/components/app/Cart/NesProductInCart.vue"
import {mapActions, mapGetters} from "vuex"

export default {
    components: {
        NesProductInCart
    },
    computed: {
        ...mapGetters(["CART"])
    },
    methods: {
        ...mapActions(["DELETE_FROM_CART"]),
        removeFromCart(index){
            this.DELETE_FROM_CART(index);
        }
    }
}
</script>

<style lang="scss">

.prod-in-cart {

    &, &__text, &__list{
    width: 100%;}
    
    &__text {        
        line-height: $line-height-41;
        text-align: $sidebar-text-align;
    }

}

</style>