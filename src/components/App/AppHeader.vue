<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class AppHeader extends Vue {}
</script>

<template>
  <header class="text-white bg-primary-500">
    <div class="flex items-center justify-between px-4 py-1">
      <a
        class="flex items-center pr-4 mr-4 text-white no-underline"
        href="/Technician/AutoScheduler"
      >
        <app-logo />
        <app-title />
      </a>

      <form class="flex items-center space-x-2">
        <app-settings-button />
      </form>
    </div>
  </header>
</template>
