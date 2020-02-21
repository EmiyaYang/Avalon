<template>
  <section class="article-list">
    <section class="article-list-header">
      <a-checkbox-group
        v-model="selectedTags"
        class="article-list-header__tags"
        :options="tagsOptions"
      >
        <template #label="option">
          <a-tag class="checkbox-tag">
            {{ option.$label }}
          </a-tag>
        </template>
      </a-checkbox-group>
      <a-input-search
        placeholder="输入搜索关键词"
        class="search-input"
        @search="handleSearch"
      />
    </section>

    <section class="article-list-body">
      <a-list item-layout="horizontal" :data-source="dataSource">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </section>
  </section>
</template>

<script>
import { getConfig } from './config'

/**
 * 1. 视图切换: a. 列表 b. 卡片
 * 2. 搜索: a. 标签 b. 关键词检索
 *
 */
export default {
  data() {
    return {
      keyword: '',
      selectedTags: [],
      tagsOptions: [],
      dataSource: [
        {
          title: 'Ant Design Title 1'
        },
        {
          title: 'Ant Design Title 2'
        },
        {
          title: 'Ant Design Title 3'
        },
        {
          title: 'Ant Design Title 4'
        }
      ]
    }
  },
  created() {
    Object.assign(this, getConfig.call(this))
  },
  methods: {
    handleSearch() {}
  }
}
</script>
<style lang="scss" scoped>
.article-list {
  padding-top: 10px;

  &-header {
    display: flex;
    align-items: center;

    &__tags {
      flex-grow: 1;
    }
  }

  /deep/ .ant-checkbox {
    display: none;

    & + span {
      padding: 0;
    }
  }

  .ant-checkbox-wrapper-checked {
    .checkbox-tag {
      background: rgb(45, 183, 245);
      color: white;
    }
  }
}

.search-input {
  width: 150px;
  overflow: hidden;
  position: relative;
  /deep/ .ant-input {
    position: relative;
    border-radius: 0;
    border-top: none !important;
    border-left: none;
    border-right: none;
    top: 10px;
    opacity: 0;
    cursor: default;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:focus {
      transform: translateY(-10px);
      opacity: 1;
      cursor: unset;
    }
  }
}
</style>
