<script>
export default {
  emits: {
    add: 'add',
  },

  data() {
    return {
      newOutbuilding: {},
    }
  },

  computed: {
    filters() {
      return {
        notDamaged: this.outbuildings.filter(outbuilding => !outbuilding.damaged),
        damaged: this.outbuildings.filter(outbuilding => outbuilding.damaged),
      }
    },
  },

  methods: {
    add() {
      this.$emit('add', this.newOutbuilding)
      this.newOutbuilding = {}
    },
  },
}
</script>

<template>
  <form @submit.prevent="add">
    <div class="">
      <input v-model="newOutbuilding.name" type="hidden" class="block">

      <button
        type="submit"
        class="
          mt-6
          border
          px-4
          py-1
          rounded
          bg-primary-200
          hover:bg-primary-300"
      >
        Add Another Outbuilding?
      </button>
    </div>
  </form>
</template>
