<template>
  <a-spin :spinning="loading" class="mindmap">
    <client-only placeholder="正在加载......">
      <a-carousel arrows>
        <div
          slot="prevArrow"
          class="custom-slick-arrow"
          style="left: 10px;zIndex: 1"
        >
          <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
          <a-icon type="right-circle" />
        </div>

        <div v-for="(item, index) in mindMapList" :key="item.id + index">
          <MindMap
            :id="item.id + index"
            :data="item"
            @node:click="handleNodeClick"
          />
        </div>
      </a-carousel>
    </client-only>
  </a-spin>
</template>

<script>
import { getArticles } from '@/apis/articles'

export default {
  components: {
    // https://stackoverflow.com/questions/59347414/why-is-my-client-only-component-in-nuxt-complaining-that-window-is-not-define
    MindMap: () =>
      process.client ? import('@/components/common/MindMap') : null
  },
  data() {
    return {
      loading: false,
      mindMapList: []
    }
  },
  created() {
    this.query()
  },
  methods: {
    async query() {
      this.loading = true

      try {
        const data = await getArticles({
          type: 'TREE'
        })

        this.mindMapList = data.map(item => JSON.parse(item.content))
      } catch (e) {
        console.warn(e)
      }
      this.loading = false
    },
    handleNodeClick({ link }) {
      this.$router.push({ name: 'articles-id', params: { id: link } })
    }
  }
}
</script>
<style lang="less" scoped>
.mindmap {
  margin: @padding-lg 0;

  /deep/ .ant-carousel {
    .slick-slide {
      text-align: center;
      height: 500px;
      line-height: 160px;
      // background: ;
      overflow: hidden;
    }
  }

  .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: @primary-color;
    background: none;
    opacity: 0.3;

    &:before {
      display: none;
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>
