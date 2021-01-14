<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
