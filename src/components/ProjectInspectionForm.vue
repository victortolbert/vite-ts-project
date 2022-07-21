<script setup lang="ts">
import { ref } from 'vue'
import Outbuildings from './Outbuildings.vue'
const outbuildingsPresent = ref(true)
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
      <input v-model="outbuildingsPresent" type="checkbox">
    </div>

    <Outbuildings v-if="outbuildingsPresent" />
  </article>
</template>
