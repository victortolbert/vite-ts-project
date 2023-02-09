<script setup>
const enabled = ref(false)
</script>

<template>
  <SwitchGroup>
    <div class="flex items-center">
      <SwitchLabel class="mr-4">Enable notifications</SwitchLabel>
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-emerald-600' : 'bg-gray-200'"
        class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <span
          :class="enabled ? 'translate-x-6' : 'translate-x-1'"
          class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
        />
      </Switch>
    </div>
  </SwitchGroup>
</template>