<script>
export default {
  props: {
    assignment: Object,
  },
}
</script>

<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <li>
    <label class="p-2 flex justify-between items-center">
      {{ assignment.name }}

      <input v-model="assignment.complete" type="checkbox" class="ml-3">
    </label>
  </li>
</template>
