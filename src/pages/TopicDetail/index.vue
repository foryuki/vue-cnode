<template>
  <div class="detail-wrapper">
    <div class="detail">
      <div class="title font-title">{{detail.title}}</div>
      <div class="author-wrapper">
        <div class="author-avatar" v-if="detail.author" :style="{backgroundImage: 'url(' + detail.author.avatar_url + ')'}"></div>
        <div class="author-name">
          <span>{{detail.author && detail.author.loginname}}</span>
          <span class="divide-dot">•</span>
        </div>
        <div class="creat-time">
          <span>{{detail.create_at}}</span>
          <span class="divide-dot">•</span>
        </div>
        <div class="visit-count">
          <span>{{detail.visit_count}}</span>
          <span>次浏览</span>
        </div>
      </div>
      <div class="content">{{{detail.content}}}</div>
    </div>
    <div class="reply-count">
      <span>{{detail.reply_count}}</span>
      <span>回复</span>
    </div>
    <div class="reply">
      <reply-card v-for="reply in reply" :reply="reply"></reply-card>
    </div>
  </div>
</template>

<script>
import apiHost from '#/constant/apiHost'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import { ReplyCard } from '#/components'

export default {
  name: 'TopicDetail',
  data() {
    return {
      detail: {},
      reply: []
    }
  },
  components: {
    ReplyCard
  },
  ready() {
  },
  route: {
    data: function(transition) {
      const topicid = transition.to.params.id
      return this.$http.get(
        `${apiHost.topicDetail.url}/${topicid}`
      ).then(res => {
        const { data } = res.data
        const { replies } = data
        this.detail = data
        this.reply = replies
      }, err => {
        console.log(err)
      }).then(() => {
        const codeBlocks = document.querySelectorAll('.content pre code')
        Array.prototype.forEach.call(codeBlocks, function(block) {
          hljs.highlightBlock(block)
        })
      })
    }
  }
}
</script>

<style lang="less" src="./styles.less" scoped></style>