import Vue from 'vue'
import App from './App.vue'
import Chat from '../../dist/imp-vue-beautiful-chat.umd.min.js'
import vmodal from 'vue-js-modal'

Vue.use(vmodal, {dialog: true})
Vue.use(Chat)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: (h) => h(App)
})
