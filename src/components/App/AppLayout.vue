<script>
export default {
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasNavbarSlot() {
      return !!this.$slots.navbar
    },
    hasSidebarSlot() {
      return !!this.$slots.sidebar
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    },
  },
}
</script>

<template>
  <div id="app" class="flex flex-col w-full min-h-screen">
    <header v-if="hasHeaderSlot" id="app-header" class="z-10 bg-red-500">
      <slot name="header" />
    </header>

    <nav v-if="hasNavbarSlot" id="app-navbar">
      <slot name="navbar" />
    </nav>

    <main id="main-content" class="flex flex-col flex-1">
      <slot />
    </main>

    <aside v-if="hasSidebarSlot" id="app-sidebar">
      <slot name="sidebar" />
    </aside>

    <footer v-if="hasFooterSlot" id="app-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

