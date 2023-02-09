<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { OfficeBuildingIcon, UsersIcon, ChevronRightIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

const tabs = [
  { name: 'Tab 1', href: '#', icon: OfficeBuildingIcon, current: false },
  { name: 'Tab 2', href: '#', icon: UsersIcon, current: false },
]

const statuses = [{
  status: 'Triage',
  quantity: '444',
},
{
  status: 'Call Queue',
  quantity: '325',
},
{
  status: 'Schedule',
  quantity: '1390',
},
{
  status: 'Assigned',
  quantity: '2556',
},
{
  status: 'Confirmed',
  quantity: '767',
},
{
  status: 'Working',
  quantity: '80',
},
{
  status: 'Review',
  quantity: '269',
},
{
  status: 'Complete',
  quantity: '53',
},
{
  status: 'Billed',
  quantity: '824',
},
{
  status: 'Closed',
  quantity: '324',
},
{
  status: 'Hold',
  quantity: '71',
},
{
  status: 'Pending',
  quantity: '462',
},
{
  status: 'TOTAL',
  quantity: '7565',
},
]

function changedTab() {
  console.log('changed tab')
}

const projects = [
  {
    id: 1,
    title: 'GraphQL API',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // More projects...
]
const pinnedProjects = projects.filter((project) => project.pinned)
</script>

<template>
  <page-wrapper>
    {{ statuses }}
    <tab-group @change="changedTab">
      <tab-list class="flex -mb-px space-x-8 border-b border-gray-200">
        <Tab v-for="tab in tabs" v-slot="{ selected }" as="template" :key="tab.name">
          <button
            :class="[selected ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm']"
          >
            <component
              :is="tab.icon"
              :class="[selected ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5']"
              aria-hidden="true"
            />
            <span>{{ tab.name }}</span>
          </button>
        </Tab>
      </tab-list>

      <tab-panels class="mt-6">
        <tab-panel>
          <!-- Pinned projects -->
          <div class="px-4 mt-6 sm:px-6 lg:px-8">
            <h2 class="text-xs font-medium tracking-wide text-gray-500 uppercase">Pinned Projects</h2>
            <ul
              role="list"
              class="grid grid-cols-1 gap-4 mt-3 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              <li
                v-for="project in pinnedProjects"
                :key="project.id"
                class="relative flex col-span-1 rounded-md shadow-sm"
              >
                <div
                  :class="[project.bgColorClass, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']"
                >{{ project.initials }}</div>
                <div
                  class="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md"
                >
                  <div class="flex-1 px-4 py-2 text-sm truncate">
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:text-gray-600"
                    >{{ project.title }}</a>
                    <p class="text-gray-500">{{ project.totalMembers }} Members</p>
                  </div>
                  <Menu as="div" class="flex-shrink-0 pr-2">
                    <MenuButton
                      class="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      <span class="sr-only">Open options</span>
                      <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
                    </MenuButton>
                    <transition
                      enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-in"
                      leave-from-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0"
                    >
                      <MenuItems
                        class="absolute z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg right-10 top-3 ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div class="py-1">
                          <MenuItem v-slot="{ active }">
                            <a
                              href="#"
                              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                            >View</a>
                          </MenuItem>
                        </div>
                        <div class="py-1">
                          <MenuItem v-slot="{ active }">
                            <a
                              href="#"
                              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                            >Removed from pinned</a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <a
                              href="#"
                              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                            >Share</a>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </transition>
                  </Menu>
                </div>
              </li>
            </ul>
          </div>

          <!-- Projects list (only on smallest breakpoint) -->
          <div class="mt-10 sm:hidden">
            <div class="px-4 sm:px-6">
              <h2 class="text-xs font-medium tracking-wide text-gray-500 uppercase">Projects</h2>
            </div>
            <ul role="list" class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
              <li v-for="project in projects" :key="project.id">
                <a
                  href="#"
                  class="flex items-center justify-between px-4 py-4 group hover:bg-gray-50 sm:px-6"
                >
                  <span class="flex items-center space-x-3 truncate">
                    <span
                      :class="[project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full']"
                      aria-hidden="true"
                    />
                    <span class="text-sm font-medium leading-6 truncate">
                      {{ project.title }}
                      {{ ' ' }}
                      <span
                        class="font-normal text-gray-500 truncate"
                      >in {{ project.team }}</span>
                    </span>
                  </span>
                  <ChevronRightIcon
                    class="w-5 h-5 ml-4 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>

          <!-- Projects table (small breakpoint and up) -->
          <div class="hidden mt-8 sm:block">
            <div class="inline-block min-w-full align-middle border-b border-gray-200">
              <table class="min-w-full">
                <thead>
                  <tr class="border-t border-gray-200">
                    <th
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      <span class="lg:pl-2">Project</span>
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >Members</th>
                    <th
                      class="hidden px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 md:table-cell bg-gray-50"
                    >Last updated</th>
                    <th
                      class="py-3 pr-6 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    />
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-100">
                  <tr v-for="project in projects" :key="project.id">
                    <td
                      class="w-full px-6 py-3 text-sm font-medium text-gray-900 max-w-0 whitespace-nowrap"
                    >
                      <div class="flex items-center space-x-3 lg:pl-2">
                        <div
                          :class="[project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full']"
                          aria-hidden="true"
                        />
                        <a href="#" class="truncate hover:text-gray-600">
                          <span>
                            {{ project.title }}
                            {{ ' ' }}
                            <span
                              class="font-normal text-gray-500"
                            >in {{ project.team }}</span>
                          </span>
                        </a>
                      </div>
                    </td>
                    <td class="px-6 py-3 text-sm font-medium text-gray-500">
                      <div class="flex items-center space-x-2">
                        <div class="flex flex-shrink-0 -space-x-1">
                          <img
                            v-for="member in project.members"
                            :key="member.handle"
                            class="w-6 h-6 rounded-full max-w-none ring-2 ring-white"
                            :src="member.imageUrl"
                            :alt="member.name"
                          />
                        </div>
                        <span
                          v-if="project.totalMembers > project.members.length"
                          class="flex-shrink-0 text-xs font-medium leading-5"
                        >+{{ project.totalMembers - project.members.length }}</span>
                      </div>
                    </td>
                    <td
                      class="hidden px-6 py-3 text-sm text-right text-gray-500 md:table-cell whitespace-nowrap"
                    >{{ project.lastUpdated }}</td>
                    <td class="px-6 py-3 text-sm font-medium text-right whitespace-nowrap">
                      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </tab-panel>
        <tab-panel></tab-panel>
      </tab-panels>
    </tab-group>
  </page-wrapper>
</template>
