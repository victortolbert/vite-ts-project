<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

Component({})
export default class BaseButton extends Vue {
  isLoading = false

  handleClick() {
    this.isLoading = true
    setTimeout(() => (this.isLoading = false), 3000)
  }
}
</script>

<template>
  <button class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium border border-transparent rounded-md select-none bg-primary-100 text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" :disabled="isLoading" @click="handleClick">
    <div v-if="isLoading" class="w-4 h-4 border-b-2 rounded-full animate-spin" />
    <div v-else class="w-4 h-4 border-b-2 border-gray-900 rounded-full" />
    <span>
      <slot>Button Slot</slot>
    </span>
  </button>
</template>
