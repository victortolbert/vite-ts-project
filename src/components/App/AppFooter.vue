<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav class="flex items-center justify-between p-6">
    <VueIcon class="w-auto h-6 grayscale"/>

    <div class="text-2xl">
      <i-mdi-microsoft-azure-devops class="text-[#0078D7]"/>
    </div>

    <button class="icon-btn" @click="toggleDark()">
      <div v-if="isDark">
        <moon-icon class="w-5 h-5" />
      </div>
      <div v-else>
        <sun-icon class="w-5 h-5" />
      </div>
    </button>
  </nav>
</template>
