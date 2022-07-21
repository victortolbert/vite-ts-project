<script setup lang="ts">
import { computed } from 'vue'
import type { Outbuilding } from '@/types/Outbuilding'

const props = defineProps<{
  outbuilding: Outbuilding
}>()

const isAnotherType = computed(() => props.outbuilding.name === 'Other')
</script>

<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <li>
    <div>
      <div class="mt-4 flex items-center justify-between">
        <o-field
          v-if="!isAnotherType"
          label="Other Structure"
          variant="danger"
          message="Selected subject is wrong"
        >
          <o-select
            v-model="outbuilding.name"
            placeholder="Select structure"
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
          </o-select>
        </o-field>

        <select
          v-if="!isAnotherType"
          v-model="outbuilding.name"
          class="
            block
            w-full
            mt-1
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-primary-300
            focus:ring
            focus:ring-primary-200
            focus:ring-opacity-50"
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

        <input
          v-if="isAnotherType"
          type="text"
          placeholder="Enter Other Building type"
          class="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-primary-300
            focus:ring
            focus:ring-primary-200
            focus:ring-opacity-50"
        >

        <o-switch v-model="isAnotherType" true-value="Yes" false-value="No">
          {{ isAnotherType }}
        </o-switch>

        <div class="flex items-center">
          <label>Is Damaged?</label>

          <div>
            <div class="flex items-center space-x-2">
              <label>Yes</label>

              <input v-model="outbuilding.damaged" type="checkbox">

              <o-switch v-model="outbuilding.damaged" true-value="Yes" false-value="No">
                {{ outbuilding.damaged }}
              </o-switch>
            </div>
          </div>
        </div>
      </div>

      <div v-if="outbuilding.damaged" class="p-4">
        <div class="flex justify-between">
          <label>Interior Damage Description</label>
          <textarea
            v-model="outbuilding.interiorDamageDescription"
            class="flex-1"
            name=""
            :cols="30"
            :rows="3"
          />
          <input type="file" name="interiorDamageAssets">
        </div>

        <div class="flex justify-between">
          <label>Elevation Damage Description</label>
          <textarea
            v-model="outbuilding.elevationDamageDescription"
            class="flex-1"
            name=""
            :cols="30"
            :rows="3"
          />
          <input type="file" name="elevationDamageAssets">
        </div>

        <div class="flex justify-between">
          <label>Roof Damage Description</label>
          <textarea
            v-model="outbuilding.roofDamageDescription"
            class="flex-1"
            name=""
            :cols="30"
            :rows="3"
          />
          <input type="file" name="roofDamageAssets">
        </div>
      </div>
    </div>
  </li>
</template>
