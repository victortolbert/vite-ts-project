<template>
  <header class="py-8 shadow-lg bg-primary-50 dark:text-primary-300 dark:bg-primary-800">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
      <div class="flex-1 min-w-0">
        <!-- This example requires Tailwind CSS v2.0+ -->
        <nav class="flex" aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-4">
            <li>
              <div>
                <router-link
                  :to="{ name: 'home' }"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <i-carbon-home class="flex-shrink-0 h-5 w-5" />
                  <span class="sr-only">Home</span>
                </router-link>
              </div>
            </li>

            <li>
              <div class="flex items-center">
                <i-carbon-chevron-right class="flex-shrink-0 h-5 w-5 text-gray-400" />
                <router-link
                  :to="{ name: 'projects' }"
                  class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Projects
                </router-link>
              </div>
            </li>

            <li>
              <div class="flex items-center">
                <i-carbon-chevron-right class="flex-shrink-0 h-5 w-5 text-gray-400" />
                <a
                  href="#"
                  class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current="page"
                >
                  #0000000
                </a>
              </div>
            </li>
          </ol>
        </nav>

        <!--  -->

        <h1 class="mt-2 text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
          Projects
        </h1>
        <!-- v-if -->
      </div>

      <div class="flex mt-5 xl:mt-0 xl:ml-4">
        <div class="flex items-center space-x-4">
          <!-- Add Project -->
          <button
            class="grid px-6 sm:px-8 py-2 leading-none text-sm bg-white border-2 rounded shadow border-primary-200 place-items-center"
          >
            <span class="flex items-center justify-center space-x-1">
              <i-carbon-add-alt />
              <span class="hidden font-bold lg:inline-block">Add Project</span>
            </span>
          </button>

          <!-- Export to CSV Button -->
          <button
            class="grid px-6 sm:px-8 py-2 leading-none text-sm bg-white border-2 rounded shadow border-primary-200 place-items-center"
          >
            <span class="flex items-center justify-center space-x-1">
              <i-carbon-download />
              <span class="hidden font-bold lg:inline-block">Export to CSV</span>
            </span>
          </button>

          <!-- Bulk Assign Button -->
          <button
            class="grid px-6 sm:px-8 py-2 leading-none text-sm bg-white border-2 rounded shadow border-primary-200 place-items-center"
          >
            <span class="flex items-center justify-center space-x-1">
              <i-carbon-queued />
              <span class="hidden font-bold lg:inline-block">Bulk Assign</span>
            </span>
          </button>

          <!-- Accept Button -->
          <button
            class="grid px-6 sm:px-8 py-2 leading-none text-sm bg-white border-2 rounded shadow border-primary-200 place-items-center"
          >
            <span class="flex items-center justify-center space-x-1">
              <i-carbon-checkmark />
              <span class="hidden font-bold lg:inline-block">Accept</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
