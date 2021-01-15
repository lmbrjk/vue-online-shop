<template>
  <div class="nav">
    <h1 class="nav__title">TestList</h1>
    <nav class="nav__wrapper">
      корзина
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style lang="scss">

.nav {
  margin: 0 88px;
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include white;

  &__title {
    font-size: 22px;
    line-height: 28px;    
  }  
  
}

</style>