<template>
  <section class="mindmap">
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
          <MindMap :id="item.id + index" :data="item" />
        </div>
      </a-carousel>
    </client-only>
  </section>
</template>

<script>
const mockData = {
  id: 'Modeling Methods',
  children: [
    {
      id: 'Classification',
      children: [
        { id: 'Logistic regression' },
        { id: 'Linear discriminant analysis' },
        { id: 'Rules' },
        { id: 'Decision trees' },
        { id: 'Naive Bayes' },
        { id: 'K nearest neighbor' },
        { id: 'Probabilistic neural network' },
        { id: 'Support vector machine' }
      ]
    },
    {
      id: 'Consensus',
      children: [
        {
          id: 'Models diversity',
          children: [
            { id: 'Different initializations' },
            { id: 'Different parameter choices' },
            { id: 'Different architectures' },
            { id: 'Different modeling methods' },
            { id: 'Different training sets' },
            { id: 'Different feature sets' }
          ]
        },
        {
          id: 'Methods',
          children: [
            { id: 'Classifier selection' },
            { id: 'Classifier fusion' }
          ]
        },
        {
          id: 'Common',
          children: [{ id: 'Bagging' }, { id: 'Boosting' }, { id: 'AdaBoost' }]
        }
      ]
    },
    {
      id: 'Regression',
      children: [
        { id: 'Multiple linear regression' },
        { id: 'Partial least squares' },
        { id: 'Multi-layer feedforward neural network' },
        { id: 'General regression neural network' },
        { id: 'Support vector regression' }
      ]
    }
  ]
}

export default {
  components: {
    // https://stackoverflow.com/questions/59347414/why-is-my-client-only-component-in-nuxt-complaining-that-window-is-not-define
    MindMap: () =>
      process.client ? import('@/components/common/MindMap') : null
  },
  data() {
    return {
      mindMapList: [mockData, mockData, mockData]
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
