<script setup lang="ts">
import Outbuildings from './Outbuildings.vue'
import Counter from './Counter.vue'
</script>

<script lang="ts">
export default {
  name: 'ProjectInspectionForm',
}
</script>

<template>
  <div class="card">
    <Outbuildings />
    <Counter />
  </div>
</template>
