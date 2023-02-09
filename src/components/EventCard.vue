<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { EventItem } from '~/@types'

// import { format, formatDistance, formatRelative, subDays } from 'date-fns'
export default defineComponent({
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true
    }
  },
  computed: {
    parsedDate() {
      const eventDate = new Date(this.event.date)
      return eventDate.toDateString()
    }
  }
})
</script>

<template>
  <!-- <router-link class="event-link" :to="{ name: 'EventDetails', params: { id: event.id } }"> -->
  <div class="event-card">
    <span>@{{ event.time }} on {{ parsedDate }}</span>
    <h4>{{ event.title }}</h4>
    <span>{{ event.attendees ? event.attendees.length : 0 }} attending</span>

    <div class="flex flex-col bg-white rounded" style="max-width: 64px;">
      <div
        class="w-full px-5 text-sm text-center text-white border rounded-tl rounded-tr border-primary-500 bg-primary-500"
      >Jan</div>
      <div
        class="grid flex-1 w-full border-l border-r border-gray-300 text-md place-items-center"
      >26</div>
      <div
        class="grid flex-1 w-full pb-1 text-gray-500 border border-t-0 border-gray-300 rounded-b text-xxs place-items-center"
      >2022</div>
    </div>
  </div>

  <!-- </router-link> -->
  <router-link class="event-link" :to="{ name: 'Events-id', params: { id: event.id } }">
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ parsedDate }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <core-icon name="users">{{ event.attendees.length }} attending</core-icon>
    </div>
  </router-link>
</template>



<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}

.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
