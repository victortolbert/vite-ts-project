<script setup>
import { XIcon } from '@heroicons/vue/outline'
const emit = defineEmits(['close'])

function close() {
    emit('close')
}
</script>

<template>
  <div class="relative bg-primary-700">
    <div class="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="md:hidden">We announced a new product!</span>
          <span class="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
          <span class="block sm:ml-2 sm:inline-block">
            <a href="#" class="font-bold text-white underline">
              Learn more
              <span aria-hidden="true">&rarr;</span>
            </a>
          </span>
        </p>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:pt-1 sm:pr-2 sm:items-start"
      >
        <button
          type="button"
          @click="close"
          class="flex p-2 rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span class="sr-only">Dismiss</span>
          <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>
