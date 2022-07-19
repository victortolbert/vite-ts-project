<script lang="ts">
export default {
  name: "HelloWorld"
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import Feature from './Feature.vue';
const { x, y } = useMouse()

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <div>pos: {{x}}, {{y}}</div>
    <Feature
      title="⚡️ @vitejs/plugin-vue2"
      text="Vue 2 support for Vite"
      url="https://github.com/vitejs/vite-plugin-vue2"
    />
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>
