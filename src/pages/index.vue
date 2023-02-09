<script setup>
import { VAlert } from 'vuetensils/src/components'
import { DateTime } from "luxon"
import faker from '@faker-js/faker'
import { nanoid } from 'nanoid'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const state = reactive({
  announcements: [
    {
      Id: 1,
      Title: "Covid Protocol",
      FullName: "Victor Tolbert",
      Description: "Here is an announcement for you to see!",
      PublishDate: "2022-01-25 12:00:00"
    },
    {
      Id: 2,
      Title: "2022 Observed Holidays",
      FullName: "Victor Tolbert",
      Description: "Here is an updated list of the company's observed holidays",
      PublishDate: "2022-01-25 12:00:00"
    },
    {
      Id: 3,
      Title: "Discount for Oil Changes available at Example Company",
      FullName: "Victor Tolbert",
      Description: "Show your credentials and save 50% on oil changes and others auto services.",
      PublishDate: "2022-01-25 12:00:00"
    },
  ]
})

const someObject = reactive({
  foo: 'Foo',
  bar: 'Bar',
})
const choices = ref([
  'Front',
  'Back',
  'Left',
  'Right',

])
const label = 'Directionality North'
const alert = ref(false)
const countdown = ref(10)
const modules = [Navigation, Pagination, Scrollbar, A11y]

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')

}
console.log('2022-01-25 12:00:00'.split(' ')[0])

console.log(faker)

console.log(nanoid())
</script>

