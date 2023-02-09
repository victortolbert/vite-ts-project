import axios from 'axios';

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios;
    $translate: (key: string) => string;
  }
}

export default defineComponent({
  install: (app, options) => {
    app.config.globalProperties.$http = () => axios;
  },
});
