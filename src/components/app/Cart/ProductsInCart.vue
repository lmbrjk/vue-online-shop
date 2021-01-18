<template>
    <div class="prod-in-cart">
        <div class="prod-in-cart__text">Товары в корзине</div>
        <ul class="prod-in-cart__list">
            <NesProductInCart 
                v-for="product of CART"
                v-bind:key="product.id"

                v-bind:product="product"
            />
        </ul>
    </div>
</template>

<script>
import NesProductInCart from "@/components/app/Cart/NesProductInCart.vue"
import {mapGetters} from "vuex"

export default {
    components: {
        NesProductInCart
    },
    computed: {
        ...mapGetters(["CART"])
    }
}
</script>

<style lang="scss">

.prod-in-cart {

    @include fl-center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    @include fl-center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    
    &__text {
        width: 100%;
        line-height: $line-height-41;
        text-align: $sidebar-text-align;
    }

     &__list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
    }
}

</style>