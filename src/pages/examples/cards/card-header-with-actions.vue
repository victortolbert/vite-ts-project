<script>
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'
</script>

<template>
  <div class="px-8 mt-8">
    <div class="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
      <div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap">
        <div class="mt-4 ml-4">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 border rounded-full">LA</div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Ladder Assist</h3>
              <p class="text-sm text-gray-500">
                <a
                  href="#"
                >Adjuster and Technician meet on site at specified time to perform inspection.</a>
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-shrink-0 mt-4 ml-4">
          <button
            type="button"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <i-heroicons-solid-phone class="w-5 h-5 mr-2 -ml-1 text-gray-400" aria-hidden="true" />
            <span>Phone</span>
          </button>
          <button
            type="button"
            class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <i-heroicons-solid-mail class="w-5 h-5 mr-2 -ml-1 text-gray-400" aria-hidden="true" />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

