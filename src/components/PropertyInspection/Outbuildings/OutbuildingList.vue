<script>
import Outbuilding from './Outbuilding.vue'
import Panel from '@/components/Panel.vue'

export default {
  components: { Outbuilding, Panel },

  props: {
    outbuildings: Array,
    title: String,
    canToggle: { type: Boolean, default: false },
  },

  emits: ['toggle'],
}
</script>

<template>
  <Panel v-show="outbuildings.length">
    <ul class="divide-y space-y-4">
      <Outbuilding
        v-for="outbuilding in outbuildings"
        :key="outbuilding.id"
        :outbuilding="outbuilding"
      />
    </ul>

    <slot />
  </Panel>
</template>
