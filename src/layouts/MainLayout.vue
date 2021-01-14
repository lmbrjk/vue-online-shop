<template>

  <div class="main-layout__wrapper">
    
    <Navbar />

    <Sidebar />    

    <main>      
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