<script lang="ts">
import { defineComponent } from 'vue'
import OutbuildingList from './OutbuildingList.vue'
import OutbuildingCreate from './OutbuildingCreate.vue'
import type { Outbuilding } from '@/types/Outbuilding'

export default defineComponent({
  components: { OutbuildingCreate, OutbuildingList },

  data() {
    return {
      outbuildings: [] as Outbuilding[],
      outbuildingsPresent: false,
      outbuildingsLimit: 6,
    }
  },

  computed: {
    outbuildingInteriorAssets() {
      return this.outbuildings.map((outbuilding) => {
        // TODO: Collect the interior, elevation and roof assets as one bundle of Outbuilding assets
        return outbuilding.interiorDamageDescription
      })
    },
    filters() {
      return {
        damaged: this.outbuildings.filter(outbuilding => outbuilding.damaged),
        notDamaged: this.outbuildings.filter(outbuilding => !outbuilding.damaged),
      }
    },
  },

  created() {
    fetch('http://localhost:3001/outbuildings')
      .then(response => response.json())
      .then((outbuildings) => {
        this.outbuildings = outbuildings
      })
  },

  methods: {
    add(outbuilding) {
      this.outbuildings.push({
        id: this.outbuildings.length + 1,
        name: outbuilding.name,
        interiorDamageDescription: outbuilding.interiorDamageDescription,
        elevationDamageDescription: outbuilding.elevationDamageDescription,
        roofDamageDescription: outbuilding.roofDamageDescription,
        damaged: false,
      })
    },
  },
})
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
      <h3 class="font-bold text-2xl">
        Outbuilding(s) Present?
      </h3>

      <o-field>
        <o-switch
          v-model.sync="outbuildingsPresent"
          :rounded="true"
          variant="primary"
          position="left"
        >
          Outbuilding(s) present?
        </o-switch>
      </o-field>
    </header>

    <div v-show="outbuildingsPresent">
      <OutbuildingList
        :outbuildings="outbuildings"
        title="Outbuildings"
      >
        <OutbuildingCreate
          v-if="outbuildings.length < outbuildingsLimit"
          @add="add"
        />
      </OutbuildingList>
    </div>
  </section>
</template>
