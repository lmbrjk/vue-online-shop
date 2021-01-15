<template>
  <header class="header">
    <div class="header__wrapper">
      <h1 class="title">TestList</h1>
      <div class="cart">
          <img src="@/assets/images/cart-header.png" class="cart__image">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {}
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

      &__image {
        width: 24px;
        height: 26.4px;
      }
    }

  }
}

</style>