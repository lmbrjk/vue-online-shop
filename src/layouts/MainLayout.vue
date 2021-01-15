<template>

  <div class="main-layout__wrapper">
    
    <Header />
    
    <div class="container">
      <Sidebar />
      <main class="main">
        <div class="input-select__wrapper">
          <label class="input-select__label">
            Сортировать по:
            <select id="select">
              <option>По цене</option>
              <option>По популярности</option>
            </select>
          </label>
        </div>
        <router-view />      
      </main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/app/Header.vue'
import Sidebar from '@/components/app/Sidebar.vue'

export default {
  name: 'main-layout',
  components: {
    Header, Sidebar
  },
  data(){
    return {}
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