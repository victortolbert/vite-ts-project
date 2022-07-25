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
        <div class="w-full max-w-lg">
          <o-select
            v-if="!isAnotherType"
            v-model="outbuilding.name"
            placeholder="Select structure"
            class="w-full"
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
        </div>

        <div class="flex items-center">
          <div>
            <div class="flex items-center space-x-2">
              <o-switch v-model.sync="outbuilding.damaged" position="left">
                Is Damaged?
              </o-switch>
            </div>
          </div>
        </div>
      </div>

      <div v-if="outbuilding.damaged">
        <section>
          <div v-for="n in 3" :key="n" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="font-medium text-gray-500">
              Interior Damage Description
            </dt>
            <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div class="flex-grow">
                <textarea
                  class="flex-1 w-full"
                  name=""
                  :cols="30"
                  :rows="3"
                />
              </div>
              <span class="ml-4 flex-shrink-0">
                <input type="file" name="roofDamageAssets">
              </span>
            </dd>
          </div>
        </section>
      </div>
    </div>
  </li>
</template>
