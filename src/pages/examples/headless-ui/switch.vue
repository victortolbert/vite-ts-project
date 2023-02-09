<script setup>
import { Switch } from '@headlessui/vue'
const enabled = ref(false)
</script>

<template>
  <page-wrapper>
    <article>
      <section class="flex items-center justify-center py-16 rounded-lg shadow-lg bg-primary-500">
        <Switch
          v-model="enabled"
          :class="enabled ? 'bg-primary-800' : 'bg-primary-300'"
          class="relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span class="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            :class="enabled ? 'translate-x-9' : 'translate-x-0'"
            class="pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
          />
        </Switch>
      </section>
    </article>

    <SwitchGroup>
      <div class="flex items-center">
        <SwitchLabel class="mr-4">Enable notifications</SwitchLabel>
        <Switch
          v-model="enabled"
          :class="enabled ? 'bg-amber-400' : 'bg-gray-200'"
          class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <span
            :class="enabled ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
          />
        </Switch>
      </div>
    </SwitchGroup>
  </page-wrapper>
</template>
