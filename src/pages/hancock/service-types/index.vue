<script setup>
import TableViewIcon from '~icons/heroicons-solid/view-list'
import CardsViewIcon from '~icons/heroicons-solid/view-grid'

const activeTab = ref(null)

const tabs = [
  { name: 'Card View', href: '#', icon: CardsViewIcon, current: true },
  { name: 'Table View', href: '#', icon: TableViewIcon, current: true },
]

function changedTab() {
  console.log('changed tab')
}
</script>

<script>
export default {
  created() {
    this.$store.dispatch('fetchServiceTypes').catch(error => {
      this.$router.push({
        name: 'error-display',
        params: { error: error }
      })
    })
  },
  computed: {
    serviceTypes() {
      return this.$store.state.serviceTypes
    }
  }
}
</script>

<template>
  <page-wrapper>
    <header class="flex items-center justify-between px-6 mt-4">
      <h1 class="text-xl font-bold">Service Types</h1>
    </header>

    <tab-group @change="changedTab">
      <tab-list class="mt-4">
        <div class="flex items-center justify-between px-4">
          <router-link
            class="px-6 py-1 border rounded shadow text-primary-50 hover:text-white bg-primary-500 hover:bg-primary-600"
            to="/hancock/service-types/create"
          >Add Service Type</router-link>

          <nav>
            <Tab v-for="tab in tabs" v-slot="{ selected }" as="template" :key="tab.name">
              <button
                :class="['p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500']"
              >
                <component :is="tab.icon"></component>
                <span class="sr-only">{{ tab.name }}</span>
              </button>
            </Tab>
          </nav>
        </div>
      </tab-list>

      <tab-panels class="mt-4">
        <tab-panel class="px-4">
          <service-type-cards :service-types="serviceTypes" />
        </tab-panel>

        <tab-panel class="px-4">
          <service-type-grid :service-types="serviceTypes" />
        </tab-panel>
      </tab-panels>
    </tab-group>
  </page-wrapper>
</template>

