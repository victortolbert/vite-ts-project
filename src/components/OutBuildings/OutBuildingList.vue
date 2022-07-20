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

  data() {
    return {
      currentTag: 'all',
    }
  },

  computed: {
    filteredOutBuildings() {
      if (this.currentTag === 'all')
        return this.outBuildings

      return this.outBuildings.filter(a => a.tag === this.currentTag)
    },

    tags() {
      return ['all', ...new Set(this.outBuildings.map(a => a.tag))]
    },
  },
}
</script>

<template>
  <Panel v-show="outBuildings.length" class="">
    <div class=" ">
      <h2 class="font-bold mb-2">
        {{ title }}
      </h2>

      <button v-show="canToggle" @click="$emit('toggle')">
        &times;
      </button>
    </div>

    <ul class="">
      <OutBuilding
        v-for="outBuilding in outBuildings"
        :key="outBuilding.id"
        :out-building="outBuilding"
      />
    </ul>

    <slot />
  </Panel>
</template>
