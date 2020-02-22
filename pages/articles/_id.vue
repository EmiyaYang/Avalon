<template>
  <article class="container">
    <header class="container-header">
      <h1>Managing your business made easy</h1>
      <section class="container-header-tags">
        <a-tag>js</a-tag>
      </section>
    </header>

    <main class="container-main">
      <p>
        Welcome to your blog post. Use this space to connect with your readers
        and potential customers in a way that’s current and interesting. Think
        of it as an ongoing conversation where you can share updates about
        business, trends, news, and more.
      </p>

      <p>
        Welcome to your blog post. Use this space to connect with your readers
        and potential customers in a way that’s current and interesting. Think
        of it as an ongoing conversation where you can share updates about
        business, trends, news, and more.
      </p>

      <p>
        Welcome to your blog post. Use this space to connect with your readers
        and potential customers in a way that’s current and interesting. Think
        of it as an ongoing conversation where you can share updates about
        business, trends, news, and more.
      </p>
    </main>

    <footer class="container-footer">
      <span class="container-footer__views">
        9098123 人看过
      </span>
      <span class="container-footer__time">
        最后编辑于 2018
      </span>
    </footer>
  </article>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.container {
  padding: @padding-lg;
  min-height: 100vh;

  &-header {
    &-tags {
      margin-bottom: @padding-xs;
    }
  }

  &-main {
    line-height: 1.5;
    font-size: 18px;
  }

  &-footer {
    display: flex;
    align-items: center;
    font-size: @font-size-sm;

    &__views {
      flex-grow: 1;
    }
  }
}
</style>
