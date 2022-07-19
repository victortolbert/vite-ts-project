<script setup lang="ts">
import { ref } from 'vue'
import OutBuildings from './OutBuildings.vue'

const outBuildings = ref([])
</script>

<script lang="ts">
export default {
  name: 'ProjectInspectionForm',
}
</script>

<template>
  <article>
    <OutBuildings :out-buildings="outBuildings" />
  </article>
</template>
