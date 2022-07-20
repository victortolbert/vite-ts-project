<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OutBuildingListComponent from './OutBuildingListComponent.vue'
import OutBuildingCreateComponent from './OutBuildingCreateComponent.vue'
import type { OutBuilding } from '@/types/OutBuilding'

@Component({
  components: {
    OutBuildingListComponent,
    OutBuildingCreateComponent,
  },
})
export default class OutBuildingsComponent extends Vue {
  outBuildings: OutBuilding[] = []
  outBuildingsPresent = false
  outBuildingsLimit = 6

  created() {
    fetch('http://localhost:3001/outBuildings')
      .then(response => response.json())
      .then((outBuildings) => {
        this.outBuildings = outBuildings
      })
  }

  add(outBuilding) {
    this.outBuildings.push({
      id: this.outBuildings.length + 1,
      name: outBuilding.name,
      interiorDamageDescription: outBuilding.interiorDamageDescription,
      elevationDamageDescription: outBuilding.elevationDamageDescription,
      roofDamageDescription: outBuilding.roofDamageDescription,
      damaged: false,
    })
  }
}
</script>

<template>
  <section id="out-buildings" class="mx-auto w-full border-2 border-black p-4 rounded">
    <header class="flex justify-between">
      <h3 class="font-medium text-primary-500 text-2xl">
        Out Building(s) Present?
      </h3>
      <input v-model="outBuildingsPresent" type="checkbox">
    </header>

    <div v-show="outBuildingsPresent">
      <OutBuildingListComponent :out-buildings="outBuildings" title="Out Buildings">
        <OutBuildingCreateComponent
          v-if="outBuildings.length < outBuildingsLimit"
          @add="add"
        />
      </OutBuildingListComponent>
    </div>
  </section>
</template>
