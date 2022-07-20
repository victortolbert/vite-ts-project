<script>
import OutBuildingList from './OutBuildingList.vue'
import OutBuildingCreate from './OutBuildingCreate.vue'

export default {
  components: { OutBuildingCreate, OutBuildingList },

  data() {
    return {
      outBuildings: [],
      outBuildingsPresent: false,
    }
  },

  computed: {
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
}
</script>

<template>
  <section class="">
    Out Buildings Present?
    <input v-model="outBuildingsPresent" type="checkbox">

    <div v-show="outBuildingsPresent">
      <OutBuildingList :out-buildings="outBuildings" title="Out Buildings">
        <OutBuildingCreate @add="add" />
      </OutBuildingList>
    </div>
  </section>
</template>
