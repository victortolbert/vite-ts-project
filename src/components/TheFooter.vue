<script setup lang="ts">
import PrivacyPolicyButton from './PrivacyPolicyButton.vue'
import KeyboardShortcut from './KeyboardShortcut.vue'
</script>

<template>
  <footer
    class="fixed inset-x-0 bottom-0 z-10 px-8 py-2 mt-8 text-sm border-t-2 border-primary-500 bg-primary-100"
  >
    <div class="flex justify-end space-x-8 w-full border border-red-600">
      <div>
        <span class="font-mono">
          Crafted with
          <!-- <i-mdi-heart class="inline text-red-500" /> -->
          by @design_coder
        </span>
      </div>
      <div class="flex items-center space-x-2">
        <PrivacyPolicyButton />
        <KeyboardShortcut />
      </div>
    </div>
  </footer>
</template>
