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
  <section id="out-buildings" class="mx-auto w-full border-2 p-4 rounded">
    <header class="flex justify-between">
      <h3 class="font-medium text-primary-500 text-2xl">
        Out Building(s) Present?
      </h3>

      <input
        v-model="outBuildingsPresent"
        type="checkbox"
        class=" rounded border-gray-400 p-3 text-amber-300 shadow-sm focus:border-yellow-700 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50 "
      >
    </header>

    <div v-show="outBuildingsPresent" class="mt-4">
      <OutBuildingListComponent :out-buildings="outBuildings" title="Out Buildings">
        <OutBuildingCreateComponent
          v-if="outBuildings.length < outBuildingsLimit"
          @add="add"
        />
      </OutBuildingListComponent>
    </div>
  </section>
</template>
