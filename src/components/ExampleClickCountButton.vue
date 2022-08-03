<script>
import { EventBus } from '@/event-bus'

export default {
  data() {
    return {
      clickCount: 0,
    }
  },

  methods: {
    emitGlobalClickEvent() {
      this.clickCount++
      EventBus.$emit('clicked', this.clickCount)
    },
  },
}
</script>

<template>
  <button @click="emitGlobalClickEvent()">
    {{ clickCount }}
  </button>
</template>
