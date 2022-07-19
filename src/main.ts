import "vue-class-component/hooks";
import "./class-component-hooks";
import Vue from "vue";
import App from "./App.vue";

import "windi.css";
// import './style.css'

// import router from '@/router'

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  // router,
  render: (h) => h(App),
}).$mount("#app");
