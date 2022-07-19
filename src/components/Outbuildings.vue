<script>
import OutBuildingList from './OutBuildingList.vue'

export default {
  components: { OutBuildingList },

  data() {
    return {
      outBuildings: [
        {
          id: 1,
          name: 'Name',
          description: 'Description',
        },
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
  mounted() {
    // eslint-disable-next-line no-console
    console.log('mounted')
  },
  methods: {
    addAnother() {
      this.outBuildings.push({})
    },
  },
}
</script>

<template>
  <section class="space-y-6">
    <OutBuildingList :out-buildings="outBuildings" title="Not Damaged" />
    <button @click="addAnother()">Add Another?</button>
  </section>
</template>
