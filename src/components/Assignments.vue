<script>
import AssignmentList from './AssignmentList.vue'

export default {
  components: { AssignmentList },

  data() {
    return {
      assignments: [
        { name: 'Finish project', complete: false, id: 1 },
        { name: 'Read Chapter 4', complete: false, id: 2 },
        { name: 'Turn in Homework', complete: false, id: 3 },
      ],
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
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1,
      })

      this.newAssignment = ''
    },
  },
}
</script>

<template>
  <section class="space-y-6">
    <AssignmentList :assignments="filters.inProgress" title="In Progress" />
    <AssignmentList :assignments="filters.completed" title="Completed" />

    <form @submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="p-2">
        <button type="submit" class="bg-white p-2 border-l">
          Add
        </button>
      </div>
    </form>
  </section>
</template>
