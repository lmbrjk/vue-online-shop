<template>
  <div class="sidebar">
    <h2 class="sidebar__title">Каталог</h2>
    <ul class="sidebar__list">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"        
        v-bind:to="link.url"
      >
        <a>{{ link.title }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  data(){
    return {
      links: [
        {title: "Рюкзаки", url: "/backpacks"},
        {title: "Футболки", url: "/t-shirts"},
        {title: "Рубашки", url: "/shirts"}
      ]
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  flex: 1 1 auto;
}
</style>>