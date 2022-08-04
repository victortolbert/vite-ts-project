<script>
import DatePicker from '@/components/DatePicker.vue'

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      date: '2022-08-04',
    }
  },
}
</script>

<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <div class="card">
        <label class="block">
          <span class="form-label mb-2">Select a date</span>
          <DatePicker
            v-model="date" format="D MMM YYYY"
            class="form-input"
            :options="{ firstDay: 1 }"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/app.css" />
