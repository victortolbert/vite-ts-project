<script>
import OutBuilding from './OutBuilding.vue'

export default {
  components: { OutBuilding },
  props: {
    outBuildings: Array,
    title: String,
  },
}
</script>

<template>
  <section v-show="outBuildings.length">
    <h2 class="font-bold mb-2">
      {{ title }}
    </h2>

    <ul class="m-16">
      <OutBuilding
        v-for="outBuilding in outBuildings"
        :key="outBuilding.id"
        :out-building="outBuilding"
      />
    </ul>
  </section>
</template>
