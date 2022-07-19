<script>
import OutBuildingList from './OutBuildingList.vue'

export default {
  components: { OutBuildingList },

  data() {
    return {
      outBuildings: [
        { name: 'Shed', isDamaged: false, id: 1 },
        { name: 'Barn', isDamaged: false, id: 2 },
        { name: 'Detached Garage', isDamaged: false, id: 3 },
        { name: 'Shop', isDamaged: false, id: 3 },
        { name: 'Green House', isDamaged: false, id: 3 },
        { name: 'Pool House', isDamaged: false, id: 3 },
        { name: 'Other', isDamaged: false, id: 3 },
      ],
    }
  },

  computed: {
    filters() {
      return {
        isNotDamaged: this.outBuildings.filter(outBuilding => !outBuilding.isDamaged),
        isDamaged: this.outBuildings.filter(outBuilding => outBuilding.isDamaged),
      }
    },
  },
}
</script>

<template>
  <section class="space-y-6">
    <OutBuildingList :out-buildings="filters.isNotDamaged" title="Not Damaged" />
    <OutBuildingList :out-buildings="filters.isDamaged" title="Damaged" />
  </section>
</template>
