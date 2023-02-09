<script setup>
const slots = useSlots()

const hasActionsSlot = computed(() => {
  return !!slots.actions
})
</script>
<template>
  <nav
    class="flex items-center justify-end h-16 px-6 bg-white border-b shadow-lg dark:bg-primary-900 border-primary-100 dark:border-primary-900"
  >
    <slot />

    <div v-if="hasActionsSlot" class="flex md:ml-4 md:w-1/2 md:items-center md:justify-end">
      <slot name="actions" />
    </div>
  </nav>
</template>
