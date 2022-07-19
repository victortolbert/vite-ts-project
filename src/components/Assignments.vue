<script>
import AssignmentList from './AssignmentList.vue'
import AssignmentCreate from './AssignmentCreate.vue'

export default {
  components: { AssignmentCreate, AssignmentList },

  data() {
    return {
      assignments: [],
      showCompleted: true,
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
  created() {
    fetch('http://localhost:3001/assignments')
      .then(response => response.json())
      .then((assignments) => {
        this.assignments = assignments
      })
  },

  methods: {
    add(name) {
      this.assignments.push({
        name,
        complete: false,
        id: this.assignments.length + 1,
      })
    },
  },
}
</script>

<template>
  <section class="flex gap-8">
    <AssignmentList :assignments="filters.inProgress" title="In Progress">
      <AssignmentCreate @add="add" />
    </AssignmentList>

    <div v-show="showCompleted">
      <AssignmentList
        :assignments="filters.completed"
        title="Completed"
        can-toggle
        @toggle="showCompleted = !showCompleted"
      />
    </div>
  </section>
</template>
