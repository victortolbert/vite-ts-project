<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OutbuildingListComponent from './OutbuildingListComponent.vue'
import OutbuildingCreateComponent from './OutbuildingCreateComponent.vue'
import type { Outbuilding } from '@/types/Outbuilding'

@Component({
  components: {
    OutbuildingListComponent,
    OutbuildingCreateComponent,
  },
})
export default class OutbuildingsComponent extends Vue {
  outbuildings: Outbuilding[] = []
  outbuildingsPresent = false
  outbuildingsLimit = 6

  created() {
    fetch('http://localhost:3001/outbuildings')
      .then(response => response.json())
      .then((outbuildings) => {
        this.outbuildings = outbuildings
      })
  }

  add(outbuilding) {
    this.outbuildings.push({
      id: this.outbuildings.length + 1,
      name: outbuilding.name,
      interiorDamageDescription: outbuilding.interiorDamageDescription,
      elevationDamageDescription: outbuilding.elevationDamageDescription,
      roofDamageDescription: outbuilding.roofDamageDescription,
      damaged: false,
    })
  }
}
</script>

<template>
  <section
    id="outbuildings"
    class="
      mx-auto
      w-full
      border-2
      p-4
      rounded
    "
  >
    <header class="flex justify-between">
      <h3
        class="
          font-medium
          text-primary-500
          text-2xl
        "
      >
        Outbuilding(s) Present?
      </h3>

      <input
        v-model="outbuildingsPresent"
        type="checkbox"
        class="
          rounded
          border-gray-400
          p-3
          text-amber-300
          shadow-sm
          focus:border-yellow-700
          focus:ring
          focus:ring-offset-0
          focus:ring-yellow-200
          focus:ring-opacity-50
        "
      >
    </header>

    <div v-show="outbuildingsPresent" class="mt-4">
      <OutbuildingListComponent
        title="Outbuildings"
        :outbuildings="outbuildings"
      >
        <OutbuildingCreateComponent
          v-if="outbuildings.length < outbuildingsLimit"
          @add="add"
        />
      </OutbuildingListComponent>
    </div>
  </section>
</template>
