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
}
</script>

<template>
  <section class="space-y-6">
    <AssignmentList :assignments="filters.inProgress" title="In Progress" />
    <AssignmentList :assignments="filters.completed" title="Completed" />
  </section>
</template>
