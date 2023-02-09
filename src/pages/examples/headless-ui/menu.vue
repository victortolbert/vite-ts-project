<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon, ArchiveIcon, DuplicateIcon, ExternalLinkIcon, PencilIcon, TrashIcon } from '@heroicons/vue/solid'
</script>

<template>
  <page-wrapper>
    <div class="flex items-center justify-center p-16 rounded-lg shadow-lg bg-primary-500">
      <div class="text-right">
        <Menu as="div" class="relative inline-block">
          <div>
            <MenuButton
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Options
              <ChevronDownIcon
                class="w-5 h-5 ml-2 -mr-1 text-primary-200 hover:text-primary-100"
                aria-hidden="true"
              />
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
              class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-primary-500 text-white' : 'text-gray-900',
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]"
                  >
                    <PencilIcon
                      :active="active"
                      class="w-5 h-5 mr-2 text-primary-400"
                      aria-hidden="true"
                    />Edit
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-primary-500 text-white' : 'text-gray-900',
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]"
                  >
                    <DuplicateIcon
                      :active="active"
                      class="w-5 h-5 mr-2 text-primary-400"
                      aria-hidden="true"
                    />Duplicate
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-primary-500 text-white' : 'text-gray-900',
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]"
                  >
                    <ArchiveIcon
                      :active="active"
                      class="w-5 h-5 mr-2 text-primary-400"
                      aria-hidden="true"
                    />Archive
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-primary-500 text-white' : 'text-gray-900',
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]"
                  >
                    <ExternalLinkIcon
                      :active="active"
                      class="w-5 h-5 mr-2 text-primary-400"
                      aria-hidden="true"
                    />Move
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-primary-500 text-white' : 'text-gray-900',
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]"
                  >
                    <TrashIcon
                      :active="active"
                      class="w-5 h-5 mr-2 text-primary-400"
                      aria-hidden="true"
                    />Delete
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>

    <div>
      <Menu>
        <MenuButton as="template">
          <button>More</button>
        </MenuButton>
        <MenuItems>
          <MenuItem v-slot="{ active }">
            <a :class="{ 'bg-blue-500': active }" href="/account-settings">Account settings</a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  </page-wrapper>
</template>
