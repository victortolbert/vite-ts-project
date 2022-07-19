<script>
import Assignment from './Assignment.vue'

export default {
  components: { Assignment },
  props: {
    assignments: Array,
    title: String,
  },
}
</script>

<template>
  <section v-show="assignments.length">
    <h2 class="font-bold mb-2">
      {{ title }}
    </h2>

    <ul>
      <Assignment
        v-for="assignment in assignments"
        :key="assignment.id"
        :assignment="assignment"
      />
    </ul>
  </section>
</template>
