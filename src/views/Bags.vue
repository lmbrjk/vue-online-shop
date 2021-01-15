<template>
    <div class="products__wrapper">
        <Loader v-if="loading" />

        <Product 
            v-else
            v-for="product of products"
            v-bind:key="product.id"

            v-bind:product="product"
        />
    </div>
</template>

<script>
import Product from '@/components/app/Product.vue'
import fetchCategoryMixin from "@/mixins/fetchCategory.mixin"

export default {
    components: {
        Product
    },
    mixins: [fetchCategoryMixin],
    data(){
        return {
            products: [],
            category: 2,
            loading: true
        }
    }    
}
</script>