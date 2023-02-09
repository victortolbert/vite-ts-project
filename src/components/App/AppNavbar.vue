<script setup lang="ts">
import { ref } from 'vue'
const slots = useSlots()

const open = ref(false)

const navLinks = ref([
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Signup',
    url: '/signup'
  },
  {
    label: 'TodoMVC',
    url: '/todomvc'
  }
])

const hasActionsSlot = computed(() => {
  return !!slots.actions
})

</script>

<template>
  <!-- <nav>
    <ul class="nav-list">
      <li v-for="navItem in navLinks" :key="navItem.url">
        <nuxt-link :to="navItem.url">{{ navItem.label }}</nuxt-link>
      </li>
    </ul>
  </nav>-->
  <nav
    class="flex items-center justify-end h-16 bg-white border-b border-opacity-25 shadow-lg dark:bg-primary-900 border-primary-100 dark:border-primary-900 lg:border-none"
  >
    <div class="w-full mx-auto">
      <div
        class="relative flex items-center justify-between h-16 lg:border-b lg:border-primary-400 lg:border-opacity-25"
      >
        <div class="flex items-center px-2 lg:px-0">
          <div v-if="false" class="flex-shrink-0">
            <!-- Navbar branding -->
            <router-link
              to="/dashboard"
              class="flex items-center pr-4 mr-4 text-white no-underline"
            >
              <hancock-logo />
            </router-link>
          </div>

          <!-- Navbar items -->
          <div v-if="false" class="hidden lg:block lg:ml-10">
            <div class="flex space-x-4">
              <!-- Current: "bg-primary-700 text-white", Default: "text-white hover:bg-primary-500 hover:bg-opacity-75" -->
              <router-link
                to="/autoscheduler"
                class="px-3 py-2 text-sm font-medium text-white rounded-md bg-primary-700"
                aria-current="page"
              >Auto Scheduler</router-link>
            </div>
          </div>
        </div>

        <div v-if="hasActionsSlot" class="flex justify-end flex-1 px-2 ml-6 space-x-4">
          <slot name="actions" />
        </div>

        <div v-if="false" class="flex justify-end flex-1 px-2 ml-6"></div>

        <div class="flex lg:hidden">
          <mobile-menu-button></mobile-menu-button>
        </div>

        <div class="hidden lg:block lg:ml-4">
          <div class="flex items-center">
            <notifications-button></notifications-button>

            <profile-dropdown></profile-dropdown>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="false" class="lg:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-primary-700 text-white", Default: "text-white hover:bg-primary-500 hover:bg-opacity-75" -->
        <router-link
          to="/autoscheduler"
          class="block px-3 py-2 text-base font-medium text-white rounded-md bg-primary-700"
          aria-current="page"
        >Auto Scheduler</router-link>
      </div>
      <div class="pt-4 pb-3 border-t border-primary-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="w-10 h-10 rounded-full" src="/assets/img/users/michael.jpg" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Michael Houser</div>
            <div class="text-sm font-medium text-primary-300">michael@example.com</div>
          </div>
          <button
            type="button"
            class="flex-shrink-0 p-1 ml-auto rounded-full text-primary-200 bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
        <div class="px-2 mt-3 space-y-1">
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-primary-500 hover:bg-opacity-75"
          >Your Profile</a>

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
