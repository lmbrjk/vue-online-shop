<template>
    <div class="products__wrapper">
        <div
            v-for="product of products"
            v-bind:key="product.id"
            
            class="products__item"
        >
            <div class="row">
                <img class="img" src="@/assets/images/rating.png">
                <span class="rating">{{ product.rating }}</span>
                <span class="cart">cart</span>
            </div>

            <img 
                v-bind:src="'https://frontend-test.idaproject.com' + product.photo"

                class="img"
            >
            
            <div class="title">{{ product.name }}</div>
            <div class="price">{{ product.price }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            products: [
                {id: 1, name: "рюкзак 1", price: 150000, rating: 4.5},
                {id: 2, name: "рюкзак 2", price: 150000, rating: 4.5},
                {id: 3, name: "рюкзак 3", price: 150000, rating: 4.5},
                {id: 4, name: "рюкзак 4", price: 150000, rating: 4.5},
                {id: 5, name: "рюкзак 5", price: 150000, rating: 4.5},
                {id: 6, name: "рюкзак 6", price: 150000, rating: 4.5}
            ]
        }
    },
    async mounted(){

        let products = await fetch("https://frontend-test.idaproject.com/api/product");

        let prodJson = await products.json();
        
        this.products = prodJson.slice(1, 10);

        products = null;
        prodJson = null;
    }
}
</script>

<style lang="scss">



</style>