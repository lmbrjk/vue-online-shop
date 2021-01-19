<template>

  <div class="main-layout__wrapper">
    
    <Cart 
      v-model="isShow"
      @switch-cart="isShow = !isShow"
    />

    <Header 
      @switch-cart="isShow = !isShow"
    />
    
    <div class="container">
      <Sidebar />
      <main class="main">
        <div class="input-select__wrapper">
          <label class="input-select__label">
            Сортировать по:
            <select id="select" class="cursor">
              <option class="cursor">По цене</option>
              <option class="cursor">По популярности</option>
            </select>
          </label>
        </div>
        <router-view />      
      </main>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/app/Cart/Cart.vue'
import Header from '@/components/app/Header.vue'
import Sidebar from '@/components/app/Sidebar.vue'

export default {
  name: 'main-layout',
  components: {
    Cart, Header, Sidebar
  },
  data(){
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss">
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 44px;
  display: flex;
  flex-wrap: wrap;
}
.main {
  flex: 1 1 80%;

  .input-select {
    &__label {
      margin-right: 10px;
    }

    &__wrapper {
      line-height: $line-height-41;     
      @include fl-center;
      justify-content: flex-end;
    }
    
  }

  
}
</style>