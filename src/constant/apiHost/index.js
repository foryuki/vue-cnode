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
  },
  newReply: {
    methods: 'POST',
    url: 'https://cnodejs.org/api/v1/topic'
  },
  newTopic: {
    methods: 'POST',
    url: 'https://cnodejs.org/api/v1/topics'
  }
}

export default topic