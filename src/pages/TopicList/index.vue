<template>
  <div>
    <div class="list-container">
      <div class="list-item" v-for="item in resData">
        <div class="tab-wrapper">
          <div class="tab">{{item.tab || 'default'}}</div>
          <div> &nbsp;•&nbsp; </div>
          <div class="author-name">{{item.author.loginname}}</div>
        </div>
        <div class="title">{{item.title}}</div>
        <div class="content">
          <div class="avatar" :style="{backgroundImage: 'url(' + item.author.avatar_url + ')'}"></div>
          <div class="create-time">5天前</div>
          <div class="count">
            <span class="reply-count">{{item.reply_count}}</span>
            <span>/</span>
            <span class="visit-count">{{item.visit_count}}</span>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="avatar"></div>
        <div class="count">
          <span class="reply-count">173</span>
          <span>/</span>
          <span class="visit-count">12345</span>
        </div>
        <div class="tab">招聘</div>
        <div class="title">北京 7.23 NodeParty 总结</div>
        <div class="small-avatar"></div>
        <div class="create-time">5天前</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resData: []
    }
  },
  ready() {
    this.$http.get(
      'https://cnodejs.org/api/v1/topics?tab=good'
      ).then(res => {
        const { data } = res.data
        this.resData = data
      }, err => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" src="./index.less" scoped></style>
