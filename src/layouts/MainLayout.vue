<template>

  <div class="main-layout__wrapper">
    
    <Navbar />

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
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
import Sidebar from '@/components/app/Sidebar.vue'

export default {
  name: 'main-layout',
  components: {
    Navbar, Sidebar
  },
  data(){
    return {}
  }
}
</script>

<style lang="scss">
.main {
  flex: 1 1 80%;
  //width: 1100px;

  .input-select {
    &__wrapper {
      line-height: $line-height-41;
      padding-right: 88px;
      display: flex;
      justify-content: flex-end;
    }

    &__label {
      
    }
    
  }

  
}
</style>