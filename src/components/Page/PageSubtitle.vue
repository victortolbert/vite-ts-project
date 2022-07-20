<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class PageSubtitle extends Vue {}
</script>

<template>
  <h3>
    <slot />
  </h3>
</template>
