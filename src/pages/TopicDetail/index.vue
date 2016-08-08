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
      <reply-card v-for="(index, reply) in reply" :floor="index + 1" :reply="reply"></reply-card>
    </div>
    <div class="new-reply">
      <div class="title">添加回复</div>
      <div class="content">
        <textarea name="" id="" cols="30" v-model="newReply"></textarea>
      </div>
      <div class="btn-reply font-sub-title" @click="handleNewReply">回复</div>
    </div>
  </div>
</template>

<script>
import apiHost from '#/constant/apiHost'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import { ReplyCard } from '#/components'
import { getAccessToken, getUserInfo } from '#/utils'

export default {
  name: 'TopicDetail',
  data() {
    return {
      accesstoken: undefined,
      detail: {},
      reply: [],
      newReply: '',
      topicid: undefined,
      loginname: undefined,
      avatar_url: undefined,
    }
  },
  components: {
    ReplyCard
  },
  ready() {
  },
  route: {
    data: function(transition) {
      this.topicid = transition.to.params.id
      return this.$http.get(
        `${apiHost.topicDetail.url}/${this.topicid}`
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
  },
  methods: {
    handleNewReply() {
      this.accesstoken = getAccessToken()
      const url = `${apiHost.newReply.url}/${this.topicid}/replies`
      this.$http.post(
        url,
        { accesstoken: this.accesstoken, content: this.newReply}
      ).then(res => {
        const { success } = res.data
        if (success) {
          const userInfo = getUserInfo()
          if (userInfo) {
            const { loginname, avatar_url, id } = userInfo
            const newReplyObject = {
              id,
              author: {
                loginname,
                avatar_url,
              },
              content: this.newReply,
              create_at: new Date().toISOString(),
              ups: [],
            }
            this.reply.push(newReplyObject)
          }
        }
        console.log(res)
      }, err => {
        console.log(err)
      })
    }
  }

}
</script>

<style lang="less" src="./styles.less" scoped></style>