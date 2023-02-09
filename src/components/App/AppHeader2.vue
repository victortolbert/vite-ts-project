<template>
  <header class="text-white bg-primary">
    <div class="flex items-center justify-between px-4 py-1">
      <a class="flex items-center pr-4 mr-4 text-white no-underline" href="/">
        <hancock-logo-mark></hancock-logo-mark>
        <app-title></app-title>
      </a>

      <form class="flex items-center space-x-2">
        <!-- <search-input></search-input> -->
        <availability-button></availability-button>
        <settings-button></settings-button>
      </form>
    </div>
  </header>
</template>