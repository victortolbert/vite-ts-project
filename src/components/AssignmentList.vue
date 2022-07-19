<script>
import Assignment from './Assignment.vue'
import AssignmentTags from './AssignmentTags.vue'
import Panel from './Panel.vue'

export default {
  components: { Assignment, AssignmentTags, Panel },

  props: {
    assignments: Array,
    title: String,
    canToggle: { type: Boolean, default: false },
  },

  emits: ['toggle'],

  data() {
    return {
      currentTag: 'all',
    }
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === 'all')
        return this.assignments

      return this.assignments.filter(a => a.tag === this.currentTag)
    },

    tags() {
      return ['all', ...new Set(this.assignments.map(a => a.tag))]
    },
  },
}
</script>

<template>
  <Panel v-show="assignments.length" class="w-80">
    <div class="flex justify-between items-start">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>({{ assignments.length }})</span>
      </h2>

      <button v-show="canToggle" @click="$emit('toggle')">
        &times;
      </button>
    </div>

    <AssignmentTags
      v-model:currentTag="currentTag"
      :initial-tags="assignments.map(a => a.tag)"
    />
    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <Assignment
        v-for="assignment in filteredAssignments"
        :key="assignment.id"
        :assignment="assignment"
      />
    </ul>

    <slot />
  </Panel>
</template>
