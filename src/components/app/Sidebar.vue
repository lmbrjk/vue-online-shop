<template>
  <div class="sidebar">
    <h2>Каталог</h2>
    <ul>
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