<template>
  <header class="header">
    <div class="header__wrapper">
      <h1 class="title">TestList</h1>
      <div class="cart">
        <a
          v-on:click="$emit('switch-cart')"
        >
          <img src="@/assets/images/cart-header.png" class="cart__image">
          <div
            v-if="CART.length"

            class="cart-length"
          >
            {{ CART.length }}
          </div>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  data(){
    return {}
  },
  computed: {
    ...mapGetters(["CART"]),
  }
}
</script>

<style lang="scss">
.header {
  @include white;

  &__wrapper {
    margin: 0 auto;
    padding: 0 88px;
    max-width: 1440px;
    height: 66px;
    @include fl-center;
    justify-content: space-between;

    .title {
      font-size: 22px;
      line-height: 28px;    
    }

    .cart {
      @include fl-center;
      position: relative;

      &__image {
        width: 24px;
        height: 26.4px;
      }

      .cart-length {
        width: 15px;
        height: 15px;
        @include fl-center;
        justify-content: center;
        position: absolute;
        top: -5px;
        right: -5px;
        border-radius: 100%;
        background-color: $color-text-grey-light;      
        font-size: 8px;        
        color: #FFFFFF;
      }
    }

  }
}

</style>