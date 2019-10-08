<template>
  <section class="tag">
    <slot />
  </section>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.tag {
  font-size: 12px;
  background-color: #0c9;
  border-radius: 1em;
  display: inline-block;
  padding: 0 1em;
  line-height: 2em;
  height: 2em;
  color: white;
}
</style>
