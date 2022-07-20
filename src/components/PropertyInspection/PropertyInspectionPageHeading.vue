<template>
  <header class="py-8 shadow-lg bg-primary-50 dark:text-primary-300 dark:bg-primary-800">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
      <div class="flex-1 min-w-0">
        <h1 class="mt-2 text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
          Property Inspection Form
        </h1>
        <div class="flex flex-col mt-1 sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-8">
          <p>
            Please remember to save your work and wait for all uploads to complete before
            returning to the PIFA.
          </p>
        </div>
      </div>
      <div class="flex mt-5 xl:mt-0 xl:ml-4">
        <div class="flex items-center space-x-4">
          <button type="button" class="grid">
            <!-- <i class="text-gray-400 fad fa-save fa-lg"></i> Font Awesome fontawesome.com -->
            <i-carbon-save />
            <span class="font-bold">Save</span>
          </button>
          <button type="button" class="grid">
            <!-- <i class="text-gray-400 fad fa-file-chart-line fa-lg"></i> Font Awesome fontawesome.com -->
            <i-carbon-chart-custom />
            <span class="font-bold">Reports</span>
          </button>
          <a href="/PropertyInspection/PropertyInspections/1/admin" class="grid">
            <i-carbon-report />
            <span class="font-bold">PIFA</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
