<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseBadge',
  props: {
    color: {
      type: String,
      default: 'gray',
    },
  },
  computed: {
    colorClasses() {
      return `bg-${this.color}-100 text-${this.color}-800`
    },
  },
})
</script>

<template>
  <span
    class="inline-flex sm:w-32 lg:w-full max-w-32 justify-center items-center px-2.5 py-0.5 rounded-md font-medium leading-5" :class="[
      colorClasses,
    ]"
  >
    <slot />
  </span>
</template>
