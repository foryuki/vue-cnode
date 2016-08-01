<template>
  <div class="list-container">
    <topic-card v-for="item in resData" :item="item"></topic-card>
  </div>
</template>

<script>
import apiHost from '#/constant/apiHost'
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
      `${apiHost.topicList.url}?tab=good`
      ).then(res => {
        const { data } = res.data
        this.resData = data
      }, err => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" src="./styles.less" scoped></style>
