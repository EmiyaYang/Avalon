<template>
  <section class="root">
    <TagGroup
      v-model="selectedTags"
      :tags="tags"
      class="root__tagGroup"
    ></TagGroup>
    <hr class="root__hr" />

    <section class="root__toolbar">
      <label>
        <span>时间轴</span>
        <input v-model="viewType" type="radio" value="timeline" />
      </label>
      <label>
        <span>列表</span>
        <input v-model="viewType" type="radio" value="list" />
      </label>
    </section>

    <section
      v-show="viewType === 'timeline'"
      v-loading="loading"
      class="root__articleGroup articleGroup"
    >
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
            <ul
              v-for="(dayList, dIndex) in month"
              :key="`year-${index}-month-${mIndex}-day-${dIndex}`"
            >
              <NuxtLink
                v-for="(day, i) in dayList"
                :key="`year-${index}-month-${mIndex}-day-${dIndex}-${i}`"
                :to="{ name: 'articles-id', params: { id: day.id } }"
                tag="li"
                class="articleGroup__dayList__item"
              >
                {{ `${dIndex}-${day.title}` }}
              </NuxtLink>
            </ul>
          </ul>
        </ul>
      </div>
    </section>

    <section
      v-show="viewType === 'list'"
      class="root__articleGroup articleGroup"
    >
      <ul>
        <NuxtLink
          v-for="(item, index) in articles"
          :key="'article' + index"
          tag="li"
          :to="{ name: 'articles-id', params: { id: item.id } }"
        >
          {{ item.title }}
        </NuxtLink>
      </ul>
    </section>
  </section>
</template>

<script>
import { timelineSerial, to } from '@/utils'

import TagGroup from '@/components/TagGroup'

export default {
  components: {
    TagGroup
  },
  data() {
    return {
      viewType: 'timeline',
      selectedTags: [],
      loading: false
    }
  },
  computed: {
    articlesTL() {
      if (!this.articles) return {}

      return timelineSerial(this.articles)
    }
  },

  watch: {
    selectedTags(val) {
      this.query()
    }
  },

  async asyncData({ res, req, $axios }) {
    const tagsRes = await $axios.get('/tags')

    const articlesRes = await $axios.get('/articles')

    return {
      tags: tagsRes.data.tags,
      articles: articlesRes.data.articles
    }
  },

  methods: {
    async query() {
      this.loading = true

      const [err, res] = await to(
        this.$axios.get('/articles', {
          params: {
            tags: this.selectedTags + ''
          }
        })
      )

      this.loading = false

      if (err) {
        // eslint-disable-next-line no-console
        console.warn(err)
        return err
      }

      this.articles = res.data.articles
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
