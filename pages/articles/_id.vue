<template>
  <section class="root">
    <Markdown class="root__content" :value="content" />

    <section class="root__status">
      <div class="root__status__tags">
        <Tag v-for="(item, index) in tags" :key="'tag:' + index">
          {{ item.name }}
        </Tag>
      </div>
    </section>
  </section>
</template>

<script>
import Tag from '@/components/Tag'
import Markdown from '@/components/Markdown'

export default {
  components: {
    Tag,
    Markdown
  },

  async asyncData({ route, params, res, req, $axios }) {
    const { id } = params

    if (!id) {
      return {
        id: '',
        content: ''
      }
    }

    // eslint-disable-next-line handle-callback-err
    const { data } = await $axios.get(`/article/${params.id}`)

    return {
      id,
      title: data.title || '',
      content: data.content.replace(/\n/gm, '<br/>') || '',
      tags: data.tags || []
    }
  },

  created() {
    // REVIEW: beforeCreated 还拿不到asyncDate的数据

    if (!this.id) this.$router.replace({ name: '404' })
  }
}
</script>
<style lang="scss" scoped>
.root {
  &__status {
    padding: 1em 0;
  }
}
</style>
