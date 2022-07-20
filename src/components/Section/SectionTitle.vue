<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class SectionTitle extends Vue {}
</script>

<template>
  <h3 class="text-lg font-bold leading-7 text-primary-500 sm:text-xl sm:truncate">
    <slot />
  </h3>
</template>
