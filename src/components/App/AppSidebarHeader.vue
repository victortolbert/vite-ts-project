<script setup>
  // TODO Convert to Props
  const isCollapsed = ref(false)
  const siteName = ref('VuePress')
</script>
<template>
  <div>
    <a
      id="app-sidebar-header"
      href="#"
      class="flex items-center bg-white text-primary-600 sidebar-header"
    >
      <div class="flex items-center justify-center h-16 shrink-0 w-14">
        <BrandLogo class="text-current" />
        <!-- <PatternLabLogo class="rotate-slow" /> -->
      </div>
      <transition name="fade">
        <span class="inline-block space-x-2 font-bold whitespace-nowrap" v-show="!isCollapsed">
          <button @click="pronounce('vue').play()" type="button" class="hover:underline">Vue</button>
          <span>{{ siteName }}</span>
        </span>
      </transition>
    </a>
    <div class="px-2 py-2 mt-3 text-xs">
      <router-link
        to="/profile"
        class="flex items-center w-10 h-10 text-left text-white bg-transparent border border-transparent cursor-pointer"
      >
        <BaseAvatar class="grayscale" />
        <dl v-if="!isCollapsed" class="ml-2">
          <dt class="font-bold uppercase">Victor Tolbert</dt>
          <dd>victor.tolbert@gmail.com</dd>
        </dl>
      </router-link>
    </div>
  </div>
</template>
