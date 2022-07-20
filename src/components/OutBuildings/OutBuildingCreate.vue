<script>
export default {
  emits: {
    add: 'add',
  },

  data() {
    return {
      newOutBuilding: {},
    }
  },

  computed: {
    filters() {
      return {
        notDamaged: this.outBuildings.filter(outBuilding => !outBuilding.damaged),
        damaged: this.outBuildings.filter(outBuilding => outBuilding.damaged),
      }
    },
  },

  methods: {
    add() {
      this.$emit('add', this.newOutBuilding)
      this.newOutBuilding = {}
    },
  },
}
</script>

<template>
  <form @submit.prevent="add">
    <div class="">
      <input v-model="newOutBuilding.name" type="hidden" class="block">

      <button type="submit" class="mt-6">
        Add Another Out Building?
      </button>
    </div>
  </form>
</template>
