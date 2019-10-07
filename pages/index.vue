<template>
  <section class="root">
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
        v-for="(year, index) in articlesTL"
        :key="`year-${index}`"
        class="articleGroup__yearList"
      >
        <p class="articleGroup__yearList__title">{{ index }}</p>
        <ul
          v-for="(month, mIndex) in year"
          :key="`year-${index}-month-${mIndex}`"
          class="articleGroup__monthList"
        >
          <p class="articleGroup__monthList__title">{{ mIndex }}</p>
          <ul class="articleGroup__dayList">
            <NuxtLink
              v-for="(day, dIndex) in month"
              :key="`year-${index}-month-${mIndex}-day-${dIndex}`"
              :to="{ name: 'articles-id', params: { id: day.id } }"
              tag="li"
              class="articleGroup__dayList__item"
            >
              {{ `${dIndex}-${day.title}` }}
            </NuxtLink>
          </ul>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import { timelineSerial } from '@/utils'

export default {
  computed: {
    articlesTL() {
      if (!this.articles) return {}

      return timelineSerial(this.articles)
    }
  },

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
