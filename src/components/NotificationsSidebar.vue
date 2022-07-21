<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSound } from '@vueuse/sound'
import Button from '@/assets/sound/button.wav'

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { play } = useSound(Button)
    const showNotifications = ref(true)
    const fullwidth = ref(false)

    return {
      play,
      showNotifications,
      fullwidth,
    }
  },
})
</script>

<template>
  <!-- eslint-disable vue/no-deprecated-v-bind-sync -->
  <o-sidebar fullheight right :open.sync="showNotifications">
    <section class="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
      <div class="flex flex-col flex-1 min-h-0 overflow-y-scroll">
        <header class="px-4 mt-4 sm:px-6">
          <div class="flex items-start justify-between">
            <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900">
              Notifications
            </h2>
            <div class="flex items-center ml-3 h-7">
              <button
                class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                @click="showNotifications = false"
              >
                <span class="sr-only">Close panel</span>
                <!-- <i-carbon-close class="w-6 h-6" /> -->
                Close
              </button>
            </div>
          </div>
        </header>

        <article class="relative flex-1 px-4 mt-4 sm:px-6">
          <!-- Replace with your content -->
          <div class="h-full border-2 border-gray-200 border-dashed" aria-hidden="true" />
          <!-- /End replace -->
        </article>
      </div>

      <footer class="flex justify-end flex-shrink-0 px-4 py-4">
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Save
        </button>
      </footer>
    </section>
  </o-sidebar>
</template>
