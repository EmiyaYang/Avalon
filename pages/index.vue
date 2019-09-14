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
            <li
              v-for="(dItem, dIndex) in mItem.children"
              :key="`year-${index}-month-${mIndex}-day-${dIndex}`"
            >
              {{ `${dItem.day}-${dItem.title}` }}
            </li>
          </ul>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { content: 'Vue', num: 4 },
        { content: 'React', num: 4 },
        { content: 'Angular', num: 324 },
        { content: '数据结构', num: 100 },
        { content: '算法', num: 10 },
        { content: '算法', num: 10 },
        { content: '算法', num: 10 },
        { content: '算法', num: 10 },
        { content: '算法', num: 10 },
        { content: '很长很长很长很长很长', num: 1110 },
        {
          content:
            '很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
          num: 10
        }
      ],
      articles: [
        {
          year: 2019,
          children: [
            {
              month: 7,
              children: [
                { title: '七月团建', articleId: '233', day: 10 },
                { title: 'Vue', articleId: '233123', day: 1 }
              ]
            },
            {
              month: 10,
              children: [
                { title: '十月团建', articleId: '233', day: 22 },
                { title: '十月团建', articleId: '233432', day: 3 }
              ]
            }
          ]
        },
        {
          year: 2019,
          children: [
            {
              month: 7,
              children: [
                { title: '七月团建', articleId: '233', day: 10 },
                { title: 'Vue', articleId: '233123', day: 1 }
              ]
            },
            {
              month: 10,
              children: [
                { title: '十月团建', articleId: '233', day: 22 },
                { title: '十月团建', articleId: '233432', day: 3 }
              ]
            }
          ]
        },
        {
          year: 2019,
          children: [
            {
              month: 7,
              children: [
                { title: '七月团建', articleId: '233', day: 10 },
                { title: 'Vue', articleId: '233123', day: 1 }
              ]
            },
            {
              month: 10,
              children: [
                { title: '十月团建', articleId: '233', day: 22 },
                { title: '十月团建', articleId: '233432', day: 3 }
              ]
            }
          ]
        },
        {
          year: 2019,
          children: [
            {
              month: 7,
              children: [
                { title: '七月团建', articleId: '233', day: 10 },
                { title: 'Vue', articleId: '233123', day: 1 }
              ]
            },
            {
              month: 10,
              children: [
                { title: '十月团建', articleId: '233', day: 22 },
                { title: '十月团建', articleId: '233432', day: 3 }
              ]
            }
          ]
        },
        {
          year: 2019,
          children: [
            {
              month: 7,
              children: [
                { title: '七月团建', articleId: '233', day: 10 },
                { title: 'Vue', articleId: '233123', day: 1 }
              ]
            },
            {
              month: 10,
              children: [
                { title: '十月团建', articleId: '233', day: 22 },
                { title: '十月团建', articleId: '233432', day: 3 }
              ]
            }
          ]
        }
      ]
    }
  }

  // async asyncData({ res, req, $axios }) {
  //   // eslint-disable-next-line no-console

  //   const ip = await $axios.$get('http://localhost:3000/test')
  //   return { ip: '123', ip2: ip }
  // }
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
  }
}
</style>
