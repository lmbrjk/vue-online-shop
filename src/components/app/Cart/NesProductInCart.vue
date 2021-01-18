<template>
    <li class="prod-in-cart__item">                
        <img 
            v-bind:src="'https://frontend-test.idaproject.com' + product.photo"
            class="image"
        >               
        <div class="description">
            <div>
                <div class="title">
                    {{ product.name | firstSymbolFilter }}
                </div>
                <div class="price">
                    {{ product.price | currencyFilter }}
                </div>
            </div>
            <div class="rating">
                <img class="rating__image" src="@/assets/images/rating.png">
                <span class="rating__number">{{ product.rating }}</span>
            </div>
        </div>                
        <img
            src="@/assets/images/recycle-bin.png"
            class="recycle-bin"
        >                
    </li>
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

<style lang="scss">

.prod-in-cart {
    
    &__item {
        @include fl-center;
        justify-content: space-between;
        @include white;
        padding: 15px 25px;
        
        .description,
        .recycle-bin {
            margin-left: 15px;
        }

        .description {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;

            .title,
            .price {
                @include text-in-product;
            }

            .price {
                font-weight: 700;
            }

            .rating {
                @include fl-center;
                
                &__image {
                    width: 20px;
                    height: 20px;
                }
                &__number {
                    font-weight: 700;
                    font-size: 13px;
                    color: #F2C94C;
                }

            }
            
        }

        .image {
            width: 70.5px;
            height: 90px;
        }
    }
    
}

</style>