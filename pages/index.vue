<template>
  <div class="root">
    <section class="root__tagGroup tagGroup">
      <div
        v-for="(item, index) in tags"
        :key="`tag-${index}`"
        class="root__tagGroup__item"
      >
        {{ `${item.content}(${item.num})` }}
      </div>
    </section>
    <hr class="root__hr" />
    <section class="root__articleGroup articleGroup">
      <div
        v-for="(item, index) in articles"
        :key="`year-${index}`"
        class="articleGroup__yearList"
      >
        <p class="articleGroup__yearList__title">{{ item.year }}</p>
        <ul
          v-for="(mItem, mIndex) in item.children"
          :key="`year-${index}-month-${mIndex}`"
          class="articleGroup__monthList"
        >
          <p class="articleGroup__monthList__title">{{ mItem.month }}</p>
          <ul class="articleGroup__dayList">
            <NuxtLink
              v-for="(dItem, dIndex) in mItem.children"
              :key="`year-${index}-month-${mIndex}-day-${dIndex}`"
              :to="{ name: 'articles-id', params: { id: dItem.articleId } }"
              tag="li"
              class="articleGroup__dayList__item"
            >
              {{ `${dItem.day}-${dItem.title}` }}
            </NuxtLink>
          </ul>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ res, req, $axios }) {
    const tagsRes = await $axios.get('/tags')

    const articlesRes = await $axios.get('/articles')

    return {
      tags: tagsRes.data.data.tags,
      articles: articlesRes.data.data.articles
    }
  }
}
</script>

<style lang="scss">
.root {
  margin: 0 auto;
  padding-top: 100px;
  max-width: 700px;
  margin: 0 auto;

  &__tagGroup {
    display: flex;
    flex-wrap: wrap;

    &__item {
      display: inline-block;
      padding: 6px;
    }
  }

  &__hr {
    margin-top: 1rem;
    height: 1px;
    background-color: rgb(238, 238, 238);
    border: none;
  }
}

.articleGroup {
  padding: 1rem;

  &__yearList {
    &__title {
      font-size: 1.5rem;
    }
  }

  &__monthList {
    list-style-type: disc;
    margin: 1rem 2rem;

    &__title {
      font-size: 1.2rem;
    }
  }
  &__dayList {
    padding: 0.5rem 2rem;

    &__item {
      cursor: pointer;
    }
  }
}
</style>
