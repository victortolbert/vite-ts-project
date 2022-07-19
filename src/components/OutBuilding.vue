<script>
export default {
  props: {
    outBuilding: Object,
  },
}
</script>

<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <li class="flex w-full8">
    <div class="flex justify-between items-center w-full">
      <label>{{ outBuilding.name }}</label>

      <input v-model="outBuilding.isDamaged" type="checkbox">
    </div>
  </li>
</template>
