import { createApp, h, ref, onMounted } from 'vue';
import axios from 'axios';

// Make sure to register before importing any components
// import '~/src/class-component-hooks'

import i18nPlugin from '~/plugins/i18n';

import { createRouter, createWebHistory } from 'vue-router';
// import { createPinia } from 'pinia'

// import * as Sentry from '@sentry/vue';
// import { BrowserTracing } from '@sentry/tracing';

import { createHead } from '@vueuse/head';
import VueChartkick from 'vue-chartkick';
import VueClickAway from 'vue3-click-away';
// import VueGoogleMaps from '@fawmi/vue-google-maps';

import PrimeVue from 'primevue/config';
import Chip from 'primevue/chip';
import Ripple from 'primevue/ripple';
import Button from 'primevue/button';
import Card from 'primevue/card';

import { plugin as VueTippy } from 'vue-tippy';

import NProgress from 'nprogress';
import SmartTable from 'vuejs-smart-table';
import Toast from 'vue-toastification';
import VTooltipPlugin from 'v-tooltip';
import VuePlyr from 'vue-plyr';

import Oruga from '@oruga-ui/oruga-next';

// Kendo UI
// import { NumericTextBox  } from '@progress/kendo-inputs-vue-wrapper'
import { NumericTextBox } from '@progress/kendo-vue-inputs';
// import KendoDropDown from '@progress/kendo-dropdowns-vue-wrapper/dist/es/KendoDropDownList/index';

// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fad } from '@fortawesome/pro-duotone-svg-icons';
// import { fal } from '@fortawesome/pro-light-svg-icons';
// import { far } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Promised } from 'vue-promised';

import VueA11yDialog from 'vue-a11y-dialog';
import { plugin, defaultConfig } from '@formkit/vue';

import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import PrismCode from '~/components/PrismCode.vue';

//
// import '@oruga-ui/oruga-next/dist/oruga.css'
// import '@oruga-ui/oruga-next/dist/oruga.css'
import '@oruga-ui/oruga-next/dist/oruga-full-vars.css';
// import '@oruga-ui/oruga-next/src/scss/oruga-full-vars'

// import '@progress/kendo-theme-default/dist/all.css'
import 'animate.css';
import 'chartkick/chart.js';
import 'prismjs';
import 'prismjs/themes/prism.css';
import 'v-tooltip/dist/v-tooltip.css';
import 'vue-plyr/dist/vue-plyr.css';
import 'tippy.js/dist/tippy.css';
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

// import '~/assets/stylus/image.styl'
import '~/assets/sass/hancock.scss';
// import '~/assets/sass/work-in-progress.scss'

import App from '~/App.vue';
import store from '~/store';
import { pinia } from './stores';
import { makePaymentPlugin } from '../plugins/makePayment';

pinia.use(makePaymentPlugin);

const i18nStrings = {
  greetings: {
    hi: 'Hallo!',
  },
};

const RootComponent = {
  setup() {},
  render: () => h(App),
};

const app = createApp(RootComponent);

// // https://github.com/antfu/vite-ssg
// export const createApp = ViteSSG(
//   App,
//   { routes },
//   async(ctx) => {
//     // install all modules under `modules/`
//     await Promise.all(Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx)))
//   },
// )

const head = createHead();

// const pinia = createPinia()

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300);
      })
    );
  },
});
router.beforeEach((to, from) => {
  NProgress.start();

  if (to.meta.requiresAuth && !window.user) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath,
      },
    };
  }
});
router.afterEach(() => {
  NProgress.done();
});

// app.config.globalProperties.$http = () => {};
app.config.globalProperties.name = 'Kobe';

app.use(i18nPlugin, i18nStrings);
app.use(head);
app.use(store);
app.use(router);
app.use(pinia);
app.use(plugin, defaultConfig);

app.use(Oruga, {
  iconComponent: 'font-awesome-icon',
  iconPack: 'fal',
  statusIcon: false,
  button: {
    override: true,
    rootClass: 'btn',
  },
  radio: {
    rootClass: 'radio',
    labelClass: 'radio-label',
    checkClass: 'radio-check',
    checkedClass: 'radio-checked',
  },
  field: {
    override: true,
    labelClass: 'field-label',
    messageClass: 'text-xs italic',
    variantClass: 'field-',
  },
  input: {
    override: true,
    inputClass: 'input focus:outline-none focus:shadow-outline',
    roundedClass: 'rounded',
    variantClass: 'input-',
  },
  dropdown: {
    menuClass: 'dropdown-menu',
    itemClass: 'dropdown-item',
    itemActiveClass: 'dropdown-item-active',
  },
  loading: {
    overlayClass: 'loading-background',
  },
  icon: {
    override: true,
    spinClass: 'fa-spin',
  },
  switch: {
    checkClass: 'switch',
    labelClass: 'switch-label',
  },
});

