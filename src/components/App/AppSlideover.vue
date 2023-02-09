<script setup>
import { ref } from 'vue'
const open = ref(true)
</script>

<template>
  <div
    class="fixed inset-0 overflow-hidden"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="absolute inset-0 overflow-hidden">
      <!-- Background overlay, show/hide based on slide-over state. -->
      <div v-show="open" class="absolute inset-0" aria-hidden="true">
        <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
          -->
          <div class="w-screen max-w-md">
            <div class="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
              <div class="flex flex-col flex-1 min-h-0 py-6 overflow-y-scroll">
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                      <slot>Settings</slot>
                    </h2>
                    <div class="flex items-center ml-3 h-7">
                      <button
                        v-on:click="open = false"
                        type="button"
                        class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <span class="sr-only">Close panel</span>
                        <icon-x-outlined></icon-x-outlined>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex-1 px-4 mt-6 sm:px-6">
                  <!-- Replace with your content -->
                  <div class="h-full border-2 border-gray-200 border-dashed" aria-hidden="true"></div>
                  <!-- /End replace -->
                </div>
              </div>
              <div class="flex justify-end flex-shrink-0 px-4 py-4">
                <button
                  type="button"
                  class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >Cancel</button>
                <button
                  type="submit"
                  class="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>