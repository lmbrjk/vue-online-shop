<template>

  <div>
    
    <Navbar />

    <Sidebar />    

    <main>
      <div>
          <router-view />
      </div>
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