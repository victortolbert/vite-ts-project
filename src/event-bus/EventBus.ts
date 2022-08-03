import Vue from 'vue'

// https://www.digitalocean.com/community/tutorials/vuejs-global-event-bus

export const EventBus = new Vue()

//  In Vue 3, `$on`, `$off`, and `$once` have been removed.[1] External libraries that provide this
// functionality are recommended.
//
// [1] https://v3-migration.vuejs.org/breaking-changes/events-api.html

// https://github.com/scottcorgan/tiny-emitter
// This provides the same event emitter API as in Vue 2.
// import emitter from 'tiny-emitter/instance'

// export default {
//   $on: (...args) => emitter.on(...args),
//   $once: (...args) => emitter.once(...args),
//   $off: (...args) => emitter.off(...args),
//   $emit: (...args) => emitter.emit(...args)
// }
