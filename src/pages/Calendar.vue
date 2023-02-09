<script lang="ts">
import { defineComponent } from 'vue'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar, { formatDate, CalendarOptions, EventClickArg, DateSelectArg, EventApi } from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '~/utilities/event-utils'

let str = formatDate(new Date(), {
  month: 'long',
  year: 'numeric',
  day: 'numeric'
})

console.log(str)

export default defineComponent({
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      currentEvents: [] as any,
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin
        ],
        // headerToolbar: {
        //   left: 'prev,next today',
        //   center: 'title',
        //   right: 'dayGridMonth,timeGridWeek,timeGridDay'
        // },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: false, // initial value
        // events: [
        //   { title: 'event 1', date: '2022-02-07' },
        //   { title: 'event 2', date: '2022-02-08' }
        // ],
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
        /* you can update a remote database when these fire:
          eventAdd:
          eventChange:
          eventRemove:
        */
      } as CalendarOptions,
    }
  },
  methods: {
    handleDateSelect(selectInfo: DateSelectArg) {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },

    // toggleWeekends() {
    //   this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    // },

    // handleEventClick: function (arg: EventClickArg) {
    //   alert('date click! ' + arg.event)
    // },

    handleEventClick(clickInfo: EventClickArg) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },

    handleEvents(events: EventApi[]) {
      this.currentEvents = events
    },

    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    }
  }
})
</script>

<template>
  <hancock-page-wrapper>
    <hancock-page-heading>
      Calendar
      <template #actions>
        <div class="flex items-center space-x-4">
          <button class="space-x-2 h-button">
            <i class="text-gray-400 fad fa-calendar-plus"></i>
            <span>Add Appointment</span>
          </button>
        </div>
      </template>
    </hancock-page-heading>

    <div class="mt-8 px-8">
      <button @click="handleWeekendsToggle">toggle weekends</button>
      <FullCalendar ref="fullCalendar" :options="calendarOptions" />
    </div>

    <div>
      <div class="grid grid-cols-3 gap-8 px-8 mt-8">
        <div class="h-field">
          <label
            class="block text-sm font-medium text-gray-900 dark:text-gray-400"
            for="service-region"
          >Service Region</label>
          <select
            class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="service-region"
          >
            <option>Select Service Region</option>
          </select>
        </div>
        <div class="h-field">
          <label
            class="block text-sm font-medium text-gray-900 dark:text-gray-400"
            for="service-area"
          >Service Area</label>
          <select
            class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="service-area"
          >
            <option>Select Service Area</option>
          </select>
        </div>
        <div class="h-field">
          <label
            class="block text-sm font-medium text-gray-900 dark:text-gray-400"
            for="service-technicians"
          >Service Technicians</label>
          <select
            class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="service-technicians"
          >
            <option>Select Service Technician</option>
          </select>
        </div>
      </div>
    </div>
    <div class="p-8">
      <div class="flex flex-col bg-white rounded" style="max-width: 64px">
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
  </hancock-page-wrapper>
</template>
