<template>
  <div class="absolute inset-x-0 bottom-0 pb-2 sm:pb-5">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg shadow-lg bg-primary-600 sm:p-3">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center flex-1 w-0">
            <span class="flex p-2 rounded-lg bg-primary-800">
              <SpeakerphoneIcon class="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">
                We announced a new product!
              </span>
              <span class="hidden md:inline">
                Big news! We're excited to announce a brand new product.
              </span>
            </p>
          </div>
          <div class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            <a href="#" class="flex items-center justify-center px-4 py-2 text-sm font-medium bg-white border border-transparent rounded-md shadow-sm text-primary-600 hover:bg-primary-50">
              Learn more
            </a>
          </div>
          <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
            <button type="button" class="flex p-2 -mr-1 rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only">Dismiss</span>
              <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SpeakerphoneIcon, XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    SpeakerphoneIcon,
    XIcon,
  },
}
</script>
