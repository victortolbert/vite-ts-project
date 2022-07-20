<script lang="ts">
import { defineComponent } from 'vue'

const menu = [
  { slug: 'dashboard', name: 'Dashboard', href: 'index.html', current: false },
  { slug: 'reports', name: 'Reports', href: 'reports.html', current: true },
]

const tabs = [
  { slug: 'property-overview', name: 'Property Overview', href: '#', current: false },
  { slug: 'inspection-summary', name: 'Inspection Summary', href: '#', current: true },
  { slug: 'report-details', name: 'Report Details', href: '#', current: false },
  { slug: 'scope-sheet', name: 'Scope Sheet', href: '#', current: false },
  { slug: 'photo-set', name: 'Photo Set', href: '#', current: false },
]

export default defineComponent({
  data: () => ({
    menu,
    tabs,
    showMobileMenu: false,
    showProfileDropdown: false,
    activeTab: 'inspection-summary',
  }),
  methods: {
    setActiveTab(tab) {
      this.tabs.forEach(tab => (tab.current = false))
      tab.current = true
      this.activeTab = tab.slug
    },
  },
})
</script>

<template>
  <header class="shadow-sm bg-primary-500">
    <div class="px-4 py-4 max-w-7xl sm:px-6 lg:px-8">
      <h1 class="text-lg font-semibold leading-6 text-white">
        Reports
      </h1>
    </div>
  </header>
</template>
