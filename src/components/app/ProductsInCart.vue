<template>
    <div class="prod-in-cart">
        <div class="prod-in-cart__text">Товары в корзине</div>
        <ul class="prod-in-cart__list">
            <li
                v-for="product of CART"
                v-bind:key="product.id"

                class="prod-in-cart__item"
            >                
                <img 
                    v-bind:src="'https://frontend-test.idaproject.com' + product.photo"
                    class="image"
                >               
                <div class="description">
                    <div class="title">
                        {{ product.name | firstSymbolFilter }}
                    </div>
                    <div class="price">
                        {{ product.price }}
                    </div>
                </div>                
                <img 
                    src=""
                    class="recycle-bin"
                >                
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    computed: {
        ...mapGetters(["CART"])
    }
}
</script>

<style lang="scss">

.prod-in-cart {
    &__text {
        line-height: $line-height-41;
        text-align: $sidebar-text-align;
    }

    &__list {
        @include fl-center;
    }

    &__item {
        @include fl-center;

        .description {

        }

        .image {
            width: 70.5px;
            height: 90px;
        }
    }
    
}

</style>