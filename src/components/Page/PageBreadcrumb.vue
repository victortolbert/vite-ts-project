<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class PageBreadcrumb extends Vue {}
</script>

<template>
  <nav
    aria-label="Breadcrumb"
    class="flex items-center space-x-2 text-sm font-medium text-gray-500 whitespace-nowrap"
  >
    <a href="/Technician/AutoScheduler" class="hover:text-gray-900">Dashboard</a>
    <span>&bull;</span>
    <a href="#" aria-current="page" class="truncate cursor-pointer hover:text-gray-900">
      Field Tech Availability
    </a>
  </nav>
</template>
