<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

Component({})
export default class AppNavbar extends Vue {
  isOpen = false

  navLinks = [
    {
      label: 'Auto Scheduler',
      url: '/',
    },
  ]
}
</script>

<template>
  <nav class="border-b border-opacity-25 bg-primary-600 border-primary-300 lg:border-none">
    <div class="px-2 mx-auto sm:px-4 lg:px-4">
      <div class="relative flex items-center justify-between h-16 lg:border-b lg:border-primary-400 lg:border-opacity-25">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <!-- Navbar branding -->
            <a class="flex items-center pr-4 mr-4 text-white no-underline" href="/Technician/AutoScheduler">
              <app-logo />
              <app-title />
            </a>
          </div>

          <!-- Navbar items -->
          <div class="hidden lg:ml-10 lg:block">
            <div class="flex space-x-4" />
          </div>
        </div>

        <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
          <app-search-input v-if="false" />
        </div>

        <div class="flex lg:hidden">
          <app-mobile-menu-button />
        </div>

        <div class="hidden lg:ml-4 lg:block">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <slot name="actions" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="false" id="mobile-menu" class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="/Technician/AutoScheduler" class="px-3 py-2 text-sm font-medium text-white rounded-md bg-primary-700 hover:bg-primary-500 hover:bg-opacity-75 ">
          AutoScheduler
        </a>
      </div>
      <div class="pt-4 pb-3 border-t border-primary-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <base-avatar />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">
              Michael Houser
            </div>
            <div class="text-sm font-medium text-primary-300">
              michael@example.com
            </div>
          </div>
          <button
            type="button"
            class="flex-shrink-0 p-1 ml-auto rounded-full bg-primary-600 text-primary-200 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            <span class="sr-only">View notifications</span>
            <icon-bell-solid />
          </button>
        </div>
        <div class="px-2 mt-3 space-y-1">
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-primary-500 hover:bg-opacity-75"
          >Settings</a>

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-primary-500 hover:bg-opacity-75"
          >Sign out</a>
        </div>
      </div>
    </div>
  </nav>
</template>
