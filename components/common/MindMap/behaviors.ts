import G6 from '@antv/g6'
import Vue from 'vue/types/vue'

export const setup = function(this: Vue) {
  G6.registerBehavior('node-click', {
    getEvents() {
      return {
        'node:click': 'onNodeClick',
        'edge:click': 'onEdgeClick',
        mousemove: 'onMouseMove'
      }
    },
    onNodeClick: (e: any) => {
      const model = e?.item?.getModel() || {}

      const { id, link } = model

      if (!link) {
        return
      }

      this.$emit('node:click', { id, link })
    },
    onEdgeClick() {
      // TODO
    },
    onMouseMove() {
      // TODO
    }
  })
}

export const collapseExpand = {
  type: 'collapse-expand',
  onChange: function onChange(item: any, collapsed: boolean) {
    const data = item.getModel()

    data.collapsed = collapsed
    return true
  }
}
