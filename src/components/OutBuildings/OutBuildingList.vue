<script>
import OutBuilding from './OutBuilding.vue'
import Panel from '@/components/Panel.vue'

export default {
  components: { OutBuilding, Panel },

  props: {
    outBuildings: Array,
    title: String,
    canToggle: { type: Boolean, default: false },
  },

  emits: ['toggle'],
}
</script>

<template>
  <Panel v-show="outBuildings.length">
    <ul class="divide-y space-y-4">
      <OutBuilding
        v-for="outBuilding in outBuildings"
        :key="outBuilding.id"
        :out-building="outBuilding"
      />
    </ul>

    <slot />
  </Panel>
</template>
