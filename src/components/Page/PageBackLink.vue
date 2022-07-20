<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class PageBackLink extends Vue {}
</script>

<template>
  <nav class="md:hidden" aria-label="Back">
    <a
      href="javascript:history.go(-1)"
      class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
    >
      <i-carbon-chevron-left class="flex-shrink-0 mr-1 -ml-1 text-gray-400" />
      <span>Back</span>
    </a>
  </nav>
</template>
