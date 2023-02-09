<template>
  <div class="flex items-end justify-between space-x-4">
    <div class="flex items-end space-x-4">
      <div class="flex items-center space-x-2">
        <label for="date-range" class="whitespace-nowrap">Date Range</label>
        <input
          type="checkbox"
          id="date-range"
          class="w-10 h-10 border-gray-300 rounded-lg shadow-lg dark:bg-primary-800 focus:ring-primary-500 text-primary-600"
        />
      </div>
      <div class="flex flex-col text-xs tracking-wider uppercase">
        <label for="start-date">Start Date</label>
        <input class="rounded-lg shadow-lg dark:bg-primary-800" type="date" id="start-date" />
      </div>
      <div class="flex flex-col text-xs tracking-wider uppercase">
        <label for="finish-date">Finish Date</label>
        <input class="rounded-lg shadow-lg dark:bg-primary-800" type="date" id="finish-date" />
      </div>
    </div>

    <div v-if="false" class="flex items-center space-x-1">
      <input class="rounded-lg shadow-lg dark:bg-primary-800" type="search" />
      <button>
        <i-heroicons-outline-search />
      </button>
    </div>

    <div v-if="false" class="w-full max-w-xs">
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i-heroicons-solid-search class="flex-shrink-0 w-5 h-5 text-gray-400" />
        </div>
        <input
          name="search"
          id="search"
          class="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-primary-800 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>

    <form class="flex space-x-4" action="#">
      <div class="flex-1 min-w-0">
        <label for="search" class="sr-only">Search</label>
        <div class="relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <i-heroicons-solid-search class="flex-shrink-0 w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            class="block w-full pl-10 border-gray-300 rounded-md dark:bg-primary-800 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      <button
        type="submit"
        class="inline-flex justify-center px-3.5 py-2 border dark:bg-primary-800 border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <i-heroicons-solid-filter class="flex-shrink-0 w-5 h-5 text-gray-400" />
        <span class="sr-only">Search</span>
      </button>
    </form>
  </div>
</template>
