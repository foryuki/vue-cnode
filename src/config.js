import Vue from 'vue'
import VueResource from 'vue-resource'

//vue-resource config
Vue.use(VueResource)
Vue.http.options.root = '/root'
// Vue.http.options.commom['Accept'] = 'application/json'