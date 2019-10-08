<template>
  <nav class="nav-bar" :class="{ 'nav-bar--hidden': hidden }">
    <NuxtLink class="nav-bar__item" to="/">首页</NuxtLink>
    <NuxtLink class="nav-bar__item" to="/cv">关于</NuxtLink>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      hidden: false,
      listener: null
    }
  },

  mounted() {
    this.register()
  },

  methods: {
    register() {
      let ticking = false
      let lastY = 0

      const step = () => {
        const currentY =
          window.pageYoffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop

        this.hidden = currentY > lastY

        lastY = currentY
      }

      this.listener = () => {
        if (ticking) return

        ticking = true

        window.requestAnimationFrame
          ? window.requestAnimationFrame(step)
          : setTimeout(step, 250)

        ticking = false
      }

      window.addEventListener('scroll', this.listener)
    },

    cancel() {
      window.removeEventListener('scroll', this.listener)
      this.listener = null
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-bar {
  height: 60px;
  line-height: 60px;
  padding: 0 22.5px;
  font-size: 15px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  transition: height 1s ease;

  &--hidden {
    height: 0;
  }

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
