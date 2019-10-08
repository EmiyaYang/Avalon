<template>
  <section class="tag-group">
    <div
      v-for="(item, index) in renderMap"
      :key="`tag-${index}`"
      class="tag-group__item"
      :class="{ 'tag-group__item--selected': item.checked }"
      @click="handleTagClick(index)"
    >
      {{ `${index}(${item.num})` }}

      <input type="checkbox" :checked="item.checked" :value="index" hidden />
    </div>
    <button
      v-show="value.length > 0"
      class="tag-group__cancel"
      @click="handleCancel"
    >
      ×
    </button>
  </section>
</template>

<script>
export default {
  name: 'TagGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    renderMap() {
      return this.tags.reduce((acc, current) => {
        const key = current.name

        if (key === undefined) return acc

        acc[key] = {
          checked: this.value.includes(key),
          num: current.num
        }

        return acc
      }, {})
    }
  },
  methods: {
    handleTagClick(key) {
      const index = this.value.indexOf(key)

      if (~index) {
        const arr = [...this.value]
        arr.splice(index, 1)

        this.$emit('change', arr)
      } else {
        this.$emit('change', [...this.value, key])
      }
    },
    handleCancel() {
      this.$emit('change', [])
    }
  }
}
</script>
<style lang="scss" scoped>
.tag-group {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;

  &__item {
    display: inline-block;
    padding: 6px;
    margin: 5px;
    cursor: pointer;
    border-radius: 1em;
    border: 2px dashed grey;

    &--selected {
      background: grey;
      color: white;
    }
  }

  &__cancel {
    text-align: center;
    line-height: 2em;
    height: 2em;
    width: 100%;
    cursor: pointer;
    background: #ccc;
    color: white;
    border: none;
    outline: none;
  }
}
</style>
