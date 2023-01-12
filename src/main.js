import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// npm install vuex@3

// "dependencies": {
//   "core-js": "^3.8.3",
//   "vue": "^2.6.14",
//   "vuex": "^3.6.2"


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
