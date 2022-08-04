<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import OutbuildingComponent from './OutbuildingComponent'
import Panel from '@/components/Panel.vue'
import type { Outbuilding } from '@/types'

@Component({
  components: { OutbuildingComponent, Panel },
})
export default class OutbuildingListComponent extends Vue {
  @Prop({ default: [] }) outbuildings!: Outbuilding[]
  @Prop({ default: '' }) title: string | undefined
  @Prop({ default: false }) canToggle!: boolean
}
</script>

<template>
  <Panel v-show="outbuildings.length">
    <ul class="divide-y space-y-4">
      <OutbuildingComponent
        v-for="outbuilding in outbuildings"
        :key="outbuilding.Id"
        :outbuilding="outbuilding"
      />
    </ul>

    <slot />
  </Panel>
</template>
