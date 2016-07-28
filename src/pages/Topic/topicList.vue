<template>
  <div>
    <div class="list-container">
      <div class="list-item" v-for="item in resData">
        <div class="avatar"></div>
        <div class="count">
          <span class="reply-count">{{item.reply_count}}</span>
          <span>/</span>
          <span class="visit-count">{{item.visit_count}}</span>
        </div>
        <div class="tab">{{item.tab}}</div>
        <div class="title">{{item.title}}</div>
        <div class="small-avatar"></div>
        <div class="create-time">5天前</div>
      </div>
      <div class="list-item">
        <div class="avatar"></div>
        <div class="count">
          <span class="reply-count">173</span>
          <span>/</span>
          <span class="visit-count">12345</span>
        </div>
        <div class="tab">招聘</div>
        <div class="title">北京 7.23 NodeParty 总结</div>
        <div class="small-avatar"></div>
        <div class="create-time">5天前</div>
      </div>
      <div class="list-item">
        <div class="avatar"></div>
        <div class="count">
          <span class="reply-count">173</span>
          <span>/</span>
          <span class="visit-count">12345</span>
        </div>
        <div class="tab">招聘</div>
        <div class="title">北京 7.23 NodeParty 总结</div>
        <div class="small-avatar"></div>
        <div class="create-time">5天前</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resData: []
    }
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

<style lang="less" scoped>
.list-container {
  width: 800px;
  padding: 30px;
}

.list-item + .list-item {
  border-top: 1px solid #eee;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  line-height: 30px;

  .avatar {
    width: 30px;
    height: 30px;
    background-color: #fc0;
  }

  .count {
    width: 70px;
    font-size: 12px;
    text-align: center;

    .reply-count {
      color: #9e78c0
    }

    .visit-count {
      color: #b4b4b4;
    }
  }

  .tab {
    width: 32px;
    height: 30px;
    background-color: green;
    font-size: 12px;
  }

  .title {
    flex: 1;
  }

  .small-avatar {
    width: 18px;
    height: 18px;
    background-color: green;
  }

  .create-time {
    width: 50px;
  }
}
</style>