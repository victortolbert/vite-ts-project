import 'vue-class-component/hooks'
import './class-component-hooks'
import Vue from 'vue'
import { PiniaVuePlugin, createPinia } from 'pinia'
import VueSignaturePad from 'vue-signature-pad'

// import App from './App.vue'
// import App from '@/views/TeamView.vue'
import App from '@/views/PropertyInspectionView.vue'

import '@/plugins'
// import '@/plugins/global-directives'
// import '@/plugins/global-filters'

// import 'windi.css'
// import './style.css'
import './index.css'

// import router from '@/router'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(PiniaVuePlugin)
Vue.use(VueSignaturePad)

const pinia = createPinia()

new Vue({
  // router,
  pinia,
  render: h => h(App),
}).$mount('#app')
