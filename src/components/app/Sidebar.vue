<template>
  <div class="sidebar">
    <h2 class="sidebar__title">Каталог</h2>
    <ul class="sidebar__list">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"        
        v-bind:to="link.url"

        class="sidebar__item cursor"
      >
        {{ link.title }}
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
        {title: "Портфели", url: "/briefcases"},
        {title: "Сумки", url: "/bags"}
      ]
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  padding-left: 88px;
  flex: 1 1 20%;

  &__title, &__item {
    line-height: $line-height-41;
    text-align: $sidebar-text-align;
  }

  &__item {
    text-decoration: underline;

    &:visited {
      color: #959DAD;
      text-decoration: none;
    }
    
    &:hover {
      color: $color-text-grey;
      text-decoration: none;
    }
    
  }
}
</style>