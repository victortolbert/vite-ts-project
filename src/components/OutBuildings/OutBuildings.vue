<script lang="ts">
import { defineComponent } from 'vue'
import OutBuildingList from './OutBuildingList.vue'
import OutBuildingCreate from './OutBuildingCreate.vue'
import type { OutBuilding } from '@/types/OutBuilding'

export default defineComponent({
  components: { OutBuildingCreate, OutBuildingList },

  data() {
    return {
      outBuildings: [] as OutBuilding[],
      outBuildingsPresent: false,
      outBuildingsLimit: 6,
    }
  },

  computed: {
    outBuildingInteriorAssets() {
      return this.outBuildings.map((outBuilding) => {
        // TODO: Collect the interior, elevation and roof assets as one bundle of OutBuilding assets
        return outBuilding.interiorDamageDescription
      })
    },
    filters() {
      return {
        damaged: this.outBuildings.filter(outBuilding => outBuilding.damaged),
        notDamaged: this.outBuildings.filter(outBuilding => !outBuilding.damaged),
      }
    },
  },

  created() {
    fetch('http://localhost:3001/outBuildings')
      .then(response => response.json())
      .then((outBuildings) => {
        this.outBuildings = outBuildings
      })
  },

  methods: {
    add(outBuilding) {
      this.outBuildings.push({
        id: this.outBuildings.length + 1,
        name: outBuilding.name,
        interiorDamageDescription: outBuilding.interiorDamageDescription,
        elevationDamageDescription: outBuilding.elevationDamageDescription,
        roofDamageDescription: outBuilding.roofDamageDescription,
        damaged: false,
      })
    },
  },
})
</script>

<template>
  <section id="out-buildings" class="mx-auto w-full border-2 p-4 rounded">
    <header class="flex justify-between">
      <h3 class="font-bold text-2xl">
        Out Building(s) Present?
      </h3>
      <input v-model="outBuildingsPresent" type="checkbox">
    </header>

    <div v-show="outBuildingsPresent">
      <OutBuildingList :out-buildings="outBuildings" title="Out Buildings">
        <OutBuildingCreate
          v-if="outBuildings.length < outBuildingsLimit"
          @add="add"
        />
      </OutBuildingList>
    </div>
  </section>
</template>
