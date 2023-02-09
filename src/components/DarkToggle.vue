<script setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="text-primary-800 hover:scale-105 hover:text-primary-900 dark:text-primary-100 dark:hover:text-primary-50"
    title="Toggle Dark"
    @click="toggleDark"
  >
    <i-heroicons-outline-moon v-if="isDark" />
    <i-heroicons-outline-sun v-else />
  </button>
</template>
