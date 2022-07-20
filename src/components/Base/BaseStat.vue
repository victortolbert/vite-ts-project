<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseStat',
  props: {
    label: {
      type: String,
      default: 'Total',
    },
    value: {
      type: [String, Number],
      default: 0,
    },
  },
})
</script>

<template>
  <div class="overflow-hidden bg-white rounded-lg shadow">
    <div class="h-full px-4 py-5 sm:p-6">
      <dl class="flex flex-col justify-between h-full">
        <dt class="flex-1 text-sm font-medium leading-5 text-gray-500">
          {{ label }}
        </dt>

        <dd
          class="mt-1 text-3xl font-semibold leading-9 text-gray-900 whitespace-no-wrap"
        >
          {{ value }}
        </dd>
      </dl>
    </div>
  </div>
</template>
