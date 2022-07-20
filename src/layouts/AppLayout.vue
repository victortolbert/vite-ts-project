<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const defaultLayout = 'DefaultLayout'

export default defineComponent({
  name: 'AppLayout',

  computed: {
    layout() {
      const layout = this.$route.meta?.layout || defaultLayout
      return () => import(`../layouts/${layout}.vue`)
    },
  },
})
</script>

<template>
  <component :is="layout">
    <slot />
  </component>
</template>
