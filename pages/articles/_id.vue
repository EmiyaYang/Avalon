<template>
  <section class="root">
    <h1>文章详情页</h1>
    <section>
      {{ content }}
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },

  async asyncData({ route, params, res, req, $axios }) {
    const { id } = params

    if (!id) {
      return {}
    }

    const article = await $axios.get(`/article/${params.id}`)

    return {
      id,
      content: article.data.data.content
    }
  },

  created() {
    // REVIEW: beforeCreated 还拿不到asyncDate的数据

    if (!this.id) this.$router.replace({ name: '404' })
  }
}
</script>
<style lang="scss" scoped></style>
