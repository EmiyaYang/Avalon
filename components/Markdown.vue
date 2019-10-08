<template>
  <section class="markdown">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="compiledMarkdown"></div>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  name: 'Markdown',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      renderer: null
    }
  },

  computed: {
    compiledMarkdown() {
      return marked(this.value.replace(/(\\n)|(\s{2})/gm, '\n'))
    }
  },

  beforeCreate() {
    this.renderer = new marked.Renderer()
    marked.setOptions({
      renderer: this.renderer,
      gfm: true,
      breaks: true
    })
  }
}
</script>
<style lang="scss">
.markdown {
  h1 {
    font-size: 2em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  ol {
    margin-bottom: 0.7em;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    border-radius: 3px;
    color: grey;
    border-left: 2px solid #ccc;
    padding-left: 1em;
  }

  a {
    text-decoration: none;
    color: deepskyblue;
  }
}
</style>
