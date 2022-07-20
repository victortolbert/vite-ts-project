<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class AppFooter extends Vue {}
</script>

<template>
  <footer class="px-6 py-2 mt-8 text-sm bg-primary-900 text-primary-50">
    <slot />
  </footer>
</template>
