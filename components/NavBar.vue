<template>
  <nav class="NavBar">
    <NuxtLink class="NavBar__item" to="/">首页</NuxtLink>
    <NuxtLink class="NavBar__item" to="/cv">关于</NuxtLink>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.NavBar {
  height: 60px;
  line-height: 60px;
  padding: 0 22.5px;
  font-size: 15px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  &__item {
    color: inherit;
    padding: 0 22.5px;
    text-decoration: none;

    &:hover {
      color: rgb(179, 179, 179);
    }

    &:visited {
      color: inherit;
    }
  }
}
</style>
