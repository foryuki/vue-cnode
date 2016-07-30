<template>
  <div>{{detail.visit_count}}</div>
</template>

<script>
import apiHost from '#/constant/apiHost'
export default {
  name: 'TopicDetail',
  data() {
    return {
      detail: {}
    }
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
        this.detail = data
        console.log(this.detail)
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" src="./index.less" scoped></style>