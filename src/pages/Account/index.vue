<template>
  <div class="account">
    <input type="text" v-model="accesstoken" placeholder="请输入 Access Token" class="form-control access-token">
    <div class="submit font-sub-title" @click="handleSubmit">登录</div>
  </div>
</template>

<script>
import apiHost from '#/constant/apiHost'

export default {
  data() {
    return {
      accesstoken: undefined,
      loginame: undefined
    }
  },
  ready() {
  },
  methods: {
    handleSubmit: function() {
      this.$http.post(
        apiHost.accesstoken.url,
        {
          accesstoken: this.accesstoken
        }
      ).then(res => {
        const { data } = res;
        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('accesstoken', this.accesstoken)
        this.$router.go({path: '/'})
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" src="./account.less" scoped></style>