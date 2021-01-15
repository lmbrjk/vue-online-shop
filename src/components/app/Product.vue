<template>
    <div class="products__item">
        <div class="row">
            <div class="rating">
                <img class="rating__image" src="@/assets/images/rating.png">
                <span class="rating__number">{{ product.rating }}</span>
            </div>
            <div class="cart">
                <img src="@/assets/images/cart.png" class="cart__image">
            </div>
        </div>
        <div class="img__wrapper">
            <img 
                v-bind:src="'https://frontend-test.idaproject.com' + product.photo"
                class="img__image"
            >
        </div>
        <div class="title">
            {{ product.name }}
        </div>
        <div class="price">
            {{ product.price }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object
        }
    }
}
</script>