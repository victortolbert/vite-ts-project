<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionWrapper',
  props: {
    padded: {
      type: Boolean,
      default: true,
    },
  },
})
</script>

<template>
  <section :class="{ 'lg:p-8': padded }">
    <slot />
  </section>
</template>
