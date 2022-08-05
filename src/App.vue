<script type="ts" setup>
import DemoView from '@/views/DemoView.vue'
</script>

<template>
  <div>
    <component :is="DemoView" data-test="data-test attribute">
      Slotted
    </component>

    <portal-target name="overlays" />
  </div>
</template>
