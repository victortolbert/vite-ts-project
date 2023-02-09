<script type="ts" setup>
import App from '@/views/PropertyInspectionView.vue'
</script>

<template>
  <div>
    <component :is="App" data-test="data-test attribute">
      Slotted
    </component>

    <portal-target name="overlays" />
  </div>
</template>
