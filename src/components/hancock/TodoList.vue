<script setup>
const items = ref([
  { id: 1 }
])
</script>

<template>
  <ul>
    <li v-for="(item, index) in items">
      <slot :item="item" :index="index" />
    </li>
  </ul>
</template>
