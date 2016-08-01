<template>
  <div class="wrapper">
    <div class="author-wrapper">
      <div class="author-avatar" :style="{ backgroundImage: 'url(' + reply.author.avatar_url + ')'}"></div>
      <div class="author-name">{{reply.author && reply.author.loginname}}</div>
      <div class="create-time">
        <span>12楼</span>
        <span class="divide-dot">•</span>
        <span>2个月前</span>
      </div>
      <div class="up-icon"></div>
      <div class="up-count">{{reply.ups && reply.ups.length}}</div>
    </div>
    <div class="content">{{{reply.content}}}</div>
  </div>
</template>

<script>
  export default {
    name: 'ReplyCard',
    props: ['reply']
  }
</script>

<style lang="less" src="./index.less" scoped></style>