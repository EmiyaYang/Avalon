<template>
  <article class="root">
    <header class="root-header">
      <section class="root-header__titles">
        <h1>Avalon</h1>
        <h2>个人技术笔记整理与分享</h2>
      </section>
      <section class="root-header-nav">
        <ul class="root-header-nav__ul">
          <nuxt-link tag="li" to="/">
            主页
          </nuxt-link>
          <nuxt-link tag="li" to="/about">
            关于我
          </nuxt-link>
        </ul>
      </section>
    </header>

    <main class="root-main">
      <nuxt />
    </main>

    <footer class="root-footer">
      Copyright © 2019-present EmiyaYang
    </footer>
  </article>
</template>

<style lang="less" scoped>
.root {
  &-header {
    background-color: #e3eaf9;
    &__titles {
      padding: @padding-lg 0;
      width: @containerWidth;
      margin: 0 auto;
    }
    &-nav {
      background-color: @primary-color;
      line-height: 47px;
      height: 47px;

      &__ul {
        width: @containerWidth;
        margin: 0 auto;
        padding: 0;
        text-decoration: none;

        li {
          display: inline;
          cursor: pointer;
          padding: 0 @padding-xs;
          color: white;
        }

        .nuxt-link-exact-active {
          color: black;
          cursor: unset;
        }
      }
    }
  }

  &-main {
    // FIXME:
    min-height: calc(100vh - 187px - 70px);
    padding-bottom: @padding-lg;
  }

  &-footer {
    text-align: center;
    font-size: @font-size-sm;
    padding-top: @padding-xs;
    border-top: @border-width-base @border-style-base @border-color-base;
    height: 70px;
  }
}
</style>
