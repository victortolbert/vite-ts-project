<script setup>
import { ExclamationIcon, XIcon } from '@heroicons/vue/outline'
</script>

<template>
  <div class="p-4 rounded-md bg-red-50">
    <div class="flex">
      <div class="flex-shrink-0">
        <exclamation-icon class="w-5 h-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-red-800">Not connected to the internet</p>
      </div>
      <div class="pl-3 ml-auto">
        <div class="-mx-1.5 -my-1.5">
          <button
            type="button"
            class="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600"
          >
            <span class="sr-only">Dismiss</span>
            <x-icon class="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
