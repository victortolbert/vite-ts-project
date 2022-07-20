<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class PageTitle extends Vue {}
</script>

<template>
  <h2 class="text-2xl font-bold leading-7 text-primary-500 sm:text-3xl sm:truncate">
    <slot />
  </h2>
</template>
