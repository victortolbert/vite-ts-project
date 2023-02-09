import { defineComponent } from 'vue';
import { emitter } from '~/event-bus';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    emitter: typeof emitter;
  }
}

export default defineComponent({
  install: (app) => {
    app.config.globalProperties.emitter = emitter;
  },
});
