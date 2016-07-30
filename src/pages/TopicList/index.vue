<template>
  <div class="list-container">
    <topic-card v-for="item in resData" :item="item"></topic-card>
  </div>
</template>

<script>
import { TopicCard } from '#/components'
export default {
  name: 'TopicList',
  data() {
    return {
      resData: []
    }
  },
  components: {
    TopicCard
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
