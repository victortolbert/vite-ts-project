<script setup lang="ts">
import { computed } from 'vue'
import type { OutBuilding } from '@/types/OutBuilding'

const props = defineProps<{
  outBuilding: OutBuilding
}>()

const isAnotherType = computed(() => props.outBuilding.name === 'Other')
</script>

<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <li>
    <div>
      <div class="mt-4 flex items-center justify-between">
        <select
          v-if="!isAnotherType"
          v-model="outBuilding.name"
          class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
        >
          <option value="" disabled>
            Select Out Building...
          </option>
          <option>Barn</option>
          <option>Shed</option>
          <option>Pool House</option>
          <option>Green House</option>
          <option>Detached Garage</option>
          <option>Other</option>
        </select>

        <input v-if="isAnotherType" type="text" placeholder="Enter Other Building type" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50">

        <div class="flex items-center">
          <label>Is Damaged?</label>

          <div>
            <div class="flex items-center space-x-2">
              <label>Yes</label>
              <input v-model="outBuilding.damaged" type="checkbox" class="">
            </div>
          </div>
        </div>
      </div>

      <div v-if="outBuilding.damaged" class="p-4">
        <div class="flex justify-between">
          <label>Interior Damage Description</label>
          <textarea v-model="outBuilding.interiorDamageDescription" class="flex-1" name="" cols="30" rows="3" />
          <input type="file" name="interiorDamageAssets">
        </div>
        <div class="flex justify-between">
          <label>Elevation Damage Description</label>
          <textarea v-model="outBuilding.elevationDamageDescription" class="flex-1" name="" cols="30" rows="3" />
          <input type="file" name="elevationDamageAssets">
        </div>
        <div class="flex justify-between">
          <label>Roof Damage Description</label>
          <textarea v-model="outBuilding.roofDamageDescription" class="flex-1" name="" cols="30" rows="3" />
          <input type="file" name="roofDamageAssets">
        </div>
      </div>
    </div>
  </li>
</template>
