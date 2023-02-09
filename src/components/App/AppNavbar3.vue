<template>
  <nav class="border-b border-opacity-25 bg-primary-600 border-primary-300 lg:border-none">
    <div class="px-2 mx-auto sm:px-4 lg:px-4">
      <div
        class="relative flex items-center justify-between h-16 lg:border-b lg:border-primary-400 lg:border-opacity-25"
      >
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <router-link
              to="/dashboard"
              class="flex items-center pr-4 mr-4 text-white no-underline"
            >
              <hancock-logo />
            </router-link>
          </div>
          <div class="hidden lg:ml-10 lg:block">
            <div class="flex space-x-4" />
          </div>
        </div>
        <div class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end" />
      </div>
    </div>
  </nav>
</template>
