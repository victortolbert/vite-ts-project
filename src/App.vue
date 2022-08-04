<script type="ts" setup>
import AdminView from '@/views/AdminView.vue'
</script>

<template>
  <div>
    <component :is="AdminView" />
    <portal-target name="overlays" />
  </div>
</template>
