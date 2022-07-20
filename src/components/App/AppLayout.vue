<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class AppLayout extends Vue {
  get hasHeaderSlot() {
    return !!this.$slots.header
  }

  get hasFooterSlot() {
    return !!this.$slots.footer
  }
}
</script>

<template>
  <div class="flex flex-col w-full min-h-screen">
    <header v-if="hasHeaderSlot">
      <slot name="header" />
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer v-if="hasFooterSlot">
      <slot name="footer" />
    </footer>
  </div>
</template>
