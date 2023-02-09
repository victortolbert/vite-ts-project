
<script setup>
import { CodeIcon, DotsVerticalIcon, FlagIcon, StarIcon } from '@heroicons/vue/solid'
</script>

<template>
  <div class="px-8 mt-8">
    <div class="px-4 py-5 bg-white sm:px-6">
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900">
            <a href="#" class="hover:underline">Chelsea Hagon</a>
          </p>
          <p class="text-sm text-gray-500">
            <a href="#" class="hover:underline">December 9 at 11:43 AM</a>
          </p>
        </div>
        <div class="flex self-center flex-shrink-0">
          <Menu as="div" class="relative z-30 inline-block text-left">
            <div>
              <MenuButton
                class="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600"
              >
                <span class="sr-only">Open options</span>
                <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']"
                    >
                      <StarIcon class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                      <span>Add to favorites</span>
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']"
                    >
                      <CodeIcon class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                      <span>Embed</span>
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']"
                    >
                      <FlagIcon class="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                      <span>Report content</span>
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>
