<template>
  <header class="bg-white shadow">
    <div class="px-4">
      <div class="w-full p-4 mx-auto">
        <div class="justify-end mt-2 md:flex md:items-center md:justify-between">
          <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-primary-500 sm:text-3xl sm:truncate">
              <slot />
            </h2>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
