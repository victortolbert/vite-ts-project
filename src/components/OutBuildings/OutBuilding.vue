<script>
export default {
  props: {
    outBuilding: Object,
  },
}
</script>

<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <li>
    <div class="p-2">
      <div class="flex">
        <select v-model="outBuilding.name">
          <option disabled value="">
            Please select one
          </option>
          <option>Barn</option>
          <option>Shed</option>
          <option>Pool House</option>
          <option>Green House</option>
          <option>Detached Garage</option>
          <option>Other</option>
        </select>

        <div class="flex items-center justify-between">
          <label>Is Damaged?</label>
          <input v-model="outBuilding.isDamaged" type="checkbox" class="ml-3">
        </div>
      </div>

      <div class="flex">
        <label>Interior Damage Description</label>
        <textarea id="" v-model="outBuilding.interiorDamageDescription" name="" cols="30" rows="3" />
        <input type="file" name="interiorDamageAssets">
      </div>

      <div class="flex">
        <label>Elevation Damage Description</label>
        <textarea id="" v-model="outBuilding.elevationDamageDescription" name="" cols="30" rows="3" />
        <input type="file" name="elevationDamageAssets">
      </div>

      <div class="flex">
        <label>Roof Damage Description</label>
        <textarea id="" v-model="outBuilding.roofDamageDescription" name="" cols="30" rows="3" />
        <input type="file" name="roofDamageAssets">
      </div>
    </div>
  </li>
</template>
