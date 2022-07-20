<script lang="ts">
export default {
  name: "HomeLayout",
}
</script>

<template>
  <div>
    <header class="header" />
    <slot />
  </div>
</template>

<style scoped>
.header {
  height: 5rem;
  background-color: green;
}
</style>
