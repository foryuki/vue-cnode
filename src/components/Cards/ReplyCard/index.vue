<template>
  <div class="wrapper">
    <div class="author-wrapper">
      <div class="author-avatar" :style="{ backgroundImage: 'url(' + reply.author.avatar_url + ')'}"></div>
      <div class="author-name">{{reply.author && reply.author.loginname}}</div>
      <div class="create-time">
        <span>{{floor}}楼</span>
        <span class="divide-dot">•</span>
        <span>{{reply.create_at && reply.create_at.slice(0, 10)}}</span>
      </div>
      <div class="up-icon" @click="handleUpClick" :class="{'thumb-active': isThumbsUp}">
        <icon symbol="thumbs_up"></icon>
      </div>
      <div class="up-count">{{reply.ups && reply.ups.length}}</div>
    </div>
    <div class="content">{{{reply.content}}}</div>
  </div>
</template>

<script>
import apiHost from '#/constant/apiHost'
import { getUserInfo } from '#/utils'
import Icon from '#/components/Icon'

export default {
  name: 'ReplyCard',
  props: ['reply', 'floor'],
  components: {
    Icon
  },
  data() {
    return {
      accesstoken: undefined,
      action: undefined
    }
  },
  computed: {
    isThumbsUp: function() {
      const { id } = getUserInfo()
      return ~this.reply.ups.indexOf(id)
    }
  },
  methods: {
    handleUpClick: function() {
      const { id } = getUserInfo();
      this.accesstoken = localStorage.getItem('accesstoken')
      const reply_id = this.reply.id
      const url = `${apiHost.replyUps.url}/${reply_id}/ups`;
      this.$http.post(
        url,
        { accesstoken: this.accesstoken }
      ).then( res => {
        const { action } = res.data
        if (action == 'up') {
          this.reply.ups.push(id)
        } else if (action == 'down') {
          console.log([...this.reply.ups])
          const index = this.reply.ups.indexOf(id)
          if (~index) this.reply.ups.splice(index, 1)
          console.log([...this.reply.ups])
        }

      }, err => {
        console.log(err)
      })
    }
  },
}
</script>

<style lang="less" src="./styles.less" scoped></style>