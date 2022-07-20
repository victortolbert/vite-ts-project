<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import OutBuildingComponent from './OutBuildingComponent.vue'
import Panel from '@/components/Panel.vue'
import type { OutBuilding } from '@/types/OutBuilding'

@Component({
  components: { OutBuildingComponent, Panel },
})
export default class OutBuildingListComponent extends Vue {
  @Prop({ default: [] }) outBuildings!: OutBuilding[]
  @Prop({ default: '' }) title: string | undefined
  @Prop({ default: false }) canToggle!: boolean
}
</script>

<template>
  <Panel v-show="outBuildings.length">
    <ul class="divide-y divide-gray-600 space-y-4">
      <OutBuildingComponent
        v-for="outBuilding in outBuildings"
        :key="outBuilding.id"
        :out-building="outBuilding"
      />
    </ul>

    <slot />
  </Panel>
</template>
