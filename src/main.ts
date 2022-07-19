import Vue from 'vue'
import './style.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: h => h(App)
}).$mount("#app")
