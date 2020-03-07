import G6 from '@antv/g6'
import Vue from 'vue/types/vue'

export default function setup(this: Vue) {
  G6.registerBehavior('custom', {
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
