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
    <label>
      {{ assignment.name }}

      <input v-model="assignment.complete" type="checkbox">
    </label>
  </li>
</template>
