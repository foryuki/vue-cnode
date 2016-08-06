const topic = {
  topicList: {
    methods: 'GET',
    url: 'https://cnodejs.org/api/v1/topics'
  },
  topicDetail: {
    methods: 'GET',
    url: 'https://cnodejs.org/api/v1/topic'
  },
  accesstoken: {
    methods: 'POST',
    url: 'https://cnodejs.org/api/v1/accesstoken'
  },
  replyUps: {
    methods: 'POST',
    url: 'https://cnodejs.org/api/v1/reply'
  }
}

export default topic