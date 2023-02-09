<script lang="ts">
import { EventItem } from '~/@types'

export default {
  created() {
    this.$store.dispatch('fetchEvents').catch(error => {
      this.$router.push({
        path: '/ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    events() {
      return this.$store.state.events as EventItem[]
    }
  }
}
</script>

<template>
  <page-wrapper>
    <section class="px-8 mt-8">
      <!-- Table -->
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow-md sm:rounded-lg">
            <v-table :data="events">
              <template #head>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Category</th>
                </tr>
              </template>
              <template #body="{ rows }">
                <tr v-for="row in rows" :key="row.id">
                  <td>{{ row.title }}</td>
                  <td>{{ row.description }}</td>
                  <td>{{ row.location }}</td>
                  <td>{{ row.date }} {{ row.time }}</td>
                  <td>{{ row.category }}</td>
                </tr>
              </template>
            </v-table>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="mt-8 events">
        <router-link
          class="event-link"
          :to="{ name: 'Events-id', params: { id: event.id } }"
          v-for="event in events"
          :key="event.id"
        >
          <EventCard data-testid="event" :event="event" />
        </router-link>
      </div>
    </section>
  </page-wrapper>
</template>

<style lang="scss">
.v-table {
  @apply min-w-full;
}
.v-table thead {
  @apply bg-gray-100 dark:bg-gray-700;
}

.v-table thead th {
  @apply py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400;
}
.v-table tbody tr {
  @apply border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600;
}
.v-table tbody td {
  @apply py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white;
}
</style>
