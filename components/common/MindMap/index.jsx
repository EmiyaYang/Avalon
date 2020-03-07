import G6 from '@antv/g6'
import { setup, collapseExpand } from './behaviors'

const FIX_PADDING = 50

export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    option: {
      type: Object,
      default: () => ({})
    },
    id: {
      type: String,
      default: 'mountNode'
    }
  },
  data() {
    return {
      graph: null,
      hash: 0
    }
  },
  // watch: {
  //   data(data) {
  //     if (!data || !data.nodes || !data.nodes.length) {
  //       this.empty = true
  //       return
  //     }

  //     // 手动换行
  //     data.nodes.forEach(item => {
  //       const title = item.label

  //       item.label = ''

  //       const len = 20

  //       for (let i = 0; i < item.id.length + len; i += len) {
  //         item.label += title.substring(i, i + len)
  //         item.label += '\n'
  //       }
  //     })

  //     this.graph.data(data)
  //     this.graph.render()
  //     // this.graph.fitView();
  //   }
  // },

  created() {
    setup.call(this)
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (document.getElementById(this.id).innerHTML) {
        // REVIEW: 在 a-carousel 使用出现渲染两次的情况
        return
      }

      const graph = getGraph(this.id)

      let centerX = 0
      graph.node(function(node) {
        if (node.id === 'Modeling Methods') {
          centerX = node.x
        }

        let position = ''

        if (node.children && node.children.length) {
          position = 'left'
        } else {
          position = node.x > centerX ? 'right' : 'left'
        }

        return {
          label: node.id,
          labelCfg: {
            position,
            offset: 5
          }
        }
      })

      this.graph = graph

      this.updateGraph()
    },
    getGraph() {
      return this.graph
    },
    resize(fullscreen) {
      const container = document.getElementById(this.id)

      const { width, height } = container.getBoundingClientRect()

      this.graph.setMode(fullscreen ? 'fullscreen' : 'default')
      this.graph.changeSize(width, height)
      this.graph.render()
      this.graph.fitView(FIX_PADDING)
    },
    updateGraph() {
      this.graph.data(this.data)
      this.graph.render()
      this.graph.fitView(FIX_PADDING)
    }
  },

  render() {
    return <div id={this.id}></div>
  }
}

function getGraph(id) {
  const container = document.getElementById(id)

  const width = container.scrollWidth
  const height = container.scrollHeight || 500

  const graph = new G6.TreeGraph({
    container: id,
    width,
    height,
    modes: {
      default: [collapseExpand, 'node-click', 'drag-canvas'],
      fullscreen: [collapseExpand, 'drag-canvas', 'zoom-canvas']
    },
    defaultNode: {
      size: 26,
      anchorPoints: [
        [0, 0.5],
        [1, 0.5]
      ],
      style: {
        fill: '#C6E5FF',
        stroke: '#5B8FF9',
        cursor: 'pointer'
      }
    },
    defaultEdge: {
      type: 'cubic-horizontal',
      style: {
        stroke: '#A3B1BF'
      }
    },
    layout: {
      type: 'mindmap',
      direction: 'H',
      getHeight: () => {
        return 16
      },
      getWidth: () => {
        return 16
      },
      getVGap: () => {
        return 10
      },
      getHGap: () => {
        return 50
      }
    }
  })

  return graph
}
