<script setup>
const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
]
</script>

<template>
  <div>
    <div class="bg-gray-50 overflow-hidden rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <svg class="border-2 border-dashed border-gray-300 rounded bg-transparent h-64 w-full text-gray-200" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true">
          <path vector-effect="non-scaling-stroke" stroke-width="2" d="M0 0l200 200M0 200L200 0" />
        </svg>
      </div>
    </div>

    <div class="bg-white border border-gray-300 overflow-hidden rounded-md">
      <ul role="list" class="divide-y divide-gray-300">
        <li v-for="item in items" :key="item.id" class="px-6 py-4">
          <div class="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200" />
        </li>
      </ul>
    </div>

    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="item in items" :key="item.id" class="px-4 py-4 sm:px-0">
        <div class="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200" />
      </li>
    </ul>

    <ul role="list" class="space-y-3">
      <li v-for="item in items" :key="item.id" class="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
        <div class="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200" />
      </li>
    </ul>
  </div>
</template>
