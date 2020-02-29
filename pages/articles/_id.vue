<template>
  <article class="container">
    <header class="container-header">
      <h1>{{ article.title }}</h1>
      <section class="container-header-tags">
        <a-tag v-for="item in article.tags" :key="item.id">
          {{ item.name }}
        </a-tag>
      </section>
    </header>

    <main class="container-main">
      {{ article.content }}
    </main>

    <footer class="container-footer">
      <span class="container-footer__views">
        9098123 人看过
      </span>
      <span class="container-footer__time">
        最后编辑于 {{ article.updatedAt | moment('YYYY-MM-DD') }}
      </span>
    </footer>
  </article>
</template>

<script>
import { getArticleById } from '@/apis/articles'

export default {
  async asyncData({ params }) {
    const data = await getArticleById({ id: params.id })

    return {
      article: data
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  // 触发 BFC
  overflow: hidden;
  margin-top: @padding-lg;
  border-radius: @border-radius-base;
  padding: 50px;
  border: @border-width-base @border-style-base @border-color-base;

  &-header {
    &-tags {
      margin-bottom: @padding-xs;
    }
  }

  &-main {
    line-height: 1.5;
    font-size: @font-size-lg;
    padding-bottom: @padding-lg;
  }

  &-footer {
    display: flex;
    align-items: center;
    font-size: @font-size-sm;
    padding-top: @padding-xs;
    border-top: @border-width-base @border-style-base @border-color-base;

    &__views {
      flex-grow: 1;
    }
  }
}
</style>
