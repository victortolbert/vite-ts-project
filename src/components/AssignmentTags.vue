<script>
export default {
  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.initialTags)]
    },
  },
}
</script>

<template>
  <div class="flex gap-2">
    <!-- eslint-disable vue/require-explicit-emits -->
    <button
      v-for="tag in tags"
      :key="tag"
      class="border rounded px-1 py-px text-xs"
      :class="{
        'border-blue-500 text-blue-500': tag === currentTag,
      }"
      @click="$emit('update:currentTag', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>
