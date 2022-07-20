<template>
  <header class="py-8 shadow-lg bg-primary-50 dark:text-primary-300 dark:bg-primary-800">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
      <div class="flex-1 min-w-0">
        <h1 class="mt-2 text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
          Billing
        </h1>
        <!-- v-if -->
      </div>
      <div class="flex mt-5 xl:mt-0 xl:ml-4">
        <div class="flex items-center space-x-4">
          <button class="h-button">
            Export to QBXML &amp; to CSV
          </button>
          <button class="h-button">
            Reset Billed to Complete
          </button>
          <button class="h-button">
            Close Billed Projects
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
