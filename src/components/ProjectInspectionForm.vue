<script setup lang="ts">
import { ref } from 'vue'
import OutBuildings from './OutBuildings.vue'
const outBuildingsPresent = ref(true)
</script>

<script lang="ts">
export default {
  name: 'ProjectInspectionForm',
}
</script>

<template>
  <article class="border-2 border-red-500 p-6">
    <div class="mt-5 flex items-center justify-between">
      <h2>Out Building(s) Present?</h2>
      <input v-model="outBuildingsPresent" type="checkbox">
    </div>

    <OutBuildings v-if="outBuildingsPresent" />
  </article>
</template>
