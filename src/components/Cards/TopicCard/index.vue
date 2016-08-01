<template>
  <div class="list-item">
    <div class="tab-wrapper">
      <div class="tab">{{item.tab || 'default'}}</div>
      <div> &nbsp;•&nbsp; </div>
      <div class="author-name">{{item.author.loginname}}</div>
    </div>
    <div class="title font-sub-title" v-link="{path: '/topicdetail/' + item.id }">{{item.title}}</div>
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
</template>

<script>
  export default {
    name: 'TopicCard',
    props: ['item']
  }
</script>

<style lang="less" src="./styles.less" scoped></style>