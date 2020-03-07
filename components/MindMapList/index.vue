<template>
  <a-spin
    :spinning="loading"
    :class="{ mindmap: true, 'mindmap--fullscreen': isFullScreen }"
  >
    <a-icon
      class="mindmap__fullscreen"
      :type="isFullScreen ? 'fullscreen-exit' : 'fullscreen'"
      @click="handleFullScreen"
    />

    <client-only placeholder="正在加载......" style="height: 100%;">
      <a-carousel arrows style="height: 100%;">
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

        <div
          v-for="(item, index) in mindMapList"
          :key="item.id + index"
          style="height: 100%;"
        >
          <MindMap
            :id="item.id + index"
            ref="MindMap"
            class="canvas-wrapper"
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
      mindMapList: [],
      isFullScreen: false
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
    },
    handleFullScreen() {
      this.isFullScreen = !this.isFullScreen

      setTimeout(() => {
        this.$refs.MindMap.forEach(comp => {
          comp.resize(this.isFullScreen)
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.mindmap {
  margin: @padding-lg 0;
  position: relative;

  &--fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    background: white;
    z-index: 10;
    // overflow: hidden;
    height: 100vh;

    .canvas-wrapper {
      width: 100%;
      height: 100vh !important;
    }

    /deep/ .ant-spin-container,
    /deep/ .slick-slider,
    /deep/ .slick-list,
    /deep/ .slick-track,
    /deep/ .slick-slide {
      height: 100% !important;
    }
  }

  &__fullscreen {
    position: absolute;
    top: @padding-sm;
    right: @padding-sm;
    z-index: 1;
    font-size: 20px;
  }

  /deep/ .ant-carousel {
    .slick-slide {
      text-align: center;
      height: 500px;
      line-height: 160px;
      // background: ;
      overflow: hidden;
    }

    .canvas-wrapper {
      height: 500px;
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
