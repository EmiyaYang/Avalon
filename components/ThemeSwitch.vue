<template>
  <aside class="ThemeSwitch" @click="onClick">{{ buttonTxt }}</aside>
</template>

<script>
export default {
  data() {
    return {
      theme: 'theme1'
    }
  },
  computed: {
    buttonTxt() {
      return this.theme === 'theme1' ? '关灯' : '开灯'
    }
  },
  methods: {
    onClick() {
      this.theme = this.theme === 'theme1' ? 'theme2' : 'theme1'

      window.document.documentElement.setAttribute('data-theme', this.theme)
    }
  }
}
</script>
<style lang="scss" scoped>
.ThemeSwitch {
  height: 100px;
  width: 100px;
  line-height: 100px;
  text-align: center;
  cursor: pointer;
  position: fixed;
  bottom: 100px;
  right: 0;
}
</style>
