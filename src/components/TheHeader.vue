<template>
  <header class="py-4 text-white bg-primary-600">
    <div
      class="px-8 mx-auto sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between"
    >
      <div class="flex-1 min-w-0">
        <a
          class="mt-2 text-2xl font-bold leading-7 sm:text-xl sm:truncate"
        >
          Property Inspection Form
        </a>

        <div class="flex items-center text-sm mt-1 space-x-8">
          <a>Admin</a>
          <a>
            Property Overview
          </a>
          <a>
            Inspection Summary
          </a>
          <a>
            Report Details
          </a>
          <a>
            Scope Sheet
          </a>
          <a>
            Photo Set
          </a>
        </div>
      </div>

      <div class="flex xl:ml-4">
        <div class="flex items-center space-x-2">
          <div>
            <label v-if="false" for="project-search">Search</label>
            <input
              id="project-search"
              type="search"
              placeholder="Project Number"
              class="bg-white border rounded-lg shadow-lg border-primary-400"
            >
          </div>
          <button class="space-x-2 h-button inline-flex items-center">
            <!-- <i-carbon-help class="w-6 h-6" /> -->
            <span class="font-bold">Help</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