<style>
.p-ripple.purple .p-ink {
  background: rgba(256, 39, 176, 0.3);
}
</style>
<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Dashboard
      <template #actions>
        <dark-toggle />
      </template>
    </hancock-page-heading>

    <card-header>Ladder Assist</card-header>
    <greet />

    <!-- Do you want to receive a desktop notification when new content is published? -->

    <div class="px-8 mt-8">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="border border-red-700 p-16 flex items-center justify-center">Slide 1</div>
        </swiper-slide>
        <swiper-slide>
          <div class="border border-green-700 p-16 flex items-center justify-center">Slide 2</div>
        </swiper-slide>
        <swiper-slide>
          <div class="border border-blue-700 p-16 flex items-center justify-center">Slide 3</div>
        </swiper-slide>
      </swiper>
    </div>

    <section class="px-8 mt-8">
      <ul>
        <li>{{ DateTime.fromISO('2022-01-25 12:00:00'.split(' ')[0]).toFormat('MMMM dd, yyyy') }}</li>
        <li>City Name: {{ faker.address.cityName() }}</li>
        <li>Object Element: {{ faker.random.objectElement({ foo: 'Foo', bar: 'Bar' }) }}</li>
        <li>UUID: {{ faker.datatype.uuid() }}</li>
        <li>User Card: {{ faker.helpers.userCard() }}</li>
        <li>Alpha: {{ faker.random.alpha(8) }}</li>
        <li>Alpha Numeric: {{ faker.random.alphaNumeric(8) }}</li>
        <li>Words: {{ faker.random.words() }}</li>
        <li>Boolean: {{ faker.datatype.boolean() }}</li>
        <li>Unique Array: {{ faker.helpers.uniqueArray(faker.definitions.name.first_name, 6) }}</li>
        <li>
          Array Element: {{
            faker.random.arrayElement([
              {
                id: 1,
                name: 'Reginald'
              },
              {
                id: 2,
                name: 'Victor'
              },
              {
                id: 3,
                name: 'Brent'
              },
              {
                id: 4,
                name: 'India'
              },
            ])
          }}
        </li>
        <li>
          Image:
          <img :src="faker.internet.avatar()" />
          <img :src="faker.image.animals()" />
        </li>
        <li>
          Image:
          <img :src="faker.random.image()" />
        </li>
      </ul>
    </section>

    <div class="flex items-center justify-center h-screen p-4 bg-primary-700">
      <div class="flex-1 max-w-screen-lg p-4 rounded-lg shadow-xl bg-primary-600 sm:p-8">
        <!-- Video -->
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/NX_NW6bt6_s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div v-if="false" class="px-8 mt-8">
      <button @click="alert = true">Show alert</button>
      <v-alert v-model="alert" dismissible>Click that button to make me go away</v-alert>

      <div>
        <button @click="countdown = 10">Reset time</button>
        <v-alert
          v-model="countdown"
          class="error"
          dismissible
        >This alert will dismiss in {{ countdown }} seconds.</v-alert>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6 px-8 mt-8">
      <!-- Left -->

      <div class="col-span-12 lg:col-span-3">
        <section>
          <header
            class="p-6 bg-white rounded-lg shadow-lg dark:bg-primary-700 dark:text-primary-200"
          >
            <h2 class="flex items-center space-x-2">
              <i class="text-gray-400 fad fa-calendar fa-lg"></i>
              <span>Calendar</span>
            </h2>
            <div class="mt-4">
              <area-chart v-if="false" :data="{ '2021-01-01': 11, '2021-01-02': 6 }"></area-chart>
              <bar-chart v-if="false" :data="[['Work', 32], ['Play', 1492]]"></bar-chart>
              <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
              <geo-chart :data="[['United States', 44], ['Germany', 23], ['Brazil', 22]]"></geo-chart>

              <line-chart
                v-if="false"
                :data="{ '2022-01-01': 11, '2022-01-02': 6, '2022-01-03': 10, '2022-01-04': 8, '2022-01-05': 9 }"
              ></line-chart>

              <pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>

              <scatter-chart
                :data="[[174.0, 80.0], [176.5, 82.3]]"
                xtitle="Size"
                ytitle="Population"
              ></scatter-chart>

              <timeline
                v-if="false"
                :data="[['Washington', '1789-04-29', '1797-03-03'], ['Adams', '1797-03-03', '1801-03-03']]"
              ></timeline>
            </div>
          </header>
        </section>

        <section class="mt-8">
          <div class="p-6 bg-white rounded-lg shadow-lg dark:bg-primary-700 dark:text-primary-200">
            <div v-if="false">
              <div class="relative mt-1 rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i class="w-5 h-5 text-gray-400 fad fa-search" aria-hidden="true"></i>
                </div>
                <input
                  type="search"
                  name="serch"
                  id="search"
                  class="block w-full pl-10 border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="Search by Project or Claim #"
                />
              </div>
            </div>

            <div class="h-field">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i class="w-5 h-5 text-gray-400 fad fa-search" aria-hidden="true"></i>
                </div>
                <input
                  type="search"
                  placeholder="Find by Project or Claim #"
                  class="block w-full pl-10 text-xs bg-white border-gray-300 rounded-full dark:border-primary-900 focus:ring-primary-500 dark:bg-primary-800 dark:text-white focus:border-primary-500 sm:text-sm"
                />
              </div>
              <!-- <p class="text-sm h-form-help">Search by Project or Claim Number</p> -->
            </div>
          </div>
        </section>
      </div>

      <!-- Middle -->
      <div class="col-span-12 lg:col-span-9">
        <section class="bg-white rounded-lg shadow-lg dark:bg-primary-700 dark:text-primary-200">
          <header class="p-6">
            <h2 class="flex items-center space-x-2">
              <i class="text-gray-400 fad fa-megaphone fa-lg"></i>
              <span>Announcements</span>
            </h2>
          </header>

          <div class="flex flex-col overflow-hidden">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-md sm:rounded-lg">
                  <table class="min-w-fulls">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >Title</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >Description</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >Publish Date</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >Full Name</th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="announcement in state.announcements"
                        :key="announcement.Id"
                        class="bg-white border-b dark:bg-gray-800 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600"
                      >
                        <td
                          class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowraps dark:text-white"
                        >{{ announcement.Title }}</td>
                        <td
                          class="px-6 py-4 text-sm text-gray-500 whitespace-nowraps dark:text-gray-400"
                        >{{ announcement.Description }}</td>
                        <td
                          class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                        >{{ announcement.PublishDate }}</td>
                        <td
                          class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                        >{{ announcement.FullName }}</td>
                        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            href="#"
                            class="text-primary-600 hover:text-primary-900 dark:text-primary-500 dark:hover:underline"
                          >Edit</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-8">
          <header
            class="p-6 bg-white rounded-lg shadow-lg dark:bg-primary-700 dark:text-primary-200"
          >
            <h2 class="flex items-center space-x-2">
              <i class="text-gray-400 fad fa-money-check fa-lg"></i>
              <span>Past Due</span>
            </h2>
          </header>
        </section>

        <section class="mt-8">
          <header
            class="p-6 bg-white rounded-lg shadow-lg dark:bg-primary-700 dark:text-primary-200"
          >
            <h2 class="flex items-center space-x-2">
              <i class="text-gray-400 fad fa-calendar-day fa-lg"></i>
              <span>Today</span>
            </h2>
          </header>
        </section>

        <section class="mt-8">
          <header
            class="p-6 bg-white rounded-lg shadow-lg dark:bg-primary-700 dark:text-primary-200"
          >
            <h2 class="flex items-center space-x-2">
              <i class="text-gray-400 fad fa-calendar-day fa-lg"></i>
              <span>Tomorrow</span>
            </h2>
          </header>
        </section>

        <section
          class="mt-8 bg-white rounded-lg shadow-lg dark:bg-primary-700 dark:text-primary-200"
        >
          <header class="p-6">
            <h2 class="flex items-center space-x-2">
              <i class="text-gray-400 fad fa-fire fa-lg"></i>
              <span>Recent Activity</span>
            </h2>
          </header>

          <div class="px-8 mt-4">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-6">
                <span
                  class="absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
                >
                  <svg
                    class="w-3 h-3 text-primary-600 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <h3
                  class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Exemplar Application UI v2.0.0
                  <span
                    class="bg-primary-100 text-primary-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 ml-3"
                  >Latest</span>
                </h3>
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Released on January 13th, 2022</time>
                <p
                  class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                >Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clip-rule="evenodd"
                    />
                  </svg> Download ZIP
                </a>
              </li>
              <li class="mb-10 ml-6">
                <span
                  class="absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
                >
                  <svg
                    class="w-3 h-3 text-primary-600 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <h3
                  class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                >Exemplar Figma v1.3.0</h3>
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Released on December 7th, 2021</time>
                <p
                  class="text-base font-normal text-gray-500 dark:text-gray-400"
                >All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
              </li>
              <li class="mb-10 ml-6">
                <span
                  class="absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
                >
                  <svg
                    class="w-3 h-3 text-primary-600 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <h3
                  class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                >Exemplar Library v1.2.2</h3>
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Released on December 2nd, 2021</time>
                <p
                  class="text-base font-normal text-gray-500 dark:text-gray-400"
                >Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
              </li>
            </ol>

            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-4">
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >February 2022</time>
                <h3
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >Application UI code in Tailwind CSS</h3>
                <p
                  class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                >Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Learn more
                  <svg
                    class="w-3 h-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li class="mb-10 ml-4">
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >March 2022</time>
                <h3
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >Marketing UI design in Figma</h3>
                <p
                  class="text-base font-normal text-gray-500 dark:text-gray-400"
                >All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
              </li>
              <li class="ml-4">
                <div
                  class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                ></div>
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >April 2022</time>
                <h3
                  class="text-lg font-semibold text-gray-900 dark:text-white"
                >E-Commerce UI code in Tailwind CSS</h3>
                <p
                  class="text-base font-normal text-gray-500 dark:text-gray-400"
                >Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
              </li>
            </ol>
          </div>
        </section>
      </div>

      <!-- Three -->
      <section
        class="col-span-12 bg-white rounded-lg shadow-lg lg:col-span-3 dark:bg-primary-700 dark:text-primary-200"
      >
        <header class="p-6 border-b">
          <h2 class="flex items-center space-x-2">
            <i class="text-gray-400 fad fa-folders fa-lg"></i>
            <span>Projects by Status</span>
          </h2>
        </header>
        <div class="px-6 mt-4 text-sm divide-y divide-primary-100">
          <dl class="flex items-center justify-between py-1">
            <dt>Triage</dt>
            <dd>446</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Call Queue</dt>
            <dd>319</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Schedule</dt>
            <dd>1363</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Assigned</dt>
            <dd>2604</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Confirmed</dt>
            <dd>768</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Working</dt>
            <dd>79</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Review</dt>
            <dd>274</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Complete</dt>
            <dd>33</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Billed</dt>
            <dd>844</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Closed</dt>
            <dd>325</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Hold</dt>
            <dd>71</dd>
          </dl>
          <dl class="flex items-center justify-between py-1">
            <dt>Pending</dt>
            <dd>451</dd>
          </dl>
          <dl class="flex items-center justify-between py-4 font-bold">
            <dt>TOTAL</dt>
            <dd>7577</dd>
          </dl>
        </div>
      </section>
    </div>
  </hancock-page-wrapper>
</template>

<style>
/* Some CSS file */
.vts-alert {
  /*
  border-radius: 4px;
  padding: 0 10px;
  color: #900;
  background: #fdd; */
  border: 1px solid currentColor;
  @apply rounded-md p-4 flex items-center justify-between bg-blue-200;
}

.vts-alert__dismiss {
  border: 0;
  font: inherit;
  background: transparent;
}

.vts-alert.error {
  border: 1px solid currentColor;
  border-radius: 4px;
  color: #900;
  background: #fdd;
}

.vts-alert.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 10px;
  color: #009;
  background: #dff;
}
</style>
