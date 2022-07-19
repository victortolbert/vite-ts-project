<script>
export default {
  emits: {
    add: 'add',
  },

  data() {
    return {
      newAssignment: '',
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete),
      }
    },
  },

  methods: {
    add() {
      this.$emit('add', this.newAssignment)
      this.newAssignment = ''
    },
  },
}
</script>

<template>
  <form @submit.prevent="add">
    <div class="border border-gray-600 text-black">
      <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="p-2">
      <button type="submit" class="bg-white p-2 border-l">
        Add
      </button>
    </div>
  </form>
</template>
