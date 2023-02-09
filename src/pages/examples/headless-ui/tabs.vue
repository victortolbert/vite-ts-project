<script>
import { defineComponent, h, ref, onMounted, watchEffect, watch } from 'vue'
import { SwitchGroup, Switch, SwitchLabel, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const tabs = [
  { name: 'My Account', content: 'Tab content for my account' },
  { name: 'Company', content: 'Tab content for company', disabled: true },
  { name: 'Team Members', content: 'Tab content for team members' },
  { name: 'Billing', content: 'Tab content for billing' },
]
const categories = {
  Recent: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: 'So you\'ve bought coffee... now what?',
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: 'The worst advice we\'ve ever heard about coffee',
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
}

export default {
  components: { SwitchGroup, Switch, SwitchLabel, TabGroup, TabList, Tab, TabPanels, TabPanel },
  setup(props, context) {
    const manual = ref(false)
    return {
      tabs: ref(tabs),
      categories: ref(categories),
      manual,
      resolveSwitchClass({ checked }) {
        return classNames(
          'relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline',
          checked ? 'bg-indigo-600' : 'bg-gray-200',
        )
      },
    }
  },
}
</script>

<template>
  <article class="h-screen mt-16">
    <div class="w-full h-full p-16 bg-primary-200">
      <TabGroup>
        <TabList class="flex p-1 space-x-1 bg-primary-900/40 rounded-xl">
          <Tab
            v-for="category in Object.keys(categories)"
            :key="category"
            v-slot="{ selected }"
            as="template"
          >
            <button
              :class="[
                'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>
        <TabPanels class="mt-2">
          <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            :class="[
              'bg-white rounded-xl p-3',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
            ]"
          >
            <ul>
              <li
                v-for="post in posts"
                :key="post.id"
                class="relative p-3 rounded-md hover:bg-coolGray-100"
              >
                <h3 class="text-sm font-medium leading-5">
                  {{ post.title }}
                </h3>
                <ul
                  class="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500"
                >
                  <li>{{ post.date }}</li>
                  <li>&middot;</li>
                  <li>{{ post.commentCount }} comments</li>
                  <li>&middot;</li>
                  <li>{{ post.shareCount }} shares</li>
                </ul>
                <a
                  href="#"
                  :class="[
                    'absolute inset-0 rounded-md',
                    'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400',
                  ]"
                />
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </article>
</template>
