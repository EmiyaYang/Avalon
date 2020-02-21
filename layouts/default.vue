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

    <nuxt />
  </article>
</template>

<style lang="scss" scoped>
.root {
  &-header {
    background-color: #e3eaf9;
    &__titles {
      padding: 20px 0;
      width: $containerWidth;
      margin: 0 auto;
    }
    &-nav {
      background-color: #6389e1;
      line-height: 47px;
      height: 47px;

      &__ul {
        width: $containerWidth;
        margin: 0 auto;
        padding: 0;
        text-decoration: none;

        li {
          display: inline;
          cursor: pointer;
          padding: 0 10px;
          color: white;
        }

        .nuxt-link-exact-active {
          color: black;
          cursor: unset;
        }
      }
    }
  }
}
</style>
