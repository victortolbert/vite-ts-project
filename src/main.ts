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

// import app from './Application'
// import { decorate, injectable } from 'inversify'
/*
    Allows using a Vue component with Exemplar implementation of application.ts and page components
*/
// decorate(injectable(), Vue)

// (window as any).openModals = false

// Create an instance of our client-side application on the window object, so it's available outside of the bundle.
// This needs to get created immediately when the bundle loads.
// (<any>window).Exemplar = app
