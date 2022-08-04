import 'vue-class-component/hooks'
import './class-component-hooks'
import './index.css'
import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'
import App from './App.vue'

import '@/plugins'
// import '@/plugins/global-directives'
// import '@/plugins/global-filters'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(PiniaVuePlugin)

const pinia = createPinia()

new Vue({
  // router,
  pinia,
  render: h => h(App),
}).$mount('#app')
