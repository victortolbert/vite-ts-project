<script setup lang="ts">
import AsyncComponent from './AsyncComponent.vue'
defineProps<{ promise: Promise<void> }>()
</script>

<template>
  <Suspense>
    <AsyncComponent :promise="promise" />
    <template #fallback>fallback</template>
  </Suspense>
</template>
