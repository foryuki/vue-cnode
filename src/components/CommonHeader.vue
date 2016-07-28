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
    const stickySlef = function() {
      if (document.body.scrollTop > offsetTop + 100) {
        self.sticky = true
        console.log(self.sticky)
      } else {
        self.sticky = false
      }
    }
    window.addEventListener('scroll', stickySlef, false)
  },
  beforeDestroy() {
    window.removeListener('scroll', stickySlef, false)
  },
  methods: {
    handleTheme: function() {
      this.isDark = !this.isDark
      console.log(this.isDark)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/variables.less';
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.header-wrapper {

  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: -1px;
    padding: 10px 20px;
    background-color: @light-black;

    .search {
      width: 30px;
      height: 30px;
      background-image: url(../assets/cnode_search.png);
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }

    .logo {
      width: 120px;
      height: 30px;
      margin: 0 auto;
      background-image: url(../assets/cnodejs_light.svg);
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }

    .more {
      width: 30px;
      height: 30px;
      background-image: url(../assets/cnode_more.png);
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .header-nav {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
  }

  .themedark {
    background-color: @light-black;

    a {
      color: @gray;
    }

    .active {
      color: #fff;
      font-weight: bold;
    }
  }

  .themelight {
    background-color: #fff;
    border-bottom: 1px solid @light-gray;

    a {
      color: @dark-gray;
    }

    .active {
      color: #000;
      font-weight: bold;
    }
  }
}
</style>
