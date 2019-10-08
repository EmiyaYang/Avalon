<template>
  <section class="tag-grounp">
    <div
      v-for="(item, index) in renderMap"
      :key="`tag-${index}`"
      class="tag-grounp__item"
      :class="{ 'tag-grounp__item--selected': item.checked }"
      @click="handleTagClick(index)"
    >
      {{ `${index}(${item.num})` }}

      <input type="checkbox" :checked="item.checked" :value="index" hidden />
    </div>
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
    }
  }
}
</script>
<style lang="scss" scoped>
.tag-grounp {
  display: flex;
  flex-wrap: wrap;

  &__item {
    display: inline-block;
    padding: 6px;
    cursor: pointer;
    border-radius: 1em;
    border: 2px dashed grey;

    &--selected {
      background: grey;
      color: white;
    }
  }
}
</style>
