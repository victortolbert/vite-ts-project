<script setup>
import { HomeIcon } from '@heroicons/vue/outline'

const nav = ref([
  { name: 'Kendo Grid', href: '/examples/grid' },
  // { name: 'Cell Custom', href: '/examples/grid/cell-custom' },
  // { name: 'Cell Template', href: '/examples/grid/cell-template' },
  // { name: 'Column Headers', href: '/examples/grid/column-headers' },
  // { name: 'Column Menu', href: '/examples/grid/column-menu' },
  // { name: 'Column Width minimum', href: '/examples/grid/column-width-minimum' },
  // { name: 'Column Width percentage', href: '/examples/grid/column-width-percentage' },
  // { name: 'Columns Locked', href: '/examples/grid/columns-locked' },
  // { name: 'Custom Cell', href: '/examples/grid/custom-cell' },
  // { name: 'Detail row', href: '/examples/grid/detail-row' },
  // { name: 'Detail', href: '/examples/grid/detail' },
  // { name: 'Editing Inline', href: '/examples/grid/editing-inline' },
  // { name: 'Filter Row Custom', href: '/examples/grid/filter-row-custom' },
  // { name: 'Filter Row', href: '/examples/grid/filter-row' },
  // { name: 'Filtering', href: '/examples/grid/filtering' },
  // { name: 'Grouping', href: '/examples/grid/grouping' },
  // { name: 'Kitchen Sink', href: '/examples/grid/kitchen-sink' },
  // { name: 'Master Detail', href: '/examples/grid/master-detail' },
  // { name: 'On Resize', href: '/examples/grid/on-resize' },
  // { name: 'Paging', href: '/examples/grid/paging' },
  // { name: 'Reordering', href: '/examples/grid/reordering' },
  // { name: 'Resizing', href: '/examples/grid/resizing' },
  // { name: 'Select', href: '/examples/grid/select' },
  // { name: 'Selection', href: '/examples/grid/selection' },
  // { name: 'Sorting', href: '/examples/grid/sorting' },
])

const navigation = ref([
   {
     name: 'Grid',
     icon: HomeIcon,
     href: '/examples/grid',
     current: true
  },
  {
    name: 'Filter Row Custom',
    icon: HomeIcon,
    href: '/examples/grid/filter-row-custom',
    current: false
  },
])
</script>

<template>
  <div>
    <core-navbar>
        <Menu as="div" class="relative inline-block">
          <div>
            <MenuButton
              class="inline-flex items-center justify-center w-full"
            >
              <span>Examples</span>
              <i-heroicons-solid-chevron-down
                class="w-5 h-5 ml-2 -mr-1 text-primary-200"
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
              class="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-for="item in navigation" :key="item.name" v-slot="{ active }">
                  <router-link
                    :to="item.href"
                    :class="[
                      active ? 'bg-primary-500 text-white' : 'text-gray-900',
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                    ]"
                  >
                    {{ item.name }}
                  </router-link>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <template #actions>
          <dark-toggle />
        </template>
    </core-navbar>

    <hancock-page-heading v-if="false">Kendo UI Grid</hancock-page-heading>
    <page-wrapper>
      <header
        v-if="false"
        class="p-6 bg-white border rounded shadow dark:bg-gray-900 dark:text-primary-50 text-primary-500"
      >
        <nav aria-label="Global" class="grid grid-cols-2">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-xs font-medium text-gray-900"
          >{{ item.name }}</router-link>
        </nav>
      </header>
      <router-view></router-view>
    </page-wrapper>
  </div>
</template>
