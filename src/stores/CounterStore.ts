import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // data
  state() {
    return {
      count: 5,
    }
  },

  // methods
  actions: {
    increment() {
      // eslint-disable-next-line curly
      if (this.count < 10) {
        this.count++
      }
    },
  },

  // computed
  getters: {
    remaining(): number {
      return 10 - this.count
    },
  },
})