// app.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBvOoQe7xFg-XaWj9w_l7ODbMqb4BK0B9E',
//   },
// });

VueChartkick.options = {
  colors: ['#314B6F', '#ee7d1e'],
};
VueChartkick.configure({
  language: 'en',
  mapsApiKey: 'AIzaSyBvOoQe7xFg-XaWj9w_l7ODbMqb4BK0B9E',
});

app.use(VueChartkick);

app.use(VueClickAway); // Makes 'v-click-away' directive usable in every component

app.use(PrimeVue, { ripple: true });
app.directive('ripple', Ripple);

// app.filter('difficulty', (difficulty: string) => {
//   let difficulties: any = {
//     'easy' : 'Easy',
//     'medium' : 'Medium',
//     'hard' : 'Hard'
//   };
//   return difficulties[difficulty];
// })

app.component('Chip', Chip);
app.component('PButton', Button);
app.component('PCard', Card);

app.use(SmartTable, {
  sortIconPosition: 'after',
  sortHeaderClass: 'flex items-center w-full',
  hideSortIcons: false,
});

app.use(Toast, {
  hideProgressBar: true,
  closeButton: false,
  showCloseButtonOnHover: true,
  icon: false,
});

app.use(VuePlyr, {
  plyr: {},
});

app.use(VueA11yDialog);

app.use(VTooltipPlugin);
app.use(
  VueTippy,
  // optional
  {
    directive: 'tippy', // => v-tippy
    component: 'tippy', // => <tippy/>
    componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
    defaultProps: {
      placement: 'auto-end',
      allowHTML: true,
    }, // => Global default options * see all props
  },
);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('Promised', Promised);
app.component('prism-code', PrismCode);

app.component('custom-form', {
  emits: {
    // No validation
    click: null,

    // Validate submit event
    submit: ({ email, password }: { email: string; password: string }) => {
      if (email && password) {
        return true;
      } else {
        console.warn('Invalid submit event payload!');
        return false;
      }
    },
  },
  methods: {
    submitForm(email: string, password: string) {
      this.$emit('submit', { email, password });
    },
  },
});

app.component('title-component', {
  props: {
    title: String,
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  `,
});

app.component('my-component', {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e: any) {
      let value = e.target.value;
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit('update:modelValue', value);
    },
  },
  // template: `
  //   <input type="text"
  //     :value="modelValue"
  //     @input="$emit('update:modelValue', $event.target.value)">
  // `,
  template: `
    <input type="text"
      :value="modelValue"
      @input="emitValue">
  `,
  created() {
    console.log(this.modelModifiers); // { capitalize: true }
  },
});

app.component('other-component', {
  props: ['description', 'descriptionModifiers'],
  emits: ['update:description'],
  template: `
    <input type="text"
      :value="description"
      @input="$emit('update:description', $event.target.value)">
  `,
  created() {
    console.log(this.descriptionModifiers); // { capitalize: true }
  },
});

app.component('example-component', {
  setup() {
    const image = ref(null);
    const pending = ref(true);
    const error = ref(null);

    onMounted(() => {
      axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
          image.value = response.data;
        })
        .catch(function (e) {
          error.value = e;
        })
        .finally(function () {
          pending.value = false;
        });
    });
    return {
      image,
    };
  },
});

app.component('user-name', {
  props: {
    firstName: String,
    lastName: String,
  },
  emits: ['update:firstName', 'update:lastName'],
  template: `
    <input
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `,
});

app.component('kendo-numerictextbox', NumericTextBox);
// app.component('kendo-dropdownlist', KendoDropDown);

// app.component('Dataset', Dataset);
// app.component('DatasetShow', DatasetShow);
// app.component('DatasetSearch', DatasetSearch);
// app.component('DatasetPager', DatasetPager);
// app.component('DatasetItem', DatasetItem);
// app.component('DatasetInfo', DatasetInfo);

// Sentry.init({
//   app,
//   dsn: "https://7fb5660dbca147009b82387ce1dc2dc1@o244691.ingest.sentry.io/1422219",
//   integrations: [
//     new BrowserTracing({
//       routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//       tracingOrigins: ["localhost", "my-site-url.com", /^\//],
//     }),
//   ],
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// })

app.mount('#app');

// library.add(fas);
// library.add(fab);
// library.add(far);
// library.add(fal);
// library.add(fad);

// dom.watch();
