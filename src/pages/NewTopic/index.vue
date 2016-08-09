<template>
  <div class="newTopic">
    <div class="form-group group-single-line">
      <div class="label font-sub-title">选择版块:</div>
      <select v-model="topicTab" name="tab" id="" class="form-control form-base">
        <option value="" selected hidden disabled>请选择版块</option>
        <option value="ask">问答</option>
        <option value="share">分享</option>
        <option value="job">招聘</option>
      </select>
    </div>
    <div class="form-group group-base">
      <input type="text" v-model="topicTitle" placeholder="标题字数10字以上" class="form-control form-base">
    </div>
    <div class="form-group group-base">
      <textarea v-model="topicContent" name="" id="" cols="30" placeholder="请输入文章内容，支持markdown" class="form-control form-base"></textarea>
    </div>
    <div class="btn-wrapper">
      <div class="btn-submit" @click="handleSubmit">提交</div>
    </div>
  </div>
</template>

<script>
import { getAccessToken } from '#/utils'
import apiHost from '#/constant/apiHost'
import router from '#/router'

export default {
  data() {
    return {
      topicTitle: '',
      topicTab: '',
      topicContent: '',
    }
  },
  methods: {
    handleSubmit() {
      const accesstoken = getAccessToken()
      const title = this.topicTitle
      const tab = this.topicTab
      const content = this.topicContent
      this.$http.post(
        `${apiHost.newTopic.url}`,
        { accesstoken: accesstoken, title: title, tab: tab, content: content }
      ).then(res => {
        if (res.success) {
          router.go('/')
        }
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" src="./newTopic.less" scoped></style>