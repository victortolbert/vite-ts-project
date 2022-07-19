import "vue-class-component/hooks";
import "./class-component-hooks";
import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import ProjectInspectionForm from "./ProjectInspectionForm.vue";

// import "windi.css";
// import './style.css'
// import "./index.css";

// import router from '@/router'

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  // router,
  pinia,
  render: (h) => h(ProjectInspectionForm),
}).$mount("#app");
