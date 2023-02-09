import mitt from 'mitt';

export const emitter = mitt();
export const useEventBus = () => ({ emitter });

// // ...in main.ts

// import { emitter } from `event-bus`

// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     emitter: typeof emitter
//   }
// }

// app.config.globalProperties.emitter = emitter
// // Now you can use this.emitter in Options API or in templates. And const { bus } = useBus() in setup
