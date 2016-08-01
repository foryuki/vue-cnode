<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <div class="more" @click="handleTheme"></div>
      <div class="logo"></div>
      <div class="search"></div>
    </div>
    <div class="header-nav" :class="{ 'themedark' : isDark, 'themelight' : !isDark, 'sticky' : sticky}" v-el:nav>
      <a v-link="{path: '/', exact: true, activeClass: 'active'}">首页</a>
      <a v-link="{path: '/about', exact: true, activeClass: 'active'}">新手入门</a>
      <a v-link="{path: '/friends', exact: true, activeClass: 'active'}">API</a>
      <a v-link="{path: '/friends', exact: true, activeClass: 'active'}">关于</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: true,
      sticky: false
    }
  },
  ready() {
    const navNode = this.$els.nav
    const offsetTop = navNode.offsetTop
    const self = this
    const stickySelf = function() {
      if (document.body.scrollTop > offsetTop + 100) {
        self.sticky = true
      } else {
        self.sticky = false
      }
    }
    window.addEventListener('scroll', stickySelf, false)
  },
  beforeDestroy() {
    // window.removeListener('scroll', stickySelf, false)
  },
  methods: {
    handleTheme: function() {
      this.isDark = !this.isDark
      console.log(this.isDark)
    }
  }
}
</script>
<style lang="less" src="./index.less"></style>